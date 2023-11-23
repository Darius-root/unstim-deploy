<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-normal">Enregistrer une nouvelle fonction</span>
    </div>

    <div class="bg-white shadow-md rounded-lg mt-3 p-6">
      <form>
        <div class="grid grid-cols-2 gap-6">
          <imput :label="'Nom du poste'" :isRequired="true" class="flex-grow" />
          <selecteImput
            :label="'Categorie de la fonction'"
            :parameters="parameters"
            :isRequired="true"
          />

          <imput :label="'Abréviation'" :isRequired="true" class="flex-grow" />
          <imput :label="'Description'" :isRequired="true" :type="'textearea'" class="flex-grow" />
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
import imput from '@/components/inputs/unstim-text.vue'
import selecteImput from '@/components/inputs/unstim-select.vue'
const parameters = { name: '1', direct: '2' }
</script>

<style scoped></style>
