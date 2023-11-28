<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium"> {{ data.title }}</span>
    </div>

    <div class="flex justify-end my-3" v-if="data.buttons">
      <template v-for="(btn, item) in data.buttons" :key="item">
        <RouterLink
          :style="{ backgroundColor: btn.color }"
          :to="btn.to"
          class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60 mx-1"
        >
          <span class="text-sm font-medium"> {{ btn.title }}</span>
        </RouterLink>
      </template>
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
              to="plan-strategique-view"
              v-if="data.action.update"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-green-600 hover:opacity-50"
            >
              <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
            </RouterLink>

            <RouterLink
              v-if="data.action.edit"
              to="plan-strategique-edit"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-yellow-600 hover:opacity-50"
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

const searchValue = ref('')

const parameters = reactive({
  options: ['Darius', 'ZKP', 'JOHN Doe'],
  placeholder: '--Choississez un employe--',
  searchable: true
})
const data = ref({
  title: 'Plans Strategiques',

  headers: [
    { text: 'id', sortable: true, value: 'MA' },
    { text: 'code', sortable: true, value: 'NO' },
    { text: 'Libelle', sortable: true, value: 'PR' },
    { text: 'Date début', sortable: true, value: 'SE' },
    { text: 'Date fin', sortable: true, value: 'TY' },
    { text: 'Statut', sortable: true, value: 'statut' },

    { text: 'Actions', sortable: true, value: 'action' }
  ],
  items: [
    {
      MA: '1',
      NO: '55-ddd',
      PR: 'johndeo',
      SE: '25/5/21',
      TY: '22/99/55',

      statut: 'Activer'
    },
    {
      MA: '2',
      NO: '55-ddd',
      PR: 'johndeo',
      SE: '25/5/219',
      TY: '24/8/26',

      statut: 'desactiver'
    }
  ],
  action: {
    edit: true,
    update: true,
    delete: true
  },
  buttons: [
    { title: 'Ajouter un plan stratégique ', color: '#2b9eff', to: 'plan-strategique-create' }
  ]
})
</script>

<style lang="scss" scoped></style>
