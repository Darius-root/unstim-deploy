
<template>
  <div class="mx-auto xl:container">

    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium "> {{ data.title }}</span>
    </div>

    <div class="flex  flex-wrap my-3  justify-center" v-if="data.buttons">


      <modalForm class="ml-1 mt-2" :title-btn="'Liste des types d\'absences'" :color-btn="'rgba(15, 199, 199, 0.726)'"
        :title-modal="'Liste des types d\'absences'" :icons="icons.CoPrint">
        <selecteImput :label="'Types d\'absences'" :parameters='paramType' :isRequired="true" />
        <imput :label="'Année '" :isRequired="true" :type="'date'" class="flex-grow" />
      </modalForm>


      <modalForm class="ml-1 mt-2" :title-btn="'Liste par direction'" :color-btn="'rgba(15, 199, 199, 0.726)'"
        :title-modal="'Liste des types d\'absences'" :icons="icons.CoPrint">
        <selecteImput :label="'Type d\'absence'" :parameters='paramDirection' :isRequired="true" />
        <imput :label="'Année '" :isRequired="true" :type="'date'" class="flex-grow" />
      </modalForm>


      <modalForm class="ml-1 mt-2" :title-btn="'Liste par catégorie'" :color-btn="'rgba(15, 199, 199, 0.726)'"
        :title-modal="'Liste des types d\'absences'" :icons="icons.CoPrint">
        <selecteImput :label="'Type d\'absence'" :parameters='paramCategory' :isRequired="true" />
        <imput :label="'Année '" :isRequired="true" :type="'date'" class="flex-grow" />
      </modalForm>


      <modalForm class="ml-1 mt-2" :title-btn="'Congés de marternité'" :color-btn="'rgba(15, 199, 199, 0.726)'"
        :title-modal="'Liste des conges de maternité'" :icons="icons.CoPrint">
        <selecteImput :label="'Services'" :parameters='paramService' :isRequired="true" />
        <selecteImput :label="'Directions'" :parameters='paramDirection' :isRequired="true" />
        <imput :label="'Année '" :isRequired="true" :type="'date'" class="flex-grow" />
      </modalForm>


      <modalForm class="ml-1 mt-2" :title-btn="'Déductible des congés'" :color-btn="'rgba(15, 199, 199, 0.726)'"
        :title-modal="'Liste salaire deductibles'" :icons="icons.CoPrint">
        <selecteImput :label="'Service'" :parameters='paramService' :isRequired="true" />
        <imput :label="'Mois '" :isRequired="true" :type="'month'" class="flex-grow" />
      </modalForm>

      <modalForm class="ml-1 mt-2" :title-btn="'Déductible des gains'" :color-btn="'rgba(15, 199, 199, 0.726)'"
        :title-modal="'Liste salaire deductibles'" :icons="icons.CoPrint">
        <selecteImput :label="'Service'" :parameters='paramService' :isRequired="true" />
        <imput :label="'Mois '" :isRequired="true" :type="'month'" class="flex-grow" />
      </modalForm>



      <modalForm class="ml-1 mt-2" :title-btn="'Non déductible des conges'" :color-btn="'rgb(255, 193, 7)'"
        :title-modal="'Non déductible des conges'" :icons="icons.CoPrint">
        <selecteImput :label="'Type d\'absence'" :parameters='paramType' :isRequired="true" />

        <selecteImput :label="'Services'" :parameters='paramService' :isRequired="true" />
        <imput :label="'Année '" :isRequired="true" :type="'date'" class="flex-grow" />
      </modalForm>


      <modalForm class="ml-1 mt-2" :title-btn="'Non déductible des gains'" :color-btn="'rgb(255, 193, 7)'"
        :title-modal="'Non déductible des gains'" :icons="icons.CoPrint">
        <selecteImput :label="'Type d\'absence'" :parameters='paramType' :isRequired="true" />

        <selecteImput :label="'Services'" :parameters='paramService' :isRequired="true" />
        <imput :label="'Année '" :isRequired="true" :type="'date'" class="flex-grow" />
      </modalForm>


      <modalForm class="ml-1 mt-2" :title-btn="'Départ congés'" :color-btn="'rgb(255, 193, 7)'"
        :title-modal="'Départ congés'" :icons="icons.CoPrint">

        <selecteImput :label="'Services'" :parameters='paramService' :isRequired="true" />
        <imput :label="'Mois '" :isRequired="true" :type="'month'" class="flex-grow" />
      </modalForm>
      <modalForm class="ml-1 mt-2" :title-btn="'Fin congés'" :color-btn="'rgb(255, 193, 7)'" :title-modal="'Fin congés'"
        :icons="icons.CoPrint">

        <selecteImput :label="'Services'" :parameters='paramService' :isRequired="true" />
        <imput :label="'Mois '" :isRequired="true" :type="'month'" class="flex-grow" />
      </modalForm>


      <modalForm class="ml-1 mt-2" :title-btn="'Personne intérim'" :title-modal="'Période'" :icons="icons.CoPrint">

        <imput :label="'Choisissez le mois de départ '" :isRequired="true" :type="'date'" class="flex-grow" />
        <imput :label="'Choisissez le mois de fin '" :isRequired="true" :type="'date'" class="flex-grow" />
      </modalForm>


      <template v-for="(btn, item) in data.buttons">
        <RouterLink :style="{ backgroundColor: btn.color }" :to="btn.to"
          class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60 mx-1 mt-2">
          <span class="text-sm font-medium"> {{ btn.title }}</span>
        </RouterLink>
      </template>

    </div>
    <div class="max-w-full p-5 mt-3 border row">
      <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
        class="text-white bg-slate-500 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button">Exporter <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 10 6">
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
        <input type="text" v-model="searchValue" class=" border-gray-300 rounded-md px-3 py-2">
      </div>
      <easy-data-table alternating border-cell :headers="data.headers" class="text-lg" theme-color="#2f9fff"
        :items="data.items" buttons-pagination searchable :search-value="searchValue">

        <template #header="header">
      {{ header.text.toUpperCase() }}fefeufh
    </template>

    <!--     <template #customize-headers>

          <thead class="text-sm">
            <tr >
              <th rowspan="2" class="text-center" 
                colspan="1" 
