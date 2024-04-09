<template>
  <main>
    <div class="container">
      <img v-if="!xKeyPressed" 
           :src="walkGif" 
           alt="Walking GIF" 
           class="line"
           :style="{ top: `${lineY}px`, left: `${lineX}px`, width: '250px', height: 'auto' }">

      <img v-else 
           :src="attackGif" 
           alt="Attack GIF" 
           class="line"
           :style="{ top: `${lineY}px`, left: `${lineX}px`, width: '250px', height: 'auto' }">
      
    </div>
  </main>
</template>

<script>
import walkGif from './assets/walk.gif';
import attackGif from './assets/attack.gif';
import fire from './assets/passion.gif';

export default {
  data() {
    return {
      lineX: 0,
      lineY: 500,
      step: 10,
      containerWidth: 1300,
      containerHeight: 400,
      collision: false,
      congratulations: false,
      walkGif,
      attackGif,
      fire,
      xKeyPressed: false,
      redBoxes: [] // assuming you're dynamically positioning the fire images
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
    moveLine(direction) {
      switch (direction) {
        case 'up':
          this.lineY = Math.max(this.lineY - this.step, 500);
          break;
        case 'down':
          this.lineY = Math.min(this.lineY + this.step, 706);
          break;
        case 'left':
          this.lineX = Math.max(this.lineX - this.step, -50);
          break;
        case 'right':
          this.lineX = Math.min(this.lineX + this.step, this.containerWidth - 15); 
          break;
      }
    },

    handleKeyDown(event) {
      if (this.collision || this.congratulations) return;

      switch (event.key) {
        case 'ArrowUp':
          this.moveLine('up');
          break;
        case 'ArrowDown':
          this.moveLine('down');
          break;
        case 'ArrowLeft':
          this.moveLine('left');
          break;
        case 'ArrowRight':
          this.moveLine('right');
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
    }
  }
};
</script>

<style scoped>
main {
  
  background-image: url('./assets/bg.gif');
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

.line {
  position: absolute;
  width: 40px;
  height: 60px;
}

.lose{
  position: absolute;
  width: 40px;
  height: 60px;
  left: 120px;
}

.button{
  position: absolute;
  margin-left: 390px;
  margin-top: 200px
}

.button2{
  position: absolute;
  margin-left: 390px;
  margin-top: -120px
}
</style>
