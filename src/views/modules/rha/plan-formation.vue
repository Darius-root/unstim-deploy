<template>
  <TemplatePagesConfig
    :headers="data.headers"
    :action="data.action"
    :items="data.items"
    :title="data.title"
    :button="data.buttons"
  >
    <AlertDialogRoot class="">
      <AlertDialogTrigger
        style="background-color: #2b9eff"
        class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60"
      >
        <span class="text-sm font-medium">Ajouter un plan de formation</span>
      </AlertDialogTrigger>

      <AlertDialogPortal>
        <AlertDialogOverlay
          class="bg-black/50 data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayClose fixed inset-0 z-30"
        />
        <AlertDialogContent
          class="z-[100] text-[15px] data-[state=open]:animate-contentShow data-[state=closed]:animate-contentClose fixed top-[30%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
        >
          <AlertDialogTitle
            class="px-5 py-3 border-b border-gray-200 m-0 text-[17px] font-semibold"
          >
            Plan de formation
          </AlertDialogTitle>

          <AlertDialogDescription class="text-[15px] p-5 leading-normal">
            <div class="grid grid-cols-1 gap-4">
              <div class="flex flex-col space-y-2 input-group">
                <label for="" class="text-sm text-left"> Saisissez le plan de formation </label>
                <input type="text" placeholder="Plan  formation triennal 20" class="form-unstim" />
              </div>
            </div>
          </AlertDialogDescription>

          <div class="flex justify-end border-t border-gray-200 px-5 py-3 gap-[25px]">
            <AlertDialogCancel
              class="bg-slate-400 shadow hover:bg-slate-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold"
            >
              Annuler
            </AlertDialogCancel>
            <AlertDialogAction
              class="text-red11 bg-red-400 shadow hover:bg-red-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold"
            >
              Enrégistrer
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialogRoot>
  </TemplatePagesConfig>
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
  title: 'Liste des plans de formation',

  headers: [
    { text: 'Plan de formation', sortable: true, value: 'nom' },
    { text: 'Catalogue', sortable: true, value: 'cat' },
    { text: 'Actions', sortable: true, value: 'action' }
  ],
  items: [
    {
      nom: 'Dev vue',
      cat: 'xxxxx',
      action: ''
    }
  ],
  action: {
    edit: true,
    update: true,
    delete: true
  },
  buttons: [{ title: 'Imprimer', color: 'rgb(170, 167, 4)', to: '' }]
})
</script>

<style scoped></style>
