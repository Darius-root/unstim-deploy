<template >


    <TemplatePagesConfig :headers="data.headers" :action="data.action" :items="data.items"
           :title="data.title"  :button="data.buttons" >     
           
              <AlertDialogRoot class="">
                <AlertDialogTrigger  style="background-color:#2b9eff;
;"
                  class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60">
                  <v-icon :name="icons.CoPrint" class="-rotate-90" scale="1.1" />

                  <span class="text-sm font-medium">Rechercher</span>
                </AlertDialogTrigger>

                <AlertDialogPortal>
                  <AlertDialogOverlay
                    class="bg-black/50 data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayClose fixed inset-0 z-30" />
                  <AlertDialogContent
                    class="z-[100] text-[15px] data-[state=open]:animate-contentShow data-[state=closed]:animate-contentClose fixed top-[30%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <AlertDialogTitle class="px-5 py-3 border-b border-gray-200 m-0 text-[17px] font-semibold">
                        Imprimer le suivi par saison                    </AlertDialogTitle>

                    <AlertDialogDescription class="text-[15px] p-5 leading-normal">
                      <div class="grid grid-cols-1 gap-4">
                      

                        <div class="flex flex-col space-y-2 input-group">
                          
                          <selecteImput :label="'Saison'" :parameters='parameters'  :isRequired="true"/>

                         
                          <imput :label="'Année '"  :isRequired="true"  class="flex-grow" />
                          
                        </div>
                      </div>
                    </AlertDialogDescription>

                    <div class="flex justify-end border-t border-gray-200 px-5 py-3 gap-[25px]">
                      <AlertDialogCancel
                        class="bg-slate-400 shadow hover:bg-slate-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold">
                        Annuler
                      </AlertDialogCancel>
                      <AlertDialogAction
                        class="text-red11 bg-red-400 shadow hover:bg-red-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold">
                        Enrégistrer
                      </AlertDialogAction>
                    </div>
                  </AlertDialogContent>
                </AlertDialogPortal>
              </AlertDialogRoot>           
         </TemplatePagesConfig>
     
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import TemplatePagesConfig from "@/components/templatePagesTab.vue";
  import { icons } from '@/assets/icons/oh-vue-icons'

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
  
  const parameters={name:'1', direct:'2'}

  const data =ref( { title: ' Suivi des Performances',
                      
                      headers: [{ text: 'Matricule', sortable: true, value: 'MA' },
                      { text: 'Nom', sortable: true, value: 'NO' },
                      { text: 'Prenom', sortable: true, value: 'PR' },
                      { text: 'Service', sortable: true, value: 'SE' },
                      { text: 'Type', sortable: true, value: 'TY' },
                      { text: 'Début', sortable: true, value: 'DE' },
                      { text: 'Reprendre le', sortable: true, value: 'RE' },
                      { text: 'Nombre de jour', sortable: true, value: 'NJ' },
                      { text: 'Statut', sortable: true, value: 'ST' },

                      { text: 'Actions', sortable: true, value: 'action' },],
                      items: [{
                          MA: '1566AJ-S',
                          NO: 'EKP',
                          PR: 'DARIUS',
                          SE: 'xx',
                          TY: 'xx',
                          DE: 'xx',
                          RE: 'xx',
                          NJ: 'xx',
                          ST: 'xx',

                      },
  
                      ], action: {
                          edit: true,
                          update: true,
                          delete: true
                      },
                      buttons: [
                      { title: 'Voir les point des congés ',color: '#2b9eff', to: 'create-performance' },
                      { title: 'Enrégistrement congé/Pemission ',color: '#2b9eff', to: 'create-performance' },
                      { title: 'Voire les congés à terme',color: 'red', to: 'create-performance' },
                      { title: 'Ajouter une performance ',color: '#2b9eff', to: 'create-performance' },
                    ],})
  </script>
  
  
  
  
  
  <style scoped>
  
  </style>