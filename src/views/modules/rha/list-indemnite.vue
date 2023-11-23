<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue'

const headers = ref([
  { text: 'Action', value: 'action', width: 100 },
  { text: 'Compatibilite', sortable: true, value: 'comptabilite' },
  { text: 'Nom', sortable: true, value: 'nom' },
  { text: 'Rubrique', sortable: true, value: 'rubrique' },
  { text: 'Type', sortable: true, value: 'type' },
  { text: 'Statut', sortable: true, value: 'statut' },
  { text: 'Mois', sortable: true, value: 'mois' }
])

const items = ref([
  {
    comptabilite: '6638200010',
    nom: 'Moins Perçu INDTE ELECTRICITE',
    rubrique: '144',
    type: 'Variable',
    statut: 'Oui',
    mois: 'Tout les mois',
    action: ''
  },
  {
    comptabilite: '1234567890',
    nom: "Prime d'attachement",
    rubrique: '344',
    type: 'Variable',
    statut: 'Non',
    mois: 'Tout les mois',
    action: ''
  },

  {
    comptabilite: '1234567890',
    nom: 'Prime Trimestrielle de Rendement',
    rubrique: '344',
    type: 'Variable',
    statut: 'Non',
    mois: 'Tout les mois',
    action: ''
  },

  {
    comptabilite: '1234567890',
    nom: 'Allocations Familiales',
    rubrique: '344',
    type: 'Variable',
    statut: 'Non',
    mois: 'Tout les mois',
    action: ''
  },

  {
    comptabilite: '1234567890',
    nom: "Indemnité d'Electricité",
    rubrique: '344',
    type: 'Variable',
    statut: 'Non',
    mois: 'Tout les mois',
    action: ''
  },

  {
    comptabilite: '1234567890',
    nom: 'Indemnité de Caisse',
    rubrique: '344',
    type: 'Variable',
    statut: 'Non',
    mois: 'Tout les mois',
    action: ''
  },

  {
    comptabilite: '1234567890',
    nom: 'Indemnité de Résidence',
    rubrique: '344',
    type: 'Variable',
    statut: 'Non',
    mois: 'Tout les mois',
    action: ''
  },

  {
    comptabilite: '1234567890',
    nom: 'Indemnité de transport',
    rubrique: '344',
    type: 'Variable',
    statut: 'Non',
    mois: 'Tout les mois',
    action: ''
  },

  {
    comptabilite: '1234567890',
    nom: 'Moins Perçu INDTE EAU',
    rubrique: '344',
    type: 'Variable',
    statut: 'Non',
    mois: 'Tout les mois',
    action: ''
  }
])
</script>

<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-lg font-medium"> Liste des Indemnités de salaire </span>
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
        <span class="text-sm font-medium text-white"> Ajouter un gain </span>
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
            <div class="flex gap-2">
              <RouterLink
                :to="{ name: 'permissions-roles' }"
                class="flex items-center gap-2 p-2 my-2 text-white rounded shadow w-fit bg-unstim-info hover:bg-unstim-primary"
              >
                <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
              </RouterLink>

              <RouterLink
                :to="{ name: 'edit-role' }"
                class="flex items-center gap-2 p-2 my-2 text-white bg-red-400 rounded shadow w-fit hover:bg-red-500"
              >
                <v-icon :name="icons.EditIcon" scale="1.0" />
              </RouterLink>

              <RouterLink
                to=""
                class="flex items-center gap-2 p-2 my-2 text-white bg-black/75 rounded shadow w-fit hover:bg-black/75"
              >
                <v-icon :name="icons.DeleteIcon" scale="1.0" />
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
