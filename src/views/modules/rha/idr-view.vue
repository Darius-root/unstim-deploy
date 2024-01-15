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
                 <th class="py-2 text-left font-medium border-b">Nom & Prénoms :</th>
                 <td class="border-b">AMOUSSOU VICTORINE L. K . A. EPSE MOUSS
                    <a href="" class="text-blue-500 text-sm block">
                        Consulter la fiche de l'employée
                    </a>
                </td>
            </tr>
            <tr>
                 <th class="py-2 text-left font-medium border-b">Référence :</th>
                 <td class="border-b">..../2023/LPB/DAF/DRH</td>
            </tr>
            <tr>
                 <th class="py-2 text-left font-medium border-b">Salaire mensuel :</th>
                 <td class="border-b">318 400 f CFA</td>
            </tr>
            <tr>
                 <th class="py-2 text-left font-medium border-b">Indemnité par tranche d'ancienneté :</th>
                 <td class="border-b">2 191 229</td>
            </tr>
            <tr>
                 <th class="py-2 text-left font-medium border-b">Indemnité de départ à la retraite :</th>
                 <td class="border-b">1 205 176 f CFA</td>
            </tr>
            <tr>
                 <th class="py-2 text-left font-medium border-b">CNSS :</th>
                 <td class="border-b">43 386 f CFA</td>
            </tr>
            <tr>
                 <th class="py-2 text-left font-medium border-b">Part Patronale :</th>
                 <td class="border-b">197 649 f CFA</td>
            </tr>
            <tr>
                 <th class="py-2 text-left font-medium border-b">Total :</th>
                 <td class="border-b">1 205 176 f CFA</td>
            </tr>
            <tr>
                 <th class="py-2 text-left font-medium border-b">IPTS :</th>
                 <td class="border-b">283 053 f CFA</td>
            </tr>
            <tr>
                 <th class="py-2 text-left font-medium border-b">Net :</th>
                 <td class="border-b">878 737 f CFA</td>
            </tr>
            <tr>
                 <th class="py-2 text-left font-medium border-b">Détails des taux :</th>
                 <td class="border-b">(1 205 176 * 5 * 30) + (1 205 176 * 5 * 35) + (1 205 176 * 9.08 * 40)</td>
            </tr>
            <tr>
                 <th class="py-2 text-left font-medium border-b">Ancienneté :</th>
                 <td class="border-b">19 ans 1 mois</td>
            </tr>
            <tr>
                 <th class="py-2 text-left font-medium border-b">Date de naissance :</th>
                 <td class="border-b">31 décembre 1962</td>
            </tr>
            <tr>
                 <th class="py-2 text-left font-medium border-b">Date de départ à la retraite :</th>
                 <td class="border-b">01 janvier 2023</td>
            </tr>
            <tr>
                 <th class="py-2 text-left font-medium border-b">Dernier Poste occupé :</th>
                 <td class="border-b">Préposé d’Exploitation Niveau 1</td>
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
  