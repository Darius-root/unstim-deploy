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
          <v-icon :name="icons.CoPrint" scale="1.1" />

          <span class="text-sm font-medium"> {{ btn.title }}</span>
        </RouterLink>
      </template>
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
      </easy-data-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { icons } from '@/assets/icons/oh-vue-icons'

const searchValue = ref('')

const parameters = reactive({
  options: ['Darius', 'ZKP', 'JOHN Doe'],
  placeholder: '--Choississez un employe--',
  searchable: true
})
const data = ref({
  title: 'Listes des membres',
  headers: [
    { text: 'N°', sortable: true, value: 'NO' },
    { text: 'Matricule', sortable: true, value: 'PR' },
    { text: 'Grade', sortableFin: true, value: 'SE' },
    { text: 'Fonction', sortable: true, value: 'TY' },
    { text: 'Début', sortable: true, value: 'DE' },
    { text: 'Fin', sortable: true, value: 'FN' }
  ],
  items: [
    {
      NO: '1',
      PR: 'XX',
      SE: 'jOHN',
      TY: 'XXX',
      DE: '12/32/56',
      FN: '15/55'
    },
    {
      NO: '2',
      PR: 'XX',
      SE: 'xx',
      TY: 'XX',
      DE: '12/32/56',
      FN: '15/55'
    }
  ],
  buttons: [{ title: '  Imprimer ', color: 'rgb(255, 193, 7)', to: '' }]
})
</script>

<style lang="scss" scoped></style>
