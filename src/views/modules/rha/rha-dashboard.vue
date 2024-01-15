<script lang="ts" setup>
import { ref } from 'vue'
import { useRhaStatStore } from '@/stores/rha-stats'

const startDate = ref('')

const rhaStats = useRhaStatStore().rhaStats

import { Bar, Doughnut } from 'vue-chartjs'
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

const compositionPersonnel = ref({
  labels: ['Femmes', 'Hommes'],
  datasets: [
    {
      data: [50, 92],
      backgroundColor: ['#0076fe', '#15c199'],

      hoverOffset: 10,
      borderWidth: 0
    }
  ]
})

const repartitionPersonnel = ref({
  labels: ['Agent de maitrise', "Agent d'exécution", 'Cadre'],
  datasets: [
    {
      data: [53, 57, 32],
      backgroundColor: ['#0076fe', '#15c199', '#cafe00'],

      hoverOffset: 10,
      borderWidth: 0
    }
  ]
})

const chartData = ref({
  labels: ['20 - 29 ans', '30 - 39 ans', '40 - 49 ans', '40 - 59 ans'],
  datasets: [
    {
      data: [23, 61, 68, 57],

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

    <el-page-header title="Retour" @click="$router.go(-1)">
      <template #content>
        <div class="flex items-center">
          <span class="text-base font-medium"> Statistiques catégorisées du personnel </span>
        </div>
      </template>
      <template #extra>
        <div class="flex gap-3 items-center">
          <el-date-picker v-model="startDate" type="daterange" start-placeholder="Date de debut"
            end-placeholder="Date de fin" />
        </div>
      </template>
    </el-page-header>


    <div class="stats-content mx-auto flex gap-3 justify-center py-6 items-center flex-wrap">
      <div v-for="(item, index) in rhaStats"
        class="p-3 border space-y-2  bg-white shadow-md flex-col flex justify-center items-center w-auto h-auto"
        :key="index">
        <span :style="{ color: item.couleur }" class="text-center px-2">{{ item.label }}</span>

        <hr class="bg-slate-500 w-full" />

        <div class="text-center">
          {{ item.valeur }}
        </div>
      </div>
    </div>


    <hr />



    <div class="chart-content my-4 grid grid-cols-1 lg:grid-cols-3 bg-white gap-3">
      <div class="px-2 py-2 border h-fit shadow-sm">
        <div class="text-center text-sm">Composition des employés</div>

        <div class="content w-full h-80 mx-auto">
          <Doughnut class="mx-auto" :data="compositionPersonnel" />
        </div>
      </div>

      <div class="px-2 py-2 border h-fit shadow-sm">
        <div class="text-center text-sm">Statistique d'agent par tranche d'âge</div>

        <div class="content w-full h-80 mx-auto">
          <Bar id="my-chart-id" class="mx-auto" :options="chartOption" :data="chartData" />
        </div>
      </div>

      <div class="px-2 py-2 border shadow-sm">
        <div class="text-center text-sm">Répartition du personnel par catégorie</div>

        <div class="content w-full h-80 mx-auto">
          <Doughnut class="mx-auto" :data="repartitionPersonnel" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
