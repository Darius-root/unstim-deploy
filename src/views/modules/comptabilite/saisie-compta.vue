<template>
    <div class="mx-auto xl:container">
    
  
  
  
      <div class="flex py-2 border-b top-line">
        <span class="text-base font-normal">Liste des écritures</span>
      </div>
  
  
      <div class="flex justify-end my-3">
          <RouterLink  to="create-categorie-tiers" class="flex items-center gap-2 p-2 bg-unstim-info  text-white rounded shadow hover:bg-opacity-60 mx-1">
            <v-icon :name="icons.AddIcon" scale="1.1" />
            <span class="text-sm font-medium">Ajouter une catégorie tiers</span>
          </RouterLink>
      </div>
      <div class="flex items-center">
          <el-button>Excel</el-button>
          <el-button type="primary" class="ml-2">CSV</el-button>
        </div>
      <div class="bg-white shadow-md rounded-lg mt-3 p-6">
  
  
  
        <el-table :data="tableData"
         :border="true" 
         style="width: 100%"
      :show-header="true"
      class="py-2"
      :pagination="true"
      :current-page="currentPage"
      :page-size="pageSize"
         >
            <el-table-column prop="date" label="Date " />
            <el-table-column prop="description" label="Code de saisie" />
            <el-table-column prop="code" label="N° compte"/>
            <el-table-column prop="credit" label="Intitulé"/>
            <el-table-column prop="credit" label="Montant débit"/>
            <el-table-column prop="credit" label="Montant crédit"/>

            <el-table-column fixed="right" label="Action" width="170">
              
          <template #default>
            <div class="flex gap-3 row justify-center items-center">

                <RouterLink to="contrat-update" class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-green-600 hover:opacity-50">
                <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
              </RouterLink>
              <RouterLink to="contrat-update" class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-yellow-600 hover:opacity-50">
                <v-icon :name="icons.EditIcon" scale="1.0" />
              </RouterLink>
              <RouterLink to="" class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-600 hover:bg-red-400">
                <v-icon :name="icons.DeleteIcon" scale="1.0" />
              </RouterLink>
            </div>
          </template>
        </el-table-column>
        </el-table>
  
      </div>
  
  
  
  
  
  
    </div>
  </template>
    
  <script setup lang="ts">
  
  import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue';
  
  const tableData = [
    {
      date: '2016-05-03',
      description: 'Tom',
      code: 'xxxx',
      debit: 'xxxx',
      credit: 'xxxx',
    },
    {
      date: '2016-05-03',
      description: 'Tom',
      code: 'xxxx',
      debit: 'xxxx',
      credit: 'xxxx',
    },
  
  ]




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
  props.datatable.filter(
    (data) => !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

const currentPage = 1
  </script>
    
  <style scoped></style>
    