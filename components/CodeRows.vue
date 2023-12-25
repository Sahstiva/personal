<script setup lang="ts">
  const height = computed(() => window.innerHeight);
  const rows = computed(() => Math.floor((height.value - 50) / 21));
  const lines = ['90vh', '71vh', '52vh', '33vh', '14vh'];
</script>

<template>
  <v-card class="d-flex flex-row justify-start align-center h-screen mt-5 pl-15" position="fixed" color="rgb(18,18,18)">
    <ClientOnly>
      <div class="rows">
        <p v-for="n in rows" :key="n">{{ n }}</p>
      </div>
      <div class="lines" v-for="height in lines" :style="`height: ${height}`"></div>
    </ClientOnly>
  </v-card>
</template>

<style scoped lang="scss">
.lines {
    height: 30vw;
    width: 1px;
    border: 1px solid rgba(38,52,55, 0.5);
    margin-left: 1.2vw;
  }
.rows {
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    color: rgb(38,52,55)
  }
</style>
