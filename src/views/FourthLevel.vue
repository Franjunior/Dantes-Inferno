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
  
        <img v-if="showIdleGif" 
             :src="idleGif" 
             class="character"
             style="position: fixed; top: 500px; left: 570px; width: 250px; height: auto;">
  
        <img v-if="showLimboSpike" 
             :src="limboSpike" 
             alt="limboSpike" 
             style="position: fixed; top: 620px; left: 300px; width: 100px; height: auto;">
        
        <img v-if = "showGreed" 
            :src="greed" 
             alt="greed" 
             class="character"
             style="position: fixed; top: 320px; left: 980px; width: 400px; height: auto;">
  
        <img v-if ="showGreedAttack"
             :src="greedAttack" 
             alt="greed" 
             class="character"
             style="position: fixed; top: 320px; left: 980px; width: 400px; height: auto;">
  
        <img v-if ="showLimboDeath"
             :src="limboDeath" 
             alt="limbo" 
             class="character"
             style="position: fixed; top: 420px; left: 1000px; width: 300px; height: auto;">
       
        <img v-if="showDanteMessage" 
               :src="dante_line_first" 
               alt="Death GIF" 
               class="character"
               style="position: fixed; top: 360px; left: 490px; width: 250px; height: auto;">
  
        <img v-if="showLimboMessage" 
               :src="limbo_line_first" 
               alt="Death GIF" 
               class="character"
               style="position: fixed; top: 290px; left: 1090px; width: 250px; height: auto;">
  
        <img v-if="showDanteMessage2nd" 
               :src="dante_line_second" 
               alt="Death GIF" 
               class="character"
               style="position: fixed; top: 360px; left: 490px; width: 250px; height: auto;">
  
        <img v-if="showLimboMessage2nd" 
               :src="limbo_line_second" 
               alt="Death GIF" 
               class="character"
               style="position: fixed; top: 240px; left: 1090px; width: 300px; height: auto;">
             
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
               <img v-if="showDeathSpikePrompt" src="@/assets/startAgain.png" alt="Start" style="position: fixed; top: 510px; left: 600px; width: 250px; height: auto;" />
               </div>
  
               <div @click="reset2">
               <img v-if="showDeathPrompt" src="@/assets/startAgain.png" alt="Start" style="position: fixed; top: 510px; left: 600px; width: 250px; height: auto;" />
               </div>
  
               <div @click="nextLevel">
              <img v-if = "showYouWin" src="@/assets/proceedNext.png" alt="Start" style="position: fixed; top: 510px; left: 600px; width: 250px; height: auto;" />
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
  
           
  
      </div>
    </main>
  </template>
  
  <script>
  import walkGif from '@/assets/dante/walk.gif';
  import attackGif from '@/assets/dante/attack.gif';
  import idleGif from '@/assets/dante/idle.gif';
  import deathGif from '@/assets/dante/death.gif';
  import greed from '@/assets/boss/greed.gif';
  import greedAttack from '@/assets/boss/greedAttack.gif';
  import limboDeath from '@/assets/boss/limboDeath.gif';
  import limboSpike from '@/assets/limboSpike.gif';
  import proceedPrompt from '@/assets/proceed.png';
  import deathSpikePrompt from '@/assets/deathSpikePrompt.png';
  import deathPrompt from '@/assets/deathPrompt.png';
  import first_hp from '@/assets/firstHP.png';
  import second_hp from '@/assets/secondHP.png';
  import last_hp from '@/assets/lastHP.png';
  import full_hp from '@/assets/fullHP.png';
  import no_hp from '@/assets/noHP.png';
  import youWin from '@/assets/youWin.png';
  import limbo_line_first from '@/assets/convo/limbo-dante/limbo-line-first.png';
  import dante_line_first from '@/assets/convo/limbo-dante/dante-line-first.png';
  import dante_line_second from '@/assets/convo/limbo-dante/dante-line-second.png';
  import limbo_line_second from '@/assets/convo/limbo-dante/limbo-line-second.png';
  import proceedButton from '@/assets/proceedButton.png';
  
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
        greed,
        greedAttack,
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
        showIdleGif: false,
        showLimboSpike: true,
        showProceedPrompt: false,
        showLimboMessage: false,
        showDanteMessage: false,
        showDanteMessage2nd: false,
        showLimboMessage2nd: false,
        showGreedAttack: false,
        showGreed: true,
        alive: false,
        show75HP: false,
        show50HP: false,
        showLastHP: false,
        showFullHP: true,
        showNoHP: false,
        showLimboDeath: false,
        showYouWin: false,
        showDeathSpikePrompt: false,
        showDeathPrompt: false,
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
  
    if (this.lineX === 870 && this.lineY === 500 && this.showLimboSpike == false) {
      if ((direction === 'left' && this.lineX - this.step >= 870) || 
          (direction === 'right' && this.lineX + this.step <= 890)) {
        switch (direction) {
          case 'up':
            this.lineY = Math.max(this.lineY - this.step, 400);
            break;
          case 'down':
            this.lineY = Math.min(this.lineY + this.step, 500);
            break;
          case 'left':
            this.lineX = Math.max(this.lineX - this.step, -10);
            break;
          case 'right':
            this.lineX = Math.min(this.lineX + this.step, this.containerWidth - 400); 
            break;
        }
      }
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
        if (this.lineX === 870 && this.lineY === 500 && !this.limboDeathTimeout) {
          this.limboDeathTimeout = true; 
          setTimeout(() => {
            this.showGreedAttack = false; 
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
          }, 2000); 
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
        
        if (this.showLimboSpike == false) {
          this.isDead = false; 
          this.showDeathGif = false;
          this.showIdleGif = false; 
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
          this.showGreedAttack = true;
          this.showGreed = false;
  
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
            if(!this.xKeyPressed && this.showGreedAttack == true){
            this.showLastHP = true; 
            }else {
              this.showLastHP = false;
            }
          }, 12000);
  
          setTimeout(() => {
            if (!this.xKeyPressed && this.showGreedAttack ==true) {
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
  
          if(this.showGreedAttack === false) {
              this.showLimboDeath = true;
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
        this.showIdleGif = false;
        this.showLimboSpike = true;
        this.showProceedPrompt = false;
        this.showLimboMessage = false;
        this.showDanteMessage = false;
        this.showDanteMessage2nd = false;
        this.showLimboMessage2nd = false;
        this.showGreedAttack = false;
        this.showGreed = true;
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
        this.showProceedPrompt = false;
        this.showLimboMessage = false;
        this.showDanteMessage = false;
        this.showDanteMessage2nd = false;
        this.showLimboMessage2nd = false;
        this.showLGreedAttack = false;
        this.showGreed = true;
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
      this.$router.push('/fifth-level');
    },
  }
  };
  </script>
  
  <style scoped>
  main {
    background-image: url('@/assets/background/5th-bg.gif');
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
  