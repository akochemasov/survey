<template>
  <SurveyItem :id="route.params.id" />
</template>

<script setup lang="ts">
import SurveyItem from "@/components/SurveyItem.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped></style>
