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
        
        <img 
             :src="grimGif" 
             alt="Grim GIF" 
             class="character"
             style="position: fixed; top: 510px; left: 700px; width: 250px; height: auto;">
        
        <img v-if="showDeathGif" 
             :src="deathGif" 
             alt="Death GIF" 
             class="character"
             style="position: fixed; top: 510px; left: 600px; width: 250px; height: auto;">

             <img v-if="showIdleGif" 
             :src="idleGif" 
             alt="Idle GIF" 
             class="character"
             style="position: fixed; top: 510px; left: 600px; width: 250px; height: auto;">
  
             <img v-if="showGrimMessage" 
             :src="laugh" 
             alt="Death GIF" 
             class="character"
             style="position: fixed; top: 430px; left: 800px; width: 250px; height: auto;">
      </div>
    </main>
  </template>
  
  <script>
  import walkGif from '@/assets/walk.gif';
  import attackGif from '@/assets/attack.gif';
  import idleGif from '@/assets/idle.gif';
  import grimGif from '@/assets/grim.gif';
  import deathGif from '@/assets/death.gif';
  import laugh from '@/assets/laugh.png';
  import Swal from 'sweetalert2';
  
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
        grimGif,
        attackGif,
        idleGif,
        laugh,
        deathGif,
        isDead: false,
        xKeyPressed: false,
        arrowKeysPressed: false,
        showDeathGif: false, 
        showGrimMessage: false,
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
            this.lineY = Math.max(this.lineY - this.step, 500);
            break;
          case 'down':
            this.lineY = Math.min(this.lineY + this.step, 570);
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
  
      checkCollision() {
        
        if (
          this.lineX + 250 > 750
        ) {
     
        this.isDead = true; 
        setTimeout(() => {
            this.showDeathGif = true; 
        }, 9000); 

            this.showGrimMessage = true; 
       
        setTimeout(() => {
            this.showDeathGif = false; 
            this.showHellPrompt(); 
        }, 11000); 

        this.showIdleGif = true; 

        setTimeout(() => {
            this.showIdleGif = false; 
        }, 8999);

    }
      },
  
      showHellPrompt() {
    Swal.fire({
        title: 'You have died!',
        text: "You're going to hell.",
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Proceed to hell',
        cancelButtonText: 'Cancel',
        customClass: {
            popup: 'notif-background',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            this.proceedToHell();
        } else {
            // Handle cancellation
        }
    });
},
  
      proceedToHell() {
        this.$router.push('/second-level');
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
      }
    }
  };
  </script>
  
  <style scoped>
  main {
    
    background-image: url('@/assets/1st-bg.gif');
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

  .notif-background {
    background-image: url('@/assets/start.png');
    background-size: cover;
}
  
  </style>
  