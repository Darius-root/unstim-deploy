<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium"> {{ data.title }}</span>
    </div>

    <div class="flex justify-end my-3" v-if="data.buttons">
      <template v-for="(btn, item) in data.buttons">
        <RouterLink
          :style="{ backgroundColor: btn.color }"
          :to="btn.to"
          class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60 mx-1"
        >
          <span class="text-sm font-medium"> {{ btn.title }}</span>
        </RouterLink>
      </template>

      <modalForm
        class="ml-1"
        :title-btn="'Rechercher'"
        :title-modal="'Imprimer le suivi par saison'"
        :icons="icons.UserSearch"
      >
        <selecteImput :label="'Employés'" :parameters="parameters" :isRequired="true" />
        <selecteImput :label="'Type'" :parameters="parameters" :isRequired="true" />
        <selecteImput :label="'Statut'" :parameters="parameters" :isRequired="true" />
        <selecteImput :label="'Année'" :parameters="parameters" :isRequired="true" />
      </modalForm>
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
              to="view-congepermission"
              v-if="data.action.update"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary"
            >
              <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
            </RouterLink>

            <RouterLink
              v-if="data.action.edit"
              to=""
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary"
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

import selecteImput from '@/components/inputs/unstim-select.vue'
import modalForm from '@/components/modals/modal-form.vue'

const searchValue = ref('')

const parameters = reactive({
  options: ['Darius', 'ZKP', 'JOHN Doe'],
  placeholder: '--Choississez un employe--',
  searchable: true
})
const data = ref({
  title: 'Demandes de Congés / Permissions',

  headers: [
    { text: 'Matricule', sortable: true, value: 'MA' },
    { text: 'Nom', sortable: true, value: 'NO' },
    { text: 'Prenom', sortable: true, value: 'PR' },
    { text: 'Service', sortable: true, value: 'SE' },
    { text: 'Type', sortable: true, value: 'TY' },
    { text: 'Début', sortable: true, value: 'DE' },
    { text: 'Reprendre le', sortable: true, value: 'RE' },
    { text: 'Nombre de jour', sortable: true, value: 'NJ' },
    { text: 'Statut', sortable: true, value: 'statut' },

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
      statut: 'accepte'
    },
    {
      MA: '1566AJ-S',
      NO: 'EKP',
      PR: 'DARIUS',
      SE: 'xx',
      TY: 'xx',
      DE: 'xx',
      RE: 'xx',
      NJ: '25',
      statut: 'termine'
    },
    {
      MA: '1566AJ-S',
      NO: 'EKP',
      PR: 'DARIUS',
      SE: 'xx',
      TY: 'xx',
      DE: 'xx',
      RE: 'xx',
      NJ: '25',
      statut: 'encours'
    }
  ],
  action: {
    edit: false,
    update: true,
    delete: true
  },
  buttons: [
    { title: 'Voir les point des congés ', color: '#2b9eff', to: 'conge-annuel' },
    { title: 'Enrégistrement congé/Pemission ', color: '#2b9eff', to: 'save-conge' },
    { title: 'Voir les types de congés ', color: '#2b9eff', to: 'type-conge' },
    { title: 'Voir les congés arrivant à terme', color: 'red', to: 'end-conge' }
  ]
})
</script>

<style lang="scss" scoped></style>
