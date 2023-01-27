<template>
  <v-avatar color="red" :icon="mdiChartBoxOutline" />

  <v-spacer />

  <v-tabs centered>
    <v-tab :to="`/surveys/${TypeSurvey.popular}`">Популярные</v-tab>
    <v-tab :to="`/surveys/${TypeSurvey.last}`">Последние</v-tab>
    <v-tab :to="`/surveys/${TypeSurvey.my}`">Мои</v-tab>
  </v-tabs>

  <v-spacer />

  <v-avatar class="hidden-sm-and-down" color="blue" :icon="mdiLogin" />
</template>

<script setup lang="ts">
import { mdiChartBoxOutline, mdiLogin } from "@mdi/js";
import { TypeSurvey } from "@/types/survey";
</script>

<style scoped></style>
