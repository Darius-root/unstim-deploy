<template>
    <RouterLink @click.prevent="$router.back()" to=""
        class="flex items-center mt-2 gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
        <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
        <span class="text-sm font-medium"> Retour </span>
    </RouterLink>
    <div class="mx-auto xl:container mt-5">
        <div class="flex py-2 border-b top-line">
            <span class="text-base font-medium"> PTA version xxxx</span>
        </div>

        <div class="max-w-full p-5 mt-5 border row">
            <div class="flex py-2 justify-between mb-5  top-line">
                <div class="flex">
                    <RouterLink to="pta-version-create"
                        class="flex items-center gap-2 p-2 bg-green-600 text-white rounded shadow hover:bg-opacity-60 mx-1">
                        <v-icon :name="icons.MenuFold" scale="1.1" />
                        <span class="text-sm font-medium"> Nouvelle version</span>
                    </RouterLink>

                    <RouterLink to="pta-activite-create"
                        class="flex items-center gap-2 p-2 bg-green-600 text-white rounded shadow hover:bg-opacity-60 mx-1">
                        <v-icon :name="icons.BiPaperclip" scale="1.1" />

                        <span class="text-sm font-medium"> Importer</span>
                    </RouterLink>
                </div>
                <PopoverRoot>
                    <PopoverTrigger
                        class="flex items-center gap-2 p-2 bg-gray-600 text-white rounded shadow hover:bg-opacity-60 ">
                        Actions
                    </PopoverTrigger>
                    <PopoverPortal>
                        <PopoverContent side="bottom" :side-offset="5"
                            class="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade">
                            <div class="flex flex-col gap-2.5">
                                <p class="text-mauve12 text-[15px] leading-[19px] font-semibold mb-2.5">
                                    Actions dans le PTA
                                </p>
                                <div class="flex min-w-0 gap-x-4">
                                    <v-icon :name="icons.PersonW" scale="1.1" />
                                    <div class="min-w-0 flex-auto">
                                        <p class="text-sm font-semibold leading-6 text-gray-900">Darius john</p>
                                        <p class="mt-1 truncate text-xs leading-5 text-gray-500"> A crée le pta xxxx</p>
                                    </div>
                                </div>
                                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p class="mt-1 text-xs leading-5 text-gray-500">29/21/2023 <time
                                            datetime="2023-01-23T13:23Z">à 9:10:25s</time></p>
                                </div>

                                <div class="flex min-w-0 gap-x-4">
                                    <v-icon :name="icons.PersonW" scale="1.1" />
                                    <div class="min-w-0 flex-auto">
                                        <p class="text-sm font-semibold leading-6 text-gray-900">Darius john</p>
                                        <p class="mt-1 truncate text-xs leading-5 text-gray-500"> A crée le pta xxxx</p>
                                    </div>
                                </div>
                                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p class="mt-1 text-xs leading-5 text-gray-500">29/21/2023 <time
                                            datetime="2023-01-23T13:23Z">à 9:10:25s</time></p>
                                </div>

                            </div>
                            <PopoverClose
                                class=" h-[25px] w-[25px] inline-flex items-center justify-center text-grass11 absolute top-[5px] right-[5px] hover:bg-green4 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default"
                                aria-label="Close">
                                x </PopoverClose>
                            <PopoverArrow class="fill-white" />
                        </PopoverContent>
                    </PopoverPortal>
                </PopoverRoot>





            </div>



            <div class="flex py-2 justify-center mb-5 border-b border-t top-line">
                <span class="text-base font-medium"> PTA xxxx (version: xx) du PS xx (code: xxxx)

                </span> <span class="inline-flex items-center ml-2 rounded-md text-xs font-medium bg-orange-600 text-white">
                    En cours de validation
                </span>
            </div>
            <table class="table mt-3 w-full">
                <tbody>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">
                            Version Précédente :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">
                            Version Revisitée :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr>

                    <tr>
                        <th class="py-2 text-left font-medium border-b">Observation :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">Execution Physique <span class="text-red-600">(Les
                                Activités ne sont pas au complet)</span> :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">Engagement :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">Ordonnancement :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">Rapport du PTA :</th>
                        <td class="border-b">

                            <RouterLink to="" class=" text-white bg-green-700  hover:bg-opacity-60 ">
                                <v-icon :name="icons.ExportIcon" scale="1.1" />
                                <span class="text-base rounded-sm font-medium"> Télécharger

                                </span>
                            </RouterLink>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="flex  my-8">


                <RouterLink to=""
                    class="flex items-center gap-2 p-2  text-white bg-red-600 rounded shadow hover:bg-opacity-60 mx-1">
                    <v-icon :name="icons.DeleteIcon" scale="1.1" />

                    <span class="text-sm font-medium"> Supprimer</span>
                </RouterLink>
                <RouterLink to="pta-update"
                    class="flex items-center gap-2 p-2 text-white bg-yellow-600 rounded shadow hover:bg-opacity-60 mx-1">
                    <v-icon :name="icons.EditIcon" scale="1.1" />

                    <span class="text-sm font-medium"> Modifier</span>
                </RouterLink>


                <RouterLink to="pta-validate"
                    class="flex items-center gap-2 p-2 text-white bg-green-600 rounded shadow hover:bg-opacity-60 mx-1">
                    <v-icon :name="icons.EditIcon" scale="1.1" />

                    <span class="text-sm font-medium"> Valider</span>
                </RouterLink>
            </div>
        </div>


        <div class="p-5 mt-3 border row">
            <AccordionRoot class="w-full border z-10" default-value="'item-1'" type="single" :collapsible="true">
                <AccordionItem class="overflow-hidden" value="Recherche avancée">
                    <AccordionHeader class="flex">
                        <AccordionTrigger
                            class="text-base bg-slate-100 font-medium hover:bg-slate-200 transition-all flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] group">
                            <span>Executions Financieres</span>
                            <v-icon :name="icons.ChevronDown" :scale="0.8"
                                class="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent
                        class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp -z-20 overflow-hidden text-[15px]">
                        <div class="px-5 py-4">


                            <easy-data-table alternating border-cell :headers="dataFinancieres.headers" class="text-lg"
                                theme-color="#2f9fff" :items="dataFinancieres.items" buttons-pagination searchable>

                            </easy-data-table>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </AccordionRoot>
        </div>





        <div class="p-5 mt-3 border row">
            <AccordionRoot class="w-full border z-10" default-value="'item-1'" type="single" :collapsible="true">
                <AccordionItem class="overflow-hidden" value="Recherche avancée">
                    <AccordionHeader class="flex">
                        <AccordionTrigger
                            class="text-base bg-slate-100 font-medium hover:bg-slate-200 transition-all flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] group">
                            <span>Executions Physiques</span>
                            <v-icon :name="icons.ChevronDown" :scale="0.8"
                                class="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent
                        class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp -z-20 overflow-hidden text-[15px]">
                        <div class="px-5 py-4">


                            <easy-data-table alternating border-cell :headers="dataPhysiques.headers" class="text-lg"
                                theme-color="#2f9fff" :items="dataPhysiques.items" buttons-pagination searchable>

                            </easy-data-table>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </AccordionRoot>
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
                                <template #item-action="">
                                    <div class="flex gap-3 row justify-start items-start">


                                        <RouterLink to=""
                                            class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-600 hover:bg-red-400">
                                            <v-icon :name="icons.DeleteIcon" scale="1.0" />
                                        </RouterLink>
                                    </div>
                                </template>
                            </easy-data-table>








                        </div>
                    </AccordionContent>
                </AccordionItem>
            </AccordionRoot>
        </div>




        <div class="p-5 mt-3 border row">
            <AccordionRoot class="w-full border z-10" default-value="'item-1'" type="single" :collapsible="true">
                <AccordionItem class="overflow-hidden" value="Recherche avancée">
                    <AccordionHeader class="flex">
                        <AccordionTrigger
                            class="text-base bg-slate-100 font-medium hover:bg-slate-200 transition-all flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] group">
                            <span>Activités (xxx%)</span>
                            <v-icon :name="icons.ChevronDown" :scale="0.8"
                                class="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent
                        class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp -z-20 overflow-hidden text-[15px]">
                        <div class="px-5 py-4">
                            <div class="flex  my-3">
                                <RouterLink to="pta-activite-create"
                                    class="flex items-center gap-2 p-2 bg-green-600 text-white rounded shadow hover:bg-opacity-60 mx-1">
                                    <v-icon :name="icons.AddIcon" scale="1.1" />

                                    <span class="text-sm font-medium"> Ajouter une activité</span>
                                </RouterLink>
                            </div>
                            <div class="flex justify-end my-3 items-center space-x-2">
                                <span class="text-base font-medium">Filtrer:</span>
                                <input type="text" v-model="searchValue" class="border-gray-300 rounded-md px-3 py-2" />
                            </div>
                            <easy-data-table alternating border-cell :headers="dataActivite.headers" class="text-lg"
                                theme-color="#2f9fff" :items="dataActivite.items" buttons-pagination searchable
                                :search-value="searchValue">
                                <template #item-action="">
                                    <div class="flex gap-3 row justify-start items-start">
                                        <RouterLink to="pta-activite-view" v-if="dataActivite.action.edit"
                                            class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-green-600 hover:opacity-50">
                                            <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
                                        </RouterLink>

                                        <RouterLink to="pta-activite-update" v-if="dataActivite.action.update"
                                            class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-yellow-600 hover:opacity-50">
                                            <v-icon :name="icons.EditIcon" scale="1.0" />
                                        </RouterLink>

                                        <RouterLink to="" v-if="dataActivite.action.delete"
                                            class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-600 hover:bg-red-400">
                                            <v-icon :name="icons.DeleteIcon" scale="1.0" />
                                        </RouterLink>
                                    </div>
                                </template>



                                <template #item-statut="">
                                    <span class=" flex rounded-md text-xs font-medium bg-gray-500 text-white">
                                        Non demarrer
                                    </span>
                                </template>


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
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue'



