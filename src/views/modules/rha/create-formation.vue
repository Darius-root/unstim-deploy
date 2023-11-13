<template>
    <div class="mx-auto xl:container">
       <div class="flex py-2 border-b top-line">
         <span class="text-base font-normal ">Créer une Formation</span>
       </div>
   
   
       <div class="bg-white shadow-md rounded-lg mt-3 p-6">
         <form>
            <div class="grid grid-cols-2 gap-6">

                <selecteImput :label="'Direction'" :parameters='parameters'  :isRequired="true"/>
                <selecteImput :label="'Service'" :parameters='parameters'  :isRequired="true"/>
                <imput :label="'Nom et Prénoms'"  :isRequired="true" class="flex-grow" />

                <imput :label="'Thème de formation'"  :isRequired="true" class="flex-grow" />

                <imput :label="'Lieu de formation'"  :isRequired="true" class="flex-grow" />

                <imput :label="'Date de début'"  :isRequired="true" :type="'date'" class="flex-grow" />
                <imput :label="'Date de fin'"  :isRequired="true" :type="'date'" class="flex-grow" />

        </div>
 
           <button type="submit" class="bg-blue-500 mt-4 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">Valider</button>
         </form>
       </div>
       </div>
   </template> 
   
   <script setup lang="ts">

   import  imput from '@/components/inputs/unstim-text.vue'
   import  selecteImput from '@/components/inputs/unstim-select.vue'
   const parameters={name:'1', direct:'2'}
   
   </script>
   
   <style scoped>
   
   </style>       