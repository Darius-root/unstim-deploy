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
        <span class="text-base font-normal">Ajout d'un marché</span>
      </div>
  
      <div class="bg-white shadow-md rounded-lg mt-3 p-6">
        <form>
          <div class="grid grid-cols-2 gap-6">
            <selecteImput :label="'PPM'" :parameters="parameters" :isRequired="true" />
            <selecteImput :label="'Choisir un modèle'" :parameters="parameters" :isRequired="true" />

            <imput :label="'Montant prévisionnel <='" :isRequired="true" :type="'number'" class="flex-grow" />
            <imput :label="'A la date'" :isRequired="true" :type="'date'" class="flex-grow" />


           
          </div>
  
          <RouterLink to="rapport-indicateur-view"
              class="flex items-center text-sm  bg-green-700 my-10 mx-3 h-8 w-fit p-3 border rounded-md shadow text-white  hover:opacity-60">
              <span class=" font-bold">Enregistrer</span>
            </RouterLink>
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
  options: ['Afficher', 'PDF','Excel' ],
  placeholder: '--Choissir un mode d\'édition--',
  searchable: true,
  mode: 'tags'
})
  </script>
  
  <style scoped></style>
  