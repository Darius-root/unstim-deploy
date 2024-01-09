import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useRhaStatStore = defineStore('rhaStat', () => {
  const rhaStats = reactive([
    {
      label: 'Nominations',
      valeur: '00',
      couleur: ''
    },

    {
      label: 'APEs',
      valeur: '00',
      couleur: ''
    },
    {
      label: 'Conventionnées',
      valeur: '23',
      couleur: ''
    },

    {
      label: 'Contractuels',
      valeur: '18',
      couleur: ''
    },
    {
      label: 'Détachements',
      valeur: '02',
      couleur: ''
    },

    {
      label: 'Salaire moyen',
      valeur: '250000',
      couleur: ''
    },
    {
      label: 'Rappels',
      valeur: '14',
      couleur: ''
    },

    {
      label: 'Formation en cours',
      valeur: '02',
      couleur: '#55caad'
    },
    {
      label: 'Formations à venir',
      valeur: '02',
      couleur: ''
    },
    {
      label: 'Congés/Permissions',
      valeur: '07',
      couleur: '#55caad'
    },

    {
      label: 'Retenus',
      valeur: '10',
      couleur: '#e43224'
    },
    {
      label: 'Sanctions',
      valeur: '01',
      couleur: '#e43224'
    },

    {
      label: "Nombre d'utilisateurs",
      valeur: '12',
      couleur: ''
    },

    {
      label: 'Courriers arrivés',
      valeur: '17',
      couleur: '#0071f7'
    },
    {
      label: 'Annonces',
      valeur: '03',
      couleur: ''
    },
    {
      label: 'Courriers départ',
      valeur: '22',
      couleur: '#0071f7'
    }
  ])

  return { rhaStats }
})
