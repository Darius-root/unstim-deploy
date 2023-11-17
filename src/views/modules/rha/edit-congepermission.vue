<template>
    <div class="mx-auto xl:container">
       <div class="flex py-2 border-b top-line">
         <span class="text-base font-normal ">Modifier la demande de congé de : XXXXXXXXXXXX</span>
       </div>
   
   
       <div class="bg-white shadow-md rounded-lg mt-3 p-6">
         <form>
            <div class="grid grid-cols-2 gap-6">

                <imput :label="'Nombre de jours'" :type="'number'" :isRequired="true" class="flex-grow" />

                <selecteImput :label="'Type'" :parameters='parameters'  :isRequired="true"/>
                <imput :label="'Intérimaire'"  :isRequired="true" class="flex-grow" />

                <imput :label="'Date de début'"  :isRequired="true" :type="'date'" class="flex-grow" />
                <imput :label="'Date de fin'"  :isRequired="true" :type="'date'" class="flex-grow" />
                <imput :label="'Date de reprise'"  :isRequired="true" :type="'date'" class="flex-grow" />
                <imput :label="'Date de départ effectif'"  :isRequired="true" :type="'date'" class="flex-grow" />
                <imput :label="'Date de retour effectif'"  :isRequired="true" :type="'date'" class="flex-grow" />
                <imput :label="'Date de la demande'"  :isRequired="true" :type="'textearea'" class="flex-grow" />
                <imput :label="'Réponse'"  :isRequired="true" :type="'textearea'" class="flex-grow" />




          
        </div>
 
        <button type="submit" class="bg-blue-500 mt-4 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">Enregistrer</button>
      
      
        <DialogRoot>
    <DialogTrigger >
        <button type="button" class="bg-green-500 mt-4 mx-5 text-white font-medium py-2 px-4 rounded-md hover:opacity-50">
            <v-icon :name="icons.BiPaperclip" scale="1.1" />
Joindre des documents</button>    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 bg-black opacity-50" />
      <DialogContent class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md">
        <DialogTitle class="text-xl font-bold mb-2">
            Ajouter des fichiers
        </DialogTitle>
        <DialogDescription class="text-red-600 text-sm mb-4">
            Taille maximum par fichier : 20 MB        </DialogDescription>
        <div class="max-h-60 overflow-y-auto  "  >
         
         <template  v-for="(input, index) in inputs" :key="index">
            <div class="flex items-center">
                <div class="w-10/12">
            <input type="text" class="w-full mb-4 p-2  border border-gray-300 rounded-md" placeholder="Nom">
          <input type="file" class="w-full mb-4 p-2 border border-gray-300 rounded-md" placeholder="Choissisez unichier">
          <textarea class="w-full mb-4 p-2 border border-gray-300 rounded-md" v-model="input.value" placeholder="Descrition"></textarea>
        </div>
        <div class="ml-4">
            <button v-if="inputs.length >1"  @click="removeInput(index)">      <v-icon :name="icons.DeleteIcon" class="bg-red-500" scale="1.1" /> Supprimer
            </button></div>
        </div>
        </template>
        </div>
<button type="button" @click="addInput" class="bg-green-500 mt-4 mx-5 text-white font-medium py-2 px-4 rounded-md hover:opacity-50">
Ajouter un autre fichier</button>

        <div class="flex  justify-end mt-4 mx-4">
            

          <DialogClose>
            <button class="px-4 py-2 bg-red-500 text-white rounded-md">
              Annuler
            </button>
          </DialogClose>

          <AlertDialogAction
          class="mx-4 ">
            <button class="px-4 py-2 bg-green-500 text-white rounded-md">
              Valider
            </button>          </AlertDialogAction>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>   
      
        



         </form>

        

       </div>
       </div>


       
   </template> 
   
   <script setup lang="ts">
import { icons } from '@/assets/icons/oh-vue-icons'
import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose
} from 'radix-vue';

   import  imput from '@/components/inputs/unstim-text.vue'
   import  selecteImput from '@/components/inputs/unstim-select.vue'
import { reactive, ref } from 'vue';
   const parameters=reactive({
  options: ['Activer', 'Desactiver'],
  placeholder: '--Choississez un employe--',
  searchable: true
})





const inputs = ref([{ value: '' }]);

const addInput = () => {
  inputs.value.push({ value: '' });
};

const removeInput = (index: number) => {
  if (inputs.value.length > 1) {
    inputs.value.splice(index, 1);
  }
};
   </script>
   
   <style scoped>
   
   </style>       