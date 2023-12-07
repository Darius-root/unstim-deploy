<template>
    <div class="mx-auto xl:container">
      <RouterLink
        @click.prevent="$router.back()"
        to=""
        class="flex items-center my-2 gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
      >
        <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
        <span class="text-sm font-medium"> Retour </span>
      </RouterLink>
  

  
      <div class="flex py-2 border-b top-line">
        <span class="text-base font-normal">Modifier un Plan de Travail Annuel</span>
      </div>
  
      <div class="bg-white shadow-md rounded-lg mt-3 p-6">
        <form>
          <div class="grid grid-cols-2 gap-6">
            <imput :label="'Année'" :isRequired="true" :type="'date'" class="flex-grow" />
            <imput :label="'Version'" :isRequired="true" :status="true" class="flex-grow" />
            <imput :label="'Début 1ere Phase'" :isRequired="true" :type="'date'" class="flex-grow" />
            <imput :label="'Début de validation'" :isRequired="true" :type="'date'" class="flex-grow" />

            <selecteImput :label="'Source de financement '" :parameters="parameters" :isRequired="true" />
            <imput :label="'Observation'" :isRequired="true" :type="'textearea'" class="flex-grow" />

           
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
  import { icons } from '@/assets/icons/oh-vue-icons'
  import selecteImput from '@/components/inputs/unstim-select.vue'
  import imput from '@/components/inputs/unstim-text.vue'

  import { reactive } from 'vue'
  const parameters = reactive({
  options: ['xxx', 'xxxxxxx', 'Chef xxxx', 'Chef xxxxxx'],
  placeholder: '--Choississez xxxx--',
  searchable: true,
  mode: 'tags'
})
  </script>
  
  <style scoped></style>
  