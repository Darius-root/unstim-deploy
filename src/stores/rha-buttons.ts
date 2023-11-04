import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { icons } from '@/assets/icons/oh-vue-icons'

export const useRhaButtonStore = defineStore('rhaButton', () => {
  const rhaButtons = reactive([
    {
      type: 'button',
      color: '#2b9eff',
      title: ' Enregistrer un agent ',
      icon: icons.FaUserCircle,
      to: '/lien'
    },
    {
      type: 'button',
      color: '#2b9eff',
      title: ' Depart à la retraite ',
      icon: icons.FaUserCircle,
      to: '/lien'
    },
  
    {
      type: 'button',
      color: '#2b9eff',
      title: 'Affectations',
      icon: icons.FaUserCircle,
      to: '/lien'
    },
  
    {
      type: 'button',
      color: '#2b9eff',
      title: 'Intérims',
      icon: icons.FaUserCircle,
      to: '/lien'
    },
    {
      type: 'button',
      color: '#2b9eff',
      title: 'Promotion',
      icon: icons.FaUserCircle,
      to: '/lien'
    },
    {
      type: 'button',
      color: '#0cba66',
      title: 'Entrées - sorties',
      icon: icons.FaUserCircle,
      to: '/lien'
    },
  
    {
      type: 'button',
      color: '#2b9eff',
      title: 'Avancements',
      icon: icons.FaUserCircle,
      to: '/lien'
    },
  
    {
      type: 'button',
      color: '#0cba66',
      title: 'Avancées',
      icon: icons.FaUserCircle,
      to: '/lien'
    },
  
    {
      type: 'button',
      color: '#ee4e4e',
      title: 'Déductions',
      icon: icons.FaUserCircle,
      to: '/lien'
    },
  
    {
      type: 'button',
      color: '#3f3e45',
      title: 'Situations des enfants',
      icon: icons.FaUserCircle,
      to: '/lien'
    },
  
    {
      type: 'button',
      color: '#0cba66',
      title: 'Statistiques',
      icon: icons.FaUserCircle,
      to: '/lien'
    }
  ])

  return { rhaButtons }
})
