<template>
  <TemplatePagesConfig
    :headers="data.headers"
    :action="data.action"
    :items="data.items"
    :title="data.title"
    :button="data.buttons"
  >
    <modalForm
      class="mx-2"
      :title-btn="'Par service'"
      :title-modal="'Imprimer le suivi par service'"
      :color-btn="'rgb(255, 193, 7)'"
      :icons="icons.CoPrint"
    >
      <selecteImput :label="'Service'" :parameters="parameters" :isRequired="true" />
      <imput :label="'Année '" :isRequired="true" class="flex-grow" />
    </modalForm>

    <modalForm
      class="mx-2"
      :title-btn="'Par saison'"
      :title-modal="'Imprimer le suivi par saison '"
      :color-btn="'rgb(255, 193, 7)'"
      :icons="icons.CoPrint"
    >
      <selecteImput :label="'Saison'" :parameters="parameters" :isRequired="true" />
      <imput :label="'Année '" :isRequired="true" class="flex-grow" />
    </modalForm>
  </TemplatePagesConfig>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import TemplatePagesConfig from '@/components/templatePagesTab.vue'
import { icons } from '@/assets/icons/oh-vue-icons'
import modalForm from '@/components/modals/modal-form.vue'

import imput from '@/components/inputs/unstim-text.vue'
import selecteImput from '@/components/inputs/unstim-select.vue'
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger
} from 'radix-vue'

const parameters = reactive({
  options: ['Darius', 'ZKP', 'JOHN Doe'],
  placeholder: '--Choississez un employe--',
  searchable: true
})

const data = ref({
  title: ' Suivi des Performances',

  headers: [
    { text: 'Année', sortable: true, value: 'annee' },
    { text: 'Nombre', sortable: true, value: 'nb' },
    { text: 'Actions', sortable: true, value: 'action' }
  ],
  items: [
    {
      annee: '2023',
      nb: '55'
    }
  ],
  action: {
    edit: true,
    update: true,
    delete: true
  },
  buttons: [{ title: 'Ajouter une performance ', color: '#2b9eff', to: 'create-performance' }]
})
</script>

<style scoped></style>
