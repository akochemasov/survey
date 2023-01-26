<template>
  <v-container>
    <v-row v-for="(item, index) in surveys" :key="index" align="center">
      <v-col class="mx-auto" width="100%">
        <v-card>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.status }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="() => {}">View Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getSurveys } from "@/services/api";
import type { ISurvey } from "@/types/survey";

const surveys = ref<ISurvey[]>([]);

onMounted(async () => {
  surveys.value = await getSurveys();
});
</script>

<style scoped module></style>
