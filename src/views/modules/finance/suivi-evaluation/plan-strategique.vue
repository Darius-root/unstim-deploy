
<script lang="ts" setup>
import { ref } from 'vue'
import { icons } from '@/assets/icons/oh-vue-icons'
import { useAxios } from '@vueuse/integrations/useAxios.mjs';
import { axiosSymfonyInstance } from '@/composables/axios';

import type { PlanStrategique } from '@/composables/helpers';


const planStrategiques = ref<PlanStrategique[]>([]);

// const planStrategiqueRequest = useAxios('api/strategic_plans', { method: 'GET' }, axiosSymfonyInstance, {

//   immediate: true,
//   shallow: false,

//   onSuccess: (data: PlanStrategique[]) => {
//     planStrategiques.value = data
//   }

// })

const searchValue = ref('')

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


const data = ref({
  title: 'Plans Strategiques',

  headers: [
    { text: 'id', sortable: true, value: 'MA' },
    { text: 'code', sortable: true, value: 'NO' },
    { text: 'Libelle', sortable: true, value: 'PR' },
    { text: 'Date début', sortable: true, value: 'SE' },
    { text: 'Date fin', sortable: true, value: 'TY' },
    { text: 'Statut', sortable: true, value: 'statut' },

    { text: 'Actions', sortable: true, value: 'action' }
  ],
  items: [
    {
      MA: '1',
      NO: '55-ddd',
      PR: 'johndeo',
      SE: '25/5/21',
      TY: '22/99/55',

      statut: 'Activer'
    },
    {
      MA: '2',
      NO: '55-ddd',
      PR: 'johndeo',
      SE: '25/5/219',
      TY: '24/8/26',

      statut: 'desactiver'
    }
  ],
  action: {
    edit: true,
    update: true,
    delete: true
  },
  buttons: [
    { title: 'Ajouter un plan stratégique ', color: '#2b9eff', to: 'plan-strategique-create' }
  ]
})
</script>


<template>
  <div class="mx-auto xl:container">

    <el-page-header title="Retour">

      <template #content>
        <div class="flex items-center">
          <span class="text-base font-medium"> Les plans stratégiques </span>
        </div>
      </template>

      <template #extra>
        <div class="flex gap-2">
          <RouterLink to="{ name: item.to }"
            class="flex items-center gap-2 py-1.5 px-2 text-white rounded shadow bg-unstim-primary w-fit hover:bg-opacity-60">
            <v-icon :name="icons.AddIcon" class="" scale="1.0" />
            <span class="text-sm font-medium"> Ajouter un plan stratégique </span>
          </RouterLink>
        </div>
      </template>

    </el-page-header>

    <el-card class="box-card my-5">

      <el-table :data="planStrategiques" size="small" :lazy="true" :border="true" style="width: 100%">

        <el-table-column width="50" prop="id" label="id" />
        <el-table-column prop="name" label="Libelle" />
        <el-table-column prop="start_date" label="Date début" />
        <el-table-column prop="end_date" label="Date fin" />
        <el-table-column prop="is_active" label="Date fin" />


        <el-table-column prop="prochain_grade" label="Statut">
          <el-tag size="small" type="success" effect="dark">Accepté</el-tag>
        </el-table-column>

        <el-table-column width="150" label="Action">
          <div class="flex gap-2 row justify-center items-center">
            <RouterLink to="plan-strategique-view"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-green-600 hover:opacity-50">
              <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
            </RouterLink>

            <RouterLink to="plan-strategique-edit"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-yellow-600 hover:opacity-50">
              <v-icon :name="icons.EditIcon" scale="1.0" />
            </RouterLink>

            <RouterLink to=""
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-600 hover:bg-red-400">
              <v-icon :name="icons.DeleteIcon" scale="1.0" />
            </RouterLink>
          </div>
        </el-table-column>

      </el-table>

    </el-card>

    <div class=" hidden justify-end my-3" v-if="data.buttons">
      <template v-for="(btn, item) in data.buttons" :key="item">
        <RouterLink :style="{ backgroundColor: btn.color }" :to="btn.to"
          class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60 mx-1">
          <v-icon :name="icons.AddIcon" scale="1.1" />

          <span class="text-sm font-medium"> {{ btn.title }}</span>
        </RouterLink>
      </template>
    </div>
    <div class="max-w-full hidden p-5 mt-3 border row">
      <div class="flex justify-end my-3 items-center space-x-2">
        <span class="text-base font-medium">Filtrer:</span>
        <input type="text" v-model="searchValue" class="border-gray-300 rounded-md px-3 py-2" />
      </div>
      <easy-data-table alternating border-cell :headers="data.headers" class="text-lg" theme-color="#2f9fff"
        :items="data.items" buttons-pagination searchable :search-value="searchValue">
        <template #item-statut="">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-600 text-white">
            Accepté
          </span>
        </template>
        <template #item-action="">
          <div class="flex gap-2 row justify-center items-center">
            <RouterLink to="plan-strategique-view" v-if="data.action.update"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-green-600 hover:opacity-50">
              <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
            </RouterLink>

            <RouterLink v-if="data.action.edit" to="plan-strategique-edit"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-yellow-600 hover:opacity-50">
              <v-icon :name="icons.EditIcon" scale="1.0" />
            </RouterLink>

            <RouterLink to="" v-if="data.action.delete"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-600 hover:bg-red-400">
              <v-icon :name="icons.DeleteIcon" scale="1.0" />
            </RouterLink>
          </div>
        </template>
      </easy-data-table>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
