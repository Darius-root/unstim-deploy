<script setup lang="ts">
import { onMounted } from 'vue';
import { notyf } from './composables/notyf';


  onMounted(() => {
     notyf.success('Bienvenue sur SIG UNSTIM.');
  })

</script>

<template>
  <RouterView :key="$router.currentRoute.value.fullPath" />
</template>

<style>

</style>
