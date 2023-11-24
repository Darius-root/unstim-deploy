import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { icons } from '@/assets/icons/oh-vue-icons'

export const useModuleStore = defineStore('module', () => {
  const modules = reactive([
    {
      id: 1,
      short: 'module-rha',
      label: 'Ressource Humaine & Administration',
      submenus: [
        {
          title: 'Ressource Humaine',
          icon: icons.HiSolidUserGroup,
          to: 'tableauBord'
        },

        {
          title: 'Courriers Administratif',
          icon: icons.HiSolidUserGroup,
          to: 'tableauBord'
        }
      ]
    },
    {
      id: 2,
      short: 'module-gf',
      label: 'Gestion Financière',
      submenus: [
        {
          title: 'Comptabilté',
          icon: icons.HiSolidUserGroup,
          to: 'module-suivi-evaluation'
        },
        {
          title: 'Suivi-Evaluation',
          icon: icons.HiSolidUserGroup,
          to: 'module-suivi-evaluation'
        },
        {
          title: 'Trésoreie',
          icon: icons.HiSolidUserGroup,
          to: 'tableauBord'
        }
      ]
    },

    {
      id: 3,
      short: 'module-rha',
      label: 'Recherche universitaire',
      submenus: [
        {
          title: 'Projet de Recherche',
          icon: icons.HiSolidUserGroup,
          to: 'tableauBord'
        },
        {
          title: 'Carrières des Enseignants',
          icon: icons.HiSolidUserGroup,
          to: 'tableauBord'
        },
        {
          title: 'Publication des Travaux',
          icon: icons.HiSolidUserGroup,
          to: 'tableauBord'
        },
        {
          title: 'colloques',
          icon: icons.HiSolidUserGroup,
          to: 'tableauBord'
        }
      ]
    },
    {
      id: 4,
      short: 'module-rha',
      label: 'Marchés '
    }
  ])

  return {
    modules
  }
})
