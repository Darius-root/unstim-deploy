<template>
    <RouterLink @click.prevent="$router.back()" to=""
        class="flex items-center mt-2 gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
        <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
        <span class="text-sm font-medium"> Retour </span>
    </RouterLink>
    <div class="mx-auto xl:container mt-5">
       

        <div class="max-w-full p-5 mt-5 border row">
           



            <div class="flex py-2 justify-center mb-5 border-b top-line">
                <span class="text-base font-medium"> Détails 

                </span> 
            </div>
            <table class="table mt-3 w-full">
                <tbody>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">
                            Matricule :</th>
                        <td class="border-b">xxx%</td>
                    </tr>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">
                            Nom & Prénoms:</th>
                        <td class="border-b">xxx%</td>
                    </tr>

                    <tr>
                        <th class="py-2 text-left font-medium border-b">Ancien Grade: </th>
                        <td class="border-b">xxx%</td>
                    </tr>

                    <tr>
                        <th class="py-2 text-left font-medium border-b">Nouveau Grade:</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">Début :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">Fin :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">Sur salaire : :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr> <tr>
                        <th class="py-2 text-left font-medium border-b">Mois de Salaire :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr> <tr>
                        <th class="py-2 text-left font-medium border-b">Nombre de jour(s):</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr> <tr>
                        <th class="py-2 text-left font-medium border-b">Solde indexé :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr> <tr>
                        <th class="py-2 text-left font-medium border-b">Taux logement :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr> <tr>
                        <th class="py-2 text-left font-medium border-b">Gain de Logement :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr>
                    <tr>
                        <th class="py-2 text-left font-medium border-b">Taux résidence:</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr> <tr>
                        <th class="py-2 text-left font-medium border-b">Gain de Résidence :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr> <tr>
                        <th class="py-2 text-left font-medium border-b">Observations :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr> <tr>
                        <th class="py-2 text-left font-medium border-b">Brut :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr> <tr>
                        <th class="py-2 text-left font-medium border-b">CNSS :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr> <tr>
                        <th class="py-2 text-left font-medium border-b">IPTS :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr> <tr>
                        <th class="py-2 text-left font-medium border-b">Net :</th>
                        <td class="border-b">xxxxxxxx</td>
                    </tr> 
                </tbody>
            </table>

        </div>

                <!-- SOURCE FINANCEMENT  -->

   










      



    </div>
</template>
  
<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'



</script>
  
<style lang="scss" scoped></style>
  