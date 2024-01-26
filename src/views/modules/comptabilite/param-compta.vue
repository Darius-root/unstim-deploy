<template>
    <div class="mx-auto xl:container">
      <div class="flex py-2 border-b top-line">
        <span class="text-base font-medium"> Configurations</span>
      </div>
  
      <div class="flex justify-end my-8">
        <div>
          <div class="grid grid-cols-4 shadow-md rounded-md ">
            <!-- Boucle pour chaque section -->
            <div v-for="(section, index) in sections" :key="index" class="flex-1 border">
              <div class="border-b p-2">
                <h4 class="col-span-12 font-semibold text-center">{{ section.title }}</h4>
              </div>
              <div class="grid grid-cols-2 gap-4 m-4">
                <!-- Boucle pour chaque lien -->
                <RouterLink v-for="(link, linkIndex) in section.links" :key="linkIndex" :to="link.to" class="border border-unstim-primary p-2">
                  <span>{{ link.label }}</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router';
  
  // Définition des sections et des liens
  const sections = [
    {
      title: 'Compte',
      links: [
        { label: 'Plan comptable', to: '/plan-comptable' },
        { label: 'Importer des comptes', to: '/importer-comptes' },
        { label: 'Méthode de sélection', to: '/methode-selection' },
        { label: 'Importer le plan comptable général', to: '/importer-plan-general' }
      ]
    },
    {
      title: 'Journaux',
      links: [
        { label: 'Liste des journaux', to: '/liste-journaux' },
        { label: 'Importer journaux par défaut', to: '/importer-journaux' },
        { label: 'Importer des journaux (csv. xlsx)', to: '/importer-journaux-csv-xlsx' },
        { label: 'Importer des saisies comptables (csv)', to: '/importer-saisies-comptables' },
        { label: 'Détruire tous les journaux', to: '/detruire-journaux' },
        { label: 'Détruire toutes les saisies', to: '/detruire-saisies' }
      ]
    },
    {
      title: 'Categories tiers',
      links: [
        { label: 'Liste des catégories tiers', to: '/liste-categories-tiers' }
      ]
    },
    {
      title: 'Clôture comptable',
      links: [
        { label: 'Clôture périodique', to: '/cloture-periodique' },
        { label: 'Clôture annuelle', to: '/cloture-annuelle' }
      ]
    }
  ];
  </script>
  
  <style scoped>
  /* Vos styles CSS ici */
  </style>
  