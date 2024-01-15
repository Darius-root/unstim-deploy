<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons';
import { ref } from 'vue';

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
    matricule: '#64035',
    nom: 'HOUNDJO M',
    prenom: 'Stephen',
    sexe: 'M',
    categorie: 'M1',
    date_naissance: '01/01/2000',
    action: ''
  },
  {
    matricule: '#64035',
    nom: 'HOUNDJO M',
    prenom: 'Stephen',
    sexe: 'M',
    categorie: 'M1',
    date_naissance: '01/01/2000',
    action: ''
  },
  // Repeat the object 17 more times
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
  <el-card class="space-y-4 my-5">

    <div class="mb-5 flex justify-end">
      <RouterLink :to="{ name: 'modifier-informations' }"
        class="flex items-center  gap-2 p-2 text-sm font-medium text-white  bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
        Ajouter un conjoint
      </RouterLink>

    </div>



    <el-table :data="items" size="small" :lazy="true" :border="true" style="width: 100%" table-layout="auto">

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
</template>

<style></style>
