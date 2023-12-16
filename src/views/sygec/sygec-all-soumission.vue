<template>
    <div class="w-full  bg-white  mx-auto xl:container   text-black ">
  <div class="flex  justify-between font-bold text-base p-2">
    <div>Soumissions</div>
    <span class="my-notif-icon me-3"> <v-icon :name="icons.FaFileAlt" scale="1.4" /></span>
  </div>
</div>


    <div class=" items-center xl:container">



     
     
      <div class="bg-white shadow-md   rounded-lg mt-3 p-6  mx-10 items-center">
        <div class="text-center  pb-5">Toutes mes soumissions
            
        </div>
        
        <div class="text-center   border-b pb-5">
     <div class="flex flex-row justify-center items-center gap-5 "> 
        <p>Année: </p>
            <el-select v-model="select" placeholder="2023" class="   focus:border-none w-20  ">
               
            
                <el-option label="2022" value="2022" />
                <el-option label="2024" value="2024" />
              </el-select></div>  
        </div>
        <div class="flex justify-end my-3" v-if="data.buttons">
      <template v-for="(btn, item) in data.buttons" :key="item">
        <RouterLink
          :to="btn.to"
          class="flex items-center gap-2 backgroundSygec p-2 text-white rounded shadow hover:bg-opacity-60 mx-1"
        >
        <v-icon :name="icons.AddIcon" scale="1.1" />

          <span class="text-sm font-medium"> {{ btn.title }}</span>
        </RouterLink>
      </template>
    </div>
        <div class="max-w-full p-5 mt-3 border row">
      <div class="flex justify-end my-3 items-center space-x-2">
        <span class="text-base font-medium">Filtrer:</span>
        <input type="text" v-model="searchValue" class="border-gray-300 rounded-md px-3 py-2" />
      </div>
      <easy-data-table
        alternating
        border-cell
        :headers="data.headers"
        class="text-lg"
        theme-color="#2f9fff"
        :items="data.items"
        buttons-pagination
        searchable
        :search-value="searchValue"
      >
        <template #item-statut="">
          <span
            class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-600 text-white"
          >
            Valider
          </span>
        </template>
     
      </easy-data-table>



    </div>
    </div>

      </div>
    
      
  </template>
  
  <script setup lang="ts">
  import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue'
import 'element-plus/dist/index.css'

import { ElSelect, ElOption,  } from 'element-plus'
const select = ref('')

const searchValue = ref('')

  const data = ref({

  headers: [
    { text: 'N°', sortable: true, value: 'MA' },
    { text: 'Titre', sortable: true, value: 'TO' },

    { text: 'Date de soumission', sortable: true, value: 'NO' },

    { text: 'Statut', sortable: true, value: 'statut' },

  ],
  items: [
    
    {
      MA: '25-GJL',
      NO: '11/2/23',
      TO: 'LOREMLOREMLOREMLOREMLOREM',


     

      statut: 'desactiver'
    }
  ],
 
  buttons: [
    { title: 'Ajouter une nouvelle soumissions ', color: '', to: '' }
  ]
})
  </script>
  
  <style scoped></style>
  