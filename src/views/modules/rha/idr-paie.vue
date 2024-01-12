<template>
    <div class="mx-auto xl:container">
      <div class="flex py-2 border-b top-line">
        <span class="text-base font-medium"> {{ data.title }}</span>
      </div>
     
      <div class="flex flex-wrap items-center justify-end gap-3 py-6 mx-auto actions-button">
        <div class="flex justify-end my-3" >
        <div class="flex flex-wrap items-center justify-center gap-3 mx-auto actions-button">
           
            <div>
              <AlertDialogRoot class="">
                <AlertDialogTrigger :style="{ backgroundColor:' #2b9eff' }"
                  class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60">
                  <v-icon :name="icons.AddIcon" scale="1.1" />
                  <span class="text-sm font-medium">Ajouter un état</span>
                </AlertDialogTrigger>

                <AlertDialogPortal>
                  <AlertDialogOverlay
                    class="bg-black/50 data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayClose fixed inset-0 z-30" />
                  <AlertDialogContent
                    class="z-[100] text-[15px] data-[state=open]:animate-contentShow data-[state=closed]:animate-contentClose fixed top-[30%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <AlertDialogTitle class="px-5 py-3 border-b border-gray-200 m-0 text-[17px] font-semibold">
                      Ajouter un etat
                    </AlertDialogTitle>

                    <AlertDialogDescription class="text-[15px] p-5 leading-normal">
                      <div class="grid grid-cols-1 gap-4">
                        <selecteImput :label="'Nom & Prénoms '" :parameters="parameters" :isRequired="true" />

                    
                      </div>
                    </AlertDialogDescription>

                    <div class="flex justify-end border-t border-gray-200 px-5 py-3 gap-[25px]">
                      <AlertDialogCancel
                        class="bg-slate-400 shadow hover:bg-slate-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold">
                        Annuler
                      </AlertDialogCancel>
                      <AlertDialogAction
                        class="text-red11 bg-red-400 shadow hover:bg-red-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold">
                        Enregistrer
                      </AlertDialogAction>
                    </div>
                  </AlertDialogContent>
                </AlertDialogPortal>
              </AlertDialogRoot>
            </div>
            <div>
              <AlertDialogRoot class="mt-11">
                <AlertDialogTrigger :style="{ backgroundColor:' #2b9eff' }"
                  class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60">
                  <span class="text-sm font-medium">Faire une estimation</span>
                </AlertDialogTrigger>

                <AlertDialogPortal>
                  <AlertDialogOverlay
                    class="bg-black/50 data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayClose fixed inset-0 z-30" />
                  <AlertDialogContent
                    class="z-[100] text-[15px] data-[state=open]:animate-contentShow data-[state=closed]:animate-contentClose fixed top-[30%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <AlertDialogTitle class="px-5 py-3 border-b border-gray-200 m-0 text-[17px] font-semibold">
                      Faire une  estimation
                    </AlertDialogTitle>

                    <AlertDialogDescription class="text-[15px] p-5 leading-normal">
                      <div class="grid grid-cols-1 gap-4">
                        <selecteImput :label="'Sélectionner un agent'" :parameters="parameters" :isRequired="true" />

                        <imput :label="'Salaire mensuel '" :type="'number'" :isRequired="true" class="flex-grow" />

                        <div class="grid grid-cols-3 gap-4">

                            <imput :label="'Nombre année(s) '" :type="'number'" :isRequired="true" class="flex-grow" />
                            <imput :label="'Mois '" :type="'number'" :isRequired="true" class="flex-grow" />
                            <imput :label="'jours '" :type="'number'" :isRequired="true" class="flex-grow" />

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
                        Enregistrer
                      </AlertDialogAction>
                    </div>
                  </AlertDialogContent>
                </AlertDialogPortal>
              </AlertDialogRoot>
            </div>
        </div>
      </div>
    </div>
    
    <div class="max-w-full p-5 mt-3 border row">
        
      <button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        class="text-white bg-slate-500 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Exporter
        <svg
          class="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        id="dropdownHover"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Dashboard</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Settings</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Earnings</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Sign out</a
            >
          </li>
        </ul>
      </div>

      <div class="flex justify-end my-3 items-center space-x-2">
        <span class="text-base font-medium">Filtrer:</span>
        <input type="text" v-model="searchValue" class="border-gray-300 rounded-md px-3 py-2" />
      </div>
      <easy-data-table
        alternating
        border-cell
        :headers="data.headers"
        class="text-lg"
        theme-color="#2f9fff"
        :items="data.items"
        buttons-pagination
        searchable
        :search-value="searchValue"
      >
        <template #item-statut="">
          <span
            class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-600 text-white"
          >
            Accepté
          </span>
        </template>
        <template #item-action="">
            <div class="flex gap-3 row justify-center items-center">
            <RouterLink
              to="rappel-view"
              v-if="data.action.update"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-green-600 hover:opacity-50"
            >
              <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
            </RouterLink>
           
            <RouterLink
              v-if="data.action.edit"
              to="plan-strategique-edit"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-yellow-600 hover:opacity-50"
            >
              <v-icon :name="icons.EditIcon" scale="1.0" />
            </RouterLink>

            <RouterLink
              to=""
              v-if="data.action.delete"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-600 hover:bg-red-400"
            >
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
  title: 'Liste des Indemnités de Départ à la Retraite',

  headers: [
    { text: 'Type', sortable: true, value: 'MA' },
    { text: 'Nom & Prénom', sortable: true, value: 'NO' },
    { text: 'Salaire mensuel', sortable: true, value: 'PR' },
    { text: 'Indeminité par tranche d\'ancienneté ', sortable: true, value: 'SE' },
    { text: 'Indeminité de départ à la retraite', sortable: true, value: 'TY' },
    { text: 'Total coeficié', sortable: true, value: 'DE' },
    { text: 'Total', sortable: true, value: 'RE' },
    { text: 'Date d\'enregistrement', sortable: true, value: 'NJ' },
    

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
     

    },
 
  ],
  action: {
    edit: true,
    update: true,
    delete: true
  },
  buttons: [
    { title: 'Ajouter un rappel ', color: '#2b9eff', to: 'rappel-create', icon: icons.AddIcon  },
    { title: 'Imprimer un mois ', color: 'rgb(255, 193, 7)', to: '', icon:icons.CoPrint },

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


import selecteImput from '@/components/inputs/unstim-select.vue'
const parameters = reactive({
    options: ['xxx', 'xxxxxxx',],
    placeholder: '--Choississez un xxx--',
    searchable: true,
/*   mode: 'tags'
 */})

  </script>
  
  <style lang="scss" scoped></style>
  