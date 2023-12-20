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
          icon: icons.FaUsers,
          to: 'tableauBord'
        },

        {
          title: 'Courriers Administratif',
          icon: icons.FaEnvelope,
          to: 'tableauBord'
        }
      ]
    },
    {
      id: 2,
      short: 'module-finance',
      label: 'Gestion Financière',
      submenus: [
        {
          title: 'Comptabilté',
          icon: icons.FaCalculator,
          to: ''
        },
        {
          title: 'Suivi-Evaluation',
          icon: icons.FaRegularChartBar,
          to: 'module_finance_suivi_evaluation'
        },
        {
          title: 'Trésorerie',
          icon: icons.FaMoneyBillWave,
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
          icon: icons.FaFlask,
          to: 'tableauBord'
        },
        {
          title: 'Carrières des Enseignants',
          icon: icons.FaChalkboardTeacher,
          to: 'dashboard'
        },
        {
          title: 'Publication des Travaux',
          icon: icons.FaNewspaper,
          to: 'tableauBord'
        },
        {
          title: 'Colloques',
          icon: icons.FaComments,
          to: 'tableauBord'
        }
      ]
    },
    {
      id: 4,
      short: 'module-marche',
      label: 'Marchés ',
      to: 'param-config'
    }
  ])

  return {
    modules
  }
})
