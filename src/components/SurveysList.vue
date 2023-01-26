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
import { ref } from "vue";
import type { ISurvey } from "@/types/survey";

const surveys = ref<ISurvey[]>([]);
</script>

<style scoped module></style>
