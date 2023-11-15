<template>
    <div class="mx-auto xl:container">
       <div class="flex py-2 border-b top-line">
         <span class="text-base font-normal ">Créer un type de congé / permission</span>
       </div>
   
   
       <div class="bg-white shadow-md rounded-lg mt-3 p-6">
         <form>
            <div class="grid grid-cols-2 gap-6">
                <selecteImput :label="'Categorie'" :parameters='parameters'  :isRequired="true"/>
                <imput :label="'Nom'"  :isRequired="true" class="flex-grow" />

                <imput :label="'Nombre du jour'"  :isRequired="true" :type="'number'" class="flex-grow" />
                
                <selecteImput :label="'Déduction sur prime'" :parameters='parameters'  :isRequired="true"/>


                <selecteImput :label="'Déduction sur condés'" :parameters='parameters'  :isRequired="true"/>

          
        </div>
 
           <button type="submit" class="bg-blue-500 mt-4 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">Enregistrer</button>
         </form>
       </div>
       </div>
   </template> 
   
   <script setup lang="ts">

   import  imput from '@/components/inputs/unstim-text.vue'
   import  selecteImput from '@/components/inputs/unstim-select.vue'
import { reactive } from 'vue';
   const parameters=reactive({
  options: ['Darius', 'ZKP', 'JOHN Doe'],
  placeholder: '--Choississez un employe--',
  searchable: true
})

   
   </script>
   
   <style scoped>
   
   </style>       