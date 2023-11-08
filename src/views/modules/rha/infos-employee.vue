<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import { reactive, ref } from 'vue';

import InfosAgent from '@/components/rha/infos-agent.vue';
import CarriereAgent from '@/components/rha/carriere-agent.vue';
import ListeEnfants from '@/components/rha/liste-enfants.vue';
import ConjointAgent from '@/components/rha/conjoint-agent.vue';
import PrimeIndemnite from '@/components/rha/prime-indemnite.vue';
import ExperienceAgent from '@/components/rha/experience-agent.vue';
import CompetenceAgent from '@/components/rha/competence-agent.vue';
import SalaireAgent from '@/components/rha/salaire-agent.vue';
import DiplomeAgent from '@/components/rha/diplome-agent.vue';
import DistinctionAgent from '@/components/rha/diplome-agent.vue';

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


const infosTabAgent = reactive(
  [

    {
      tag: "infos-agent",
      label: "Informations sur l'agent",
      component: InfosAgent,
    },

    {
      tag: "carriere",
      label: "Carriere",
      component: CarriereAgent
    },

    {
      tag: "liste-enfants",
      label: "Liste des enfants",
      component: ListeEnfants
    },


    {
      tag: "conjoints",
      label: "Conjoints",
      component: ConjointAgent
    },

    {
      tag: "prime-indemnite",
      label: "Primes & Indemnites",
      component: PrimeIndemnite
    },

    {
      tag: "experiences",
      label: "Experiences",
      component: ExperienceAgent
    },

    {
      tag: "competences",
      label: "Competences clés & Atouts",
      component: CompetenceAgent
    },

    {
      tag: "salaires",
      label: "Salaires",
      component: SalaireAgent
    },

    {
      tag: "diplomes",
      label: "Diplomes",
      component: DiplomeAgent

    },

    {
      tag: "distinction",
      label: "Distinctions",
      component: DistinctionAgent
    },


  ]
);


</script>

<template>
  <div class="mx-auto xl:container">

    <div class="flex py-2 border-b top-line">
      <span class="text-lg font-medium"> Informations de l'agent : Nom Agent </span>
    </div>

    <div class="flex gap-3">
      <RouterLink @click.prevent="$router.back()" to=""
        class="flex items-center gap-2 p-2 mt-5 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
        <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
        <span class="text-sm font-medium"> Retour </span>
      </RouterLink>

    </div>

    <div class="tab-content mt-5">

      <TabsRoot class="flex flex-col w-full" default-value="infos-agent">

        <TabsList class="flex items-center flex-wrap gap-3" aria-label="Manage your account">

          <TabsTrigger v-for="item in infosTabAgent" :key="item.tag"
            class="flex cursor-pointer data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:font-bold data-[state=active]:shadow text-sm items-center rounded bg-gray-200 gap-2 p-2  w-fit hover:bg-opacity-60"
            :value="item.tag">
            {{ item.label }}
          </TabsTrigger>

        </TabsList>

        <TabsContent v-for="(item, index) in infosTabAgent" :key="index" class="mt-5 bg-white rounded-b-md"
          :value="item.tag">

          <component :is="item.component"> </component>

        </TabsContent>

      </TabsRoot>

    </div>




    <div class="flex justify-between items-center mt-5">
      <h3 class="text-xl font-semibold"> Documents </h3>
      <RouterLink to="{ name: item.to }"
        class="flex items-center gap-2 p-2 rounded shadow bg-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
        <v-icon :name="icons.PersonPlus" class="text-white" scale="1.1" />
        <span class="text-sm font-medium text-white"> Joindre un document </span>
      </RouterLink>
    </div>

    <div class="w-full mt-5  border border-gray-300 bg-unstim-light card">
      <div class="flex items-center gap-3 px-4 py-3 card-header">
        <span class=""> Liste des documents </span>
      </div>

      <div class="card-content">
        <easy-data-table alternating border-cell :headers="headers" class="text-lg" theme-color="#2f9fff" :items="items"
          buttons-pagination>
          <template #item-action="">
            <div class="flex gap-3">
              <!-- 
            <RouterLink to=""
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
              <v-icon :name="icons.EditIcon" scale="1.0" />

            </RouterLink>

            <RouterLink to=""
              class="flex items-center gap-2 p-2 my-2 text-white bg-red-400 rounded shadow-md w-fit hover:bg-red-500">
              <v-icon :name="icons.DeleteIcon" scale="1.0" />

            </RouterLink> -->
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
