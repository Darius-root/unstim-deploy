<template>
    <div class="mx-auto xl:container">
        <RouterLink @click.prevent="$router.back()" to=""
            class="flex items-center my-2 gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
            <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
            <span class="text-sm font-medium"> Retour </span>
        </RouterLink>



        <div class="flex py-2 border-b top-line">
            <span class="text-base font-normal">Ajouter un Rappel</span>
        </div>

        <div class="bg-white shadow-md rounded-lg mt-3 p-6">
            <form>
                <div class="grid grid-cols-2 gap-6">
                    <selecteImput :label="'Sélectionner un agent'" :parameters="parameters" :isRequired="true" />

                    <imput :label="'Fontion '" :status="true" :isRequired="true" class="flex-grow" />
                    <imput :label="' Service'" :status="true" :isRequired="true" class="flex-grow" />
                   
                    <selecteImput :label="'Ancien Grade'" :parameters="parameters" :isRequired="true" />
                    <selecteImput :label="'Nouveau Grade'" :parameters="parameters" :isRequired="true" />
                    <imput :label="' Date'" :type="'date'" :isRequired="true" class="flex-grow" />
                    <imput :label="' Fin'"  :type="'date'" :isRequired="true" class="flex-grow" />
                    <imput :label="' Gain de Résidence'" 
                     :type="'number'" :isRequired="true" class="flex-grow" />
                    <selecteImput :label="'Gain de Logement'" :parameters="parameters" :isRequired="true" />
                    <selecteImput :label="'Sur salaire'" :parameters="parameters" :isRequired="true" />


                 

                </div>


                <button type="submit"
                    class="bg-blue-500 mt-4 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">
                    Enregistrer
                </button>
            </form>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { icons } from '@/assets/icons/oh-vue-icons'
import selecteImput from '@/components/inputs/unstim-select.vue'
import imput from '@/components/inputs/unstim-text.vue'
import { reactive, ref } from 'vue'
const parameters = reactive({
    options: ['xxx', 'xxxxxxx',],
    placeholder: '--Choississez un xxx--',
    searchable: true,
/*   mode: 'tags'
 */})










</script>
  
<style scoped></style>
  