>Nº</th>
              <th rowspan="2" class="text-center">Matricule
              </th>
              <th >Nom &amp; Prénoms</th>
              <th rowspan="2" >Département/Section/Agence</th>
              <th colspan="3" class="text-center" rowspan="1">2020</th>
              <th colspan="3" class="text-center" rowspan="1">2021</th>
              <th colspan="3" class="text-center" rowspan="1">2022</th>
              <th colspan="3" class="text-center" rowspan="1">2023</th>
              <th rowspan="2"  style="width: 29px;">1ère date
              </th>
              <th rowspan="2" >2nde date
              </th>
              <th rowspan="2" >
                Total global solde</th>
            </tr>
            <tr role="row">
              <th class="text-center" >Total du</th>
              <th >Joui</th>
              <th>Reliquat</th>
              <th >Total du</th>
              <th >Joui</th>
              <th >Reliquat</th>
              <th >Total du</th>
              <th >Joui</th>
              <th >Reliquat</th>
              <th >Total du</th>
              <th >Joui</th>
              <th >Reliquat</th>
            </tr>
          </thead>

        </template> -->




        <template #item-statut="">



          <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-600 text-white">
            Accepté </span>

        </template>
        <template #item-action="action">gnjbjggbjg
          <div class="flex gap-3 row justify-center items-center">

            <RouterLink to="" v-if="data.action.update"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
              <v-icon :name="icons.FormPWShowIcon" scale="1.0" />

            </RouterLink>

            <RouterLink v-if="data.action.edit" to=""
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
              <v-icon :name="icons.EditIcon" scale="1.0" />

            </RouterLink>

            <RouterLink to="" v-if="data.action.delete"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-600 hover:bg-red-400">
              <v-icon :name="icons.DeleteIcon" scale="1.0" />

            </RouterLink>
          </div>

        </template>
      </easy-data-table>







    </div>







  </div>
