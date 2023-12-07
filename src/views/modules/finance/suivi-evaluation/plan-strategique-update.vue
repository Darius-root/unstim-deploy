<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-normal">Modifier un plan stratégique</span>
    </div>

    <div class="bg-white shadow-md rounded-lg mt-3 p-6">
      <form>
        <div class="grid grid-cols-2 gap-6">
          <imput :label="'Code'" :isRequired="true" class="flex-grow" />
          <imput :label="'Libelle'" :isRequired="true" class="flex-grow" />
          <imput :label="'Démarre le'" :isRequired="true" :type="'date'" class="flex-grow" />
          <imput :label="'Fini  le'" :isRequired="true" :type="'date'" class="flex-grow" />
        </div>

        <button
          type="submit"
          class="bg-blue-500 mt-4 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Enregistrer
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const parameters = reactive({
  options: ['Darius', 'ZKP', 'JOHN Doe'],
  placeholder: '--Choississez un employe--',
  searchable: true
})

import imput from '@/components/inputs/unstim-text.vue'
import { reactive } from 'vue'
</script>

<style scoped></style>
