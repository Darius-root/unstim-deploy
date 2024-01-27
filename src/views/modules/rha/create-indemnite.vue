<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-lg font-medium"> Ajouter un nouveau gain </span>
    </div>

    <div class="bg-gray-100 shadow border mt-5 p-6">
      <form>
        <div class="grid grid-cols-2 gap-6">
          <inputUnstim label="Nom de l'indemnite" :isRequired="true" class="flex-grow" />

          <selectInput label="Type d'indemnite" :parameters="parameters" :isRequired="true" />

          <inputUnstim label="Code comptable" :isRequired="true" class="flex-grow" />

          <inputUnstim label="Abréviation" :isRequired="true" class="flex-grow" />

          <inputUnstim label="Rubriques" :isRequired="true" class="flex-grow" />

          <selectInput label="Mois" :parameters="parameters" :isRequired="true" />
        </div>

        <button type="submit"
          class="flex items-center text-sm font-medium gap-2 p-2 px-3 mt-5 text-white rounded shadow bg-unstim-primary w-fit hover:bg-opacity-60">
          Enregistrer
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import inputUnstim from '@/components/inputs/unstim-text.vue'
import selectInput from '@/components/inputs/unstim-select.vue'
const parameters = { name: '1', direct: '2', placeholder: "---Choisir le type d'indemnite---" }
</script>

<style scoped></style>
