<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons';
import { reactive, ref } from 'vue';

import unstimSelect from '@/components/inputs/unstim-select.vue'
import unstimText from '@/components/inputs/unstim-text.vue'

import 'flatpickr/dist/flatpickr.css'
import flatPickr from 'vue-flatpickr-component'
import { French } from 'flatpickr/dist/l10n/fr.js'
import type { BaseOptions } from 'flatpickr/dist/types/options'

import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from 'radix-vue'


const startDate = ref(null)

const endDate = ref(null)

const searchConfig = ref<Partial<BaseOptions>>({
  wrap: true,
  dateFormat: 'j/m/Y',
  locale: French
})

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


</script>

<template>
  <div class="w-full space-y-5 h-full mx-auto xl:container">
    <div class="flex w-full justify-between bg-white py-2 border-b top-line">
      <span class="text-lg font-medium"> Mes publications </span>

      <RouterLink :to="{ name: 'nouvelle-publication' }"
        class="flex items-center gap-2 p-2 text-sm font-medium text-white  bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
        Nouvelle publication
      </RouterLink>

    </div>

    <div class="p-5 mt-3 border row">
      <AccordionRoot class="w-full border z-10" default-value="'item-1'" type="single" :collapsible="true">
        <AccordionItem class="overflow-hidden" value="Recherche avancée">
          <AccordionHeader class="flex">
            <AccordionTrigger
              class="text-base bg-slate-100 font-medium hover:bg-slate-200 transition-all flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] group">
              <span>Options</span>
              <v-icon :name="icons.ChevronDown" :scale="0.8"
                class="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent
            class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp -z-20 overflow-hidden text-[15px]">
            <div class="px-5 py-4">
              <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-2 lg:grid-cols-3">
                <unstim-select label="Filter par entité" @valueChanged="(e) => (searchOption.options = e)"
                  :parameters="optionsParameters" />

                <unstim-text label="Filter par auteur" @valueChanged="(e) => (searchOption.valeur = e)" />

                <unstim-select label="Année de publication" @valueChanged="(e) => (searchOption.sexe = e)"
                  :parameters="sexeParameters" />

                <unstim-select label="Type de publication" @valueChanged="(e) => (searchOption.categorie = e)"
                  :parameters="categorieParameters" />

                <unstim-select label="Filter par discipline" @valueChanged="(e) => (searchOption.typeContrat = e)"
                  :parameters="fonctionsParameters" />

              </div>
              <div class="flex justify-end gap-3 border-t form-btn">
                <button
                  class="flex items-center gap-2 p-2 px-3 mt-5 text-white rounded shadow bg-unstim-primary w-fit hover:bg-opacity-60">
                  <v-icon :name="icons.UserSearch" class="" scale="1.0" />
                  <span class="text-sm font-medium"> Filter </span>
                </button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
    </div>


    <div class="flex flex-col justify-center border-b border-b-gray-300 pb-4 items-center lg:flex-row lg:gap-16">
      <div class="flex flex-col gap-3 lg:items-center lg:flex-row input-group">
        <label for="" class="text-sm">Du </label>
        <flat-pickr v-model="startDate" :placeholder="`jj/mm/aaaa`"
          class="px-6 border-gray-300 text-sm rounded-full shadow-input w-56" :config="searchConfig" />
      </div>

      <div class="flex flex-col gap-3 lg:items-center lg:flex-row input-group">
        <label for="" class="text-sm"> Au </label>
        <flat-pickr v-model="endDate" :placeholder="`jj/mm/aaaa`"
          class="px-6 border-gray-300 text-sm rounded-full shadow-input w-56" :config="searchConfig" />
      </div>
    </div>

    <div class="flex flex-col space-y-6 py-5">

      <div class="flex p-4 lg:px-4 -z-10 border-x border-x-unstim-primary rounded-lg shadow-card welcome-card">
        <div class=" space-y-3">
          <p class="py-2 text-unstim-primary max-w-4xl mx-auto text-center text-lg font-extrabold">
            Causes et prise en charge de l’hyperthermie sur grossesse à l’hôpital de zone de l’ordre de malte de DJOUGOU
          </p>

          <hr class="border max-w-5xl w-[85%] mx-auto border-gray-300">


          <p class="text-sm max-w-4xl mx-auto text-center">
            L’Hyperthermie est un signe d’alarme chez la femme enceinte. Il est donc primordiale qu’une prise en charge
            précoce soit faite pour traiter les cause afin d’éviter les complications.
            L’objectif de notre étude est de recenser [...]
          </p>

          <hr class="border max-w-5xl w-[90%] mx-auto border-gray-300">


          <div class="flex justify-between w-full">

            <div class="flex flex-col space-y-1">
              <span class="text-sm font-semibold">
                Type
              </span>
              <span class="text-sm font-medium text-unstim-primary">
                Mémoire
              </span>

            </div>

            <div class="flex flex-col space-y-1">

              <span class="text-sm font-semibold">
                Publié le
              </span>

              <span class="text-sm font-medium text-unstim-primary">
                12/12/2022
              </span>
            </div>



          </div>

          <hr class="border max-w-5xl w-[50%] mx-auto border-gray-300">


          <div class="w-full py-3 flex justify-center gap-3">

            <RouterLink :to="{ name: 'modifier-informations' }"
              class="flex items-center gap-2 p-2 px-6 text-sm font-medium text-white  bg-unsitm-primary-pan rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
              Editer
            </RouterLink>

            <RouterLink :to="{ name: 'modifier-informations' }"
              class="flex items-center gap-2 p-2 px-6 text-sm font-medium text-white  bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
              Lire
            </RouterLink>

            <RouterLink :to="{ name: 'modifier-informations' }"
              class="flex items-center gap-2 p-2 px-6 text-sm font-medium text-white  bg-red-600 rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
              Supprimer
            </RouterLink>


          </div>

        </div>


      </div>

      <div class="flex p-4 lg:px-4 -z-10 border-x border-x-unstim-primary rounded-lg shadow-card welcome-card">
        <div class=" space-y-3">
          <p class="py-2 text-unstim-primary max-w-4xl mx-auto text-center text-lg font-extrabold">
            Prise en charge des infections génitales basse chez les gestantes à l’hôpital de zone de savè en 2022
          </p>

          <hr class="border max-w-5xl w-[85%] mx-auto border-gray-300">


          <p class="text-sm max-w-4xl mx-auto text-center">
            Les infections génitales basse chez les femmes enceinte sont des problèmes graves. Elles peuvent entraîner des
            complications telles que le travail prématuré, l’infection du liquide amniotique, la rupture prématurée des
            membranes fœtales et l’hypo [...]
          </p>

          <hr class="border max-w-5xl w-[90%] mx-auto border-gray-300">


          <div class="flex justify-between w-full">

            <div class="flex flex-col space-y-1">
              <span class="text-sm font-semibold">
                Type
              </span>
              <span class="text-sm font-medium text-unstim-primary">
                Mémoire
              </span>

            </div>

            <div class="flex flex-col space-y-1">

              <span class="text-sm font-semibold">
                Publié le
              </span>

              <span class="text-sm font-medium text-unstim-primary">
                12/12/2022
              </span>
            </div>



          </div>

          <hr class="border max-w-5xl w-[50%] mx-auto border-gray-300">


          <div class="w-full py-3 flex justify-center gap-3">

            <RouterLink :to="{ name: 'modifier-informations' }"
              class="flex items-center gap-2 p-2 px-6 text-sm font-medium text-white  bg-unsitm-primary-pan rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
              Editer
            </RouterLink>

            <RouterLink :to="{ name: 'modifier-informations' }"
              class="flex items-center gap-2 p-2 px-6 text-sm font-medium text-white  bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
              Lire
            </RouterLink>

            <RouterLink :to="{ name: 'modifier-informations' }"
              class="flex items-center gap-2 p-2 px-6 text-sm font-medium text-white  bg-red-600 rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
              Supprimer
            </RouterLink>


          </div>

        </div>


      </div>

    </div>





  </div>
</template>
