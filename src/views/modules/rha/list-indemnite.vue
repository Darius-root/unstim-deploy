<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue'

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

const columns = [
  { data: 'comptabilite', title: 'Comptabilite' },
  { data: 'nom', title: 'Nom' },
  { data: 'rubrique', title: 'Rubrique' },
  { data: 'type', title: 'Type' },
  { data: 'statut', title: 'Non' },
  { data: 'mois', title: 'Tout les mois' },
  { data: 'actions', title: 'Actions' },
];

const options = {
  responsive: true,
  select: true,
};

</script>

<template>
  <div class="mx-auto xl:container">


    <el-page-header title="Retour">
      <template #content>
        <div class="flex items-center">
          <span class="text-base font-medium"> Liste des Indemnités de salaire </span>
        </div>
      </template>

      <template #extra>
        <div class="flex gap-2">

          <RouterLink to="{ name: item.to }"
            class="flex items-center gap-2 py-1.5 px-2 rounded shadow text-white bg-unstim-primary w-fit hover:bg-opacity-60">
            <v-icon :name="icons.AddIcon" class="" scale="1.0" />
            <span class="text-sm font-medium"> Ajouter un Gain </span>
          </RouterLink>

        </div>
      </template>

    </el-page-header>

    <el-card class="box-card my-5">
      <template #header>
        <div class="flex items-center justify-between">
          <!-- <span> Dans 08 mois </span>
          <RouterLink to="{ name: item.to }"
            class="flex items-center gap-2 py-1.5 px-2 rounded shadow bg-yellow-500 w-fit hover:bg-opacity-60">
            <v-icon :name="icons.PersonPlus" class="" scale="1.0" />
            <span class="text-sm font-medium"> Imprimer </span>
          </RouterLink> -->
        </div>
      </template>

      <DataTable :columns="columns" :options="options" class="py-5 text-sm stripe hover cell-border">
        <tbody>
          <tr v-for="item in items" :key="item.comptabilite">
            <td> {{ item.nom }} </td>
            <td> {{ item.rubrique }}</td>
            <td> {{ item.type }}</td>
            <td> {{ item.statut }}</td>
            <td> {{ item.statut }}</td>
            <td> {{ item.mois }}</td>

            <td>
              <div class="flex gap-1">

                <RouterLink :to="{ name: 'permissions-roles' }"
                  class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
                  <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
                </RouterLink>

                <RouterLink to=""
                  class="flex items-center gap-2 p-2 my-2 text-white bg-red-400 rounded shadow-md w-fit hover:bg-red-500">

                  <v-icon :name="icons.EditIcon" scale="1.0" />
                </RouterLink>

                <RouterLink to=""
                  class="flex items-center gap-2 p-2 my-2 text-white bg-black/75 rounded shadow-md w-fit hover:bg-black/75">
                  <v-icon :name="icons.DeleteIcon" scale="1.0" />
                </RouterLink>
              </div>
            </td>
          </tr>
        </tbody>
      </DataTable>


      <!-- <el-table :data="items" size="small" :lazy="true" :border="true" style="width: 100%">

        <el-table-column width="150" prop="comptabilite" label="Comptabilite" />
        <el-table-column width="250" prop="nom" label="Nom" />
        <el-table-column width="100" prop="rubrique" label="Rubrique" />
        <el-table-column width="150" prop="type" label="Type" />
        <el-table-column width="95" prop="statut" label="Statut" />
        <el-table-column width="250" prop="mois" label="Mois" />

        <el-table-column width="150" fixed="right" label="Actions">

          <template #default="">

            <div class="flex gap-2">

              <RouterLink :to="{ name: 'permissions-roles' }"
                class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
                <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
              </RouterLink>

              <RouterLink to=""
                class="flex items-center gap-2 p-2 my-2 text-white bg-red-400 rounded shadow-md w-fit hover:bg-red-500">

                <v-icon :name="icons.EditIcon" scale="1.0" />
              </RouterLink>

              <RouterLink to=""
                class="flex items-center gap-2 p-2 my-2 text-white bg-black/75 rounded shadow-md w-fit hover:bg-black/75">
                <v-icon :name="icons.DeleteIcon" scale="1.0" />
              </RouterLink>
            </div>
          </template>

        </el-table-column>

      </el-table> -->

    </el-card>

  </div>
</template>

<style></style>