</template>

<script lang="ts"  setup>
import { reactive, ref } from 'vue';
import { icons } from '@/assets/icons/oh-vue-icons'

import imput from '@/components/inputs/unstim-text.vue'
import selecteImput from '@/components/inputs/unstim-select.vue'
import modalForm from '@/components/modals/modal-form.vue'


const searchValue = ref("");

const paramType = reactive({
  options: ['Congé annuel', 'congé spécial', 'Disponibilité', 'Permission', 'Permission réglémentaire', 'Récupération', 'Sanitare'],
  placeholder: '--Choississez --',
  searchable: true,
  mode: 'tags'
})

const paramDirection = reactive({
  options: ['Direction de l\'administration',
    'Direction de l\'audit du contrôle de gestion et de l\'inspection',
    'Direction de l\'exploitation Commerciale',
    'Direction des envois Express et du Transport',
    'Direction Génerale', 'Direction poste finance'],
  placeholder: '--Choississez --',
  searchable: true,
  mode: 'tags'
})

const paramCategory = reactive({
  options: ['C1', 'C2', 'C3', 'C4', 'E1', 'E2', 'E3', 'E4'],
  placeholder: '--Choississez... --',
  searchable: true,
  mode: 'tags'
})
const paramService = reactive(
  {
    options: ['Agence Commerciale Abomey Calavi', 'Agence Commerciale Abomey Calavi', 'Agence Commerciale Abomey Calavi'],
    placeholder: '--Choississez --',
    searchable: true,
    mode: 'tags'
  }
)






const data = ref({
  title: 'Point des congés annuel',

  headers: [{ text: 'Matricule', sortable: true, value: 'MA' },
  { text: 'Nom', sortable: true, value: 'NO' },
  { text: 'Prenom', sortable: true, value: 'PR' },
  { text: 'Service', sortable: true, value: 'SE' },
  { text: 'Type', sortable: true, value: 'TY' },
  { text: 'Début', sortable: true, value: 'DE' },
  { text: 'Reprendre le', sortable: true, value: 'RE' },
  { text: 'Nombre de jour', sortable: true, value: 'NJ' },
  { text: 'Statut', sortable: true, value: 'statut' },

  { text: 'Actions', sortable: true, value: 'action' },],
  items: [{
    MA: '1566AJ-S',
    NO: 'EKP',
    PR: 'DARIUS',
    SE: 'xx',
    TY: 'xx',
    DE: 'xx',
    RE: 'xx',
    NJ: '25',
    statut: 'accepte',

  }, {
    MA: '1566AJ-S',
    NO: 'EKP',
    PR: 'DARIUS',
    SE: 'xx',
    TY: 'xx',
    DE: 'xx',
    RE: 'xx',
    NJ: '25',
    statut: 'termine',

  }, {
    MA: '1566AJ-S',
    NO: 'EKP',
    PR: 'DARIUS',
    SE: 'xx',
    TY: 'xx',
    DE: 'xx',
    RE: 'xx',
    NJ: '25',
    statut: 'encours',

  },

  ], action: {
    edit: true,
    update: true,
    delete: true
  },
  buttons: [
    { title: 'Point des congés Section/Département/Agence ', color: '#2b9eff', to: '' },
    { title: 'Calculer les congés dus de l\'annee en cours', color: '#2b9eff', to: '' },
    { title: 'Imprimer point simple ', color: 'rgb(255, 193, 7)', to: '' },
    { title: '  Imprimer point  Détaillé ', color: 'rgb(255, 193, 7)', to: '' },

  ],
})

</script>

<style lang="scss" scoped></style>