<template>
  <RouterLink
    @click.prevent="$router.back()"
    to=""
    class="flex items-center mb- gap-2 p-2 mb-9 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
  >
    <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
    <span class="text-sm font-medium"> Retour </span>
  </RouterLink>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium"> {{ dataPage.title }}</span>
    </div>

    <div class="flex flex-wrap my-3 justify-center" v-if="dataPage.buttons">
      <modalForm
        class="ml-1 mt-2"
        :title-btn="'Liste des types d\'absences'"
        :color-btn="'rgba(15, 199, 199, 0.726)'"
        :title-modal="'Liste des types d\'absences'"
        :icons="icons.CoPrint"
      >
        <selecteImput :label="'Types d\'absences'" :parameters="paramType" :isRequired="true" />
        <imput :label="'Année '" :isRequired="true" :type="'date'" class="flex-grow" />
      </modalForm>

      <modalForm
        class="ml-1 mt-2"
        :title-btn="'Liste par direction'"
        :color-btn="'rgba(15, 199, 199, 0.726)'"
        :title-modal="'Liste des types d\'absences'"
        :icons="icons.CoPrint"
      >
        <selecteImput :label="'Type d\'absence'" :parameters="paramDirection" :isRequired="true" />
        <imput :label="'Année '" :isRequired="true" :type="'date'" class="flex-grow" />
      </modalForm>

      <modalForm
        class="ml-1 mt-2"
        :title-btn="'Liste par catégorie'"
        :color-btn="'rgba(15, 199, 199, 0.726)'"
        :title-modal="'Liste des types d\'absences'"
        :icons="icons.CoPrint"
      >
        <selecteImput :label="'Type d\'absence'" :parameters="paramCategory" :isRequired="true" />
        <imput :label="'Année '" :isRequired="true" :type="'date'" class="flex-grow" />
      </modalForm>

      <modalForm
        class="ml-1 mt-2"
        :title-btn="'Congés de marternité'"
        :color-btn="'rgba(15, 199, 199, 0.726)'"
        :title-modal="'Liste des conges de maternité'"
        :icons="icons.CoPrint"
      >
        <selecteImput :label="'Services'" :parameters="paramService" :isRequired="true" />
        <selecteImput :label="'Directions'" :parameters="paramDirection" :isRequired="true" />
        <imput :label="'Année '" :isRequired="true" :type="'date'" class="flex-grow" />
      </modalForm>

      <modalForm
        class="ml-1 mt-2"
        :title-btn="'Déductible des congés'"
        :color-btn="'rgba(15, 199, 199, 0.726)'"
        :title-modal="'Liste salaire deductibles'"
        :icons="icons.CoPrint"
      >
        <selecteImput :label="'Service'" :parameters="paramService" :isRequired="true" />
        <imput :label="'Mois '" :isRequired="true" :type="'month'" class="flex-grow" />
      </modalForm>

      <modalForm
        class="ml-1 mt-2"
        :title-btn="'Déductible des gains'"
        :color-btn="'rgba(15, 199, 199, 0.726)'"
        :title-modal="'Liste salaire deductibles'"
        :icons="icons.CoPrint"
      >
        <selecteImput :label="'Service'" :parameters="paramService" :isRequired="true" />
        <imput :label="'Mois '" :isRequired="true" :type="'month'" class="flex-grow" />
      </modalForm>

      <modalForm
        class="ml-1 mt-2"
        :title-btn="'Non déductible des conges'"
        :color-btn="'rgb(255, 193, 7)'"
        :title-modal="'Non déductible des conges'"
        :icons="icons.CoPrint"
      >
        <selecteImput :label="'Type d\'absence'" :parameters="paramType" :isRequired="true" />

        <selecteImput :label="'Services'" :parameters="paramService" :isRequired="true" />
        <imput :label="'Année '" :isRequired="true" :type="'date'" class="flex-grow" />
      </modalForm>

      <modalForm
        class="ml-1 mt-2"
        :title-btn="'Non déductible des gains'"
        :color-btn="'rgb(255, 193, 7)'"
        :title-modal="'Non déductible des gains'"
        :icons="icons.CoPrint"
      >
        <selecteImput :label="'Type d\'absence'" :parameters="paramType" :isRequired="true" />

        <selecteImput :label="'Services'" :parameters="paramService" :isRequired="true" />
        <imput :label="'Année '" :isRequired="true" :type="'date'" class="flex-grow" />
      </modalForm>

      <modalForm
        class="ml-1 mt-2"
        :title-btn="'Départ congés'"
        :color-btn="'rgb(255, 193, 7)'"
        :title-modal="'Départ congés'"
        :icons="icons.CoPrint"
      >
        <selecteImput :label="'Services'" :parameters="paramService" :isRequired="true" />
        <imput :label="'Mois '" :isRequired="true" :type="'month'" class="flex-grow" />
      </modalForm>
      <modalForm
        class="ml-1 mt-2"
        :title-btn="'Fin congés'"
        :color-btn="'rgb(255, 193, 7)'"
        :title-modal="'Fin congés'"
        :icons="icons.CoPrint"
      >
        <selecteImput :label="'Services'" :parameters="paramService" :isRequired="true" />
        <imput :label="'Mois '" :isRequired="true" :type="'month'" class="flex-grow" />
      </modalForm>

      <modalForm
        class="ml-1 mt-2"
        :title-btn="'Personne intérim'"
        :title-modal="'Période'"
        :icons="icons.CoPrint"
      >
        <imput
          :label="'Choisissez le mois de départ '"
          :isRequired="true"
          :type="'date'"
          class="flex-grow"
        />
        <imput
          :label="'Choisissez le mois de fin '"
          :isRequired="true"
          :type="'date'"
          class="flex-grow"
        />
      </modalForm>

      <template v-for="(btn, item) in dataPage.buttons" :key="item">
        <RouterLink
          :style="{ backgroundColor: btn.color }"
          :to="btn.to"
          class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60 mx-1 mt-2"
        >
          <span class="text-sm font-medium"> {{ btn.title }}</span>
        </RouterLink>
      </template>
    </div>

    <tabPointUser :datatable="dataTable" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { icons } from '@/assets/icons/oh-vue-icons'
