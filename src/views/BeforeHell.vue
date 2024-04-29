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
             :src="grim_line_first" 
             alt="Death GIF" 
             class="character"
             style="position: fixed; top: 300px; left: 800px; width: 250px; height: auto;">

             <img v-if="showDanteMessage" 
             :src="dante_line_first" 
             alt="Death GIF" 
             class="character"
             style="position: fixed; top: 390px; left: 480px; width: 250px; height: auto;">

             <img v-if="showDanteMessage2nd" 
             :src="dante_line_second" 
             alt="Death GIF" 
             class="character"
             style="position: fixed; top: 390px; left: 480px; width: 250px; height: auto;">

             <img v-if="showGrimMessage2nd" 
             :src="grim_line_second" 
             alt="Death GIF" 
             class="character"
             style="position: fixed; top: 260px; left: 800px; width: 300px; height: auto;">

             <img v-if="showProceedPrompt" 
             :src="proceedPrompt" 
             alt="Start" style="position: fixed; top: 40px; left: 220px; width: 1000px; height: auto;">

             <div @click="proceedToHell">
             <img v-if="showProceedPrompt" src="@/assets/buttons/proceedButton.png" alt="Start" style="position: fixed; top: 510px; left: 600px; width: 250px; height: auto;" />
             </div>

            <div v-if="first_prompt" class="loading-screen">
            <img src="@/assets/prompts/first-prompt.gif" alt="Start" style="position: fixed; top: -1px; left: -1px; width: 1500px; height: 750px;" />
            </div>
          
      </div>
    </main>
  </template>
  
  <script>
  import walkGif from '@/assets/dante/walk.gif';
  import attackGif from '@/assets/dante/attack.gif';
  import idleGif from '@/assets/dante/idle.gif';
  import grimGif from '@/assets/boss/grim.gif';
  import deathGif from '@/assets/dante/death.gif';
  import grim_line_first from '@/assets/convo/grim-dante/grim-line-first.png';
  import dante_line_first from '@/assets/convo/grim-dante/dante-line-first.png';
  import dante_line_second from '@/assets/convo/grim-dante/dante-line-second.png';
  import grim_line_second from '@/assets/convo/grim-dante/grim-line-second.png';
  import proceedButton from '@/assets/buttons/proceedButton.png';
  import proceedPrompt from '@/assets/prompts/proceed.png';
  
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
        grim_line_first,
        dante_line_first,
        dante_line_second,
        grim_line_second,
        deathGif,
        proceedPrompt,
        proceedButton,
        isDead: false,
        xKeyPressed: false,
        arrowKeysPressed: false,
        showDeathGif: false, 
        showGrimMessage: false,
        showDanteMessage: false,
        showDanteMessage2nd: false,
        showGrimMessage2nd: false,
        showIdleGif: false,
        showProceedPrompt: false,
        first_prompt: false,
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
        }, 10000); 

        setTimeout(() => {
            this.showDeathGif = true; 
        }, 10000); 


        
        this.showDanteMessage = true; 
       
        setTimeout(() => {
        this.showDanteMessage = false; 
        }, 2000);  

        setTimeout(() => {
          this.showGrimMessage = true;
        }, 2200); 

        setTimeout(() => {
        this.showGrimMessage = false;  
        }, 4000); 

        setTimeout(() => {
        this.showDanteMessage2nd = true; 
        }, 4200);

        setTimeout(() => {
        this.showDanteMessage2nd = false; 
        }, 6200);

        setTimeout(() => {
        this.showGrimMessage2nd = true; 
        }, 6400);

        setTimeout(() => {
            this.showDeathGif = false; 
            this.showHellPrompt(); 
        }, 12000); 

        this.showIdleGif = true; 

        setTimeout(() => {
            this.showIdleGif = false; 
        }, 9999);

    }
      },
  
      showHellPrompt() {
    this.showProceedPrompt = true;
},
  
proceedToHell() {

        this.first_prompt = true;
    
      setTimeout(() => {
        this.first_prompt = false;
        this.$router.push('/first-level');
      }, 5000); 

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
    
    background-image: url('@/assets/background/1st-bg.gif');
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
  