import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { icons } from '@/assets/icons/oh-vue-icons'

export const useNavigationStore = defineStore('navigation', () => {
  const navigations = reactive([
    {
      title: 'Tableau de bord',
      icon: icons.TachometerIcon,
      to: 'tableauBord'
    },

    {
      title: 'Personnel',
      icon: icons.HiSolidUserGroup,
      to: 'personnel'
    },

    {
      title: 'Gestion de la paie',
      icon: icons.InvoiceIcon,
      to: '/gestions-paies-2',
      underMenu: [
        {
          title: 'sous menu 1',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        },
        {
          title: 'sous menu 2',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        }
      ]
    },

    {
      title: 'Evaluations',
      icon: icons.HiSolidUserGroup,
      to: 'evaluation',
      underMenu: [
        {
          title: 'Evaluations',
          icon: icons.HiSolidUserGroup,
          to: 'evaluation'
        },
        {
          title: 'Objectifs',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        },

        {
          title: 'Suivi des performances',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        }
      ]
    },

    {
      title: 'Formation',
      icon: icons.GraduationCapIcon,
      to: 'personnel',
      underMenu: [
        {
          title: 'Plan de formation',
          icon: icons.HiSolidUserGroup,
          to: 'plan-formation'
        },
        {
          title: 'Formations',
          icon: icons.HiSolidUserGroup,
          to: 'syste-formation'
        }
      ]
    },

    {
      title: 'Congés et permission',
      icon: icons.FaUmbrellaBeach,
      to: 'personnel'
    },

    {
      title: 'Sanctions',
      icon: icons.FaUserClock,
      to: 'sanctions'
    },

    {
      title: 'Gestion utilisateurs',
      icon: icons.FaUserCircle,
      to: 'personnel',
      underMenu: [
        {
          title: 'Utilisateurs',
          icon: icons.HiSolidUserGroup,
          to: 'users'
        },
        {
          title: 'Roles',
          icon: icons.HiSolidUserGroup,
          to: 'roles'
        }
      ]
    },
    {
      title: 'Configuration',
      icon: icons.IoSettingsSharp,
      to: 'config-diplomes',
      underMenu: [
        {
          title: 'Diplomes',
          icon: icons.HiSolidUserGroup,
          to: 'config',
          params: { id: 'diplomes' }
        },
        {
          title: 'Type de pret',
          icon: icons.HiSolidUserGroup,
          to: 'config',
          params: { id: 'typeprets' }
        },

        {
          title: 'Distinctions',
          icon: icons.HiSolidUserGroup,
          to: 'config',
          params: { id: 'distinction' }
        },

        {
          title: 'Directions',
          icon: icons.HiSolidUserGroup,
          to: 'config',
          params: { id: 'direction' }
        },
        {
          title: 'Départements',
          icon: icons.HiSolidUserGroup,
          to: 'config',
          params: { id: 'departement' }
        },
        {
          title: 'Délégations',
          icon: icons.HiSolidUserGroup,
          to: 'config',
          params: { id: 'delegation' }
        },
        {
          title: 'Sections',
          icon: icons.HiSolidUserGroup,
          to: 'config',
          params: { id: 'section' }
        },
        {
          title: 'Agences',
          icon: icons.HiSolidUserGroup,
          to: 'config',
          params: { id: 'agence' }
        },

        {
          title: 'Type de postes',
          icon: icons.HiSolidUserGroup,
          to: 'config',
          params: { id: 'typeposte' }
        },

        {
          title: 'Fiches de postes',
          icon: icons.HiSolidUserGroup,
          to: 'config',
          params: { id: 'ficheposte' }
        },

        {
          title: "Catégorie d'agents",
          icon: icons.HiSolidUserGroup,
          to: 'config',
          params: { id: 'categorieagent' }
        },

        {
          title: 'Type de congés/Permis.',
          icon: icons.HiSolidUserGroup,
          to: 'config',
          params: { id: 'typeconge' }
        },

        {
          title: 'Type de cessat. serv.',
          icon: icons.HiSolidUserGroup,
          to: 'config',
          params: { id: 'typecessation' }
        },

        {
          title: 'Banque',
          icon: icons.HiSolidUserGroup,
          to: 'config',
          params: { id: 'banque' }
        },

        {
          title: 'Autres paramètres',
          icon: icons.HiSolidUserGroup,
          to: 'config',
          params: { id: 'autreparam' }
        }
      ]
    }
  ])

  return {
    navigations
  }
})
