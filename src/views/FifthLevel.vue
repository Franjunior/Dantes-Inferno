<template>
    <main>
      <div class="container">
        <img v-if="!isDead && !xKeyPressed && !arrowKeysPressed" 
             :src="idleGif" 
             alt="idle GIF" 
             class="character"
             :style="{ top: `${lineY}px`, left: `${lineX}px`, width: '250px', height: 'auto' }">
        <img v-else-if="!isDead && xKeyPressed" 
             :src="attackGif" 
             alt="Attack GIF" 
             class="character"
             :style="{ top: `${lineY}px`, left: `${lineX}px`, width: '250px', height: 'auto' }">
        <img v-else-if="!isDead" 
             :src="walkGif" 
             alt="Walking GIF" 
             class="character"
             :style="{ top: `${lineY}px`, left: `${lineX}px`, width: '250px', height: 'auto' }">
      </div>
    </main>
  </template>
  
  <script>
  import walkGif from '@/assets/dante/walk.gif';
  import attackGif from '@/assets/dante/attack.gif';
  import idleGif from '@/assets/dante/idle.gif';
  import deathGif from '@/assets/dante/death.gif';
  
  export default {
    data() {
      return {
        lineX: 0,
        lineY: 155,
        step: 10,
        containerWidth: 1300,
        containerHeight: 200,
        collision: false,
        congratulations: false,
        walkGif,
        attackGif,
        idleGif,
        deathGif,
        isDead: false,
        xKeyPressed: false,
        arrowKeysPressed: false,
        showNotification: false,
      };
    },
    mounted() {
      window.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('keyup', this.handleKeyUp);
    },
    beforeUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
      window.removeEventListener('keyup', this.handleKeyUp);
    },
    methods: {
      moveCharacter(direction) {
        if (this.isDead) return; 
        switch (direction) {
          case 'up':
            this.lineY = Math.max(this.lineY - this.step, 155);
            break;
          case 'down':
            this.lineY = Math.min(this.lineY + this.step, 155);
            break;
          case 'left':
            this.lineX = Math.max(this.lineX - this.step, -90);
            break;
          case 'right':
            this.lineX = Math.min(this.lineX + this.step, this.containerWidth - 210); 
            break;
        }
      },
  
      handleKeyDown(event) {
        if (this.collision || this.congratulations || this.isDead) return;
  
        switch (event.key) {
          case 'ArrowUp':
          case 'ArrowDown':
          case 'ArrowLeft':
          case 'ArrowRight':
            this.arrowKeysPressed = true; 
            this.moveCharacter(event.key.slice(5).toLowerCase()); 
            break;
          case 'x':
            this.xKeyPressed = true;
            break;
        }
      },
  
      handleKeyUp(event) {
        if (event.key === 'x') {
          this.xKeyPressed = false;
        }
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
          this.arrowKeysPressed = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  main {
    background-image: url('@/assets/background/2nd-bg.gif');
    background-size: 1500px 800px;
    height: 100vh;
  }
  
  .container {
    position: relative;
    width: 900px;
    height: 400px;
    margin-top: -1px;
    margin-left: 50px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  .character {
    position: absolute;
    width: 40px;
    height: 60px;
  }
  
  .notification {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  </style>