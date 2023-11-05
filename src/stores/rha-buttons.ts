import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { icons } from '@/assets/icons/oh-vue-icons'

export const useRhaButtonStore = defineStore('rhaButton', () => {
  const rhaButtonsType = reactive({
    link: 'link',
    modal: 'modal',
    action: 'action'
  })

  const rhaButtons = reactive([
    {
      type: rhaButtonsType.link,
      color: '#2b9eff',
      title: ' Enregistrer un agent',
      icon: icons.PersonPlus,
      to: 'create-employee'
    },
    {
      type: rhaButtonsType.link,
      color: '#2b9eff',
      title: ' Depart à la retraite ',
      icon: icons.FaUserCircle,
      to: 'departs-retraite'
    },

    {
      type: rhaButtonsType.modal,
      color: '#2b9eff',
      title: 'Affectations',
      icon: icons.FaUserCircle,
      to: 'create-employee'
    },

    {
      type: rhaButtonsType.modal,
      color: '#2b9eff',
      title: 'Intérims',
      icon: icons.FaUserCircle,
      to: 'create-employee'
    },
    {
      type: rhaButtonsType.modal,
      color: '#2b9eff',
      title: 'Promotion',
      icon: icons.FaUserCircle,
      to: 'create-employee'
    },
    {
      type: rhaButtonsType.modal,
      color: '#0cba66',
      title: 'Entrées - sorties',
      icon: icons.FaUserCircle,
      to: 'create-employee'
    },

    {
      type: rhaButtonsType.link,
      color: '#2b9eff',
      title: 'Avancements',
      icon: icons.FaUserCircle,
      to: 'avancements'
    },

    {
      type: rhaButtonsType.modal,
      color: '#0cba66',
      title: 'Avancées',
      icon: icons.FaUserCircle,
      to: 'create-employee'
    },

    {
      type: rhaButtonsType.link,
      color: '#ee4e4e',
      title: 'Déductions',
      icon: icons.FaUserCircle,
      to: 'deductions'
    },

    {
      type: rhaButtonsType.link,
      color: '#3f3e45',
      title: 'Situations des enfants',
      icon: icons.FaUserCircle,
      to: 'situation-enfants'
    },

    {
      type: rhaButtonsType.link,
      color: '#0cba66',
      title: 'Statistiques',
      icon: icons.FaUserCircle,
      to: 'statistiques'
    }
  ])

  return { rhaButtons, rhaButtonsType }
})
