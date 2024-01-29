import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { icons } from '@/assets/icons/oh-vue-icons'

export const useModuleStore = defineStore('module', () => {
  const modules = reactive([
    {
      id: 1,
      short: 'module-rha',
      label: 'Ressources Humaines & Administration',
      submenus: [
        {
          title: 'Ressources Humaines',
          icon: icons.FaUsers,
          to: 'tableauBord'
        },

        {
          title: 'Courriers Administratifs',
          icon: icons.FaEnvelope,
          to: 'e'
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
          title: 'Trésorerie',
          icon: icons.FaMoneyBillWave,
          to: 'entree-stock'
        },
        {
          title: 'Gestion de stock',
          icon: icons.FaMoneyBillWave,
          to: 'entree-stock'
        }
      ]
    },

    {
      id: 5,
      short: 'Suivi-Evaluation',
      label: 'Suivi evaluation',
      to: 'module_finance_suivi_evaluation'
    },

    {
      id: 3,
      short: 'module-rha',
      label: 'Recherche universitaire',
      submenus: [
        {
          title: 'Projet de Recherche',
          icon: icons.FaFlask,
          to: ''
        },
        {
          title: 'Carrières des Enseignants',
          icon: icons.FaChalkboardTeacher,
          to: 'dashboard'
        },
        {
          title: 'Publication des Travaux',
          icon: icons.FaNewspaper,
          to: ''
        },
        {
          title: 'Colloques',
          icon: icons.FaComments,
          to: 'sygec'
        }
      ]
    },

    {
      id: 4,
      short: 'module-marche',
      label: 'Marchés ',
      to: 'param-config'
    },

    {
      id: 5,
      short: 'module-coop',
      label: 'Coopération',
      to: 'coop-tableau-bord'
    }
  ])

  return {
    modules
  }
})
