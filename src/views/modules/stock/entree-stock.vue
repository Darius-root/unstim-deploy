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
          <v-icon :name="icons.AddIcon" scale="1.1" />

            <span class="text-sm font-medium"> {{ btn.title }}</span>
          </RouterLink>
        </template>

        <RouterLink
            
            to=""
            class="flex items-center gap-2 p-2 bg-slate-400  text-white rounded shadow hover:bg-opacity-60 mx-1"
          >
          <v-icon :name="icons.ExportIcon" class="rotate-180" scale="1.1" />

            <span class="text-sm font-medium"> Télecharger Pdf</span>
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
                to="entree-update"
                class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-yellow-600 hover:opacity-50"
              >
                <v-icon :name="icons.EditIcon" scale="1.0" />
              </RouterLink>
  
              <RouterLink
                to=""
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
  
  const searchValue = ref('')
  

  const data = ref({
    title: 'Listes des entrées de stocks',
  
    headers: [
      { text: 'N°', sortable: true, value: 'MA' },
      { text: 'Bon de commande', sortable: true, value: 'NO' },
      { text: 'Description', sortable: true, value: 'PR' },
      { text: 'Fournisseur ', sortable: true, value: 'SE' },
      { text: 'Entrepôt', sortable: true, value: 'TY' },
     

      { text: 'Actions', sortable: true, value: 'action' }
    ],
    items: [
      {
        MA: '1',
        NO: 'xxxx',
        PR: 'xxxx',
        SE: 'xxxx',
        TY: 'xxxx',
       

        statut: 'xxxx',
      },
     
    ],
   
    buttons: [
      { title: 'Ajouter une entrée ', color: '#2b9eff', to: 'entree-create' }
    ]
  })
  </script>
  
  <style lang="scss" scoped></style>
  