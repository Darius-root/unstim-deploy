<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium"> {{ props.title }}</span>
    </div>

    <div class="flex justify-end my-3" v-if="props.button">
      <template v-for="(btn, index) in props.button" :key="index">
        <RouterLink :style="{ backgroundColor: btn.color }" :to="{ name: btn.to }"
          class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60 mx-1">
          <span class="text-sm font-medium"> {{ btn.title }}</span>
        </RouterLink>
      </template>
      <slot></slot>
    </div>
    <div class="max-w-full p-5 mt-3 border row">
      <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
        class="text-white bg-slate-500 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button">
        Exporter
        <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div id="dropdownHover"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
          <li>
            <a href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
              out</a>
          </li>
        </ul>
      </div>

      <div class="flex justify-end my-3 items-center space-x-2">
        <span class="text-base font-medium">Filtrer:</span>
        <input type="text" v-model="searchValue" class="border-gray-300 rounded-md px-3 py-2" />
      </div>
      <easy-data-table alternating border-cell :headers="props.headers" class="text-lg" theme-color="#2f9fff"
        :items="props.items" buttons-pagination searchable :search-value="searchValue">
        <template #item-action="">
          <div class="flex gap-3 row justify-center items-center">
            <RouterLink to="" v-if="props.action.update"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
              <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
            </RouterLink>

            <RouterLink v-if="props.action.edit" to=""
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
              <v-icon :name="icons.EditIcon" scale="1.0" />
            </RouterLink>

            <RouterLink to="" v-if="props.action.delete"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-600 hover:bg-red-400">
              <v-icon :name="icons.DeleteIcon" scale="1.0" />
            </RouterLink>
          </div>
        </template>
      </easy-data-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { icons } from '@/assets/icons/oh-vue-icons'
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps({
  headers: {
    type: Array as () => headerType[],
    required: true
  },
  items: {
    type: Array as () => any[],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  action: {
    type: Object as () => actionType,
    required: true
  },

  button: {
    type: Array as () => btnType[],
    required: false
  }
})

interface headerType {
  text: string
  sortable: boolean
  value: string
}

interface actionType {
  edit: boolean
  update: boolean
  delete: boolean
}

interface btnType {
  title: string
  color: string
  to: string
}
const searchValue = ref('')
</script>

<style lang="scss" scoped></style>
