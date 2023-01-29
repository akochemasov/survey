<template>
  <v-container>
    <template :key="item.id" v-for="item in surveys">
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
                  <v-icon
                    :icon="mdiAccountMultipleCheck"
                    size="large"
                    class="mr-2"
                  />
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
import { mdiAccountMultipleCheck } from "@mdi/js";
import { ref, defineProps, watchEffect } from "vue";
import { getSurveys } from "@/services/api";
import type { ISurvey } from "@/types/survey";
import { TypeSurvey } from "@/types/survey";
import { useRouter } from "vue-router";

const props = defineProps<{ type: TypeSurvey }>();
const router = useRouter();

const surveys = ref<ISurvey[]>([]);

watchEffect(async () => {
  surveys.value = await getSurveys({ type: props.type });
});

const onClick = (item: ISurvey) => {
  router.push({ path: `/survey/${item.id}` });
};
</script>

<style scoped module></style>
