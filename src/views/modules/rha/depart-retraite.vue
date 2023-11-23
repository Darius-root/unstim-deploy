<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue'

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
</script>

<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-lg font-medium"> Départs à la retraite </span>
    </div>

    <RouterLink
      @click.prevent="$router.back()"
      to=""
      class="flex items-center gap-2 p-2 mt-5 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
    >
      <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
      <span class="text-sm font-medium"> Retour </span>
    </RouterLink>

    <div class="w-full mt-5 border border-gray-300 bg-unstim-light card">
      <div class="flex items-center justify-between gap-3 px-4 py-3 card-header">
        <span class="">Dans 8 mois</span>

        <RouterLink
          to="{ name: item.to }"
          class="flex items-center gap-2 py-1.5 px-2 rounded shadow bg-yellow-500 w-fit hover:bg-opacity-60"
        >
          <v-icon :name="icons.PersonPlus" class="" scale="1.0" />
          <span class="text-sm font-medium"> Imprimer </span>
        </RouterLink>
      </div>
      <div class="card-content">
        <easy-data-table
          alternating
          border-cell
          :headers="headers"
          class="text-lg"
          theme-color="#2f9fff"
          :items="items"
          buttons-pagination
        >
          <template #item-action="">
            <div class="flex gap-3">
              <!-- 
      <RouterLink to=""
        class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
        <v-icon :name="icons.EditIcon" scale="1.0" />

      </RouterLink>

      <RouterLink to=""
        class="flex items-center gap-2 p-2 my-2 text-white bg-red-400 rounded shadow-md w-fit hover:bg-red-500">
        <v-icon :name="icons.DeleteIcon" scale="1.0" />

      </RouterLink> -->
            </div>

            <AlertDialogRoot>
              <AlertDialogTrigger
                class="flex items-center gap-2 p-2 my-2 text-white rounded shadow w-fit bg-unstim-info hover:bg-unstim-primary"
              >
                <v-icon :name="icons.EditIcon" scale="1.0" />
              </AlertDialogTrigger>
              <AlertDialogPortal>
                <AlertDialogOverlay
                  class="bg-black/50 backdrop-blur-sm data-[state=open]:animate-overlayShow fixed inset-0 z-30"
                />
                <AlertDialogContent
                  class="z-[100] text-[15px] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
                >
                  <AlertDialogTitle class="text-mauve12 m-0 text-[17px] font-semibold">
                    Actions personnalisé
                  </AlertDialogTitle>
                  <AlertDialogDescription class="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
                    This action cannot be undone. This will permanently delete your account and
                    remove your data from our servers.
                  </AlertDialogDescription>
                  <div class="flex justify-end gap-[25px]">
                    <AlertDialogCancel
                      class="bg-slate-400 shadow hover:bg-slate-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold"
                    >
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      class="text-red11 bg-red-400 shadow hover:bg-red-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold"
                    >
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

    <div class="w-full mt-5 border border-gray-300 bg-unstim-light card">
      <div class="flex items-center justify-between gap-3 px-4 py-3 card-header">
        <span class="">Dans 3 mois</span>

        <RouterLink
          to="{ name: item.to }"
          class="flex items-center gap-2 py-1.5 px-2 rounded shadow bg-yellow-500 w-fit hover:bg-opacity-60"
        >
          <v-icon :name="icons.PersonPlus" class="" scale="1.0" />
          <span class="text-sm font-medium"> Imprimer </span>
        </RouterLink>
      </div>

      <div class="card-content">
        <easy-data-table
          alternating
          border-cell
          :headers="headers"
          class="text-lg"
          theme-color="#2f9fff"
          :items="items"
          buttons-pagination
        >
          <template #item-action="">
            <div class="flex gap-3">
              <!-- 
      <RouterLink to=""
        class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
        <v-icon :name="icons.EditIcon" scale="1.0" />

      </RouterLink>

      <RouterLink to=""
        class="flex items-center gap-2 p-2 my-2 text-white bg-red-400 rounded shadow-md w-fit hover:bg-red-500">
        <v-icon :name="icons.DeleteIcon" scale="1.0" />

      </RouterLink> -->
            </div>

            <AlertDialogRoot>
              <AlertDialogTrigger
                class="flex items-center gap-2 p-2 my-2 text-white rounded shadow w-fit bg-unstim-info hover:bg-unstim-primary"
              >
                <v-icon :name="icons.EditIcon" scale="1.0" />
              </AlertDialogTrigger>
              <AlertDialogPortal>
                <AlertDialogOverlay
                  class="bg-black/50 backdrop-blur-sm data-[state=open]:animate-overlayShow fixed inset-0 z-30"
                />
                <AlertDialogContent
                  class="z-[100] text-[15px] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
                >
                  <AlertDialogTitle class="text-mauve12 m-0 text-[17px] font-semibold">
                    Actions personnalisé
                  </AlertDialogTitle>
                  <AlertDialogDescription class="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
                    This action cannot be undone. This will permanently delete your account and
                    remove your data from our servers.
                  </AlertDialogDescription>
                  <div class="flex justify-end gap-[25px]">
                    <AlertDialogCancel
                      class="bg-slate-400 shadow hover:bg-slate-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold"
                    >
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      class="text-red11 bg-red-400 shadow hover:bg-red-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold"
                    >
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
  </div>
</template>

<style>
@import url('@/assets/css/easy-table.css');
</style>
