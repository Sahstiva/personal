<script setup lang="ts">
import NavigationMenu from "~/components/NavigationMenu.vue";
import CodeRows from "~/components/CodeRows.vue";
</script>

<template>
  <navigation-menu />
  <code-rows />
  <div>
    <div class="d-flex flex-row justify-space-around align-center h-screen pt-12 pl-15">
      <div class="d-flex flex-column justify-center text">
        <h3>Hello! I am</h3>
        <h1>Alexander Vitshas</h1>
        <h3>I am Backend Software Engineer</h3>
      </div>
        <img
            src="/img/software-engineer-at-computer.png"
            class="w-25"
            alt="software-engineer-at-computer" />
    </div>
  </div>
</template>

<style lang="scss">
.text {
  width: fit-content;
  font-family: 'Fira Code', monospace;
}
.text h1 {
  font-size: calc(0.1em + 3vw);
  font-weight: 600;
}
.text h3 {
  font-size: calc(0.05em + 1vw);
  font-weight: 400;
  color: rgb(92,153,185);
}
</style>
