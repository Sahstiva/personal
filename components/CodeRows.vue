<script setup lang="ts">
  const height = computed(() => window.innerHeight);
  const rows = computed(() => Math.floor((height.value - 50) / 21));
  const lines = ['90vh', '71vh', '52vh', '33vh', '14vh'];
</script>

<template>
  <div class="code">
    <div class="code-rows">
      <p v-for="n in rows" :key="n">{{ n }}</p>
    </div>
    <div class="code-lines" v-for="height in lines" :style="`height: ${height}`"></div>
  </div>
</template>

<style scoped lang="scss">
.code {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &-lines {
    height: 30vw;
    width: 1px;
    border: 1px solid rgba(38,52,55, 0.5);
    margin-left: 30px;
  }
  &-rows {
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    color: rgb(38,52,55)
  }
}
</style>
