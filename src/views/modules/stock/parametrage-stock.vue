<template>

    <div class="mx-auto xl:container">
        <div class="flex py-2 border-b top-line">
          <span class="text-base font-medium"> Configurations Plan de Passation de Marchés</span>
        </div>
    
    
    
        <div class="flex justify-center my-8">
    
    
            <div>
            <div class="flex shadow-md rounded-md ">
        <div class="flex-1  border  ">
            <div class="border-b p-2 ">
                <h4 class="col-span-12 font-semibold text-center ">Importations de fichiers</h4>
            </div>
            <div class="grid grid-cols-2 gap-4 m-4">
                <RouterLink to="" class="border border-unstim-primary p-2 hover:bg-unstim-primary  hover:opacity-50 hover:text-white ">
                    <span class=" ">Importer familles</span>
                </RouterLink>
                <RouterLink to="" class="border border-unstim-primary p-2  ">
                    <span class="">Importer categories</span>
                </RouterLink>
                <RouterLink to="methode-selection" class="border border-unstim-primary p-2 ">
                    <span class="">Importer fournisseurs</span>
                </RouterLink>
                <RouterLink to="bailleur-marche" class="border border-unstim-primary p-2 ">
                    <span class="">Importer articles</span>
                </RouterLink>
            </div>
        </div>
    
        <div class="flex-1 border">
            <div class="border-b p-2">
                <h4 class="col-span-12 font-semibold text-center">Méthodes de calcul des coûts</h4>
            </div>
            <div class="grid grid-cols-2 gap-4 m-4">
                <AlertDialogRoot class="">
      <AlertDialogTrigger
        class="border border-unstim-primary p-2 ">
                    <span class="">Configurer</span>
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
          
Configurer une methode          </AlertDialogTitle>

          <AlertDialogDescription class="text-[15px] p-5 leading-normal">
            <div class="grid grid-cols-1 gap-4">
              <div class="flex flex-col space-y-2 input-group">
                <label for="" class="text-sm text-left">Saisissez le plan de formation </label>
                <selecteImput :label="'Méthodes'" :parameters="parameters" :isRequired="true" />
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
              Enregistrer
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialogRoot>


               
               
            </div>
        </div>
    
    
    </div>
        </div>
    
        </div>
     
      </div>
    
    
    
    
    
  
    
        
    </template>
    
    <script setup lang="ts">
    
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


import selecteImput from '@/components/inputs/unstim-select.vue'
import { reactive, } from 'vue'
const parameters = reactive({
    options: ['xxx', 'xxxxxxx',],
    placeholder: '--Choississez un xxx--',
    searchable: true,
/*   mode: 'tags'
 */})

    </script>
    
    <style scoped>
    
    </style>