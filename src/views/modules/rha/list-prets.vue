<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { reactive, ref } from 'vue'


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
    demandeur: 'AHOYO ELVIS ROCK',
    type: 'C104',
    statut: 'C106',
    montant: "25 000",

    paye: '13 118',
    saisie: '17 053',
    enregistrement: '25',

  },

  {
    matricule: '6638200010',
    demandeur: 'OGBU ELISABETH OGOMA',
    type: '144',
    statut: 'Variable',
    montant: "25 000",
    paye: '8 031',
    saisie: '17 053',
    enregistrement: '25',

  },

  {
    matricule: '6638200010',
    demandeur: 'OGBU ELISABETH OGOMA',
    type: '144',
    statut: 'Variable',
    montant: "25 000",

    paye: '8 031',
    saisie: '17 053',
    enregistrement: '25',

  },

])

const columns = [
  { data: 'matricule', title: 'Matricule' },
  { data: 'demandeur', title: 'Nom du demandeur' },
  { data: 'type', title: 'Type de pret' },
  { data: 'statut', title: 'Statut' },
  { data: 'montant', title: 'Montant' },
  { data: 'paye', title: 'Restant' },
  { data: 'saisie', title: 'Date de la saisie' },
  { data: 'enregistrement', title: 'Enregistrée le' },
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
          <span class="text-base font-medium"> Prets </span>
        </div>
      </template>

    </el-page-header>

    <div class="my-5">

      <el-button-group size="large">
        <el-button type="primary"> Enrégistrer une nouvelle demande </el-button>
        <el-button type="success"> Point des avancés du type </el-button>
        <el-button type="warning"> Point/Mois </el-button>
        <el-button type="info"> Point/Année </el-button>
      </el-button-group>

    </div>


    <el-card class="box-card my-5">
      <template #header>

      </template>

      <DataTable :columns="columns" :options="options" class="py-5 text-sm stripe hover cell-border">
        <tbody>
          <tr v-for="item in items" :key="item.matricule">
            <td> {{ item.matricule }} </td>
            <td> {{ item.demandeur }}</td>
            <td> {{ item.type }}</td>
            <td> {{ item.statut }}</td>
            <td> {{ item.montant }}</td>

            <td>{{ item.paye }}</td>
            <td>{{ item.saisie }}</td>

            <td>{{ item.enregistrement }}</td>

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

        <el-table-column width="150" prop="matricule" label="Matricule" />
        <el-table-column width="250" prop="demandeur" label="Nom & Prenoms" />
        <el-table-column width="100" prop="type" label="Ancien grade" />
        <el-table-column width="150" prop="statut" label="Nouveau grade" />
        <el-table-column width="150" prop="paye" label="Solde indexé (FCFA)" />
        <el-table-column width="95" prop="saisie" label="saisie (FCFA)" />
        <el-table-column width="100" prop="enregistrement" label="Nbr de enregistrement" />
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
