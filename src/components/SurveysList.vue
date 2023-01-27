<template>
  <v-container>
    <v-row v-for="(item, index) in surveys" :key="index" align="center">
      <v-col class="mx-auto" width="100%">
        <v-card outlined shaped elevation="4">
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>От {{ item.author }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="() => {}">Подробнее</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, defineProps, watchEffect } from "vue";
import { getSurveys } from "@/services/api";
import type { ISurvey } from "@/types/survey";
import { TypeSurvey } from "@/types/survey";

const props = defineProps<{ type: TypeSurvey }>();

const surveys = ref<ISurvey[]>([]);

watchEffect(async () => {
  surveys.value = await getSurveys({ type: props.type });
});
</script>

<style scoped module></style>
