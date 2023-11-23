<template>
  <TemplatePagesConfig
    :headers="data.headers"
    :action="data.action"
    :items="data.items"
    :title="data.title"
    :button="data.buttons"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TemplatePagesConfig from '@/components/templatePagesTab.vue'

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

const data = ref({
  title: 'Définition des objectifs',

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
  buttons: [{ title: 'Ajouter une attente ', color: '#2b9eff', to: 'create-objectif' }]
})
</script>

<style scoped></style>
