<template>
    <div class="mx-auto xl:container">
    
  
  
  
      <div class="flex py-2 border-b top-line">
        <span class="text-base font-normal">Liste des journaux</span>
      </div>
  
  
      <div class="flex justify-end my-3">
          <RouterLink  to="create-default-journal" class="flex items-center gap-2 p-2 bg-unstim-primary  text-white rounded shadow hover:bg-opacity-60 mx-1">
            <v-icon :name="icons.AddIcon" scale="1.1" />
            <span class="text-sm font-medium">Ajouter un journal par defaut</span>
          </RouterLink>
      </div>
      <div class="flex items-center">
          <el-button>Excel</el-button>
          <el-button type="primary" class="ml-2">CSV</el-button>
        </div>
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
         <el-table-column sortable  prop="type" label="N°"/>

            <el-table-column  sortable  prop="code" label="Code " />
            <el-table-column sortable prop="libelle" label="Libellé" />
           
         
            <el-table-column fixed="right" label="Action" width="170">
              
              <template #default>
                <div class="flex gap-3 row justify-center items-center">
    
                    <RouterLink to="update-default-journal" class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-yellow-600 hover:opacity-50">
              <v-icon :name="icons.EditIcon" scale="1.0" />
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
    