<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue'

import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from 'radix-vue'

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

    <el-page-header title="Retour" @click="$router.back()">
      <template #content>
        <div class="flex items-center">
          <span class="text-base font-medium"> Statistiques </span>
        </div>
      </template>

    </el-page-header>

    <div class="my-5">

      <el-button-group size="large">
        <el-button type="primary"> Effectif par tranche d'age </el-button>
        <el-button type="primary"> Effectif par services </el-button>
        <el-button type="primary"> Effectif par directions </el-button>
        <el-button type="primary"> Effectif par département </el-button>
      </el-button-group>

    </div>


    <el-card class="space-y-4 my-5 border border-gray-300 bg-slate-500">

      <AccordionRoot class="w-full divide-y border z-10" type="single" :collapsible="true">
        <AccordionItem class="overflow-hidden" value="stats_glob">
          <AccordionHeader class="flex">
            <AccordionTrigger
              class="text-base bg-slate-100 font-medium hover:bg-slate-200 transition-all flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] group">
              <span> Statistiques Globales </span>
              <v-icon :name="icons.ChevronDown" :scale="0.8"
                class="text-black ease-in transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent
            class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp -z-20 overflow-hidden text-[15px]">

            <div class="p-4 w-full">
              <el-table :data="items" size="small" :border="true">

                <!-- <el-table-column type="selection" width="50" /> -->

                <el-table-column width="50" type="index" :index="(index) => index + 1" label="N" />
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

            </div>

          </AccordionContent>
        </AccordionItem>

        <AccordionItem class="overflow-hidden" value="direction">
          <AccordionHeader class="flex">
            <AccordionTrigger
              class="text-base bg-slate-100 font-medium hover:bg-slate-200 transition-all flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] group">
              <span> Répartition du personnel par categorie </span>
              <v-icon :name="icons.ChevronDown" :scale="0.8"
                class="text-black ease-in transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent
            class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp -z-20 overflow-hidden text-[15px]">

            <div class="p-4 w-full">
              <el-table :data="items" size="small" :border="true">

                <!-- <el-table-column type="selection" width="50" /> -->

                <el-table-column width="50" type="index" :index="(index) => index + 1" label="N" />
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

            </div>

          </AccordionContent>
        </AccordionItem>


        <AccordionItem class="overflow-hidden" value="sexes">
          <AccordionHeader class="flex">
            <AccordionTrigger
              class="text-base bg-slate-100 font-medium hover:bg-slate-200 transition-all flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] group">
              <span> Répartition des Agents Permanents de l'Etat par catégorie et par sexe </span>
              <v-icon :name="icons.ChevronDown" :scale="0.8"
                class="text-black ease-in transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent
            class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp -z-20 overflow-hidden text-[15px]">

            <div class="p-4 w-full">
              <el-table :data="items" size="small" :border="true">

                <!-- <el-table-column type="selection" width="50" /> -->

                <el-table-column width="50" type="index" :index="(index) => index + 1" label="N" />
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

            </div>

          </AccordionContent>
        </AccordionItem>

        <AccordionItem class="overflow-hidden" value="categorie">
          <AccordionHeader class="flex">
            <AccordionTrigger
              class="text-base bg-slate-100 font-medium hover:bg-slate-200 transition-all flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] group">
              <span> Répartition du personnel par catégorie et par direction </span>
              <v-icon :name="icons.ChevronDown" :scale="0.8"
                class="text-black ease-in transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent
            class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp -z-20 overflow-hidden text-[15px]">

            <div class="p-4 w-full">
              <el-table :data="items" size="small" :border="true">

                <!-- <el-table-column type="selection" width="50" /> -->

                <el-table-column width="50" type="index" :index="(index) => index + 1" label="N" />
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

            </div>

          </AccordionContent>
        </AccordionItem>

      </AccordionRoot>

    </el-card>


  </div>
</template>
