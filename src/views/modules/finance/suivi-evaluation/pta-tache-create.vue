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
        <span class="text-base font-normal"> Ajouter une Tâche
</span>
      </div>
   <form>
      <div class="bg-white shadow-b rounded-lg mt-3 p-6">
       
          <div class="grid grid-cols-2 gap-6">
            <imput :label="'Code'" :isRequired="true" class="flex-grow" />
            <imput :label="'Libelle'" :isRequired="true" class="flex-grow" />
      <imput :label="'Poids (kg)'" :type="'number'" :isRequired="true"  class="flex-grow" />

      <imput :label="'Numero d\'ordre '"  :type="'number'"  :isRequired="true"  class="flex-grow" />
      <imput :label="'Observation'" :isRequired="true" class="flex-grow" />



          </div>
  
      




      <div class="flex py-2 my-5 top-line">
        <span class="text-base font-normal">Sources de financement
</span>
      </div>
  
      
     
          <div class="grid grid-cols-2 gap-6">
           
            <selecteImput :label="'Libellé'"  :parameters="parameters" :isRequired="true" />
            <selecteImput :label="'Bailleur'"  :parameters="parameters" :isRequired="true" />
           
            <selecteImput :label="'Mode'"  :parameters="parameters" :isRequired="true" />
            <selecteImput :label="'Type '"  :parameters="parameters" :isRequired="true" />
           
      <imput :label="'Cout (FCFA)'"  :type="'number'" :isRequired="true"   class="flex-grow" />




          </div>
  
          <button
            type="submit"
            class="bg-blue-500 mt-4 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Enregistrer
          </button>
      </div></form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { icons } from '@/assets/icons/oh-vue-icons'
  import selecteImput from '@/components/inputs/unstim-select.vue'
  import imput from '@/components/inputs/unstim-text.vue'
import { reactive } from 'vue';
  const parameters = reactive({
  options: ['xx', 'xxxx', 'xxx'],
  placeholder: '--Choississez un element xxxx--',
  searchable: true
})
  </script>
  
  <style scoped></style>
  