<script setup lang="ts">
import { DateTime } from 'luxon';
import { useExperienceStore} from "~/stores/ExperienceStore";
import type {ExperienceItem} from "~/interfaces/interfaces";
import {useUserStore} from "~/stores/UserStore";

const store = useExperienceStore();
const userStore = useUserStore();

let isEditMode = ref(false);
let experience = ref({title: '', items: [] as ExperienceItem[]});
experience.value.title = store.getTitle;
experience.value.items = store.getItems;
const getTimeDiff = (item: ExperienceItem) => {
  const start = DateTime.fromFormat(item.startDate, 'LLL yyyy');
  const end = item.current ? DateTime.now() : DateTime.fromFormat(item.endDate, 'LLL yyyy')
  const diff = end.diff(start, ['years', 'months']).toObject();
  return `${diff.years} yrs ${Math.ceil(diff.months || 0)} mos`;
}
const getSkills = (skills: string[]): string => {
  return skills.join(' · ');
}

async function saveExperience(): Promise<void> {
  store.title = experience.value.title;
  store.items = [...experience.value.items];
  await store.saveExperience();
  isEditMode.value = false;
}

function addExperienceItem(): void {}

const ToggleEditMode = () => {
  if(userStore.isAuthorized) {
    isEditMode.value = true;
  }
}
const cancelEdit = () => isEditMode.value = false;

</script>

<template>
  <section class="d-flex flex-row justify-space-around align-center h-screen">
    <div v-if="!isEditMode" class="w-66 text-justify pt-12" @dblclick="ToggleEditMode">
      <h3 class="mb-5">{{ experience.title }}</h3>
      <template v-for="(item, index) of experience.items" :key="index">
        <div class="d-flex flex-row align-center justify-start mb-5">
          <img :src="`data:image/jpeg;base64,${item.companyLogo}`" :alt="`${item.company} logo`" width="100" height="100"/>
          <div class="ml-5">
            <p class="subtitle mb-1">{{ item.position }}</p>
            <p class="place">{{ item.company }} · {{ item.load }}</p>
            <p class="place">{{ item.startDate }} - {{ item.current ? 'Present' : item.endDate }} · {{ getTimeDiff(item) }}</p>
            <p class="place">{{ item.region }} · {{ item.place }}</p>
          </div>
        </div>
        <p>{{ item.intro }}</p>
        <p>&nbsp;</p>
        <ul>
          <li v-for="achievement in item.achievements">{{ achievement }}</li>
        </ul>
        <p>&nbsp;</p>
        <p><span class="skills">Skills: </span>{{ getSkills(item.skills) }}</p>
      </template>
    </div>
    <div v-if="isEditMode" class="pt-16 16 w-66" @keyup.enter="saveExperience">
      <v-form>
        <v-text-field v-model="experience.title" class="mb-5" variant="outlined" label="Title"/>
        <v-form v-for="item in experience.items" class="ml-5">
          <v-text-field v-model="item.company" variant="outlined" label="Company" />
          <v-text-field v-model="item.position" variant="outlined" label="Position" />
          <v-date-picker></v-date-picker>
        </v-form>
        <v-btn class="me-4" @click="saveExperience" icon="mdi-content-save"/>
        <v-btn class="me-4" @click="cancelEdit" icon="mdi-cancel" />
        <v-btn class="me-4" @click="addExperienceItem" icon="mdi-plus"/>
      </v-form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.place {
  color: rgb(202, 205, 204);
}
.subtitle {
  font-size: 24px;
  font-weight: 600;
}
.skills {
  font-weight: 600;
}

</style>
