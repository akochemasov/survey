<template>
  <div>Home</div>

  <v-btn :prepend-icon="mdiHandOkay" color="red"> Button </v-btn>
  <v-icon :icon="mdiHome" color="yellow" />
  <v-btn class="ma-2" color="primary" dark>
    Accept
    <v-icon dark right :icon="mdiCheckboxMarkedCircle" />
  </v-btn>
</template>

<script setup>
import { mdiCheckboxMarkedCircle, mdiHandOkay, mdiHome } from "@mdi/js";
</script>
