<script lang="ts" setup>
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

import unstimSelect from '@/components/inputs/unstim-select.vue'
import unstimText from '@/components/inputs/unstim-text.vue'

import { useRhaButtonStore } from '@/stores/rha-buttons'
import { icons } from '@/assets/icons/oh-vue-icons'
import { reactive, ref } from 'vue'
import { ElButton } from 'element-plus'

const rhaPersonnelBtn = useRhaButtonStore().rhaButtons

const rhaButtonsType = useRhaButtonStore().rhaButtonsType

const headers = ref([
  { text: 'Actions', sortable: true, value: 'action' },
  { text: 'Matricule', sortable: true, value: 'matricule' },
  { text: 'Nom', sortable: true, value: 'nom' },
  { text: 'Prénom', sortable: true, value: 'prenom' },
  { text: 'Sexe', sortable: true, value: 'sexe' },
  { text: 'Catégorie', sortable: true, value: 'categorie' },
  { text: 'Date de naissance', sortable: true, value: 'date_naissance' }
])

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

const itemsSelected = ref([])

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

// const typeContractParameters = reactive({
//   options: ['Détachement', 'Nomination']
// })
</script>

<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-lg font-medium"> Liste du personnel </span>
    </div>


    <div class="flex flex-wrap items-center justify-center gap-3 py-6 mx-auto actions-button">
      <div class="w-full">
        <div class="flex flex-wrap items-center justify-center gap-3 mx-auto actions-button">
          <div v-for="(item, index) in rhaPersonnelBtn" :key="index">
            <div v-if="item.type === rhaButtonsType.link">
              <RouterLink :style="{ backgroundColor: item.color }" :to="{ name: item.to }"
                class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60">
                <v-icon :name="item.icon" scale="1.1" />
                <span class="text-sm font-medium">{{ item.title }}</span>
              </RouterLink>
            </div>
            <div v-else-if="item.type === 'modal'">
              <AlertDialogRoot class="">
                <AlertDialogTrigger :style="{ backgroundColor: item.color }"
                  class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60">
                  <v-icon :name="item.icon" scale="1.1" />
                  <span class="text-sm font-medium">{{ item.title }}</span>
                </AlertDialogTrigger>

                <AlertDialogPortal>
                  <AlertDialogOverlay
                    class="bg-black/50 data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayClose fixed inset-0 z-30" />
                  <AlertDialogContent
                    class="z-[100] text-[15px] data-[state=open]:animate-contentShow data-[state=closed]:animate-contentClose fixed top-[30%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <AlertDialogTitle class="px-5 py-3 border-b border-gray-200 m-0 text-[17px] font-semibold">
                      Période
                    </AlertDialogTitle>

                    <AlertDialogDescription class="text-[15px] p-5 leading-normal">
                      <div class="grid grid-cols-1 gap-4">
                        <div class="flex flex-col space-y-2 input-group">
                          <label for="" class="text-sm text-right">Choisissez le mois de départ
                          </label>
                          <input type="text" class="form-unstim" />
                        </div>

                        <div class="flex flex-col space-y-2 input-group">
                          <label for="" class="text-sm text-right">Choisissez le mois de fin
                          </label>
                          <input type="text" class="form-unstim" />
                        </div>
                      </div>
                    </AlertDialogDescription>

                    <div class="flex justify-end border-t border-gray-200 px-5 py-3 gap-[25px]">
                      <AlertDialogCancel
                        class="bg-slate-400 shadow hover:bg-slate-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold">
                        Annuler
                      </AlertDialogCancel>
                      <AlertDialogAction
                        class="text-red11 bg-red-400 shadow hover:bg-red-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold">
                        Enrégistrer
                      </AlertDialogAction>
                    </div>
                  </AlertDialogContent>
                </AlertDialogPortal>
              </AlertDialogRoot>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-5 mt-3 border row">
      <AccordionRoot class="w-full border z-10" default-value="'item-1'" type="single" :collapsible="true">
        <AccordionItem class="overflow-hidden" value="Recherche avancée">
          <AccordionHeader class="flex">
            <AccordionTrigger
              class="text-base bg-slate-100 font-medium hover:bg-slate-200 transition-all flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] group">
              <span>Recherche avancées</span>
              <v-icon :name="icons.ChevronDown" :scale="0.8"
                class="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent
            class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp -z-20 overflow-hidden text-[15px]">
            <div class="px-5 py-4">
              <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-2 lg:grid-cols-3">
                <unstim-select label="Option" @valueChanged="(e) => (searchOption.options = e)"
                  :parameters="optionsParameters" />

                <unstim-text label="Valeur" @valueChanged="(e) => (searchOption.valeur = e)" />

                <unstim-select label="Sexe" @valueChanged="(e) => (searchOption.sexe = e)" :parameters="sexeParameters" />

                <unstim-select label="Catégorie" @valueChanged="(e) => (searchOption.categorie = e)"
                  :parameters="categorieParameters" />

                <div class="flex flex-col space-y-2 input-group">
                  <unstim-select label="Fonction" @valueChanged="(e) => (searchOption.fonction = e)"
                    :parameters="fonctionsParameters" />

                  <div class="flex items-center gap-3">
                    <input type="checkbox" name="" id="" />
                    <label for="" class="text-sm">Fonction courante</label>
                  </div>
                </div>

                <unstim-select label="Type de contract" @valueChanged="(e) => (searchOption.typeContrat = e)"
                  :parameters="fonctionsParameters" />

                <unstim-select label="Direction" @valueChanged="(e) => (searchOption.direction = e)"
                  :parameters="fonctionsParameters" />

                <unstim-select label="Situation matrimoniale" @valueChanged="(e) => (searchOption.situation = e)"
                  :parameters="fonctionsParameters" />

                <div class="flex justify-center items-center gap-3">
                  <input v-model="searchOption.showAgentsInactifs" type="checkbox" name="" id="" />
                  <label for="" class="text-sm text-gray-600">Affichez tous les agents non actifs</label>
                </div>
              </div>
              <div class="flex justify-end gap-3 border-t form-btn">
                <button
                  class="flex items-center gap-2 p-2 px-3 mt-5 text-white rounded shadow bg-unstim-primary w-fit hover:bg-opacity-60">
                  <v-icon :name="icons.UserSearch" class="" scale="1.0" />
                  <span class="text-sm font-medium"> Rechercher </span>
                </button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
    </div>

    <div class="max-w-full p-5 mt-3 border row">
      <div class="flex flex-wrap items-center gap-3 pb-3">
        <RouterLink @click.prevent="$router.back()" to=""
          class="flex items-center gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
          <v-icon :name="icons.PersonW" class="" scale="1.1" />
          <span class="text-sm font-medium"> Organigramme </span>
        </RouterLink>

        <RouterLink :to="{ name: 'modifier-echelon' }"
          class="flex items-center gap-2 p-2 rounded shadow bg-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
          <v-icon :name="icons.EditIcon" class="" scale="1.1" />
          <span class="text-sm font-medium"> Modifier les echelons en blocs </span>
        </RouterLink>

        <RouterLink to="{ name: item.to }"
          class="flex items-center gap-2 p-2 bg-yellow-500 rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
          <v-icon :name="icons.PersonPlus" class="" scale="1.1" />
          <span class="text-sm font-medium"> Par structure </span>
        </RouterLink>

        <RouterLink to="{ name: item.to }"
          class="flex items-center gap-2 p-2 rounded shadow bg-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
          <v-icon :name="icons.PersonPlus" class="" scale="1.1" />
          <span class="text-sm font-medium"> Par matricule </span>
        </RouterLink>

        <!-- <RouterLink to="{ name: item.to }"
          class="flex items-center gap-2 p-2 bg-yellow-500 rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
          <v-icon :name="icons.PersonPlus" class="" scale="1.1" />
          <span class="text-sm font-medium"> Selectionner les champs </span>
        </RouterLink> -->

        <RouterLink to="{ name: item.to }"
          class="flex items-center gap-2 p-2 bg-yellow-500 rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
          <v-icon :name="icons.PersonPlus" class="" scale="1.1" />
          <span class="text-sm font-medium"> Imprimer </span>
        </RouterLink>
      </div>

      <easy-data-table alternating border-cell :headers="headers" class="text-lg" theme-color="#2f9fff" :items="items"
        v-model:items-selected="itemsSelected" buttons-pagination>
        <template #item-action="">
          <div class="flex gap-3">
            <RouterLink :to="{ name: 'infos-employee' }"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
              <v-icon :name="icons.EditIcon" scale="1.0" />
            </RouterLink>

            <!-- <RouterLink to=""
              class="flex items-center gap-2 p-2 my-2 text-white bg-red-400 rounded shadow-md w-fit hover:bg-red-500">
              <v-icon :name="icons.DeleteIcon" scale="1.0" />

            </RouterLink> -->
          </div>

          <!-- <AlertDialogRoot>
            <AlertDialogTrigger
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow w-fit bg-unstim-info hover:bg-unstim-primary">
              <v-icon :name="icons.EditIcon" scale="1.0" />
            </AlertDialogTrigger>

            <AlertDialogPortal>
              <AlertDialogOverlay
                class="bg-black/50 backdrop-blur-sm data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
              <AlertDialogContent
                class="z-[100] text-[15px] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <AlertDialogTitle class="text-mauve12 m-0 text-[17px] font-semibold">
                  Actions personnalisé
                </AlertDialogTitle>
                <AlertDialogDescription class="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
                  This action cannot be undone. This will permanently delete your account and remove
                  your data from our servers.
                </AlertDialogDescription>
                <div class="flex justify-end gap-[25px]">
                  <AlertDialogCancel
                    class="bg-slate-400 shadow hover:bg-slate-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    class="text-red11 bg-red-400 shadow hover:bg-red-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold">
                    Yes, delete account
                  </AlertDialogAction>
                </div>
              </AlertDialogContent>
            </AlertDialogPortal>
          </AlertDialogRoot> -->
        </template>
      </easy-data-table>
    </div>
  </div>
</template>

<style>
@import url('@/assets/css/easy-table.css');
</style>
