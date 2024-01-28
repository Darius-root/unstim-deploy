<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons';
import { ArrowDown } from '@element-plus/icons-vue'
import { ref } from 'vue';



import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from 'radix-vue'

const items = ref([
  {
    matricule: '6638200010',
    employe: 'AHOYO ELVIS ROCK',
    ancien_grade: 'C104',
    nouveau_grade: 'C106',
    solde_indexe: '13 118',
    brut: '17 053',
    jours: '25',
    debut: '25 août 2023',
    fin: '25 août 2025',
  },

  {
    matricule: '6638200010',
    employe: 'OGBU ELISABETH OGOMA',
    ancien_grade: '144',
    nouveau_grade: 'Variable',
    solde_indexe: '8 031',
    brut: '17 053',
    jours: '25',
    debut: '25 août 2023',
    fin: '25 août 2025',
  },

  {
    matricule: '6638200010',
    employe: 'OGBU ELISABETH OGOMA',
    ancien_grade: '144',
    nouveau_grade: 'Variable',
    solde_indexe: '8 031',
    brut: '17 053',
    jours: '25',
    debut: '25 août 2023',
    fin: '25 août 2025',
  },
  {
    matricule: '6638200010',
    employe: 'OGBU ELISABETH OGOMA',
    ancien_grade: '144',
    nouveau_grade: 'Variable',
    solde_indexe: '8 031',
    brut: '17 053',
    jours: '25',
    debut: '25 août 2023',
    fin: '25 août 2025',
  },
  {
    matricule: '6638200010',
    employe: 'OGBU ELISABETH OGOMA',
    ancien_grade: '144',
    nouveau_grade: 'Variable',
    solde_indexe: '8 031',
    brut: '17 053',
    jours: '25',
    debut: '25 août 2023',
    fin: '25 août 2025',
  },
  {
    matricule: '6638200010',
    employe: 'OGBU ELISABETH OGOMA',
    ancien_grade: '144',
    nouveau_grade: 'Variable',
    solde_indexe: '8 031',
    brut: '17 053',
    jours: '25',
    debut: '25 août 2023',
    fin: '25 août 2025',
  },
  {
    matricule: '6638200010',
    employe: 'OGBU ELISABETH OGOMA',
    ancien_grade: '144',
    nouveau_grade: 'Variable',
    solde_indexe: '8 031',
    brut: '17 053',
    jours: '25',
    debut: '25 août 2023',
    fin: '25 août 2025',
  },
  {
    matricule: '6638200010',
    employe: 'OGBU ELISABETH OGOMA',
    ancien_grade: '144',
    nouveau_grade: 'Variable',
    solde_indexe: '8 031',
    brut: '17 053',
    jours: '25',
    debut: '25 août 2023',
    fin: '25 août 2025',
  },

])

const columns = [
  { data: 'matricule', title: 'Dénominations' },
  { data: 'employe', title: 'Entité' },
  { data: 'ancien_grade', title: 'Partie prenante' },
  { data: 'nouveau_grade', title: 'Signature' },
  { data: 'brut', title: 'Prise d\'effet' },
  { data: 'jours', title: 'Date de fin' },

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
          <span class="text-base font-medium"> Bilan des accords de coopération </span>
        </div>
      </template>
      <template #extra>

        <div class="flex items-center gap-2">
          <span class="text-sm font-medium text-unstim-primary uppercase"> Date de signature </span>
          <el-dropdown>
            <span class="el-dropdown-link text-sm font-medium text-unstim-primary">
              2023
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>2017</el-dropdown-item>
                <el-dropdown-item>2018</el-dropdown-item>
                <el-dropdown-item>2019</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>

      </template>

    </el-page-header>

    <el-card class="box-card my-5">
      <template #header>
        <div class="flex border border-unstim-primary px-3 rounded-md items-center justify-between">
          <el-form require-asterisk-position="right"
            class="demo-form-inline flex justify-between w-full items-center pt-2 gap-2">

            <div class="flex  gap-2">

              <el-form-item label="Statut" required>

                <div class="max-w-full w-full">
                  <el-input placeholder="" size="large" />
                </div>

              </el-form-item>

              <div class="w-0.5 mb-2 bg-slate-300"></div>

              <el-form-item label="Entité" required>

                <div class="max-w-full w-full">
                  <el-input placeholder="" size="large" />
                </div>

              </el-form-item>

            </div>

            <el-form-item>

              <div class="max-w-full w-full">
                <el-button type="primary" size="large"> Filtrer </el-button>
              </div>

            </el-form-item>

          </el-form>
        </div>

      </template>

      <div class="flex justify-end py-3">
        <!-- <el-button type="primary" size="large"> Initier un accord </el-button> -->

        <RouterLink :to="{ name: 'initier-accord' }"
          class="flex items-center gap-2 p-2 text-white rounded shadow-sm w-fit bg-unstim-primary hover:bg-unstim-primary">
          <v-icon :name="icons.EditIcon" scale="1.0" />
          <span> Initier un accord </span>
        </RouterLink>

      </div>


      <DataTable :columns="columns" :options="options" class="py-5 text-sm stripe hover cell-border">
        <tbody>
          <tr v-for="item in items" :key="item.matricule">
            <td>{{ item.matricule }} </td>
            <td>{{ item.employe }}</td>
            <td>{{ item.ancien_grade }}</td>
            <td>{{ item.nouveau_grade }}</td>
            <td>{{ item.brut }}</td>
            <td>{{ item.jours }}</td>

          </tr>
        </tbody>
      </DataTable>


      <!-- <el-table :data="items" size="small" :lazy="true" :border="true" style="width: 100%">

        <el-table-column width="150" prop="matricule" label="Matricule" />
        <el-table-column width="250" prop="employe" label="Nom & Prenoms" />
        <el-table-column width="100" prop="ancien_grade" label="Ancien grade" />
        <el-table-column width="150" prop="nouveau_grade" label="Nouveau grade" />
        <el-table-column width="150" prop="solde_indexe" label="Solde indexé (FCFA)" />
        <el-table-column width="95" prop="brut" label="Brut (FCFA)" />
        <el-table-column width="100" prop="jours" label="Nbr de jours" />
        <el-table-column width="150" prop="debut" label="Début" />
        <el-table-column width="150" prop="fin" label="Fin" />

        <el-table-column width="200" fixed="right" label="Actions">

          <template #default="">

            <div class="flex gap-2">

              <RouterLink :to="{ name: 'permissions-roles' }"
                class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
                <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
              </RouterLink>


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