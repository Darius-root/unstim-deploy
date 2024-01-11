import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useSygStatStore = defineStore('sygStat', () => {
  const sygStats = reactive([
    {
      label: 'Nombre de participation',
      valeur: '00',
      couleur: ''
    },

    {
      label: 'Participations avec soumissions',
      valeur: '00',
      couleur: ''
    },
    {
      label: 'Participations sans soumissions',
      valeur: '23',
      couleur: ''
    },

    {
      label: 'Résumés soumis',
      valeur: '18',
      couleur: ''
    },
    {
      label: 'Résumés en cours d\'évaluation',
      valeur: '02',
      couleur: ''
    },

  
    {
      label: 'Résumés validés',
      valeur: '07',
      couleur: '#55caad'
    },

    {
      label: 'Résumés rejetés',
      valeur: '10',
      couleur: '#e43224'
    },
   
  ])

  return { sygStats }
})
