<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import type { TableColumnCtx } from 'element-plus'

import { ref } from 'vue'

const headers = ref([
  { text: 'Actions', sortable: true, value: 'action' },
  { text: 'Numéro', sortable: true, value: 'numero' },
  { text: 'Matricule', sortable: true, value: 'matricule' },
  { text: 'Employe', sortable: true, value: 'employe' },
  { text: 'Cumul', sortable: true, value: 'cumul' },
  { text: 'Trimestre', sortable: true, value: 'trimestre' }
])


interface Employe {
  categorie: string,
  matricule: string,
  nom: string,
  prenom: string,
  grade_actuel: string,
  prochain_grade: string,
  dernier_avancement: string,
  prochain_avancement: string,
  augmentation: string,
}


interface SpanMethodProps {
  row: Employe
  column: TableColumnCtx<Employe>
  rowIndex: number
  columnIndex: number
}


const items = ref([
  {
    categorie: "M1",
    matricule: '#64035',
    nom: 'HOUNDJO',
    prenom: 'Stephen',
    grade_actuel: 'M1/13',
    prochain_grade: 'M1/14',
    dernier_avancement: '25 août 2023',
    prochain_avancement: '25 août 2025',
    augmentation: '62 804',
  },

  {
    categorie: "M1",
    matricule: '#64035',
    nom: 'GANDIGBE',
    prenom: 'Ahowanou Evrajody Gildas',
    grade_actuel: 'M1/13',
    prochain_grade: 'M1/14',
    dernier_avancement: '25 août 2023',
    prochain_avancement: '25 août 2025',
    augmentation: '62 804',
  },

  {
    categorie: "M1",
    matricule: '#64035',
    nom: 'CAKPO',
    prenom: 'Julianne',
    grade_actuel: 'M1/13',
    prochain_grade: 'M1/14',
    dernier_avancement: '25 août 2023',
    prochain_avancement: '25 août 2025',
    augmentation: '62 804',
  },


  {
    categorie: "M3",
    matricule: '#64035',
    nom: 'AVOCE',
    prenom: 'Megan Johanita',
    grade_actuel: 'M1/13',
    prochain_grade: 'M1/14',
    dernier_avancement: '25 août 2023',
    prochain_avancement: '25 décembre 2025',
    augmentation: '62 804',
  },

  {
    categorie: "M3",
    matricule: '#64035',
    nom: 'AVOCE',
    prenom: 'Megan Johanita',
    grade_actuel: 'M1/13',
    prochain_grade: 'M1/14',
    dernier_avancement: '25 août 2023',
    prochain_avancement: '25 décembre 2025',
    augmentation: '62 804',
  },


  {
    categorie: "M3",
    matricule: '#64035',
    nom: 'AVOCE',
    prenom: 'Megan Johanita',
    grade_actuel: 'M1/13',
    prochain_grade: 'M1/14',
    dernier_avancement: '25 août 2023',
    prochain_avancement: '25 décembre 2025',
    augmentation: '62 804',
  },

  {
    categorie: "M4",
    matricule: '#64035',
    nom: 'AVOCE',
    prenom: 'Megan Johanita',
    grade_actuel: 'M1/13',
    prochain_grade: 'M1/14',
    dernier_avancement: '25 août 2023',
    prochain_avancement: '25 décembre 2025',
    augmentation: '62 804',
  },
  {
    categorie: "M4",
    matricule: '#64035',
    nom: 'AVOCE',
    prenom: 'Megan Johanita',
    grade_actuel: 'M1/13',
    prochain_grade: 'M1/14',
    dernier_avancement: '25 août 2023',
    prochain_avancement: '25 décembre 2025',
    augmentation: '62 804',
  },





])

const arraySpanMethod = ({
  row,
  rowIndex,
  columnIndex,
}: SpanMethodProps) => {
  if (columnIndex === 0) {
    let numberOfEmployeesInCategory = items.value.filter(employee => employee.categorie === row.categorie).length;
    if (rowIndex % numberOfEmployeesInCategory === 0) {
      return {
        rowspan: numberOfEmployeesInCategory,
        colspan: 1
      }
    } else {
      return {
        rowspan: 0,
        colspan: 0
      }
    }
  }
}


</script>

<template>
  <div class="mx-auto xl:container">

    <el-page-header title="Retour">
      <template #content>
        <div class="flex items-center">
          <span class="text-base font-medium"> Avancements 2025 </span>
        </div>
      </template>

      <template #extra>
        <div class="flex gap-2">
          <RouterLink to="{ name: item.to }"
            class="flex items-center gap-2 py-1.5 px-2 rounded shadow bg-yellow-500 w-fit hover:bg-opacity-60">
            <v-icon :name="icons.PersonPlus" class="" scale="1.0" />
            <span class="text-sm font-medium"> Par période </span>
          </RouterLink>

          <RouterLink to="{ name: item.to }"
            class="flex items-center gap-2 py-1.5 px-2 rounded shadow bg-unstim-primary w-fit hover:bg-opacity-60">
            <v-icon :name="icons.PersonPlus" class="" scale="1.0" />
            <span class="text-sm font-medium"> Par mois </span>
          </RouterLink>
        </div>
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


      <el-table :span-method="arraySpanMethod" :data="items" size="small" :lazy="true" :border="true" style="width: 100%">

        <!-- <el-table-column type="selection" width="50" /> -->

        <el-table-column width="80" prop="categorie" label="Catégorie" />
        <el-table-column width="100" prop="matricule" label="Matricule" />
        <el-table-column width="150" prop="nom" label="Nom" />
        <el-table-column width="300" prop="prenom" label="Prénoms" />
        <el-table-column width="150" prop="grade_actuel" label="Grade Actuel" />
        <el-table-column width="150" prop="prochain_grade" label="Prochain grade" />
        <el-table-column width="250" prop="dernier_avancement" label="Dernier Avancements" />
        <el-table-column width="250" prop="prochain_avancement" label="Prochain Avancements" />
        <el-table-column width="250" prop="augmentation" label="Augmentation (FCFA)" />

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


      <el-table :span-method="arraySpanMethod" :data="items" size="small" :lazy="true" :border="true" style="width: 100%">

        <!-- <el-table-column type="selection" width="50" /> -->

        <el-table-column width="80" prop="categorie" label="Catégorie" />
        <el-table-column width="100" prop="matricule" label="Matricule" />
        <el-table-column width="150" prop="nom" label="Nom" />
        <el-table-column width="300" prop="prenom" label="Prénoms" />
        <el-table-column width="150" prop="grade_actuel" label="Grade Actuel" />
        <el-table-column width="150" prop="prochain_grade" label="Prochain grade" />
        <el-table-column width="250" prop="dernier_avancement" label="Dernier Avancements" />
        <el-table-column width="250" prop="prochain_avancement" label="Prochain Avancements" />
        <el-table-column width="250" prop="augmentation" label="Augmentation (FCFA)" />

      </el-table>

    </el-card>

  </div>
</template>

