<template>
    <div class="mx-auto xl:container">
      <RouterLink @click.prevent="$router.back()" to=""
        class="flex items-center my-2 gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
        <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
        <span class="text-sm font-medium"> Retour </span>
      </RouterLink>
  
  
  
      <div class="flex py-2 border-b top-line">
        <span class="text-base font-normal">Ajouter un journal</span>
      </div>
  
      <div class="bg-white shadow-md rounded-lg mt-3 p-6">
  
  
  
  
        <el-form :status-icon="true" label-position="top" require-asterisk-position="right"
          class="demo-form-inline gap-4  grid grid-cols-3 -">
         
          <el-form-item label="Code" prop="pass">
            <el-input v-model="famille" type="text" autocomplete="on" />
          </el-form-item>
          <el-form-item label="Libellé" prop="pass">
            <el-input v-model="famille" type="text" autocomplete="on" />
          </el-form-item>
        
  
          <el-form-item label="Type">
            <el-select placeholder="Choisir un type " v-model="value">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item><el-form-item label="Monnaie">
            <el-select placeholder="Choisir une monnaie " v-model="value">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item><el-form-item label="Source">
            <el-select placeholder="Choisir une Source " v-model="value">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        
  
         
  
        </el-form>
  
  
  
        <div class="flex gap-3 mt-8">
          <el-button type="primary" size="large">
  
            <template #loading>
              <div class="custom-loading pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24">true
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
                    <path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3"
                      d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0" />
                    </path>
                    <path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />
                      <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate"
                        values="0 12 12;360 12 12" />
                    </path>
                  </g>
                </svg>
              </div>
            </template>
  
  
            <span class="text-white text-sm">Enrégistrer</span>
          </el-button>
  
  
        </div>
  
  
  
  
      </div>
  
  
  
  
  
  
    </div>
  </template>
      
  <script setup lang="ts">
  import { icons } from '@/assets/icons/oh-vue-icons'
  import { ref } from 'vue';
  
  const options = [
    {
      value: 'Option1',
      label: 'Option1',
    },
    {
      value: 'Option2',
      label: 'Option2',
    },
  
  ]
  const value = ref('')
  const famille = ref('')
  
  
  </script>
      
  <style scoped></style>
      