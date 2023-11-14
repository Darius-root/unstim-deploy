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
  title: "Liste des années d'évaluations",

  headers: [
    { text: 'Année', sortable: true, value: 'annee' },
    { text: "Personnel d'exploitation", sortable: true, value: 'exploi' },
    { text: 'Personnel administrative', sortable: true, value: 'admin' },
    { text: 'Actions', sortable: true, value: 'action' }
  ],
  items: [
    {
      annee: '2023',
      exploi: '54dd',
      admin: 'djnd'
    }
  ],
  action: {
    edit: true,
    update: true,
    delete: true
  },
  buttons: [{ title: 'Ajouter une évaluation', color: '#2b9eff', to: 'create-evalution' }]
})
</script>

<style scoped></style>
