<template>
    <RouterLink
      @click.prevent="$router.back()"
      to=""
      class="flex items-center mb- gap-2 p-2 mb-9 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
    >
      <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
      <span class="text-sm font-medium"> Retour </span>
    </RouterLink>
    <div class="mx-auto xl:container">
     
  
   
  
      <div class="max-w-full p-5 mt-3 border row">
    <div class="my-5 text-xl font-medium">Rapport des indicateurs de performance à la date 18/12/2023</div>

   

    <div class="box-body">
    <table class="table table-auto w-full border" id="DataTables_Table_0">
        <tbody>
            <tr class="border-b">
                <th class="py-2"></th>
            </tr>
        </tbody>
        <tbody>
            <tr class="border-b">
                <td class="font-semibold">eeeee</td>
            </tr>
            <tr class="border-b">
                <td class="font-semibold">eeeeee</td>
            </tr>
            <tr class="border-b">
                <td class="font-semibold">Total</td>
            </tr>
            <tr class="border-b">
                <td class="font-semibold">Taux (%)</td>
            </tr>
            <tr class="border-b">
                <td class="font-semibold">Taux acceptable</td>
            </tr>
        </tbody>
    </table>
    <br>
</div>


 
  </div>    </div>
  </template>
  
  <script lang="ts" setup>
  import { icons } from '@/assets/icons/oh-vue-icons'


  </script>
  
  <style lang="scss" scoped></style>
  