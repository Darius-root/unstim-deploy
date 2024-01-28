<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue'


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


const columns = [
  { data: 'mois', title: 'Mois' },
  { data: 'statut', title: 'Statut' },
  { data: 'action', title: 'Actions' },
];

const options = {
  responsive: true,
  // select: true,
};


</script>

<template>
  <div class="mx-auto xl:container">


    <el-page-header title="Retour">
      <template #content>
        <div class="flex items-center">
          <span class="text-base font-medium"> Voir les salaires du mois de : </span>
        </div>
      </template>

    </el-page-header>

    <div class="my-5">

      <el-button-group size="large">
        <el-button type="primary"> Générer le salaire du mois </el-button>
      </el-button-group>

    </div>


    <el-card class="box-card my-5">
      <template #header>

      </template>

      <DataTable :columns="columns" :options="options" class="py-5 text-sm stripe hover cell-border">
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>
              <RouterLink to=""
                class="flex items-center gap-2 py-2 px-2.5 text-white rounded w-fit hover:bg-unstim-info bg-unstim-primary">
                <!-- <v-icon :name="icons.FormPWShowIcon" scale="0.9" /> -->
                <span> {{ item.mois }} </span>
              </RouterLink>
            </td>
            <td> {{ item.statut }}</td>

            <td>
              <div class="flex gap-3">
                <RouterLink to=""
                  class="flex items-center gap-2 p-2 my-2 text-white rounded  w-fit bg-unstim-info hover:bg-unstim-primary">
                  <v-icon :name="icons.FormPWShowIcon" scale="0.9" />
                  <span>Cloturer</span>
                </RouterLink>

                <RouterLink to=""
                  class="flex items-center gap-2 py-2 my-2.5 px-2.5 text-white bg-red-400 rounded  w-fit hover:bg-red-500">
                  <v-icon :name="icons.DeleteIcon" scale="0.9" />
                  <span class="">Supprimer le salaire</span>
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
