<template>
  <main>
    <div class="container">
      <img v-if="!isDead && !xKeyPressed && !arrowKeysPressed" 
           :src="idleGif" 
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

           <img v-if="showDeathGif" 
             :src="deathGif" 
             alt="Death GIF" 
             class="character"
             style="position: fixed; top: 510px; left: 170px; width: 250px; height: auto;">

             <img v-if="showIdleGif" 
             :src="idleGif" 
             class="character"
             style="position: fixed; top: 510px; left: 600px; width: 250px; height: auto;">

           <img 
             :src="limbo" 
             alt="limbo" 
             class="character"
             style="position: fixed; top: 420px; left: 1000px; width: 300px; height: auto;">

             <img v-if = "!xKeyPressed"
             :src="limboSpike" 
             alt="limbo" 
             class="character"
             style="position: fixed; top: 620px; left: 300px; width: 100px; height: auto;">
    </div>
  </main>
</template>

<script>
import walkGif from '@/assets/dante/walk.gif';
import attackGif from '@/assets/dante/attack.gif';
import idleGif from '@/assets/dante/idle.gif';
import deathGif from '@/assets/dante/death.gif';
import limbo from '@/assets/boss/limbo.gif';
import limboSpike from '@/assets/limboSpike.gif';

export default {
  data() {
    return {
      lineX: 0,
      lineY: 500,
      step: 10,
      containerWidth: 1300,
      containerHeight: 200,
      collision: false,
      congratulations: false,
      walkGif,
      attackGif,
      idleGif,
      deathGif,
      limboSpike,
      limbo,
      isDead: false,
      xKeyPressed: false,
      arrowKeysPressed: false,
      showDeathGif: false, 
      showIdleGif: false,
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
          this.lineY = Math.max(this.lineY - this.step, 400);
          break;
        case 'down':
          this.lineY = Math.min(this.lineY + this.step, 500);
          break;
        case 'left':
          this.lineX = Math.max(this.lineX - this.step, -90);
          break;
        case 'right':
          this.lineX = Math.min(this.lineX + this.step, this.containerWidth - 210); 
          break;
      }
      this.checkCollision(); 
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

    checkCollision() {
      if (this.lineX + 250 > 350 && !this.xKeyPressed) {
        this.isDead = true; 
        this.showDeathGif = true;
        this.showIdleGif = false; 
      }

      if (this.lineX + 350 > 500) {
        this.isDead = false; 
        this.showDeathGif = false;
        this.showIdleGif = false; 

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