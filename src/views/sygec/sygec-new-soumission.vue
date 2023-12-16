<template>
    <div class="w-full  bg-white  mx-auto xl:container   text-black ">
  <div class="flex  justify-between font-bold text-base p-2">
    <div>Soumissions</div>
    <span class="my-notif-icon me-3"> <v-icon :name="icons.FaUsers" scale="1.4" /></span>
  </div>
</div>


    <div class=" items-center xl:container">



     
      <div class="flex py-2 border-b top-line mx-10">
        <span class="text-base font-normal">Faire une nouvelle soumission</span>
      </div>
  
      <div class="bg-white shadow-md   rounded-lg mt-3 p-6  mx-10 items-center">
        <div class="text-center border-b mb-3">Résumé</div>
      
      
    <div class="flex justify-center">
      <RouterLink
        to=""
        class="shadow-btn text-[10px] backgroundSygec my-5 p-2 border rounded-md text-white hover:opacity-60"
      >
        <v-icon :name="icons.AddIcon" class="" scale="0.8" />
        <span class="font-bold text-center">Créer</span>
      </RouterLink>
    </div>

      </div>
    
      
    </div>
  </template>
  
  <script setup lang="ts">
  import { icons } from '@/assets/icons/oh-vue-icons'
  
  </script>
  
  <style scoped></style>
  