<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium"> {{ data.title }}</span>
    </div>

    <div class="p-5 mt-3 border row">
      <AccordionRoot class="w-full border z-10" default-value="'item-1'" type="single" :collapsible="true">
        <AccordionItem class="overflow-hidden" value="Recherche avancée">
          <AccordionHeader class="flex">
            <AccordionTrigger
              class="text-base bg-slate-100 font-medium hover:bg-slate-200 transition-all flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] group">
              <span>Recherche Avancée</span>
              <v-icon :name="icons.ChevronDown" :scale="0.8"
                class="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent
            class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp -z-20 overflow-hidden text-[15px]">
            <div class="px-5 py-4">
              <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-2 lg:grid-cols-3">



                <imput :label="'MOIS'" :type="'month'" :isRequired="true" class="flex-grow" />




              </div>
              <div class="flex justify-end gap-3 border-t form-btn">
                <button
                  class="flex items-center gap-2 p-2 px-3 mt-5 text-white rounded shadow bg-unstim-primary w-fit hover:bg-opacity-60">
                  <v-icon :name="icons.UserSearch" class="" scale="1.0" />
                  <span class="text-sm font-medium"> Recherche </span>
                </button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
    </div>
    <div class="flex justify-end my-3" v-if="data.buttons">
      <template v-for="(btn, item) in data.buttons" :key="item">
        <RouterLink :style="{ backgroundColor: btn.color }" :to="btn.to"
          class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60 mx-1">
          <v-icon :name="btn.icon" scale="1.1" />

          <span class="text-sm font-medium"> {{ btn.title }}</span>
        </RouterLink>
      </template>
    </div>
    <div class="max-w-full p-5 mt-3 border row">

      <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
        class="text-white bg-slate-500 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button">
        Exporter
        <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div id="dropdownHover"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
          <li>
            <a href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
              out</a>
          </li>
        </ul>
      </div>

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
          <div class="flex gap-3 row justify-center items-center">
            <RouterLink to="rappel-view" v-if="data.action.update"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-green-600 hover:opacity-50">
              <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
            </RouterLink>
            <RouterLink to=""
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-orange-600 hover:bg-red-400">
              <v-icon :name="icons.CoPrint" scale="1.0" />
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
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { icons } from '@/assets/icons/oh-vue-icons'

const searchValue = ref('')


const data = ref({
  title: 'Rappels',

  headers: [
    { text: 'Matricule', sortable: true, value: 'MA' },
    { text: 'Nom & Prénom', sortable: true, value: 'NO' },
    { text: 'Ancien Grade', sortable: true, value: 'PR' },
    { text: 'Nouveau Grade ', sortable: true, value: 'SE' },
    { text: 'Solde indexé (FCFA)', sortable: true, value: 'TY' },
    { text: 'Brut (FCFA)', sortable: true, value: 'DE' },
    { text: 'Nombre de jour', sortable: true, value: 'RE' },
    { text: 'Nombre de jour', sortable: true, value: 'NJ' },
    { text: 'Début', sortable: true, value: 'UT' },
    { text: 'Fin', sortable: true, value: 'FN' },

    { text: 'Actions', sortable: true, value: 'action' }
  ],
  items: [
    {
      MA: '1566AJ-S',
      NO: 'EKP',
      PR: 'DARIUS',
      SE: 'xx',
      TY: 'xx',
      DE: 'xx',
      RE: 'xx',
      NJ: '25',
      UT: 'XXXX',
      FN: 'xx',

    },

  ],
  action: {
    edit: true,
    update: true,
    delete: true
  },
  buttons: [
    { title: 'Ajouter un rappel ', color: '#2b9eff', to: 'rappel-create', icon: icons.AddIcon },
    { title: 'Imprimer un mois ', color: 'rgb(255, 193, 7)', to: '', icon: icons.CoPrint },

  ]
})


import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from 'radix-vue'
import imput from '@/components/inputs/unstim-text.vue'


</script>
  
<style lang="scss" scoped></style>
  