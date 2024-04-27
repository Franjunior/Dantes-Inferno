<template>
  <main>
    <div>
      <img src="@/assets/prompts/scroll-start.png" alt="Start" style="position: fixed; top: 40px; left: 220px; width: 1000px; height: auto;" />
      <div @click="startGame">
        <img src="@/assets/buttons/start.png" alt="Start" style="position: fixed; top: 510px; left: 600px; width: 250px; height: auto;" />
      </div>
    </div>
    <div v-if="loading" >
      <img src="@/assets/loading.gif" alt="Start" style="position: fixed; top: -1px; left: -1px; width: 1600px; height: 900px;" />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      loading: false 
    };
  },
  methods: {
    startGame() {
  
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.$router.push('/before-hell');
      }, 9000); 
    }
  }
};
</script>

<style scoped>
main {
  background-image: url('@/assets/background/introBG.gif');
  background-size: 1500px 800px;
  height: 100vh;
}

.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* semi-transparent white background */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
</style>