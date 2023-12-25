<script setup>
import {useAboutStore} from "~/stores/AboutStore";
import {useExperienceStore} from "~/stores/ExperienceStore";

const aboutStore = useAboutStore();
const experienceStore = useExperienceStore();
await useAsyncData('about', () => aboutStore.fetchAbout());
await useAsyncData('experience', () => experienceStore.fetchExperience());
</script>
<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>
