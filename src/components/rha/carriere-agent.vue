<script lang="ts" setup>

import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from 'radix-vue'

import { icons } from '@/assets/icons/oh-vue-icons'

import { computed, reactive, ref } from 'vue';

import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from '@element-plus/icons-vue'



// const itemsSelected = ref([])

const searchOption = reactive({
  options: '',
  valeur: '',
  sexe: '',
  categorie: '',
  fonction: '',
  typeContrat: '',
  direction: '',
  situation: '',
  showAgentsInactifs: ''
})

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


const tableData = reactive([
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17,
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
])

const optionsParameters = reactive({
  options: ['Nom Complet', 'Prénoms', 'Noms']
})

const sexeParameters = reactive({
  options: ['Tout les sexes', 'Masculin', 'Feminin']
})

const categorieParameters = reactive({
  options: ['C1', 'C2', 'C3']
})

const fonctionsParameters = reactive({
  options: ['Agent commercial', 'Agent de Guichet', 'Analyste']
})


</script>

<template>
  <el-card class="space-y-4 my-5">

    <RouterLink :to="{ name: 'modifier-informations' }"
      class="flex items-center mb-4 gap-2 p-2 text-sm font-medium text-white  bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
      Faire un nouveau contrat
    </RouterLink>

    <AccordionRoot class="w-full border z-10" default-value="'item-1'" type="single" :collapsible="true">
      <AccordionItem class="overflow-hidden" value="Recherche avancée">
        <AccordionHeader class="flex">
          <AccordionTrigger
            class="text-base bg-slate-100 font-medium hover:bg-slate-200 transition-all flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] group">
            <span class="text-sm font-medium"> CDI / Début (1998-01-01 00:00:00) - Fin (2027-01-01 00:00:00) </span>
            <v-icon :name="icons.ChevronDown" :scale="0.8"
              class="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent
          class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp -z-20 overflow-hidden text-[15px]">
          <div class="px-5 py-4 space-y-4">

            <el-descriptions title="Informations de base" class-name="w-full bg-red-500" direction="horizontal"
              :column="1" :border="true">

              <el-descriptions-item width="150" label="Nom de l'agent">Nom de l'agent</el-descriptions-item>
              <el-descriptions-item width="150" label="Type de contrat">Type de contrat</el-descriptions-item>
              <el-descriptions-item width="150" label="Date de démarrage">Date de d</el-descriptions-item>
              <el-descriptions-item width="150" label="Date de fin"></el-descriptions-item>
              <el-descriptions-item width="150" label="Statut"> Cotonou </el-descriptions-item>
              <el-descriptions-item width="150" label="Date de création">00 22 55 00</el-descriptions-item>
              <el-descriptions-item width="150" label="Date de dernière modification">00 22 55 00</el-descriptions-item>
              <el-descriptions-item width="150" label="Date de dernière disponibilité">00 22 55
                00</el-descriptions-item>
              <el-descriptions-item width="150" label="Date de dernière réhabilitation">00 22 55
                00</el-descriptions-item>

            </el-descriptions>

            <el-button-group size="large">
              <el-button type="primary"> Modifier le contrat </el-button>
              <el-button type="danger"> Suspendre le contrat </el-button>
              <el-button type="primary"> Nouvel Acte </el-button>
              <el-button type="primary"> Intérim </el-button>
            </el-button-group>




            <h3 class="text-xl font-semibold">Déroulement de la carrière</h3>

            <el-table :data="items" size="small" :lazy="true" :border="true" style="width: 100%" table-layout="auto">

              <el-table-column type="selection" width="50" />
              <el-table-column prop="matricule" label="Matricule" />
              <el-table-column prop="nom" sortable label="Nom" />
              <el-table-column prop="prenom" sortable label="Prénom" />
              <el-table-column prop="sexe" label="Sexe" />
              <el-table-column prop="categorie" label="Catégorie" />
              <el-table-column prop="date_naissance" sortable label="Date de naissance" />
              <!-- 
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
                </el-table-column> -->

            </el-table>


            <h3 class="text-xl font-semibold">Déroulement de la carrière</h3>

            <el-table :data="items" size="small" :lazy="true" :border="true" style="width: 100%" table-layout="auto">

              <el-table-column type="selection" width="50" />
              <el-table-column prop="matricule" label="Matricule" />
              <el-table-column prop="nom" sortable label="Nom" />
              <el-table-column prop="prenom" sortable label="Prénom" />
              <el-table-column prop="sexe" label="Sexe" />
              <el-table-column prop="categorie" label="Catégorie" />
              <el-table-column prop="date_naissance" sortable label="Date de naissance" />
              <!-- 
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
                </el-table-column> -->

            </el-table>




            <h3 class="text-xl font-semibold">Echelons</h3>

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

          </div>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>


  </el-card>
</template>

<style></style>
