<script lang="ts" setup>
import { ref } from 'vue'
import 'flatpickr/dist/flatpickr.css'
import flatPickr from 'vue-flatpickr-component'
import { French } from 'flatpickr/dist/l10n/fr.js'
import type { BaseOptions } from 'flatpickr/dist/types/options'
import { useRhaStatStore } from '@/stores/rha-stats'

const startDate = ref(null)

const endDate = ref(null)

const searchConfig = ref<Partial<BaseOptions>>({
  wrap: true,
  dateFormat: 'j/m/Y',
  locale: French
})

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
    <div class="top-line border-b py-2 flex flex-col lg:items-center lg:justify-between lg:flex-row">
      <span class="text-base"> Statistiques catégorisées du personnel </span>

      <div class="flex flex-col justify-around lg:items-center lg:flex-row lg:gap-3">
        <div class="flex flex-col gap-3 lg:items-center lg:flex-row input-group">
          <label for="" class="text-sm">Du </label>
          <flat-pickr v-model="startDate" :placeholder="`jj/mm/aaaa`"
            class="px-6 border-gray-300 text-sm rounded-full shadow-input w-56" :config="searchConfig" />
        </div>

        <div class="flex flex-col gap-3 lg:items-center lg:flex-row input-group">
          <label for="" class="text-sm"> Au </label>
          <flat-pickr v-model="endDate" :placeholder="`jj/mm/aaaa`"
            class="px-6 border-gray-300 text-sm rounded-full shadow-input w-56" :config="searchConfig" />
        </div>
      </div>
    </div>

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
