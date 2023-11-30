<template>
    <RouterLink @click.prevent="$router.back()" to=""
        class="flex items-center mt-2 gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
        <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
        <span class="text-sm font-medium"> Retour </span>
    </RouterLink>
    <div class="mx-auto xl:container mt-5">
        <div class="flex py-2 border-b top-line">
            <span class="text-base font-medium"> Tache de PTA</span>
        </div>

        <div class="max-w-full p-5 mt-5 border row">
            



            <div class="flex py-2 justify-center mb-5 border-b top-line">
                <span class="text-base font-medium"> Tache xx (code: xx) de l'Activite yy (code: yy)

                </span> <span class="inline-flex items-center ml-2 rounded-md text-xs font-medium bg-orange-600 text-white">
                    En cours de validation
                </span>
            </div>
            <table class="table mt-3 w-full">
                <tbody>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">
                            ID:</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">
                            Code :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr>

                    <tr>
                        <th class="py-2 text-left font-medium border-b">Libelle	 :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">Poids :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">Numero d'ordre :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">Fini le :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr>
                  
                </tbody>
            </table>

            <div class="flex  my-8">


                <RouterLink to=""
                    class="flex items-center gap-2 p-2  text-white bg-red-600 rounded shadow hover:bg-opacity-60 mx-1">
                    <v-icon :name="icons.DeleteIcon" scale="1.1" />

                    <span class="text-sm font-medium"> Supprimer</span>
                </RouterLink>
                <RouterLink to="pta-tache-update"
                    class="flex items-center gap-2 p-2 text-white bg-yellow-600 rounded shadow hover:bg-opacity-60 mx-1">
                    <v-icon :name="icons.EditIcon" scale="1.1" />

                    <span class="text-sm font-medium"> Modifier</span>
                </RouterLink>


              
            </div>
        </div>
        









        <div class="p-5 mt-3 border row">
            <AccordionRoot class="w-full border z-10" default-value="'item-1'" type="single" :collapsible="true">
                <AccordionItem class="overflow-hidden" value="Recherche avancée">
                    <AccordionHeader class="flex">
                        <AccordionTrigger
                            class="text-base bg-slate-100 font-medium hover:bg-slate-200 transition-all flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] group">
                            <span>Sources de financement</span>
                            <v-icon :name="icons.ChevronDown" :scale="0.8"
                                class="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent
                        class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp -z-20 overflow-hidden text-[15px]">
                        <div class="px-5 py-4">







                            <div class="flex justify-end my-3 items-center space-x-2">
                                <span class="text-base font-medium">Filtrer:</span>
                                <input type="text" v-model="searchValue" class="border-gray-300 rounded-md px-3 py-2" />
                            </div>
                            <easy-data-table alternating border-cell :headers="dataFinancement.headers" class="text-lg"
                                theme-color="#2f9fff" :items="dataFinancement.items" buttons-pagination searchable
                                :search-value="searchValue">
                               
                            </easy-data-table>








                        </div>
                    </AccordionContent>
                </AccordionItem>
            </AccordionRoot>
        </div>




     
    </div>
</template>
  
<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue';
import {
    AccordionContent,
    AccordionHeader,
    AccordionItem,
    AccordionRoot,
    AccordionTrigger
} from 'radix-vue'


const searchValue = ref('')


const dataFinancement = ref({
    title: 'Plan de Travail Annuel',

    headers: [
        { text: 'N°', sortable: true, value: 'MA' },
        { text: 'Libellé', sortable: true, value: 'NO' },
        { text: 'Bailleur', sortable: true, value: 'PR' },
        { text: 'Mode de financement', sortable: true, value: 'SE' },
        { text: 'Coût total', sortable: true, value: 'TY' },

        { text: 'Type', sortable: true, value: 'TYP' }
    ],
    items: [
        {
            MA: '1',
            NO: 'xxxx',
            PR: 'xxxx',
            SE: 'xxxx',
            TY: 'xxxx',
            TYP: 'xxxx',

        },

    ],


})



</script>
  
<style lang="scss" scoped></style>
  