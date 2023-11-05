<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue'

const headers = ref([
  { text: 'Nom & Prénom', sortable: true, value: 'employe' },
  { text: 'Catégorie', sortable: true, value: 'categorie' },
  { text: 'Echelon', sortable: true, value: 'echelon' },
  { text: "Nbre d'enfant", sortable: true, value: 'nbre_enfant' }
])

const items = ref([
  { categorie: 'M1', employe: 'HOUNDJO M Stephen' },

  { categorie: 'B1', employe: 'BIAOU Hamidou' },

  { categorie: 'E1', employe: 'TOSSOU Valentin' },

  { categorie: 'E1', employe: 'CODJIA Orens Eudie' },

  { categorie: 'B1', employe: "D'ALMEIDA Mensen Gilberte" }
])
</script>

<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium">
        Modifications de l'echelon et du nombre d'enfant des agents
      </span>
    </div>

    <div class="flex gap-3">
      <RouterLink
        @click.prevent="$router.back()"
        to=""
        class="flex items-center gap-2 p-2 mt-5 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
      >
        <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
        <span class="text-sm font-medium"> Retour </span>
      </RouterLink>
    </div>

    <div class="w-full mt-5 border border-gray-300 bg-unstim-light card">
      <div class="flex items-center gap-3 px-4 py-3 card-header">
        <span class=""> Notes / 20 </span>
      </div>

      <div class="card-content">
        <easy-data-table
          alternating
          border-cell
          :headers="headers"
          class="text-lg"
          theme-color="#2f9fff"
          :items="items"
          buttons-pagination
        >
          <template #item-echelon>
            <input type="number" class="w-full my-2 form-unstim" />
          </template>

          <template #item-nbre_enfant>
            <input type="number" class="w-full my-2 form-unstim" />
          </template>
        </easy-data-table>
      </div>
    </div>
  </div>
</template>

<style>
@import url('@/assets/css/easy-table.css');
</style>
