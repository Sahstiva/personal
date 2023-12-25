<template>
  <v-card color="rey-darken-2" class="navigation" position="fixed">
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item prepend-icon="mdi-face-man-shimmer-outline" class="navigation-title" title="About me"/>
      </v-list>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-history" class="navigation-item" link to="/about" title="Biography"/>
        <v-list-item prepend-icon="mdi-account-hard-hat-outline" class="navigation-item" link to="/about/experience" title="Experience"/>
        <v-list-item prepend-icon="mdi-school-outline" class="navigation-item" link title="Education"/>
        <v-list-group value="Skills">
          <template v-slot:activator="{ props }">
            <v-list-item
                prepend-icon="mdi-atom"
                v-bind="props"
                title="Skills"
            ></v-list-item>
          </template>

          <v-list-item prepend-icon="mdi-code-json" class="navigation-item" link title="Tech skills"/>
          <v-list-item prepend-icon="mdi-head-snowflake-outline" class="navigation-item" link title="Soft skills"/>

        </v-list-group>
        <v-list-item prepend-icon="mdi-human-male-board" class="navigation-item" link title="Testimonials"/>
        <v-list-item prepend-icon="mdi-dots-horizontal-circle-outline" class="navigation-item" link title="Extra"/>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<style scoped lang="scss">
.navigation {
  &-title {
    font-family: 'Fira Code', monospace;
    font-size: 20px;
    font-weight: 500;
  }
  &-item {
    font-family: 'Fira Code', monospace;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
