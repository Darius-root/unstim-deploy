<template>
 <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-normal "> Créer un diplome</span>
    </div>

    <RouterLink
      @click.prevent="$router.back()"
      to=""
      class="flex items-center gap-2 p-2 mt-5 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
    >
      <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
      <span class="text-slate-700 font-medium"> Retour </span>
    </RouterLink>


    <div class="bg-white shadow-md rounded-lg mt-3 p-6">
      <form>
        <div class="mb-4">
          <label for="name" class="block  text-gray-700 font-medium mb-2">Nom</label>
          <input type="text" placeholder="Entrez index  le nom du diplome" id="name" name="name" class="border form-unstim border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>



        <button type="submit" class="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">Enregistrer</button>
      </form>
    </div>
    </div>
</template>

<script setup lang="ts">
import { icons } from '@/assets/icons/oh-vue-icons'

</script>

<style scoped>

</style>