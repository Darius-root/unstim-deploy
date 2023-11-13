<template>
    <div class="mx-auto xl:container">
       <div class="flex py-2 border-b top-line">
         <span class="text-base font-normal "> Enregistrer un nouveau type de fonction</span>
       </div>
   
   
       <div class="bg-white shadow-md rounded-lg mt-3 p-6">
         <form>
            <div class="grid grid-cols-2 gap-6">
          <imput :label="'Nom de poste'" :isRequired="true" class="flex-grow" />
          <imput :label="'Abréviation'" :isRequired="true" class="flex-grow" 
        />
          
        </div>
 
           <button type="submit" class="bg-blue-500 mt-4 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">Enregistrer</button>
         </form>
       </div>
       </div>
   </template> 
   
   <script setup lang="ts">
   import { ref } from 'vue';
   import { icons } from '@/assets/icons/oh-vue-icons'
   import  imput from '@/components/inputs/unstim-text.vue'
   
   
   </script>
   
   <style scoped>
   
   </style>       