<template>

<div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium"> Configurations Plan de Passation de Marchés</span>
    </div>



    <div class="flex justify-end my-8">


        <div>
        <div class="flex ">
    <div class="flex-1  border">
        <div class="border-b p-2 ">
            <h4 class="col-span-12 font-semibold text-center ">Marchés</h4>
        </div>
        <div class="grid grid-cols-2 gap-4 m-4">
            <RouterLink to="type-marche" class="border p-2  ">
                <span class="">Types de Marchés</span>
            </RouterLink>
            <RouterLink to="situation-marche" class="border p-2  ">
                <span class="">Situation des Marchés</span>
            </RouterLink>
            <RouterLink to="methode-selection" class="border p-2  ">
                <span class="">Méthode de sélection</span>
            </RouterLink>
            <RouterLink to="bailleur-marche" class="border p-2  ">
                <span class="">Bailleurs</span>
            </RouterLink>
        </div>
    </div>

    <div class="flex-1 border">
        <div class="border-b p-2">
            <h4 class="col-span-12 font-semibold text-center">Passation</h4>
        </div>
        <div class="grid grid-cols-2 gap-4 m-4">
            <RouterLink to="methode-passation" class="border p-2  ">
                <span class="">Méthodes de Passation</span>
            </RouterLink>
            <RouterLink to="version-marche" class="border p-2  ">
                <span class="">Version de PPM</span>
            </RouterLink>
            <RouterLink to="etape-passation" class="border p-2  ">
                <span class="">Étape de Passation</span>
            </RouterLink>
            <RouterLink to="modele-passation" class="border p-2  ">
                <span class="">Modèle de Passation</span>
            </RouterLink>
        </div>
    </div>

    <div class="flex-1 border">
        <div class="border-b p-2">
            <h4 class="col-span-12 font-semibold text-center">Edition</h4>
        </div>
        <div class="grid grid-cols-2 gap-4 m-4">
            <RouterLink to="type-point-etape" class="border p-2  ">
                <span class="">Types Point Etapes</span>
            </RouterLink>
            <RouterLink to="prestataire-marche" class="border p-2  ">
                <span class="">Prestataires</span>
            </RouterLink>
            <RouterLink to="indicateur-performance" class="border p-2  ">
                <span class="">Indicateurs de Performance</span>
            </RouterLink>
        </div>
    </div>
</div>
    </div>

    </div>
 
  </div>









    
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>