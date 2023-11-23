<template>
  <RouterLink
    @click.prevent="$router.back()"
    to=""
    class="flex items-center mb- gap-2 p-2 mb-9 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
  >
    <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
    <span class="text-sm font-medium"> Retour </span>
  </RouterLink>

  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-normal">Créer une attente</span>
    </div>

    <div class="bg-white shadow-md rounded-lg mt-3 p-6">
      <form>
        <div class="grid grid-cols-2 gap-6">
          <selecteImput :label="'Nom et Prénoms'" :parameters="parameters" :isRequired="true" />
          <imput :label="'Date '" :isRequired="true" :type="'date'" class="flex-grow" />
          <selecteImput :label="'Service'" :parameters="parameters" :isRequired="true" />
          <selecteImput :label="'Saison'" :parameters="parameters" :isRequired="true" />
          <imput :label="'Objectifs '" :isRequired="true" :type="'textearea'" class="flex-grow" />
          <imput
            :label="'Moyens à mettre en Place '"
            :isRequired="true"
            :type="'textearea'"
            class="flex-grow"
          />
          <imput
            :label="'Besoins de formation/Perfectionnement'"
            :isRequired="true"
            :type="'textearea'"
            class="flex-grow"
          />
          <imput
            :label="'Aspirations Professionnelles'"
            :isRequired="true"
            :type="'textearea'"
            class="flex-grow"
          />
        </div>

        <button
          type="submit"
          class="bg-blue-500 mt-4 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Valider
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import imput from '@/components/inputs/unstim-text.vue'
import selecteImput from '@/components/inputs/unstim-select.vue'
import { icons } from '@/assets/icons/oh-vue-icons'
import { reactive } from 'vue'

const parameters = reactive({
  options: ['Darius', 'ZKP', 'JOHN Doe'],
  placeholder: '--Choississez un employe--',
  searchable: true
})
</script>

<style scoped></style>