import tabPointUser from '@/components/tabs-rha/tab-point-user.vue'
import imput from '@/components/inputs/unstim-text.vue'
import selecteImput from '@/components/inputs/unstim-select.vue'
import modalForm from '@/components/modals/modal-form.vue'

const paramType = reactive({
  options: [
    'Congé annuel',
    'congé spécial',
    'Disponibilité',
    'Permission',
    'Permission réglémentaire',
    'Récupération',
    'Sanitare'
  ],
  placeholder: '--Choississez --',
  searchable: true,
  mode: 'tags'
})

const paramDirection = reactive({
  options: [
    "Direction de l'administration",
    "Direction de l'audit du contrôle de gestion et de l'inspection",
    "Direction de l'exploitation Commerciale",
    'Direction des envois Express et du Transport',
    'Direction Génerale',
    'Direction poste finance'
  ],
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
const paramService = reactive({
  options: [
    'Agence Commerciale Abomey Calavi',
    'Agence Commerciale Abomey Calavi',
    'Agence Commerciale Abomey Calavi'
  ],
  placeholder: '--Choississez --',
  searchable: true,
  mode: 'tags'
})

const dataTable = [
  {
    matricule: '152-55',
    name: 'Darius',
    departement: 'Akassato',
    date1: '15/22/23',
    date2: '25/32/23',
    totalGlobal: '52',
    anne1: {
      total: '25/25',
      joui: '25',
      reliquat: '22'
    },
    anne2: {
      total: '25/255/2',
      joui: '25',
      reliquat: '65'
    },
    anne3: {
      total: '8/55',
      joui: '65',
      reliquat: '22/55'
    }
  },
  {
    matricule: '152-55',
    name: 'Darius',
    departement: 'Akassato',
    date1: '15/22/23',
    date2: '25/32/23',
    totalGlobal: '52',
    anne1: {
      total: '25/25',
      joui: '25',
      reliquat: '22'
    },
    anne2: {
      total: '25/255/2',
      joui: '25',
      reliquat: '65'
    },
    anne3: {
      total: '8/55',
      joui: '65',
      reliquat: '22/55'
    }
  },
  
]

const dataPage = ref({
  title: 'Point des congés annuel',

  buttons: [
    {
      title: 'Point des congés Section/Département/Agence ',
      color: '#2b9eff',
      to: 'conge-service'
    },
    { title: "Calculer les congés dus de l'annee en cours", color: '#2b9eff', to: '' },
    { title: 'Imprimer point simple ', color: 'rgb(255, 193, 7)', to: '' },
    { title: '  Imprimer point  Détaillé ', color: 'rgb(255, 193, 7)', to: 'create-typeconge' }
  ]
})
</script>

<style lang="scss" scoped></style>
