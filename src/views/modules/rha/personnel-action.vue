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
  AlertDialogTrigger,
} from 'radix-vue'


import { useRhaButtonStore } from '@/stores/rha-buttons';
import { icons } from '@/assets/icons/oh-vue-icons';
import { ref } from 'vue';
const rhaPersonnelBtn = useRhaButtonStore().rhaButtons


const headers = ref([
  { text: "Matricule", sortable: true, value: "matricule" },
  { text: "Nom", sortable: true, value: "nom" },
  { text: "Prénom", sortable: true, value: "prenom" },
  { text: "Sexe", sortable: true, value: "sexe" },
  { text: "Catégorie", sortable: true, value: "categorie" },
  { text: "Date de naissance", sortable: true, value: "date_naissance" },
  { text: "Actions", sortable: true, value: "action" },
]);

const items = ref([
  { matricule: "#64035", nom: 'HOUNDJO M', prenom: 'Stephen', sexe: 'M', categorie: 'M1', date_naissance: '01/01/2000', action: '' },

  { matricule: "#64034", nom: 'BIAOU', prenom: 'Hamidou', sexe: 'M', categorie: 'M1', date_naissance: '01/01/2000', action: '' },

  { matricule: "#64032", nom: 'TOSSOU', prenom: 'Valentin', sexe: 'M', categorie: 'M1', date_naissance: '01/01/2000', action: '' },

  { matricule: "#64031", nom: 'CODJIA', prenom: 'Orens Eudie', sexe: 'F', categorie: 'M1', date_naissance: '01/01/2000', action: '' },

  { matricule: "#64131", nom: 'D\'ALMEIDA', prenom: 'Mensen Gilberte', sexe: 'F', categorie: 'M1', date_naissance: '01/01/2000', action: '' },

]);

const itemsSelected = ref([]);

</script>

<template>
  <div class="mx-auto xl:container">

    <div class="top-line border-b py-2 flex justify-center">

      <span class="text-base font-medium"> Liste du personnel </span>

    </div>

    <div class="actions-button border-b mx-auto flex gap-3 justify-center py-6 items-center flex-wrap">

      <RouterLink :style="{ 'backgroundColor': item.color }" v-for="(item, index) in rhaPersonnelBtn" :key="index" to=""
        class="flex hover:bg-opacity-60  rounded text-white shadow items-center gap-2 p-2">
        <v-icon :name="item.icon" scale="1.1" />
        <span class="text-sm font-medium">{{ item.title }}</span>
      </RouterLink>

    </div>


    <div class="row mt-3 p-5 border">
      <AccordionRoot class="w-full border" default-value="'item-1'" type="single" :collapsible="true">

        <AccordionItem class="overflow-hidden" value="Recherche avancée">
          <AccordionHeader class="flex">
            <AccordionTrigger
              class="text-base bg-slate-100 font-medium  hover:bg-slate-200 transition-all flex h-[45px] flex-1 cursor-pointer items-center justify-between  px-5 text-[15px] group">
              <span>Recherche avancées</span>
              <v-icon :name="icons.ChevronDown" :scale="0.8"
                class="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent
            class="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
            <div class="px-5 py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugiat facere asperiores impedit, veritatis,
              praesentium eum numquam deserunt blanditiis optio quibusdam fuga cupiditate voluptas quia sit nihil rerum
              soluta eligendi.
              Nam in nostrum maiores cupiditate est, unde autem ipsa, quia corrupti alias, commodi repellat dolores
              mollitia deleniti? Asperiores itaque commodi alias, ducimus officia omnis delectus dolorem, voluptatum
              earum, magnam iste!
              Accusamus saepe facilis, explicabo blanditiis nisi voluptatibus velit doloribus nemo labore provident,
              quisquam necessitatibus voluptas quam sit doloremque cum eum culpa fuga harum nobis quos, maxime voluptate
              eligendi. Quae, facere.
            </div>
          </AccordionContent>
        </AccordionItem>

      </AccordionRoot>

    </div>

    <div class="row max-w-full mt-3 p-5 border">
      <easy-data-table :headers="headers" class="text-lg" theme-color="#2f9fff" :items="items"
        v-model:items-selected="itemsSelected" buttons-pagination>

        <template #item-action="">

          <div class="flex gap-3">
            <!-- 
            <RouterLink to=""
              class="flex my-2 w-fit bg-unstim-info hover:bg-unstim-primary  rounded text-white items-center shadow-md gap-2 p-2">
              <v-icon :name="icons.EditIcon" scale="1.0" />

            </RouterLink>

            <RouterLink to=""
              class="flex my-2 w-fit bg-red-400 hover:bg-red-500  rounded text-white items-center shadow-md gap-2 p-2">
              <v-icon :name="icons.DeleteIcon" scale="1.0" />

            </RouterLink> -->

          </div>

          <AlertDialogRoot>
            <AlertDialogTrigger
              class="flex my-2 w-fit bg-unstim-info hover:bg-unstim-primary  rounded text-white items-center shadow-md gap-2 p-2">
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
                  This action cannot be undone. This will permanently delete your account and remove your data from our
                  servers.
                </AlertDialogDescription>
                <div class="flex justify-end gap-[25px]">
                  <AlertDialogCancel
                    class="bg-slate-400 shadow hover:bg-slate-500  inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    class="text-red11 bg-red-400 shadow hover:bg-red-500  inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold">
                    Yes, delete account
                  </AlertDialogAction>
                </div>
              </AlertDialogContent>
            </AlertDialogPortal>
          </AlertDialogRoot>


        </template>

      </easy-data-table>

    </div>

  </div>
</template>

<style>
:root {
  --easy-table-body-row-font-size: .85rem;
}
</style>
