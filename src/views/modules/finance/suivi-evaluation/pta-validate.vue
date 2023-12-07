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
        <span class="text-base font-normal">Validation du PTA xxx (version: xx)</span>
      </div>
  
      <div class="bg-white shadow-md rounded-lg mt-3 p-6">
        <form>
          <div class="grid grid-cols-2 gap-6">
            <imput :label="'Date '" :type="'date'" :isRequired="true"  class="flex-grow" />
           


            <div class="flex flex-col space-y-2 input-group">
    <label for="" class="text-sm text-gray-600"
      > Pièce justificatif
      <span  class="text-red-500">*</span>
    </label>
  
    <input type="file"  class="form-unstim "
     />
  </div>










           
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
  import imput from '@/components/inputs/unstim-text.vue'
  import { reactive } from 'vue'
  </script>
  
  <style scoped></style>
  