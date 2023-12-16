<template>
  <RouterLink
    @click.prevent="$router.back()"
    to=""
    class="flex items-center mt-2 gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
  >
    <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
    <span class="text-sm font-medium"> Retour </span>
  </RouterLink>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium"> Détail plan sectoriel</span>
    </div>

    <div class="flex justify-end my-3">
      <RouterLink
        to="plan-sectoriel-join"
        class="flex items-center gap-2 p-2 bg-unstim-primary text-white rounded shadow hover:bg-opacity-60 mx-1"
      >
        <span class="text-sm font-medium"> Lier un plan sectoriel</span>
      </RouterLink>
    </div>
    <div class="max-w-full p-5 mt-5 border row">
    

      <table class="table mt-3 w-full">
        <tbody>
         
          <tr>
            <th class="py-2 text-left font-medium border-b">ID :</th>
            <td class="border-b">1</td>
          </tr>
          <tr>
            <th class="py-2 text-left font-medium border-b">Code :</th>
            <td class="border-b">dar-25</td>
          </tr>
          <tr>
            <th class="py-2 text-left font-medium border-b">Libelle :</th>
            <td class="border-b">xxxxxxxx</td>
          </tr>
          <tr>
            <th class="py-2 text-left font-medium border-b">Demarre le :</th>
            <td class="border-b">10 mars 2041</td>
          </tr>
          <tr>
            <th class="py-2 text-left font-medium border-b">Fini le :</th>
            <td class="border-b">10 mars 2041</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex space-x-8 m-6">
      <RouterLink
        to="plan-sectoriel-update"
        class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-green-600 hover:opacity-50"
      >
        <v-icon :name="icons.EditIcon" scale="1.0" /> Modifier
      </RouterLink>

      <RouterLink
        to=""
        class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-500 hover:opacity-50"
      >
        <v-icon :name="icons.DeleteIcon" scale="1.0" /> Supprimer
      </RouterLink>
    </div>
  </div>

  <div class="flex justify-end my-3">
    <RouterLink
      to="element-analytique-create/sectoriel"
      class="flex items-center gap-2 p-2 bg-unstim-primary text-white rounded shadow hover:bg-opacity-60 mx-1"
    >
      <v-icon :name="icons.AddIcon" scale="1.1" />

      <span class="text-sm font-medium"> Ajouter un élément analytique</span>
    </RouterLink>
  </div>

  <AccordionRoot
    class="bg-white w-300 rounded-md shadow-sm"
    default-value="'item-1'"
    type="single"
    :collapsible="true"
  >
    <template v-for="item in accordionItems" :key="item.value">
      <AccordionItem class="accordion-item border" :value="item.value">
        <AccordionHeader class="flex">
          <AccordionTrigger class="AccordionTrigger accordion-trigger group w-full">
            <div class="flex justify-between py-1">
              <div class="flex min-w-0 gap-x-0">
                <v-icon
                  :name="icons.AddIcon"
                  class="text-gray-600 mr-2 AccordionChevron"
                  aria-hidden
                  scale="1.0"
                />

                <div class="min-w-0 flex-auto">
                  <p class="text-sm font-semibold leading-6 text-gray-900">{{ item.title }}</p>
                </div>
              </div>
              <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end mx-9">
                <div class="flex gap-1 row justify-center items-center">
                  <RouterLink
                    to="element-analytique-view/sectoriel"
                    class="flex items-center gap-10 p-1 my-2"                  >
                    <v-icon :name="icons.FormPWShowIcon" scale="0.8" />
                  </RouterLink>

                  <RouterLink
                    to="element-analytique-create/sectoriel"
                    class="flex items-center gap-10 p-1 my-2"                  >
                    <v-icon :name="icons.AddIcon" scale="0.8" class="text-green-600" />
                  </RouterLink>
                  <RouterLink
                    to="element-analytique-update/sectoriel"
                    class="flex items-center gap-10 p-1 my-2"                  >
                    <v-icon :name="icons.EditIcon" scale="0.8" class="text-yellow-600" />
                  </RouterLink>
                  <RouterLink
                    to=""
                    class="flex items-center gap-10 p-1 my-2"                  >
                    <v-icon :name="icons.DeleteIcon" scale="0.8" class="text-red-600" />
                  </RouterLink>
                </div>
              </div>
            </div>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="accordion-content">
          <div class="flex justify-between border border-gray-200 bg-gray-100 mx-10 mb-2">
            <div class="flex min-w-0 gap-x-0">
              {{ item.content }}
            </div>
            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end mx-9">
              <div class="flex gap-1 row justify-center items-center">
                <RouterLink
                    to="element-analytique-view/sectoriel"
                    class="flex items-center gap-10 p-1 my-2"                  >
                    <v-icon :name="icons.FormPWShowIcon" scale="0.8" />
                  </RouterLink>

                  <RouterLink
                    to="element-analytique-create/sectoriel"
                    class="flex items-center gap-10 p-1 my-2"                  >
                    <v-icon :name="icons.AddIcon" scale="0.8" class="text-green-600" />
                  </RouterLink>
                  <RouterLink
                    to="element-analytique-update/sectoriel"
                    class="flex items-center gap-10 p-1 my-2"                  >
                    <v-icon :name="icons.EditIcon" scale="0.8" class="text-yellow-600" />
                  </RouterLink>
                  <RouterLink
                    to=""
                    class="flex items-center gap-10 p-1 my-2"                  >
                    <v-icon :name="icons.DeleteIcon" scale="0.8" class="text-red-600" />
                  </RouterLink>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { icons } from '@/assets/icons/oh-vue-icons'

import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent
} from 'radix-vue'

const accordionItems = [
  {
    value: 'item-1',
    title: 'Is it accessible',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.'
  },
  {
    value: 'item-2',
    title: 'Is it accessible',
    content: "Yes. It's unstyled by default, giving you freedom over the look and feel."
  },
  {
    value: 'item-3',
    title: 'Is it accessible',
    content: 'Yes! You can use the transition prop to configure the animation.'
  }
]

const searchValue = ref('')

const data = ref({
  title: 'Plans sectoriel',

  headers: [
    { text: 'Elements Analytiques', sortable: true, value: 'MA' },

    { text: 'Actions', sortable: true, value: 'action' }
  ],
  items: [
    {
      MA: 'xxxxxx'
    },
    {
      MA: 'xxxxxxx'
    }
  ],
  action: {
    edit: true,
    update: true,
    delete: true
  }
})
</script>

<style lang="scss" scoped>
.AccordionChevron {
  transition: transform 300ms;
}
.AccordionTrigger[data-state='open'] > .AccordionChevron {
  transform: rotate(40deg);
}
</style>
