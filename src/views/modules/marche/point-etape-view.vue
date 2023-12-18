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
    <div class="my-5 text-xl font-medium">Point de la gestion des litiges liés à la passation des marchés</div>

   

    <div class="flex justify-end my-3 items-center space-x-2">
      <span class="text-base font-medium">Filtrer:</span>
      <input type="text" v-model="search" class="border-gray-300 rounded-md" />
    </div>

    <el-table
      :data="pagedTableData"
      style="width: 100%"
      :show-header="true"
      class="py-2"
      :pagination="true"
      :current-page="currentPage"
      :page-size="pageSize"
    >
      <el-table-column label="N°" type="index" width="150px" />

      <el-table-column prop="intitule" sortable label="intitule" width="" />
      <el-table-column prop="date" sortable label="Date d'élaboration" width="" />
      <el-table-column prop="delai" sortable label="Délais de réalistion" width="" />

   

      <el-table-column align="center" label="xxxxxx">
        <el-table-column prop="anne1.total" sortable label="Réalisés" width="170px" />
        <el-table-column prop="anne1.joui" sortable label="Prévues" width="170px" />
      </el-table-column>
    

      <el-table-column align="center" label="Respect de délais réglémentaire">
        <el-table-column prop="reg.non" sortable label="Réalisés" width="170px" />
        <el-table-column prop="reg.oui" sortable label="Prévues" width="170px" />
      </el-table-column>
    
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="filterTableData.length"
      v-model:current-page="page"
      :page-size="pageSize"
      @current-change="setPage"
    >
    </el-pagination>
  </div>    </div>
  </template>
  
  <script lang="ts" setup>
  import { icons } from '@/assets/icons/oh-vue-icons'
import { computed, ref } from 'vue'

import { ElTable, ElTableColumn, ElPagination } from 'element-plus'
import 'element-plus/dist/index.css'

const search = ref('')

const page = ref(1)
const pageSize = ref(10)
const setPage = (val: number) => {
  page.value = val
}
const pagedTableData = computed(() => {
  return filterTableData.value.slice(
    pageSize.value * page.value - pageSize.value,
    pageSize.value * page.value
  )
})
const filterTableData = computed(() =>
  dataTable.filter(
    (data) => !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

const currentPage = 1



 
  const dataTable = [
    {
      intitule: '152-55',
      date: '152-55',
      delai: '152-55',

      anne1: {
        total: '25/25',
        joui: '25',
      },

      reg: {
        oui: '25/25',
        non: '25',
      },
     
    },
 
  ]
  

  </script>
  
  <style lang="scss" scoped></style>
  