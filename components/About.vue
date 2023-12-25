<script setup lang="ts">
import {useAboutStore} from '~/stores/AboutStore';
import {useUserStore} from "~/stores/UserStore";

const store = useAboutStore();
const userStore = useUserStore();

let isEditMode = ref(false);
let about = ref({title: '', text: ['']});
about.value.title = store.getTitle;
about.value.text = store.getText;

async function saveAbout(): Promise<void> {
  store.title = about.value.title;
  store.text = [...about.value.text];
  await store.saveAbout();
  isEditMode.value = false;
}
function addAboutText(): void {
  about.value.text.push('');
}
function deleteAboutText(index: number): void {
  about.value.text.splice(index, 1);
}
const ToggleEditMode = () => {
  if(userStore.isAuthorized) {
    isEditMode.value = true;
  }
}

</script>

<template>
  <section class="pt-12 h-screen d-flex flex-row justify-space-around align-center">
    <div v-if="!isEditMode" class="w-66 text-justify" @dblclick="ToggleEditMode">
      <h3 class="mb-5">{{ about.title }}</h3>
      <p v-for="(text, index) in about.text" :key="index">{{ text === '' ? '&nbsp;' : text }}</p>
    </div>
    <div v-if="isEditMode" class="about-content pt-16 16 w-66" @keyup.enter="saveAbout">
      <v-form>
        <v-text-field v-model="about.title" class="mb-5" variant="outlined" label="Title"/>
        <v-text-field
            v-for="(text, index) in about.text"
            v-model="about.text[index]"
            :key="index"
            append-icon="mdi-delete"
            @click:append="deleteAboutText(index)"
            variant="outlined">
        </v-text-field>
        <v-btn class="me-4" @click="saveAbout" icon="mdi-content-save"/>
        <v-btn class="me-4" @click="addAboutText" icon="mdi-plus"/>
      </v-form>
    </div>
  </section>
</template>
