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
        <span class="text-base font-normal">Ajout un tiers
</span>
      </div>


      <div>
        <RouterLink
       
        to="prestataire-marche"
        class="flex  items-center my-2 ml-auto gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
      >
        <v-icon :name="icons.FormPWShowIcon" scale="1.1" />
        <span class="text-sm font-medium"> Voir la liste </span>
      </RouterLink>
      </div>
   <form>
      <div class="bg-white shadow-b rounded-lg mt-3 p-6">
       
          <div class="grid grid-cols-2 gap-6">
           
<imput :label="'Code'" :isRequired="true" class="flex-grow" />
<imput :label="'Identité'" :isRequired="true" class="flex-grow" />
<imput :label="'Prénom'" :isRequired="true" class="flex-grow" />
<imput :label="'Nom'" :isRequired="true" class="flex-grow" />
<imput :label="'Date'" :type="'date'" :isRequired="true" class="flex-grow" />
<imput :label="'Lieu de Naissance'" :isRequired="true" class="flex-grow" />
<imput :label="'Sexe'" :isRequired="true" class="flex-grow" />
<imput :label="'Raison social'" :isRequired="true" class="flex-grow" />
<imput :label="'Forme sociale'" :isRequired="true" class="flex-grow" />
<imput :label="'Identité fiscal'" :isRequired="true" class="flex-grow" />
<imput :label="'Identité'" :isRequired="true" class="flex-grow" />
<imput :label="'email'" :type="'email'" :isRequired="true" class="flex-grow" />
<imput :label="'Adresse'" :isRequired="true" class="flex-grow" />
<imput :label="'Ville'" :isRequired="true" class="flex-grow" />


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
  