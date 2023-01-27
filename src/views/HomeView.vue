<template>
  <SurveysList :type="route.params.type || TypeSurvey.popular" />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import SurveysList from "@/components/SurveysList.vue";
import { TypeSurvey } from "@/types/survey";

const route = useRoute();
</script>

<style scoped module></style>
