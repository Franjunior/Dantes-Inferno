<template>
  <main>
    <!-- Loading screen -->
  

    <div>
      <img src="@/assets/scroll-start.png" alt="Start" style="position: fixed; top: 40px; left: 220px; width: 1000px; height: auto;" />
      <!-- Clickable Start button -->
      <div @click="startGame">
        <img src="@/assets/start.png" alt="Start" style="position: fixed; top: 510px; left: 600px; width: 250px; height: auto;" />
      </div>
    </div>
    <div v-if="loading" class="loading-screen">
      <img src="@/assets/loading.gif" alt="Start" style="position: fixed; top: -1px; left: -1px; width: 1500px; height: auto;" />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      loading: false // Initially, loading screen is not displayed
    };
  },
  methods: {
    startGame() {
      // Show loading screen
      this.loading = true;

      // Simulate some delay before redirecting to the first level
      setTimeout(() => {
        // Hide loading screen
        this.loading = false;
        this.$router.push('/first-level');
      }, 5000); // Change this delay as per your requirement (in milliseconds)
    }
  }
};
</script>

<style scoped>
main {
  background-image: url('@/assets/introBG.gif');
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