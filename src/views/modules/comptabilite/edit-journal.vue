<template>
    <div class="mx-auto xl:container">
      <RouterLink @click.prevent="$router.back()" to=""
        class="flex items-center my-2 gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
        <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
        <span class="text-sm font-medium"> Retour </span>
      </RouterLink>
  
  
  
      <div class="flex py-2 border-b top-line">
        <span class="text-base font-normal">Modification d'une écriture</span>
      </div> <div class=" flex justify-end">
      <el-switch
    v-model="value"
    size="large"

    class="ml-2"
    inline-prompt
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    active-text="Activer les imputations budgétaires"
    inactive-text="Désactiver les imputations budgétaires"
  />
  <el-switch
    v-model="value0"
    size="large"
    class="ml-2"
    inline-prompt
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    active-text="Activer la validation anlytique"
    inactive-text="Désactiver la validation anlytique"
  /></div>
      <div class="bg-white shadow-md rounded-lg mt-3 p-6">
  
  
  
  
        <el-tabs
    v-model="activeName"
    type="card"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="Affichage" name="first">
        <el-table :data="tableData" border show-summary style="width: 100%">
    <el-table-column prop="id" label="Compte" width="180" />
    <el-table-column prop="amount1" sortable label="Description" />
    <el-table-column prop="amount2" sortable label="Montant débit" />
    <el-table-column prop="amount3" sortable label="Montant crédit" />
    <el-table-column prop="amount3" sortable label="Anomalie" />
</el-table>


    </el-tab-pane>
    <el-tab-pane label="Ventilation" name="second">
        Ventilations par centre
Veuillez faire des opérations de charges ou produits afin de pouvoir effectuer des ventilations.
    </el-tab-pane>
   
  </el-tabs>
  
  
  
  
  
  
      </div>
  
  
  
  
  
  
    </div>
  </template>
      
  <script setup lang="ts">
  import { icons } from '@/assets/icons/oh-vue-icons'
  import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
const value = ref(true)
const value0 = ref(true)

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
<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>