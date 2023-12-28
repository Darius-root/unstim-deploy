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
              <span>Edition de fiche de stock</span>
              <v-icon :name="icons.ChevronDown" :scale="0.8"
                class="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent
            class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp -z-20 overflow-hidden text-[15px]">
            <div class="px-5 py-4">
              <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-2 lg:grid-cols-3">
               

                <selecteImput :label="'Type de rapport'" :parameters="parameters" :isRequired="true" />
                                     <imput :label="'Date de début'" :type="'date'" :isRequired="true" class="flex-grow" />

                                     <imput :label="'Date de fin'" :type="'date'" :isRequired="true" class="flex-grow" />




              </div>
              <div class="flex justify-end gap-3 border-t form-btn">
                <button
                  class="flex items-center gap-2 p-2 px-3 mt-5 text-white rounded shadow bg-unstim-primary w-fit hover:bg-opacity-60">
                  <v-icon :name="icons.FormPWShowIcon" class=""un d scale="1.0" />
                  <span class="text-sm font-medium"> Afficher </span>
                </button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
    </div>
    
      <div class="max-w-full p-5 mt-3 border row">
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
          
     
        </easy-data-table>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { icons } from '@/assets/icons/oh-vue-icons'
  
  const searchValue = ref('')
  

  const data = ref({
    title: 'Etats des mouvements du stock',
  
    headers: [
      { text: 'N°', sortable: true, value: 'MA' },
      { text: 'Article', sortable: true, value: 'NO' },
      { text: 'Total entrées', sortable: true, value: 'PR' },
      { text: 'Total sorties ', sortable: true, value: 'SE' },
      { text: '	Stock-Disponible', sortable: true, value: 'TY' },
      { text: '	Stock-alerte', sortable: true, value: 'aa' },



    ],
    items: [
      {
        MA: '1',
        NO: 'xxxx',
        PR: 'xxxx',
        SE: 'xxxx',
        TY: 'xxxx',
        aa:'xxx',


      },
     
    ],
   
 /*    buttons: [
      { title: 'Ajouter une fiche de Stock ', color: '#2b9eff', to: 'fiche-create' }
    ] */
  })


  import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from 'radix-vue'
import selecteImput from '@/components/inputs/unstim-select.vue'
import imput from '@/components/inputs/unstim-text.vue'
const parameters = reactive({
    options: ['xxx', 'xxxxxxx',],
    placeholder: '--Choississez un xxx--',
    searchable: true,
/*   mode: 'tags'
 */})



  </script>
  
  <style lang="scss" scoped></style>
  