const searchValue = ref('')

const dataFinancieres = ref({

    headers: [
        { text: 'N°', sortable: true, value: 'MA' },
        { text: 'Service', sortable: true, value: 'NO' },

        { text: 'Execution Financiere (Ordonnancement)', sortable: true, value: 'EF' },
        { text: 'Execution Financiere (Engagement)', sortable: true, value: 'EE' },
        { text: 'Execution Financiere (Total)', sortable: true, value: 'ET' },
    ],
    items: [
        {
            MA: '1',
            NO: 'XX',
            EF: 'XX',
            EE: 'XX',
            ET: 'XX',
        },

    ],

})



const dataPhysiques = ref({

    headers: [
        { text: 'N°', sortable: true, value: 'MA' },
        { text: 'Service', sortable: true, value: 'NO' },

        { text: 'Execution Totale', sortable: true, value: 'EF' },

    ],
    items: [
        {
            MA: '1',
            NO: 'XX',
            EF: 'XX',

        },

    ],

})



const dataFinancement = ref({
    title: 'Plan de Travail Annuel',

    headers: [
        { text: 'N°', sortable: true, value: 'MA' },
        { text: 'Libellé', sortable: true, value: 'NO' },
        { text: 'Bailleur', sortable: true, value: 'PR' },
        { text: 'Mode de financement', sortable: true, value: 'SE' },
        { text: 'Coût total', sortable: true, value: 'TY' },

        { text: 'Actions', sortable: true, value: 'action' }
    ],
    items: [
        {
            MA: '1',
            NO: 'xxxx',
            PR: 'xxxx',
            SE: 'xxxx',
            TY: 'xxxx',

        },

    ],


})


const dataActivite = ref({
    title: 'Unites de mesure',

    headers: [
        { text: 'N°', sortable: true, value: 'MA' },
        { text: 'Code', sortable: true, value: 'CO' },


        { text: 'Libellé', sortable: true, value: 'NO' },

        { text: 'Mode d\'exécution', sortable: true, value: 'ME' },
        { text: 'Poids', sortable: true, value: 'PO' },
        { text: 'Structure responsable', sortable: true, value: 'RE' },
        { text: 'Structure associée', sortable: true, value: 'SA' },
        { text: 'Démarrage prévue le', sortable: true, value: 'DL' },
        { text: 'Termine le/ Fini prévu le ', sortable: true, value: 'TF' },


        { text: 'Statut', sortable: true, value: 'statut' },


        { text: 'Actions', sortable: true, value: 'action' }
    ],
    items: [
        {
            MA: 'XX',
            CO: 'XX',
            NO: 'XX',
            ME: 'XX',
            PO: 'XX',
            RE: 'XX',
            SA: 'XX',
            DL: 'XX',
            TF: 'XX',
            statut: 'Activer'








        },

    ],
    action: {
        edit: true,
        update: true,
        delete: true
    },
})


</script>
  
<style lang="scss" scoped></style>
  