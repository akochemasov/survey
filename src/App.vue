<template>
  <v-app>
    <v-app-bar class="px-3" density="default">
      <Header />
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/AppHeader.vue";
</script>

<style scoped></style>
