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
  { text: 'Numéro', sortable: true, value: 'numero' },
  { text: 'Matricule', sortable: true, value: 'matricule' },
  { text: 'Employe', sortable: true, value: 'employe' },
  { text: 'Cumul', sortable: true, value: 'cumul' },
  { text: 'Trimestre', sortable: true, value: 'trimestre' }
])

const items = ref([
  {
    matricule: '#64035',
    employe: 'HOUNDJO M Stephen',
    sexe: 'M',
    cumul: '2.5',
    trimestre: '2',
    numero: '012000',
    action: ''
  },

  {
    matricule: '#64034',
    employe: 'BIAOU Hamidou',
    sexe: 'M',
    cumul: '2.5',
    trimestre: '2',
    numero: '012000',
    action: ''
  },

  {
    matricule: '#64032',
    employe: 'TOSSOU Valentin',
    sexe: 'M',
    cumul: '2.5',
    trimestre: '2',
    numero: '012000',
    action: ''
  },

  {
    matricule: '#64031',
    employe: 'CODJIA Orens Eudie',
    sexe: 'F',
    cumul: '2.5',
    trimestre: '2',
    numero: '012000',
    action: ''
  },

  {
    matricule: '#64131',
    employe: "D'ALMEIDA Mensen Gilberte",
    sexe: 'F',
    cumul: '2.5',
    trimestre: '2',
    numero: '012000',
    action: ''
  }
])
</script>

<template>
  <div class="mx-auto xl:container">

    <el-page-header title="Retour" @click="$router.go(-1)">
      <template #content>
        <div class="flex items-center">
          <span class="text-base font-medium"> Situation des enfants </span>
        </div>
      </template>

      <template #extra>
        <el-dropdown>
          <el-button type="primary">
            Liste par direction
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
              <el-dropdown-item>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>

    </el-page-header>

    <el-card class="box-card my-5">

      <el-table :data="items" size="small" :lazy="true" :border="true">

        <!-- <el-table-column type="selection" width="50" /> -->

        <el-table-column width="50" type="index" :index="(index: number) => index + 1" label="N" />
        <el-table-column width="130" prop="matricule" label="Matricule" />
        <el-table-column width="400" prop="employe" label="Employe" />
        <el-table-column width="80" prop="cumul" label="Cumul" />
        <el-table-column width="100" prop="trimestre" label="Trimestre" />

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
