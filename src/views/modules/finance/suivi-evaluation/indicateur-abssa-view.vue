<template>
  <RouterLink @click.prevent="$router.back()" to=""
    class="flex items-center mt-2 gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
    <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
    <span class="text-sm font-medium"> Retour </span>
  </RouterLink>
  <div class="mx-auto xl:container mt-5">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium"> Liste des indicateurs xx</span>
    </div>

    <div class="max-w-full p-5 mt-5 border row">


      <table class="table mt-3 w-full">
        <tbody>
          <tr>
            <th class="py-2 text-left font-medium border-b">Cadre de resultat :</th>
            <td class="border-b">xxxxxxxx</td>
          </tr>
          <tr>
            <th class="py-2 text-left font-medium border-b">Valeur de reference :</th>
            <td class="border-b">xxxxxxxx</td>
          </tr>

          <tr>
            <th class="py-2 text-left font-medium border-b">Valeur cible :</th>
            <td class="border-b">xxxxxxxx</td>
          </tr>

          <tr>
            <th class="py-2 text-left font-medium border-b">Unite de mesure :</th>
            <td class="border-b">xxxxxxxx</td>
          </tr>

          <tr>
            <th class="py-2 text-left font-medium border-b">Mode d'aggregation :</th>
            <td class="border-b">xxxxxxxx</td>
          </tr>
          <tr>
            <th class="py-2 text-left font-medium border-b">Mode de calcul :</th>
            <td class="border-b">xxxxxxxx</td>
          </tr> <tr>
            <th class="py-2 text-left font-medium border-b">Methodologie de determination :</th>
            <td class="border-b">xxxxxxxx</td>
          </tr>
        </tbody>
      </table>

      <div class="flex space-x-8 m-6">


        
        <RouterLink to="indicateur-abssa-update"
          class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-green-600 hover:opacity-50">
          <v-icon :name="icons.EditIcon" scale="1.0" /> Modifier
        </RouterLink>

        <RouterLink to=""
          class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-500 hover:opacity-50">
          <v-icon :name="icons.DeleteIcon" scale="1.0" /> Supprimer
        </RouterLink>
      </div>
    </div>



    <div class="max-w-full p-5  mt-6 border row">
      <div class="flex py-2 justify-center  border-b top-line">
        <span class="text-base font-medium"> Indicateurs
        </span>
      </div>


      <div class="flex mt-5">
        <RouterLink to="operandes-multiple-create"
          class="flex items-center gap-2 p-2 bg-green-600 text-white rounded shadow hover:bg-opacity-60 mx-1">
          <v-icon :name="icons.AddIcon" scale="1.1" />

          <span class="text-sm font-medium"> Définir un opérande </span>
        </RouterLink>


      </div>

      <div class="flex justify-end my-3 items-center space-x-2">
        <span class="text-base font-medium">Filtrer:</span>
        <input type="text" v-model="searchValue" class="border-gray-300 rounded-md px-3 py-2" />
      </div>
      <easy-data-table alternating border-cell :headers="data.headers" class="text-lg" theme-color="#2f9fff"
        :items="data.items" buttons-pagination searchable :search-value="searchValue">
        <template #item-action="">

         

          <div class="flex gap-3 row justify-start items-start"> <RouterLink to="operandes-multiple-follow" 
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-teal-600 hover:opacity-50">
              <v-icon :name="icons.MenuFold" scale="1.0" />
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
  title: 'Cadre de resultat',

  headers: [
    { text: 'N°', sortable: true, value: 'MA' },
    { text: 'Valeur cible', sortable: true, value: 'NO' },
    


    { text: 'Actions', sortable: true, value: 'action' }
  ],
  items: [
    {
      MA: '1',
      NO: 'xxxx',
      

    },

  ],

})

</script>
  
<style lang="scss" scoped></style>
  