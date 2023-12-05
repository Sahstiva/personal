<template>
  <navigation-menu />
  <div class="main">
    <div class="main-content">
      <code-rows />
      <div class="main-content-text">
        <h3>Hello! I am</h3>
        <h1>Alexander Vitshas</h1>
        <h3>I am Backend Software Engineer</h3>
      </div>
        <img
            src="/img/software-engineer-at-computer.png"
            class="main-content-picture"
            alt="software-engineer-at-computer" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import NavigationMenu from "~/components/NavigationMenu.vue";
  import CodeRows from "~/components/CodeRows.vue";
</script>
<style lang="scss">
.main {
  &-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    padding-top: 50px;
    &-picture {
      width: 30vw;
    }
    &-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: fit-content;
      font-family: 'Fira Code', monospace;
    }
    &-text h1 {
      font-size: 64px;
      font-weight: 600;
      margin: 0;
    }
    &-text h3 {
      font-size: 24px;
      font-weight: 400;
      margin: 0;
      color: rgb(92,153,185);
    }
  }
}
</style>
