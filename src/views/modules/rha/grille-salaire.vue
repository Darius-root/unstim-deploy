<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue'

const headers = ref([
  { text: 'Mois', sortable: true, value: 'mois' },
  { text: 'Statut', sortable: true, value: 'statut' },
  { text: 'Actions', sortable: true, value: 'action', width: 350 }
])

const items = ref([
  {
    mois: 'Septembre 2023',
    statut: 'Salaire cloturé',
    action: ''
  },

  {
    mois: 'Octobre 2023',
    statut: 'Salaire non cloturé',
    action: ''
  },

  {
    mois: 'Juin 2023',
    statut: 'Salaire non cloturé',
    action: ''
  },

  {
    mois: 'Mai 2023',
    statut: 'Salaire cloturé',
    action: ''
  },

  {
    mois: 'Avril 2023',
    statut: 'Salaire non cloturé',
    action: ''
  },

  {
    mois: 'Décembre 2022',
    statut: 'Salaire cloturé',
    action: ''
  }
])
</script>

<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-lg font-medium"> Voir les salaires du mois de : </span>
    </div>

    <div class="flex justify-between">
      <RouterLink
        @click.prevent="$router.back()"
        to=""
        class="flex items-center gap-2 p-2 mt-5 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
      >
        <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
        <span class="text-sm font-medium"> Retour </span>
      </RouterLink>

      <RouterLink
        :to="{ name: 'create-role' }"
        class="flex items-center gap-2 p-2 mt-5 bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60"
      >
        <v-icon :name="icons.PersonPlus" class="text-white" scale="1.1" />
        <span class="text-sm font-medium text-white"> Générer le salaire du mois </span>
      </RouterLink>
    </div>

    <div class="w-full mt-5 border border-gray-300 bg-unstim-light card">
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
          <template #item-action="">
            <div class="flex gap-3">
              <RouterLink
                :to="{ name: 'permissions-roles' }"
                class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary"
              >
                <v-icon :name="icons.FormPWShowIcon" scale="0.9" />
                <span>Cloturer</span>
              </RouterLink>

              <RouterLink
                :to="{ name: 'edit-role' }"
                class="flex items-center gap-2 py-0 my-2.5 px-2.5 text-white bg-red-400 rounded shadow-md w-fit hover:bg-red-500"
              >
                <v-icon :name="icons.DeleteIcon" scale="0.9" />
                <span class="">Supprimer le salaire</span>
              </RouterLink>
            </div>
          </template>

          <template #item-mois="item">
            <div class="flex gap-3">
              <RouterLink
                :to="{ name: 'permissions-roles' }"
                class="flex items-center gap-2 py-1.5 px-2.5 text-white rounded w-fit hover:bg-unstim-info bg-unstim-primary"
              >
                <!-- <v-icon :name="icons.FormPWShowIcon" scale="0.9" /> -->
                <span> {{ item.mois }} </span>
              </RouterLink>
            </div>
          </template>
        </easy-data-table>
      </div>
    </div>
  </div>
</template>

<style>
@import url('@/assets/css/easy-table.css');
</style>
