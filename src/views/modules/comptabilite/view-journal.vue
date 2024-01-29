<template>
    <div class="mx-auto xl:container">
    
  
        <RouterLink @click.prevent="$router.back()" to=""
        class="flex items-center my-2 gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
        <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
        <span class="text-sm font-medium"> Retour </span>
      </RouterLink>
  
      <div class="flex py-2 mb-8 border-b top-line">
        <span class="text-base font-normal">Détails du journal 57210000/52110900/52111200/52150400</span>
      </div>
      <el-descriptions class-name="w-full bg-red-500" direction="horizontal" :column="1" border>

<el-descriptions-item label="CODE JOURNAL:	 ">David RANDOM</el-descriptions-item>
<el-descriptions-item label="TYPE">davidrandom@unstim.prof</el-descriptions-item>
<el-descriptions-item label="LIBELLÉ">00 22 55 00</el-descriptions-item>


</el-descriptions>

  

      <div class="bg-white shadow-md rounded-lg mt-3 p-6">
  
  
        <div class="flex justify-end my-3 items-center space-x-2">
      <span class="text-base font-medium">Filtrer:</span>

      <el-input v-model="search"  class="mx-auto !w-52  " type="text" autocomplete="off" />

    </div>
  
        <el-table :data="pagedTableData"
         :border="true" 
         style="width: 100%"
      :show-header="true"
      class="py-2"
      :pagination="true"
      :current-page="currentPage"
      :page-size="pageSize"
      stripe

         >
            <el-table-column  sortable  prop="code" label="Code saisie" />
            <el-table-column sortable prop="libelle" label="Date operation" />
            <el-table-column  sortable prop="type" label="Total débit"/>
            <el-table-column sortable  prop="totalc" label="Total crédit"/>
            <el-table-column sortable  prop="partie" label="Partie double">
                <template #default>
                <div class="flex gap-3 row justify-center items-center">
                    <el-button type="warning" plain round size="small">Déséquilibré</el-button>

                </div>
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="Action" width="170">
              
              <template #default>
                <div class="flex gap-3 row justify-center items-center">
    
                    <RouterLink to="show-journal" class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-green-600 hover:opacity-50">
                    <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
                  </RouterLink>
                 
                  <RouterLink to="" class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-600 hover:bg-red-400">
                    <v-icon :name="icons.DeleteIcon" scale="1.0" />
                  </RouterLink>
                </div>
              </template>
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
      </div>
  
  
  
  
  
  
    </div>
  </template>
    
  <script setup lang="ts">
  
  import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue';
import  useTablePagination  from '@/composables/paginate-search-tab';

  const tableData = ref ([
    {
      code: '2016-05-03',
      libelle: 'Tom',
      type: 'xxxx',
      totald: 'xxxx',
      totalc:'xxx',
      partie:'cc'
    },
   
  
  ])




  const {
  page,
  pageSize,
  setPage,
  pagedTableData,
  filterTableData,
  currentPage,
  search
} = useTablePagination(tableData);

  </script>
    
  <style scoped></style>
    