<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue'

const headers = ref([
  { text: 'Actions', sortable: true, value: 'action' },
  { text: 'Noms & Prénoms', sortable: true, value: 'employe' },
  { text: 'Email', sortable: true, value: 'email' },
  { text: 'Role', sortable: true, value: 'role' },
  { text: 'Créer le', sortable: true, value: 'created_at' },
  { text: 'Mise à jour le', sortable: true, value: 'updated_at' }
])

const items = ref([
  {
    employe: 'HOUNDJO M Stephen',
    email: 'livbelfel@el.tl',
    role: 'Super-Admin',
    created_at: '12/12/2023',
    updated_at: '12/12/2023',

    action: ''
  },

  {
    employe: 'BIAOU Hamidou',
    email: 'be@takekoro.be',
    role: 'Super-Admin',
    created_at: '12/12/2023',
    updated_at: '12/12/2023',
    action: ''
  },

  {
    employe: 'TOSSOU Valentin',
    email: 'pez@cuw.cc',
    role: 'Super-Admin',
    created_at: '12/12/2023',
    updated_at: '12/12/2023',

    action: ''
  },

  {
    employe: 'CODJIA Orens Eudie',
    email: 'baj@gibif.eh',
    role: 'Super-Admin',
    created_at: '12/12/2023',
    updated_at: '12/12/2023',

    action: ''
  },

  {
    employe: "D'ALMEIDA Mensen Gilberte",
    email: 'ol@rum.yt',
    role: 'Super-Admin',
    created_at: '12/12/2023',
    updated_at: '12/12/2023',

    action: ''
  }
])
</script>

<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-lg font-medium"> Liste de utilisateurs </span>
    </div>

    <div class="flex justify-between">
      <RouterLink
        @click.prevent="$router.back()"
        to=""
        class="flex items-center gap-2 p-2 mt-5 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
      >
        <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
        <span class="text-sm font-medium"> Retour </span>
      </RouterLink>

      <RouterLink
        :to="{ name: 'create-user' }"
        class="flex items-center gap-2 p-2 mt-5 bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60"
      >
        <v-icon :name="icons.PersonPlus" class="text-white" scale="1.1" />
        <span class="text-sm font-medium text-white"> Ajouter un utilisateur </span>
      </RouterLink>
    </div>

    <div class="w-full mt-5 border border-gray-300 bg-unstim-light card">
      <div class="flex items-center gap-3 px-4 py-3 card-header">
        <span class="">Exporter</span>
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
              <RouterLink
                :to="{ name: 'edit-user' }"
                class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary"
              >
                <v-icon :name="icons.EditIcon" scale="1.0" />
              </RouterLink>

              <RouterLink
                to=""
                class="flex items-center gap-2 p-2 my-2 text-white bg-red-400 rounded shadow-md w-fit hover:bg-red-500"
              >
                <v-icon :name="icons.DeleteIcon" scale="1.0" />
              </RouterLink>
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
                    This action cannot be undone. This will permanently delete your account and
                    remove your data from our servers.
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
  </div>
</template>

<style>
@import url('@/assets/css/easy-table.css');
</style>
