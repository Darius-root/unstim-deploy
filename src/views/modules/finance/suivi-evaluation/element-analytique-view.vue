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
      <span class="text-base font-medium">
        Element Analytique xxx (code: xxx) du Plan {{ id.toString() }} xxx (code: xxx)</span
      >
    </div>

    <div class="max-w-full p-5 mt-5 border row">
      <table class="table mt-3 w-full">
        <tbody>
          <tr>
            <th class="py-2 text-left font-medium border-b">Niveau :</th>
            <td class="border-b">xxxxxxxx</td>
          </tr>
          <tr>
            <th class="py-2 text-left font-medium border-b">Parent :</th>
            <td class="border-b">xxxxxxxx</td>
          </tr>
          <tr>
            <th class="py-2 text-left font-medium border-b">Description :</th>
            <td class="border-b">xxxxxxxx</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex space-x-8 m-6">
      <RouterLink
      :to="`/element-analytique-update/${id}`"
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
    :to="`/element-analytique-create/${id}`"
      class="flex items-center gap-2 p-2 bg-unstim-primary text-white rounded shadow hover:bg-opacity-60 mx-1"
    >
      <v-icon :name="icons.AddIcon" scale="1.1" />

      <span class="text-sm font-medium">Ajouter un sous Elements Analytiques</span>
    </RouterLink>
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
      <template #item-action="">
        <div class="flex gap-3 row justify-center items-center">
          <RouterLink
          :to="`/element-analytique-view/${id}`"
            v-if="data.action.update"
            class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-green-600 hover:opacity-50"
          >
            <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
          </RouterLink>

          <RouterLink
          :to="`/element-analytique-update/${id}`"
            v-if="data.action.edit"
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
</template>

<script lang="ts" setup>
import { ref, } from 'vue'
import { icons } from '@/assets/icons/oh-vue-icons'

import { useRoute,  } from 'vue-router';
const route = useRoute()
const id =route.params.id

const searchValue = ref('')

const data = ref({
  title: 'Demandes de Congés / Permissions',

  headers: [
    { text: '#', sortable: true, value: 'MA' },
    { text: 'Code', sortable: true, value: 'NO' },
    { text: 'Libelle', sortable: true, value: 'PR' },
    { text: 'Niveau', sortable: true, value: 'SE' },
    { text: 'Description', sortable: true, value: 'TY' },

    { text: 'Actions', sortable: true, value: 'action' }
  ],
  items: [
    {
      MA: '1566AJ-S',
      NO: 'EKP',
      PR: 'DARIUS',
      SE: 'xx',
      TY: 'xx'
    },
    {
      MA: '1566AJ-S',
      NO: 'EKP',
      PR: 'DARIUS',
      SE: 'xx',
      TY: 'xx'
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
