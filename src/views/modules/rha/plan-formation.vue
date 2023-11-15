<template >


  <TemplatePagesConfig :headers="data.headers" :action="data.action" :items="data.items"
         :title="data.title"  :button="data.buttons" >
         
         <modalForm class="mx-2" :title-btn="'Ajouter un plan de formation'" :title-modal="'Imprimer le suivi par service'"
      :icons="icons.CoPrint">
      <imput :label="' Saisissez le plan de formation '" :isRequired="true" class="flex-grow" />

    </modalForm>
         
         </TemplatePagesConfig>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TemplatePagesConfig from "@/components/templatePagesTab.vue";

import modalForm from '@/components/modals/modal-form.vue'    
import { icons } from '@/assets/icons/oh-vue-icons'
import imput from '@/components/inputs/unstim-text.vue'


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


const data =ref( { title: 'Liste des plans de formation',
                    
                    headers: [{ text: 'Plan de formation', sortable: true, value: 'nom' },
                    { text: 'Catalogue', sortable: true, value: 'cat' },
                    { text: 'Actions', sortable: true, value: 'action' },],
                    items: [{
                        nom: 'Dev vue',
                        cat: 'xxxxx',
                        action: '',
                    },

                    ], action: {
                        edit: true,
                        update: true,
                        delete: true
                    },
                    buttons: [
                    { title: 'Imprimer', color: 'rgb(170, 167, 4)', to: '' },],})
</script>





<style scoped>

</style>