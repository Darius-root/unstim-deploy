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

<el-descriptions-item label="REFERENCE SAISIE::	 ">xxxxxx</el-descriptions-item>
<el-descriptions-item label="CODE SAISIE:">xxxxxxx</el-descriptions-item>
<el-descriptions-item label="DATE OPERATION:">xxxxxxxxx</el-descriptions-item>
<el-descriptions-item label="DESCRIPTION:	">xxxxxxxxx</el-descriptions-item>
<el-descriptions-item label="STATUT:		">                    <el-button type="warning" plain round size="small">Déséquilibré</el-button>
</el-descriptions-item>


</el-descriptions>

  

      <div class="bg-white shadow-md rounded-lg mt-3 p-6">
  
  
  
    <el-table :data="tableData" border show-summary style="width: 100%">
    <el-table-column prop="id" label="Numero" width="180" />
    <el-table-column prop="name" label="Libelle" />
    <el-table-column prop="amount1" sortable label="Description" />
    <el-table-column prop="amount2" sortable label="Montant débit" />
    <el-table-column prop="amount3" sortable label="Montant crédit" />
    <el-table-column prop="amount3" sortable label="Anomalie" />


    
    <el-table-column fixed="right" label="Action" width="170">
              
              <template #default>
                <div class="flex gap-3 row justify-center items-center">
    
                  
                 
                  <RouterLink to="" class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-600 hover:bg-red-400">
                    <v-icon :name="icons.DeleteIcon" scale="1.0" />
                  </RouterLink>
                </div>
              </template>
            </el-table-column>   
  </el-table>
   
      </div>
  
  
  
      <div class="flex ml-4 gap-3 my-8">

        <RouterLink  to="edit-journal" class="flex items-center gap-2 p-2 bg-unstim-primary  text-white rounded shadow hover:bg-opacity-60 mx-1">
            <span class="text-sm font-medium">Modifier</span>
          </RouterLink>
         
  
          <RouterLink  to="" class="flex items-center gap-2 p-2 bg-red-600  text-white rounded shadow hover:bg-opacity-60 mx-1">
            <span class="text-sm font-medium">Supprimer</span>
          </RouterLink>
        </div>
  
  
  
  
    </div>
  </template>
    
  <script setup lang="ts">


import { icons } from '@/assets/icons/oh-vue-icons'




const tableData = [
 
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  }, {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
]




 

  </script>
    
  <style scoped></style>
    