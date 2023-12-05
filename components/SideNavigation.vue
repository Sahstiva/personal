<script setup lang="ts">

</script>

<template>
  <v-card color="rey-darken-2" class="navigation">
    <v-list>
      <v-list-item class="navigation-title">About me</v-list-item>
      <v-list-item class="navigation-item" link to="/about"><v-icon icon="mdi-chevron-right"/>Biography</v-list-item>
      <v-list-item class="navigation-item" link to="/about/experience"><v-icon icon="mdi-chevron-right"/>Experience</v-list-item>
      <v-list-item class="navigation-item" link><v-icon icon="mdi-chevron-right"/>Education</v-list-item>
      <v-list-group value="Skills">
        <template v-slot:activator="{ props }">
          <v-list-item
              prepend-icon="mdi-chevron-right"
              v-bind="props"
              title="Skills"
          ></v-list-item>
        </template>

        <v-list-item class="navigation-item" link><v-icon icon="mdi-chevron-right"/>Tech skills</v-list-item>
        <v-list-item class="navigation-item" link><v-icon icon="mdi-chevron-right"/>Soft skills</v-list-item>

      </v-list-group>
      <v-list-item class="navigation-item" link><v-icon icon="mdi-chevron-right"/>Testimonials</v-list-item>
      <v-list-item class="navigation-item" link><v-icon icon="mdi-chevron-right"/>Extra</v-list-item>
    </v-list>
  </v-card>
</template>

<style scoped lang="scss">
.navigation {
  padding-top: 50px;
  width: 250px;
  height: 100vh;
  align-self: flex-start;
  &-title {
    margin: 20px 0 10px 0;
    font-family: 'Fira Code', monospace;
    font-size: 30px;
    font-weight: 500;
  }
  &-item {
    font-family: 'Fira Code', monospace;
    font-size: 16px;
    font-weight: 400;
    margin: 10px 0 10px 0
  }
}
</style>
