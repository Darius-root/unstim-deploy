<template>
  <RouterLink
    @click.prevent="$router.back()"
    to=""
    class="flex items-center mb- gap-2 p-2 mb-9 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
  >
    <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
    <span class="text-sm font-medium"> Retour </span>
  </RouterLink>
  <div class="mx-auto xl:container">
    <div class="flex py-2 top-line">
      <span class="text-lg font-medium"> Point des congés annuels</span>
    </div>

    <tabPointUser :datatable="dataTable" :title="'Agence \'A\' CNE Cotonou Cadjehoun'" />
    <tabPointUser :datatable="dataTable" :title="'Agence Caveau'" />
    <tabPointUser :datatable="dataTable" :title="'Agence Commerciale Abomey-Calavi'" />
    <tabPointUser :datatable="dataTable" :title="'Agence Commerciale Abomey-Dota'" />
  </div>
</template>

<script lang="ts" setup>
import tabPointUser from '@/components/tabs-rha/tab-point-user.vue'
import { icons } from '@/assets/icons/oh-vue-icons'

const dataPage = []
const dataTable = [
  {
    matricule: '152-55',
    name: 'Darius',
    departement: 'Akassato',
    date1: '15/22/23',
    date2: '25/32/23',
    totalGlobal: '52',
    anne1: {
      total: '25/25',
      joui: '25',
      reliquat: '22'
    },
    anne2: {
      total: '25/255/2',
      joui: '25',
      reliquat: '65'
    },
    anne3: {
      total: '8/55',
      joui: '65',
      reliquat: '22/55'
    }
  }
]
</script>

<style lang="scss" scoped></style>
