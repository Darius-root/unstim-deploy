<template>
    <div class="mx-auto xl:container">
       <div class="flex py-2 border-b top-line">
         <span class="text-base font-normal "> Créer une section</span>
       </div>
   
   
       <div class="bg-white shadow-md rounded-lg mt-3 p-6">
         <form>
            <div class="grid grid-cols-2 gap-6">
          <imput :label="'Nom de la délegation'" :isRequired="true" class="flex-grow" />
          <imput :label="'Abréviation'" :isRequired="true" class="flex-grow" 
        />        <selecteImput :label="'Nom du departement'" :parameters='parameters'  :isRequired="true"/>

        </div>
 
           <button type="submit" class="bg-blue-500 mt-4 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">Enregistrer</button>
         </form>
       </div>
       </div>
   </template> 
   
   <script setup lang="ts">
   import { reactive, ref } from 'vue';
   import { icons } from '@/assets/icons/oh-vue-icons'
   import  selecteImput from '@/components/inputs/unstim-select.vue' 
     import  imput from '@/components/inputs/unstim-text.vue'

   const parameters=reactive({
  options: ['Darius', 'ZKP', 'JOHN Doe'],
  placeholder: '--Choississez un employe--',
  searchable: true
})

   
   
   </script>
   
   <style scoped>
   
   </style>       