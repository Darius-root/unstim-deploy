<template>
  <div class="mx-auto xl:container">
  



    <div class="flex py-2 border-b top-line">
      <span class="text-base font-normal">Editez les états comptables</span>
    </div>

    <div class="bg-white shadow-md rounded-lg mt-3 p-6">




      <el-form :status-icon="true" label-position="top" require-asterisk-position="right"
        class="demo-form-inline gap-4  grid grid-cols-4">

        <el-form-item label="Document">
          <el-select placeholder="Activity zone" v-model="value">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="Mode d'édition">
          <el-select placeholder="Activity zone" v-model="value">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>

        <el-form-item label="Début période" v-model="value">
          <el-date-picker v-model="date" type="date" label="Pick a date" style="width: 100%" /> </el-form-item>


        <el-form-item label="Fin période" v-model="value">
          <el-date-picker v-model="date" type="date" label="Pick a date" style="width: 100%" /> </el-form-item>

        <el-form-item label="Monnaie">
          <el-select placeholder="Activity zone" v-model="value">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>


        <el-form-item label="Famille de compte" prop="pass">
          <el-input v-model="famille" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Du compte" prop="pass">
          <el-input v-model="famille" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Au compte" prop="pass">
          <el-input v-model="famille" type="text" autocomplete="off" />
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


          <span class="text-white text-sm">Afficher</span>
        </el-button>


      </div>



      <div class="flex py-2 my-10 border-b top-line">
        <span class="text-base font-semibold">Affichage du grand Livre du 1/01/2020 au 31/12/2020</span>
      </div>

      <el-table :data="tableData" :border="true" style="width: 100%">
        <el-table-column label="101 - CAPITAL SOCIAL">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="description" label="Description" width="180" />
          <el-table-column prop="code" label="Address" />
          <el-table-column prop="debit" label="Address" />
          <el-table-column prop="credit" label="Address" />
        </el-table-column>

      </el-table>

    </div>






  </div>
</template>
  
<script setup lang="ts">
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
const date = ref('')
const famille = ref('')



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
</script>
  
<style scoped></style>
  