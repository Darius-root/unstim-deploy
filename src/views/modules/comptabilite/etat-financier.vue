<template>
    <div class="mx-auto xl:container">
        <RouterLink @click.prevent="$router.back()" to=""
            class="flex items-center my-2 gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
            <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
            <span class="text-sm font-medium"> Retour </span>
        </RouterLink>



        <div class="flex py-2 border-b top-line">
            <span class="text-base font-normal">Editez les états comptables</span>
        </div>

        <div class="bg-white shadow-md rounded-lg mt-3 p-6">




            <el-form :status-icon="true" label-position="top" require-asterisk-position="right"
                class="demo-form-inline gap-4  grid grid-cols-2">

                <el-form-item label="Document">
                    <el-select placeholder="Activity zone" v-model="value">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>  
                
        <el-form-item label="Dae d'édition" v-model="value">
                    <el-date-picker
          v-model="date"
          type="date"
          label="Pick a date"
          style="width: 100%"
        />                </el-form-item>
        <el-form-item label="Dae d'édition" >

        <el-checkbox v-model="checked" label="Compte de resultat" size="large" />
        <el-checkbox v-model="checked" label="Bilan" size="large" />
    <el-checkbox v-model="checked" label="Travaux des flux de trésorerie" size="large" />
    </el-form-item>



            </el-form>



            <div class="flex gap-3 mt-8">
          <el-button type="primary" size="large" >

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
            <span class="text-base font-semibold">COMPTE DE RESULTAT du 31/12/2020</span>
        </div>

        <el-table :data="tableData"  stripe style="width: 100%">
            <el-table-column label="xxxx">
    <el-table-column prop="ref" label="REf" width="180" />
    <el-table-column prop="int" label="Intitulés" width="180" />
    <el-table-column prop="xxx" label="" />
    <el-table-column prop="note" label="Note" />

    <el-table-column prop="net1" label="( xx/xx/20xx )
Net" />
    <el-table-column prop="net2" label="( xx/xx/20xx )
Net" />
</el-table-column>

  </el-table>

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
const date = ref('')
const checked = ref('')



const tableData = [

  {
    ref: '2016-05-03',
    int: 'Tom',
    xxx: 'Tom',

    code: 'xxxx',
    note: 'xxxxxx',
    net1: 'xxxx',
    net2: 'xxxx',
  },

]
</script>
  
<style scoped></style>
  