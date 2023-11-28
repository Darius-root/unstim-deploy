<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium"> {{ datasource.title }}</span>
    </div>

    <div class="flex justify-end my-3" v-if="datasource.buttons">
      <template v-for="(btn, item) in datasource.buttons" :key="item">
        <RouterLink
          :style="{ backgroundColor: btn.color }"
          :to="btn.to"
          class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60 mx-1"
        >
          <v-icon :name="icons.AddIcon" scale="1.0" />

          <span class="text-sm font-medium"> {{ btn.title }}</span>
        </RouterLink>
      </template>
    </div>
    <div class="max-w-full p-5 mt-3 border row">
      <div class="flex justify-end my-3 items-center space-x-2">
        <span class="text-base font-medium">Filtrer:</span>
        <input type="text" v-model="searchValue1" class="border-gray-300 rounded-md px-3 py-2" />
      </div>
      <easy-data-table
        alternating
        border-cell
        :headers="datasource.headers"
        class="text-lg"
        theme-color="#2f9fff"
        :items="datasource.items"
        buttons-pagination
        searchable
        :search-value="searchValue1"
      >
        <template #item-action="">
          <div class="flex gap-3 row justify-center items-center">
            <RouterLink
              to="niveau-analytique-view"
              v-if="datamode.action.edit"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-green-600 hover:opacity-50"
            >
              <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
            </RouterLink>

            <RouterLink
              to="source-financement-update"
              v-if="datamode.action.update"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-yellow-600 hover:opacity-50"
            >
              <v-icon :name="icons.EditIcon" scale="1.0" />
            </RouterLink>

            <RouterLink
              to=""
              v-if="datamode.action.delete"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-600 hover:bg-red-400"
            >
              <v-icon :name="icons.DeleteIcon" scale="1.0" />
            </RouterLink>
          </div>
        </template>
      </easy-data-table>
    </div>
  </div>

  <div class="mx-auto xl:container mt-10">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium"> {{ datamode.title }}</span>
    </div>

    <div class="flex justify-end my-3" v-if="datamode.buttons">
      <template v-for="(btn, item) in datamode.buttons" :key="item">
        <RouterLink
          :style="{ backgroundColor: btn.color }"
          :to="btn.to"
          class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60 mx-1"
        >
          <v-icon :name="icons.AddIcon" scale="1.0" />

          <span class="text-sm font-medium"> {{ btn.title }}</span>
        </RouterLink>
      </template>
    </div>
    <div class="max-w-full p-5 mt-3 border row">
      <div class="flex justify-end my-3 items-center space-x-2">
        <span class="text-base font-medium">Filtrer:</span>
        <input type="text" v-model="searchValue2" class="border-gray-300 rounded-md px-3 py-2" />
      </div>
      <easy-data-table
        alternating
        border-cell
        :headers="datamode.headers"
        class="text-lg"
        theme-color="#2f9fff"
        :items="datamode.items"
        buttons-pagination
        searchable
        :search-value="searchValue2"
      >
        <template #item-action="">
          <div class="flex gap-3 row justify-center items-center">
            <RouterLink
              to="niveau-analytique-view"
              v-if="datamode.action.edit"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-green-600 hover:opacity-50"
            >
              <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
            </RouterLink>

            <RouterLink
              to="mode-financement-update"
              v-if="datamode.action.update"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-yellow-600 hover:opacity-50"
            >
              <v-icon :name="icons.EditIcon" scale="1.0" />
            </RouterLink>

            <RouterLink
              to=""
              v-if="datamode.action.delete"
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
import { ref } from 'vue'
import { icons } from '@/assets/icons/oh-vue-icons'

const searchValue1 = ref('')

const datasource = ref({
  title: 'Liste des Sources de financement',

  headers: [
    { text: 'N°', sortable: true, value: 'MA' },
    { text: 'Libellé', sortable: true, value: 'NO' },
    { text: 'Bailleur', sortable: true, value: 'PR' },
    { text: 'Mode de financement', sortable: true, value: 'SE' },

    { text: 'Actions', sortable: true, value: 'action' }
  ],
  items: [
    {
      MA: '1',
      NO: '55-ddd',
      PR: 'johndeo',
      SE: '25/5/21'
    },
    {
      MA: '2',
      NO: '55-ddd',
      PR: 'johndeo',
      SE: '25/5/219'
    }
  ],
  action: {
    edit: false,
    update: true,
    delete: true
  },
  buttons: [{ title: 'Source de financement ', color: '#2b9eff', to: 'source-financement-create' }]
})

const searchValue2 = ref('')

const datamode = ref({
  title: 'Liste des Modes de financement',

  headers: [
    { text: 'N°', sortable: true, value: 'MA' },
    { text: 'Libellé', sortable: true, value: 'NO' },

    { text: 'Actions', sortable: true, value: 'action' }
  ],
  items: [
    {
      MA: '1',
      NO: '55-ddd'
    },
    {
      MA: '2',
      NO: '55-ddd'
    }
  ],
  action: {
    edit: false,
    update: true,
    delete: true
  },
  buttons: [
    { title: ' Modes de financement ', color: '#2b9eff', to: 'Ajouter niveau-analytique-create' }
  ]
})
</script>

<style lang="scss" scoped></style>
