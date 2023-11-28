<template>
    <RouterLink
      @click.prevent="$router.back()"
      to=""
      class="flex items-center mt-2 gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
    >
      <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
      <span class="text-sm font-medium"> Retour </span>
    </RouterLink>
    <div class="mx-auto xl:container mt-5">
      <div class="flex py-2 border-b top-line">
        <span class="text-base font-medium"> Direction</span>
      </div>
  
      <div class="max-w-full p-5 mt-5 border row">

        <div class="flex py-2 justify-center  border-b top-line">
        <span class="text-base font-medium"> UNSTIM</span>
      </div>
        <table class="table mt-3 w-full">
          <tbody>
            <tr>
              <th class="py-2 text-left font-medium border-b">Id :</th>
              <td class="border-b">xxxxxxxx</td>
            </tr>
            <tr>
              <th class="py-2 text-left font-medium border-b">Code :</th>
              <td class="border-b">xxxxxxxx</td>
            </tr>
           
            <tr>
              <th class="py-2 text-left font-medium border-b">Occupant :</th>
              <td class="border-b">xxxxxxxx</td>
            </tr>
          </tbody>
        </table>
      </div>
  


      <div class="max-w-full p-5  mt-6 border row">
        <div class="flex py-2 justify-center  border-b top-line">
        <span class="text-base font-medium"> Directions techniques et cellules
</span>
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
        <template #item-action="">
          <div class="flex gap-3 row justify-start items-start">
            <RouterLink
              to="niveau-analytique-view"
              v-if="data.action.edit"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-green-600 hover:opacity-50"
            >
              <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
            </RouterLink>

            <RouterLink
              to="source-financement-update"
              v-if="data.action.update"
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
import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue';
  
  const searchValue = ref('')
  
  const data = ref({
    title: 'Unites de mesure',
  
    headers: [
      { text: 'N°', sortable: true, value: 'MA' },
      { text: 'Libellé', sortable: true, value: 'NO' },
  
      { text: 'Actions', sortable: true, value: 'action' }
    ],
    items: [
      {
        MA: '1',
        NO: '55-ddd',
      },
      {
        MA: '2',
        NO: '55-ddd',
      }
    ],
    action: {
      edit: true,
      update: true,
      delete: true
    },
    buttons: [{ title: 'Ajouter une Unite de mesure ', color: '#2b9eff', to: 'unite-mesure-create' }]
  })
    
  </script>
  
  <style lang="scss" scoped>

  </style>
  