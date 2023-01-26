<template>
  <v-avatar color="red" :icon="mdiChartBoxOutline" />

  <v-spacer />

  <v-tabs centered>
    <v-tab @click="onTabClick(0)">Активные</v-tab>
    <v-tab @click="onTabClick(1)">Мои</v-tab>
    <v-tab @click="onTabClick(2)">Прошедшие</v-tab>
  </v-tabs>

  <v-spacer />

  <v-avatar class="hidden-sm-and-down" color="blue" :icon="mdiLogin" />
</template>

<script setup lang="ts">
import { mdiChartBoxOutline, mdiLogin } from "@mdi/js";

const onTabClick = (index: number) => {
  console.log("tab", index);
};
</script>

<style scoped></style>
