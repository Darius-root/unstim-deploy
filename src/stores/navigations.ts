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
      to: 'personnel',
      underMenu: [
        {
          title: 'Evaluations',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
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
          to: 'personnel'
        },
        {
          title: 'Formations',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
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
      to: 'personnel'
    },

    // {
    //   title: 'Recrutement',
    //   icon: icons.MdPersonsearch,
    //   to: 'personnel'
    // },

    // {
    //   title: 'Reporting',
    //   icon: icons.FaFileSignature,
    //   to: 'personnel'
    // },
    // {
    //   title: 'Annonces',
    //   icon: icons.FaBullhorn,
    //   to: 'personnel'
    // },

    // {
    //   title: ' Notifications',
    //   icon: icons.MdNotificationaddRound,
    //   to: 'personnel'
    // },

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
      to: '/config',
      underMenu: [
        {
          title: 'Diplomes',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
          
        },
        {
          title: 'Type de pret',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        },

        {
          title: 'Distinctions',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        },

        {
          title: 'Directions',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        },

        {
          title: 'Départements',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        },
        {
          title: 'Délégations',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        },
        {
          title: 'Sections',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        },
        {
          title: 'Agences',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        },

        {
          title: 'Type de postes',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        },

        {
          title: 'Fiches de postes',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        },

        {
          title: "Catégorie d'agents",
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        },

        {
          title: 'Type de congés/Permis.',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        },

        {
          title: 'Type de cessat. serv.',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        },

        {
          title: 'Banque',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        },

        {
          title: 'Autres paramètres',
          icon: icons.HiSolidUserGroup,
          to: 'personnel'
        }
      ]
    }
  ])

  return {
    navigations
  }
})
