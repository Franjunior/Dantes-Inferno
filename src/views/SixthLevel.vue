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
             style="position: fixed; top: 510px; left: 220px; width: 250px; height: auto;">
               
        <img v-if="showDeathGif2" 
             :src="deathGif" 
             alt="Death GIF" 
             class="character"
             style="position: fixed; top: 510px; left: 450px; width: 250px; height: auto;">
  
        <img v-if="showIdleGif" 
             :src="idleGif" 
             class="character"
             style="position: fixed; top: 500px; left: 570px; width: 250px; height: auto;">
  
        <img v-if="showLimboSpike" 
             :src="limboSpike" 
             alt="limboSpike" 
             style="position: fixed; top: 490px; left: 280px; width: 200px; height: auto;">

             <img v-if="showLimboSpike2" 
             :src="limboSpike2" 
             alt="limboSpike2" 
             style="position: fixed; top: 190px; left: 440px; width: 400px; height: auto;">
        
        <img v-if = "showHeresy" 
            :src="heresy" 
             alt="heresy" 
             class="character"
             style="position: fixed; top: 420px; left: 1000px; width: 300px; height: auto;">
  
        <img v-if ="showHeresyAttack"
             :src="heresyAttack" 
             alt="heresy" 
             class="character"
             style="position: fixed; top: 420px; left: 1000px; width: 300px; height: auto;">
  
        <img v-if ="showLimboDeath"
             :src="limboDeath" 
             alt="limbo" 
             class="character"
             style="position: fixed; top: 420px; left: 1000px; width: 300px; height: auto;">

             <img v-if ="showLimboDeath2"
           :src="limboDeath" 
           alt="limbo" 
           class="character"
           style="position: fixed; top: 570px; left: 320px; width: 100px; height: auto;">

           <img v-if ="showLimboDeath3"
           :src="limboDeath" 
           alt="limbo" 
           class="character"
           style="position: fixed; top: 500px; left: 520px; width: 200px; height: auto;">
       
        <img v-if="showDanteMessage" 
               :src="dante_line_first" 
               alt="Death GIF" 
               class="character"
               style="position: fixed; top: 360px; left: 490px; width: 250px; height: auto;">
  
        <img v-if="showLimboMessage" 
               :src="limbo_line_first" 
               alt="Death GIF" 
               class="character"
               style="position: fixed; top: 290px; left: 1110px; width: 250px; height: auto;">
  
        <img v-if="showDanteMessage2nd" 
               :src="dante_line_second" 
               alt="Death GIF" 
               class="character"
               style="position: fixed; top: 360px; left: 490px; width: 250px; height: auto;">
  
        <img v-if="showLimboMessage2nd" 
               :src="limbo_line_second" 
               alt="Death GIF" 
               class="character"
               style="position: fixed; top: 240px; left: 1110px; width: 300px; height: auto;">
             
             <img v-if="showProceedPrompt" 
               :src="proceedPrompt" 
               alt="Start" style="position: fixed; top: 40px; left: 220px; width: 1000px; height: auto;">
  
               <img v-if="showDeathSpikePrompt" 
               :src="deathSpikePrompt" 
               alt="Start" style="position: fixed; top: 40px; left: 220px; width: 1000px; height: auto;">
  
               <img v-if="showDeathPrompt" 
               :src="deathPrompt" 
               alt="Start" style="position: fixed; top: 40px; left: 220px; width: 1000px; height: auto;">
  
  
               <img v-if="showYouWin" 
               :src="youWin" 
               alt="Start" style="position: fixed; top: 40px; left: 220px; width: 1000px; height: auto;">
  
               <div @click="reset">
               <img v-if="showDeathSpikePrompt" src="@/assets/buttons/startAgain.png" alt="Start" style="position: fixed; top: 510px; left: 600px; width: 250px; height: auto;" />
               </div>
  
               <div @click="reset2">
               <img v-if="showDeathPrompt" src="@/assets/buttons/startAgain.png" alt="Start" style="position: fixed; top: 510px; left: 600px; width: 250px; height: auto;" />
               </div>
  
               <div @click="nextLevel">
              <img v-if = "showYouWin" src="@/assets/buttons/proceedNext.png" alt="Start" style="position: fixed; top: 510px; left: 600px; width: 250px; height: auto;" />
              </div>
  
               <img v-if="show75HP" 
               :src="first_hp" 
               alt="75 hp" style="position: fixed; top: 40px; left: 220px; width: 300px; height: auto;">
  
               <img v-if="show50HP" 
               :src="second_hp" 
               alt="75 hp" style="position: fixed; top: 40px; left: 220px; width: 300px; height: auto;">
  
               <img v-if="showLastHP" 
               :src="last_hp" 
               alt="75 hp" style="position: fixed; top: 40px; left: 220px; width: 300px; height: auto;">
  
               <img v-if="showFullHP" 
               :src="full_hp" 
               alt="75 hp" style="position: fixed; top: 40px; left: 220px; width: 300px; height: auto;">
  
               <img v-if="showNoHP" 
               :src="no_hp" 
               alt="75 hp" style="position: fixed; top: 40px; left: 220px; width: 300px; height: auto;">

               <div v-if="seventh_prompt">
            <img src="@/assets/prompts/seventh_prompt.gif" alt="Start" style="position: fixed; top: -1px; left: -1px; width: 1500px; height: 750px;" />
            </div>
           
  
      </div>
    </main>
  </template>
  
  <script>
  import walkGif from '@/assets/dante/walk.gif';
  import attackGif from '@/assets/dante/attack.gif';
  import idleGif from '@/assets/dante/idle.gif';
  import deathGif from '@/assets/dante/death.gif';
  import heresy from '@/assets/boss/heresy.gif';
  import heresyAttack from '@/assets/boss/heresyAttack.gif';
  import limboDeath from '@/assets/boss/limboDeath.gif';
  import limboSpike from '@/assets/obstacle/heresySpike.gif';
  import limboSpike2 from '@/assets/obstacle/snakeSpike.gif';
  import proceedPrompt from '@/assets/prompts/proceed.png';
  import deathSpikePrompt from '@/assets/prompts/deathSpikePrompt.png';
  import deathPrompt from '@/assets/prompts/deathPrompt.png';
  import first_hp from '@/assets/hp/firstHP.png';
  import second_hp from '@/assets/hp/secondHP.png';
  import last_hp from '@/assets/hp/lastHP.png';
  import full_hp from '@/assets/hp/fullHP.png';
  import no_hp from '@/assets/hp/noHP.png';
  import youWin from '@/assets/prompts/youWin.png';
  import limbo_line_first from '@/assets/convo/heresy-dante/6m2.png';
  import dante_line_first from '@/assets/convo/heresy-dante/6m1.png';
  import dante_line_second from '@/assets/convo/heresy-dante/6m3.png';
  import limbo_line_second from '@/assets/convo/heresy-dante/6m4.png';
  import proceedButton from '@/assets/buttons/proceedButton.png';
  
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
        limboSpike2,
        heresy,
        heresyAttack,
        limboDeath,
        proceedPrompt,
        proceedButton,
        dante_line_first,
        dante_line_second,
        limbo_line_first,
        limbo_line_second,
        deathSpikePrompt,
        deathPrompt,
        first_hp,
        second_hp,
        last_hp,
        full_hp,
        no_hp,
        youWin,
        isDead: false,
        xKeyPressed: false,
        arrowKeysPressed: false,
        showDeathGif: false, 
        showDeathGif2: false, 
        showIdleGif: false,
        showLimboSpike: true,
        showLimboSpike2: false,
        showProceedPrompt: false,
        showLimboMessage: false,
        showDanteMessage: false,
        showDanteMessage2nd: false,
        showLimboMessage2nd: false,
        showHeresyAttack: false,
        showHeresy: true,
        alive: false,
        show75HP: false,
        show50HP: false,
        showLastHP: false,
        showFullHP: true,
        showNoHP: false,
        showLimboDeath: false,
        showLimboDeath2: false,
        showLimboDeath3: false,
        showYouWin: false,
        showDeathSpikePrompt: false,
        showDeathPrompt: false,
        seventh_prompt: false,
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
    if (this.isDead || this.alive) return; 
  
    if (this.lineX === 880 && this.lineY === 500 && this.showLimboSpike == false) {
    ((direction === 'left' && this.lineX - this.step >= 880) || 
        (direction === 'right' && this.lineX + this.step <= 890)) 
  } else {
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
          this.lineX = Math.min(this.lineX + this.step, this.containerWidth - 400); 
          break;
      }
    }
  
    this.checkCollision(); 
  },
  
  handleKeyDown(event) {
    if (this.collision || this.alive || this.isDead) return;
  
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
        if (this.lineX === 880 && this.lineY === 500 && !this.limboDeathTimeout) {
          this.limboDeathTimeout = true; 
          setTimeout(() => {
            this.showHeresyAttack = false; 
            this.showLastHP = false;
            this.show50HP = false;
            this.show75HP = false;
            this.showLimboDeath = true; 
            setTimeout(() => {
              this.showYouWin = true; 
            }, 1000);
            setTimeout(() => {
              this.showLimboDeath = false; 
              this.limboDeathTimeout = false; 
            }, 1000);
          }, 10000); 
        }
        if ((this.lineX === 80 && this.lineY === 500) || 
            (this.lineX === 90 && this.lineY === 500) || 
            (this.lineX === 100 && this.lineY === 500) || 
            (this.lineX === 70 && this.lineY === 500)) {
          setTimeout(() => {
            this.showLimboSpike = false; 
            this.showLimboSpike2 = true;
            this.showLimboDeath2 = true;
        }, 2000); 

        setTimeout(() => {
          this.showLimboDeath2 = false;
        }, 3000); 
        }

        if ((this.lineX === 310 && this.lineY === 500) || 
            (this.lineX === 320 && this.lineY === 500) || 
            (this.lineX === 340 && this.lineY === 500) || 
            (this.lineX === 350 && this.lineY === 500) || 
            (this.lineX === 360 && this.lineY === 500) || 
            (this.lineX === 370 && this.lineY === 500)) {
          setTimeout(() => {
            this.showLimboSpike2 = false;
            this.showLimboDeath3 = true;
        }, 2000); 

        setTimeout(() => {
          this.showLimboDeath3 = false;
        }, 3000); 
        }


        console.log(`Character Position: (${this.lineX}, ${this.lineY})`);
        break;
    }
  },
  checkCollision() {
        if (this.lineX === 120 && this.lineY === 500 && this.showLimboSpike == true) {
          this.isDead = true; 
          this.showDeathGif = true;
          this.showNoHP = true;
          this.showFullHP = false;
          this.showIdleGif = false; 
          setTimeout(() => {
            this.showDeathSpikePrompt = true;
            this.showNoHP = false;
          }, 2000); 
        }

        if (this.lineX === 350 && this.lineY === 500 && this.showLimboSpike2 == true) {
          this.isDead = true; 
          this.showDeathGif2 = true;
          this.showNoHP = true;
          this.showFullHP = false;
          this.showIdleGif = false; 
          setTimeout(() => {
            this.showDeathSpikePrompt = true;
            this.showNoHP = false;
          }, 2000); 
        }
        

  
        if (this.lineX === 520 && this.lineY === 500 && this.showLimboSpike == false) {
          this.isDead = true;
          this.showIdleGif = true;
          this.showDanteMessage = true;
  
          setTimeout(() => {
              this.showDanteMessage = false; 
          }, 2000); 
  
          setTimeout(() => {
              this.showLimboMessage = true; 
          }, 2200); 
  
          setTimeout(() => {
              this.showLimboMessage = false; 
          }, 4200); 
  
          setTimeout(() => {
              this.showDanteMessage2nd = true; 
          }, 4400); 
  
          setTimeout(() => {
              this.showDanteMessage2nd = false; 
          }, 6400); 
  
          setTimeout(() => {
              this.showLimboMessage2nd = true; 
          }, 6600); 
  
          setTimeout(() => {
              this.showLimboMessage2nd = false; 
              this.isDead = false;
              this.showIdleGif = false;
          }, 8600); 
        }
  
        if (this.lineX === 870 && this.lineY === 500 && this.showLimboSpike == false) {
          this.showHeresyAttack = true;
          this.showHeresy = false;
  
          setTimeout(() => {
            this.showFullHP = false;
            this.show75HP = true; 
          }, 4000);
  
          setTimeout(() => {
            this.show75HP = false; 
            this.show50HP = true; 
          }, 8000);
  
          setTimeout(() => {
            this.show50HP = false; 
            if(!this.xKeyPressed && this.showHeresyAttack == true){
            this.showLastHP = true; 
            }else {
              this.showLastHP = false;
            }
          }, 12000);
  
          setTimeout(() => {
            if (!this.xKeyPressed && this.showHeresyAttack ==true) {
          this.showDeathPrompt = true; 
          }else{
            this.showLastHP = false;
            this.show50HP = false;
            this.show75HP = false;
            this.showDeathPrompt = false;
          }
            this.showLastHP = false;
            this.show50HP = false;
            this.show75HP = false;
          }, 16500);
  
          if(this.showHeresyAttack === false) {
              this.showHeresyDeath = true;
          };
  
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
  
      reset() {
        this.lineX = 0;
        this.lineY = 500;
        this.isDead = false;
        this.xKeyPressed = false;
        this.arrowKeysPressed = false;
        this.showDeathGif = false;
        this.showDeathGif2 = false;
        this.showIdleGif = false;
        this.showLimboSpike = true;
        this.showLimboSpike2 = false;
        this.showProceedPrompt = false;
        this.showLimboMessage = false;
        this.showDanteMessage = false;
        this.showDanteMessage2nd = false;
        this.showLimboMessage2nd = false;
        this.showHeresyAttack = false;
        this.showHeresy = true;
        this.show75HP = false;
        this.show50HP = false;
        this.showLastHP = false;
        this.showFullHP = true;
        this.showNoHP = false;
        this.showLimboDeath = false;
        this.showDeathSpikePrompt = false;
        this.showDeathPrompt = false;
      },
  
      reset2() {
        this.lineX = 540;
        this.lineY = 500;
        this.isDead = false;
        this.xKeyPressed = false;
        this.arrowKeysPressed = false;
        this.showDeathGif = false;
        this.showIdleGif = false;
        this.showLimboSpike = false;
        this.showLimboSpike2 = false;
        this.showProceedPrompt = false;
        this.showLimboMessage = false;
        this.showDanteMessage = false;
        this.showDanteMessage2nd = false;
        this.showLimboMessage2nd = false;
        this.showHeresyAttack = false;
        this.showHeresy = true;
        this.show75HP = false;
        this.show50HP = false;
        this.showLastHP = false;
        this.showFullHP = true;
        this.showNoHP = false;
        this.showLimboDeath = false;
        this.showDeathSpikePrompt = false;
        this.showDeathPrompt = false;
      },
    
      nextLevel() {
        this.seventh_prompt = true;
    
    setTimeout(() => {
      this.seventh_prompt = false;
      this.$router.push('/seventh-level');
    }, 5000); 
    },
  }
  };
  </script>
  
  <style scoped>
  main {
    background-image: url('@/assets/background/7th-bg.gif');
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
  
  </style>
  