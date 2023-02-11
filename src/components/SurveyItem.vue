<template>
  <v-container>
    <v-btn color="blue" icon size="small" @click="router.go(-1)">
      <v-icon :icon="mdiArrowLeft"></v-icon>
    </v-btn>

    <v-container v-if="survey">
      <p class="text-h6">{{ survey?.title }}</p>

      <div style="display: flex; gap: 20px; margin: 10px 0">
        <p>от {{ survey?.author }}</p>
        <div style="display: flex; gap: 4px">
          <v-icon :icon="mdiClockOutline" />
          <p>{{ survey?.dateEndTime }}</p>
        </div>
      </div>

      <template :key="item.id" v-for="(item, index) in survey?.answers">
        <v-row align="center">
          <v-col class="mx-auto" width="100%">
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                outlined
                :elevation="isHovering ? 6 : 2"
                v-bind="props"
                @click="onClick(item)"
                :disabled="isDisabled"
              >
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <v-card-title
                      >{{ index + 1 }}. {{ item.text }}</v-card-title
                    >
                  </div>
                  <div class="d-flex align-center mr-5">
                    <v-icon
                      :icon="item.selected ? mdiThumbUp : mdiThumbUpOutline"
                      class="mr-2"
                    />
                    <div class="text-justify">{{ item.voices }}</div>
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </template>
    </v-container>
    <v-container v-else>
      <v-alert
        text="Ошибка при получении данных. Попробуйте еще раз"
        type="error"
      ></v-alert>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { defineProps, ref, watchEffect } from "vue";
import { getSurvey } from "@/services/api";
import type { IAnswer, ISurvey } from "@/types/survey";
import {
  mdiClockOutline,
  mdiThumbUpOutline,
  mdiThumbUp,
  mdiArrowLeft,
} from "@mdi/js";
import { useRouter } from "vue-router";

const props = defineProps<{ id: string }>();

const survey = ref<ISurvey | null>(null);
const isDisabled = ref(true);
const router = useRouter();

watchEffect(async () => {
  survey.value = await getSurvey({ id: props.id });

  if (survey.value) {
    isDisabled.value = survey.value?.answers.some(
      (item) => item.selected === true
    );
  }
});

const onClick = (item: IAnswer) => {
  //todo: проголосовать, если авторизован
  console.log(item);
};
</script>

<style scoped module></style>
