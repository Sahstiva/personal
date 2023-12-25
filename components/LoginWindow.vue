<script setup lang="ts">
  import {useUserStore} from "~/stores/UserStore";

  const store = useUserStore();
  let userName = ref(''),
      password = ref(''),
      form = ref(false),
      loading = ref(false),
      isActive = ref(false),
      isAuthorized = ref(store.isAuthorized);
  const rules = {
    required: (value: string): string | boolean => !!value || 'Required.',
    email: (value: string): string | boolean => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(value) || 'Invalid e-mail.';
    },
    password: (value: string): string | boolean => {
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~一-龠ぁ-ゔァ-ヴー々〆〤ヶÀ-ÿ]{9,}$/gu;
      return pattern.test(value) || 'Password should have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character ';
    }
  };

  async function onSubmit () {
    if (!isAuthorized.value && !form.value) return;
    loading.value = true;
    if(isAuthorized.value) {
      isAuthorized.value = false;
      await store.logout();
    } else {
      isAuthorized.value = await store.login(userName.value, password.value);
    }
    loading.value = false;
    isActive.value = false;
  }
</script>

<template>
  <v-dialog width="400px" v-model="isActive">
    <template v-slot:activator="{ props }">
      <v-btn v-show="!isAuthorized" v-bind="props" prepend-icon="mdi-login"> </v-btn>
      <v-btn v-show="isAuthorized" v-bind="props" prepend-icon="mdi-logout"> </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-sheet class="pa-12" rounded>
        <v-card class="mx-auto px-6 py-8" max-width="344">
          <v-form
              v-model="form"
              @submit.prevent="onSubmit"
          >
            <v-text-field
                v-if="!isAuthorized"
                v-model="userName"
                :readonly="loading"
                :rules="[rules.required, rules.email]"
                class="mb-2"
                clearable
                label="Email"
            ></v-text-field>

            <v-text-field
                v-if="!isAuthorized"
                v-model="password"
                :readonly="loading"
                type="password"
                :rules="[rules.required, rules.password]"
                clearable
                label="Password"
                placeholder="Enter your password"
            ></v-text-field>

            <br>

          </v-form>
          <v-card-actions>
            <v-btn
                :disabled="!isAuthorized && !form"
                :loading="loading"
                block
                color="success"
                size="large"
                type="submit"
                variant="elevated"
                @click="onSubmit"
            >
              {{ isAuthorized ? 'Logout' : 'Login' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-sheet>
    </template>
  </v-dialog>
</template>

<style scoped lang="scss">

</style>
