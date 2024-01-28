<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'

const coopStats = reactive([
  {
    entite: "INSTI",
    accords_signe: 33,
    accords_actif: 21,
    accords_inactif: 49,
    mob_enseignante: 25,
    mob_etudiante: 31,
  },
  {
    entite: "INSTI",
    accords_signe: 30,
    accords_actif: 20,
    accords_inactif: 27,
    mob_enseignante: 16,
    mob_etudiante: 47,
  },
  {
    entite: "INSTI",
    accords_signe: 40,
    accords_actif: 46,
    accords_inactif: 31,
    mob_enseignante: 39,
    mob_etudiante: 28,
  },
  {
    entite: "INSTI",
    accords_signe: 34,
    accords_actif: 49,
    accords_inactif: 42,
    mob_enseignante: 34,
    mob_etudiante: 30,
  },
  {
    entite: "INSTI",
    accords_signe: 39,
    accords_actif: 42,
    accords_inactif: 44,
    mob_enseignante: 41,
    mob_etudiante: 36,
  },
  {
    entite: "INSTI",
    accords_signe: 20,
    accords_actif: 32,
    accords_inactif: 34,
    mob_enseignante: 43,
    mob_etudiante: 19,
  },
  {
    entite: "INSTI",
    accords_signe: 40,
    accords_actif: 43,
    accords_inactif: 24,
    mob_enseignante: 24,
    mob_etudiante: 27,
  },
  {
    entite: "INSTI",
    accords_signe: 50,
    accords_actif: 30,
    accords_inactif: 44,
    mob_enseignante: 41,
    mob_etudiante: 24,
  },
  {
    entite: "INSTI",
    accords_signe: 28,
    accords_actif: 50,
    accords_inactif: 27,
    mob_enseignante: 18,
    mob_etudiante: 43,
  },
  {
    entite: "INSTI",
    accords_signe: 38,
    accords_actif: 50,
    accords_inactif: 42,
    mob_enseignante: 19,
    mob_etudiante: 23,
  },
  {
    entite: "INSTI",
    accords_signe: 34,
    accords_actif: 25,
    accords_inactif: 19,
    mob_enseignante: 42,
    mob_etudiante: 21,
  }
])

import { Bar } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)


const chartData = ref({
  labels: ['20 - 29 ans', '30 - 39 ans', '40 - 49 ans', '40 - 59 ans', '40 - 59 ans', '40 - 59 ans', '40 - 59 ans', '40 - 59 ans', '40 - 59 ans', '40 - 59 ans', '40 - 59 ans'],
  datasets: [
    {
      data: [23, 50, 68, 57, 12, 39, 57, 3, 26, 57, 49],
      backgroundColor: ['#0175fe', '#0175fe', '#0175fe']
    }
  ]
})

const chartOption = ref({
  responsive: true,
  borderRadius: 8,
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true
    }
  }
})
</script>

<template>
  <div class="mx-auto xl:container">

    <el-page-header title="Retour">
      <template #content>
        <div class="flex items-center">
          <span class="text-base font-medium"> Bilan des accords </span>
        </div>
      </template>
      <template #extra>

        <!-- <div class="flex gap-3 items-center">
          <el-date-picker v-model="startDate" type="daterange" start-placeholder="Date de debut"
            end-placeholder="Date de fin" />
        </div> -->

        <div class="flex items-center gap-2">
          <span class="text-sm font-medium text-unstim-primary uppercase"> Date de signature </span>
          <el-dropdown>
            <span class="el-dropdown-link text-sm font-medium text-unstim-primary">
              2023
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>2017</el-dropdown-item>
                <el-dropdown-item>2018</el-dropdown-item>
                <el-dropdown-item>2019</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>

      </template>

    </el-page-header>


    <div class="stats-content flex gap-3 w-full justify-evenly py-6 items-center flex-wrap">
      <div v-for="(item, index) in coopStats"
        class="px-4 py-3 border space-y-2 bg-white shadow-md rounded-md flex-col flex justify-center items-center w-auto h-auto"
        :key="index">
        <span class="text-center uppercase font-semibold text-sm text-unstim-primary px-2">{{ item.entite }}</span>

        <hr class="bg-slate-600 w-full" />

        <div class="flex gap-5">

          <div class="flex justify-center space-y-2 items-center flex-col">
            <span class="text-sm">Accords Signés</span>
            <span class="text-lg font-semibold">{{ item.accords_signe }}</span>
          </div>

          <div class="w-0.5 bg-gray-400"></div>

          <div class="flex justify-center space-y-2 items-center flex-col">
            <span class="text-sm">Accords Actifs</span>
            <span class="text-lg font-semibold">{{ item.accords_actif }}</span>
          </div>

          <div class="w-0.5 bg-gray-400"></div>

          <div class="flex justify-center space-y-2 items-center flex-col">
            <span class="text-sm">Accords Inactifs</span>
            <span class="text-lg font-semibold">{{ item.accords_inactif }}</span>
          </div>


        </div>

        <hr class="bg-slate-600 w-full" />

        <div class="flex w-full justify-between gap-2">

          <div class="flex space-y-2 justify-center items-center flex-col">
            <span class="text-sm"> Mobilité Enseignante </span>
            <span class="text-lg font-semibold">{{ item.mob_enseignante }}</span>
          </div>


          <div class="w-0.5 bg-gray-400"></div>


          <div class="flex justify-center space-y-2 items-center flex-col">
            <span class="text-sm"> Mobilité Etudiante </span>
            <span class="text-lg font-semibold">{{ item.mob_etudiante }}</span>
          </div>


        </div>



      </div>
    </div>

    <hr />

    <el-card class="chart-content my-4 grid grid-cols-1  bg-white gap-3">

      <div class="px-2 py-2 border h-fit shadow-sm">

        <div class="text-center text-sm">Statistique d'agent par tranche d'âge</div>

        <div class="content w-full">
          <Bar id="my-chart-id" class="w-full" :options="chartOption" :data="chartData" />
        </div>

      </div>

    </el-card>

  </div>
</template>

<style></style>
