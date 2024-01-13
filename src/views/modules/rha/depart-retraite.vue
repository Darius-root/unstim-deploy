<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue'

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger
} from 'radix-vue'

const headers = ref([
  { text: 'Actions', sortable: true, value: 'action' },
  { text: 'Matricule', sortable: true, value: 'matricule' },
  { text: 'Nom', sortable: true, value: 'nom' },
  { text: 'Prénom', sortable: true, value: 'prenom' },
  { text: 'Sexe', sortable: true, value: 'sexe' },
  { text: 'Catégorie', sortable: true, value: 'categorie' },
  { text: 'Date de naissance', sortable: true, value: 'date_naissance' }
])

const items = ref([
  {
    matricule: '#64035',
    nom: 'HOUNDJO M',
    prenom: 'Stephen',
    sexe: 'M',
    categorie: 'M1',
    date_naissance: '01/01/2000',
    action: ''
  },

  {
    matricule: '#64034',
    nom: 'BIAOU',
    prenom: 'Hamidou',
    sexe: 'M',
    categorie: 'M1',
    date_naissance: '01/01/2000',
    action: ''
  },

  {
    matricule: '#64032',
    nom: 'TOSSOU',
    prenom: 'Valentin',
    sexe: 'M',
    categorie: 'M1',
    date_naissance: '01/01/2000',
    action: ''
  },

  {
    matricule: '#64031',
    nom: 'CODJIA',
    prenom: 'Orens Eudie',
    sexe: 'F',
    categorie: 'M1',
    date_naissance: '01/01/2000',
    action: ''
  },

  {
    matricule: '#64131',
    nom: "D'ALMEIDA",
    prenom: 'Mensen Gilberte',
    sexe: 'F',
    categorie: 'M1',
    date_naissance: '01/01/2000',
    action: ''
  }
])
</script>

<template>
  <div class="mx-auto xl:container">
    <el-page-header title="Retour">
      <template #content>
        <div class="flex items-center">
          <span class="text-base font-medium"> Départ des retraite </span>
        </div>
      </template>

      <template #extra>
        <RouterLink to="{ name: item.to }"
          class="flex items-center gap-2 py-1.5 px-2 rounded shadow bg-yellow-500 w-fit hover:bg-opacity-60">
          <v-icon :name="icons.PersonPlus" class="" scale="1.0" />
          <span class="text-sm font-medium"> Par période </span>
        </RouterLink>
      </template>

    </el-page-header>

    <el-card class="box-card mt-5">
      <template #header>
        <div class="flex items-center justify-between">
          <span> Dans 08 mois </span>
          <RouterLink to="{ name: item.to }"
            class="flex items-center gap-2 py-1.5 px-2 rounded shadow bg-yellow-500 w-fit hover:bg-opacity-60">
            <v-icon :name="icons.PersonPlus" class="" scale="1.0" />
            <span class="text-sm font-medium"> Imprimer </span>
          </RouterLink>
        </div>
      </template>


      <el-table :data="items" :lazy="true" :border="true" style="width: 100%" table-layout="auto">

        <el-table-column type="selection" width="50" />
        <el-table-column prop="matricule" label="Matricule" />
        <el-table-column prop="nom" sortable label="Nom" />
        <el-table-column prop="prenom" sortable label="Prénom" />
        <el-table-column prop="sexe" label="Sexe" />
        <el-table-column prop="categorie" label="Catégorie" />
        <el-table-column prop="date_naissance" sortable label="Date de naissance" />

        <el-table-column label="Actions">
          <template #default>
            <div class="flex gap-2">
              <RouterLink :to="{ name: 'infos-employee' }"
                class="flex items-center gap-2 p-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
                <v-icon :name="icons.EditIcon" scale="1.0" />
              </RouterLink>

              <RouterLink to=""
                class="flex items-center gap-2 p-2 text-white bg-red-400 rounded shadow-md w-fit hover:bg-red-500">
                <v-icon :name="icons.DeleteIcon" scale="1.0" />
              </RouterLink>
            </div>
          </template>
        </el-table-column>

      </el-table>

    </el-card>

    <el-card class="box-card mt-5">
      <template #header>
        <div class="flex items-center justify-between">
          <span> Dans 08 mois </span>
          <RouterLink to="{ name: item.to }"
            class="flex items-center gap-2 py-1.5 px-2 rounded shadow bg-yellow-500 w-fit hover:bg-opacity-60">
            <v-icon :name="icons.PersonPlus" class="" scale="1.0" />
            <span class="text-sm font-medium"> Imprimer </span>
          </RouterLink>
        </div>
      </template>


      <el-table :data="items" :lazy="true" :border="true" style="width: 100%" table-layout="auto">

        <el-table-column type="selection" width="50" />
        <el-table-column prop="matricule" label="Matricule" />
        <el-table-column prop="nom" sortable label="Nom" />
        <el-table-column prop="prenom" sortable label="Prénom" />
        <el-table-column prop="sexe" label="Sexe" />
        <el-table-column prop="categorie" label="Catégorie" />
        <el-table-column prop="date_naissance" sortable label="Date de naissance" />

        <el-table-column label="Actions">
          <template #default>
            <div class="flex gap-2">
              <RouterLink :to="{ name: 'infos-employee' }"
                class="flex items-center gap-2 p-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
                <v-icon :name="icons.EditIcon" scale="1.0" />
              </RouterLink>

              <RouterLink to=""
                class="flex items-center gap-2 p-2 text-white bg-red-400 rounded shadow-md w-fit hover:bg-red-500">
                <v-icon :name="icons.DeleteIcon" scale="1.0" />
              </RouterLink>
            </div>
          </template>
        </el-table-column>

      </el-table>

    </el-card>


  </div>
</template>

<style>
@import url('@/assets/css/easy-table.css');
</style>
