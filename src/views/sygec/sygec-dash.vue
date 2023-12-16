<template>
    <div>
    <div class="w-full  bg-white  mx-auto xl:container   text-black ">
<div class="flex  justify-between font-bold text-base p-2">
<div>Dashboard</div>
<span class="my-notif-icon me-3"> <v-icon :name="icons.TachometerIcon" scale="1.4" /></span>
</div>
    </div>



    <div
      class=" py-3 px-7 flex flex-col lg:items-center lg:justify-between lg:flex-row"
    >      <span class="text-base font-semibold">Mes Statistiques </span>

   
    
    </div>

    <div class="stats-content mx-auto flex gap-3 justify-center items-center flex-wrap">
      <div
        v-for="(item, index) in sygStats"
        class="p-3 border space-y-2  bg-white shadow-card flex-col flex justify-center items-center w-auto h-auto"
        :key="index"
      >
        <span :style="{ color: item.couleur }" class="text-center px-2">{{ item.label }}</span>

        <hr class="bg-slate-500 w-28" />

        <div class="text-center">
          {{ item.valeur }}
        </div>
      </div>
    </div>
    

 




    </div>
</template>

<script setup lang="ts">
import { icons } from '@/assets/icons/oh-vue-icons'
import {useSygStatStore  } from "@/stores/sygec-dash";
const sygStats = useSygStatStore().sygStats

</script>

<style scoped>

</style>