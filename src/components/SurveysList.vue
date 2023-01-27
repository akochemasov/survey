<template>
  <v-container>
    <template :key="index" v-for="(item, index) in surveys">
      <v-row align="center">
        <v-col class="mx-auto" width="100%">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              outlined
              :elevation="isHovering ? 6 : 2"
              v-bind="props"
              @click="onClick(item)"
            >
              <div class="d-flex justify-space-between align-center">
                <div>
                  <v-card-title>{{ item.title }}</v-card-title>
                  <v-card-text>От {{ item.author }}</v-card-text>
                </div>
                <div class="d-flex align-center mr-5">
                  <v-avatar :icon="mdiThumbUpOutline" />
                  <div class="text-justify">{{ item.totalVoices }}</div>
                </div>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script setup lang="ts">
import { mdiThumbUpOutline } from "@mdi/js";
import { ref, defineProps, watchEffect } from "vue";
import { getSurveys } from "@/services/api";
import type { ISurvey } from "@/types/survey";
import { TypeSurvey } from "@/types/survey";

const props = defineProps<{ type: TypeSurvey }>();

const surveys = ref<ISurvey[]>([]);

watchEffect(async () => {
  surveys.value = await getSurveys({ type: props.type });
});

const onClick = (item: ISurvey) => {
  console.log(item);
};
</script>

<style scoped module></style>
