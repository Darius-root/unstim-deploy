<script lang="ts" setup>
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import { reactive, ref } from 'vue'

import InfosAgent from '@/components/rha/infos-agent.vue'
import CarriereAgent from '@/components/rha/carriere-agent.vue'
import ListeEnfants from '@/components/rha/liste-enfants.vue'
import ConjointAgent from '@/components/rha/conjoint-agent.vue'
import PrimeIndemnite from '@/components/rha/prime-indemnite.vue'
import ExperienceAgent from '@/components/rha/experience-agent.vue'
import CompetenceAgent from '@/components/rha/competence-agent.vue'
import SalaireAgent from '@/components/rha/salaire-agent.vue'
import DiplomeAgent from '@/components/rha/diplome-agent.vue'
import DistinctionAgent from '@/components/rha/diplome-agent.vue'

import {
  Delete,
  Edit,
  Share,
} from '@element-plus/icons-vue'

const activeName = ref('infos-agent')

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

const infosTabAgent = reactive([
  {
    tag: 'infos-agent',
    label: "Informations sur l'agent",
    component: InfosAgent
  },

  {
    tag: 'carriere',
    label: 'Carriere',
    component: CarriereAgent
  },

  {
    tag: 'liste-enfants',
    label: 'Liste des enfants',
    component: ListeEnfants
  },

  {
    tag: 'conjoints',
    label: 'Conjoints',
    component: ConjointAgent
  },

  {
    tag: 'prime-indemnite',
    label: 'Primes & Indemnites',
    component: PrimeIndemnite
  },

  {
    tag: 'experiences',
    label: 'Experiences',
    component: ExperienceAgent
  },

  {
    tag: 'competences',
    label: 'Competences clés & Atouts',
    component: CompetenceAgent
  },

  {
    tag: 'salaires',
    label: 'Salaires',
    component: SalaireAgent
  },

  {
    tag: 'diplomes',
    label: 'Diplomes',
    component: DiplomeAgent
  },

  {
    tag: 'distinction',
    label: 'Distinctions',
    component: DistinctionAgent
  }
])
const visible = ref(false)
</script>

<template>
  <div class="mx-auto xl:container">
    <el-page-header title="Retour" @click="$router.back()">

      <template #content>
        <div class="flex items-center">
          <span class="text-base font-medium"> Information de l'agent: HOUNDJO M Stephen </span>
        </div>
      </template>

    </el-page-header>

    <el-tabs v-model="activeName" type="card" class="demo-tabs mt-8 mx-2">
      <el-tab-pane v-for="item in infosTabAgent" :key="item.tag" :label="item.label" :name="item.tag">
        <component :is="item.component" />
      </el-tab-pane>
    </el-tabs>



    <div class="tab-content hidden mt-5">
      <TabsRoot class="flex flex-col w-full" default-value="infos-agent">
        <TabsList class="flex items-center flex-wrap gap-3" aria-label="Manage your account">
          <TabsTrigger v-for="item in infosTabAgent" :key="item.tag"
            class="flex cursor-pointer data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:font-bold data-[state=active]:shadow text-sm items-center rounded bg-gray-200 gap-2 p-2 w-fit hover:bg-opacity-60"
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


    <el-card class="box-card mt-5">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-semibold">Liste des documents</h3>
          <el-button type="primary" @click="visible = true" :icon="Edit">Joindre un document</el-button>
        </div>
      </template>


      <el-table :data="items" size="small" :lazy="true" :border="true" style="width: 100%">


        <el-table-column type="selection" width="50" />
        <el-table-column prop="matricule" label="Documents" />
        <el-table-column width="250" prop="nom" label="Actions">

          <el-button-group class="ml-4">
            <el-button type="primary" :icon="Edit" />
            <el-button type="primary" :icon="Share" />
            <el-button type="primary" :icon="Delete" />
          </el-button-group>
        </el-table-column>


      </el-table>

    </el-card>

    <el-dialog v-model="visible" :show-close="false">
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header">
          <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
          <el-button type="danger" @click="close">
            <el-icon class="el-icon--left">
              <CircleCloseFilled />
            </el-icon>
            Close
          </el-button>
        </div>
      </template>
      This is dialog content.
    </el-dialog>

  </div>
</template>
