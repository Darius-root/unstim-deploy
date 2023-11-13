
<template>
    <div class="mx-auto xl:container">
      <div class="flex py-2 border-b top-line">
        <span class="text-base font-medium "> {{ data.title }}</span>
      </div>
 

      <div class="p-5 mt-3 border row">
      <AccordionRoot class="w-full border" default-value="'item-1'" type="single" :collapsible="true">
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
            class="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
            <div class="px-5 py-4">
              <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-2 lg:grid-cols-3">
                <!-- NOM -->

                <div class="flex flex-col space-y-2 input-group">
                  <label for="" class="text-sm">Option</label>
                  <input type="text" class="form-unstim" />
                </div>

                <!-- PRENOM -->

                <div class="flex flex-col space-y-2 input-group">
                  <label for="" class="text-sm">Valeur</label>
                  <input type="text" class="form-unstim" />
                </div>

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



      <div class="flex justify-end my-3" v-if="data.buttons">
  <template v-for="(btn, item) in data.buttons">
    <RouterLink :style="{ backgroundColor: btn.color }" :to="btn.to"
  class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60 mx-1">
  <span class="text-sm font-medium"> {{ btn.title }}</span>
</RouterLink>
  </template>
</div>
      <div class="max-w-full p-5 mt-3 border row">
        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-slate-500 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Exporter <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
    </svg>
  </button>
  
  <!-- Dropdown menu -->
  <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
        </li>
      </ul>
  </div>
  
  
        <div class="flex justify-end my-3 items-center space-x-2">    
    <span class="text-base font-medium">Filtrer:</span>
    <input type="text" v-model="searchValue" class=" border-gray-300 rounded-md px-3 py-2">
  </div>
  <easy-data-table alternating border-cell :headers="data.headers" class="text-lg" theme-color="#2f9fff"   :items="data.items"
          buttons-pagination searchable
          :search-value="searchValue"
  >
          <template #item-act="" >
            <div class="flex gap-3 row justify-center items-center">

                <RouterLink to="" v-if="data.action.update"
                class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
                <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
  
              </RouterLink>

              <RouterLink v-if="data.action.edit" to="" 
                class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
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
  
  <script lang="ts"  setup>
  import { ref } from 'vue';
  import { icons } from '@/assets/icons/oh-vue-icons'
  import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from 'radix-vue'
  
  
const data =ref( { title: 'Liste des plans de formation',
                    
                    headers: [{ text: 'N° d\'ordre', sortable: true, value: 'nom' },
                    { text: 'Titre de formation', sortable: true, value: 'cat' },
                    { text: 'Nombre de participants', sortable: true, value: 'nb' },
                    { text: 'Direction', sortable: true, value: 'dir' },
                    { text: 'Service', sortable: true, value: 'sev' },
                    { text: 'Status', sortable: true, value: 'stat' },
                    { text: 'Action', sortable: true, value: 'act' },


],
                    items: [{
                        nom: '',
                        cat: 'xxxxx',
                        nb: '', 
                         dir: '',
                        sev: '',
                        stat:'',
                        act:''
                    },

                    ], 
                    action: {
                        edit: true,
                        update: true,
                        delete: true
                    },
                    buttons: [{ title: 'Ajouter une formation', color: '#2b9eff', to: 'create-formation' },
                    { title: 'Liste des formations ', color: '#2b9eff', to: '' },],})

                    const searchValue = ref("");

  </script>
  
  <style lang="scss" scoped></style>