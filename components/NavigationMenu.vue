<script setup lang="ts">

</script>

<template>
  <v-app-bar density="compact">
    <v-btn class="navigation-button" variant="plain" active-class="main-button-selected" to="/">hello</v-btn>
    <v-btn class="navigation-button" variant="text" to="/about">about</v-btn>
    <v-btn class="navigation-button" variant="text" to="/projects">projects</v-btn>
  </v-app-bar>
</template>

<style scoped lang="scss">
.v-btn--active {
  color: rgb(234,174,56) !important;
  font-weight: 600 !important;
}
.navigation {
  &-button {
    font-family: 'Inter', monospace;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0;
    font-weight: 400;
  }
}
</style>
