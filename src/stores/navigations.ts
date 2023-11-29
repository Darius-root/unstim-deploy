import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { icons } from '@/assets/icons/oh-vue-icons'

export const useNavigationStore = defineStore('navigation', () => {
  const navigations = reactive({
    module_rha: [
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
            title: 'Grille indicaire',
            icon: icons.HiSolidUserGroup,
            to: 'salary-scales'
          },

          {
            title: 'Voir les salaires',
            icon: icons.HiSolidUserGroup,
            to: 'mouth-salary'
          },

          {
            title: 'Gains',
            icon: icons.HiSolidUserGroup,
            to: 'allowance'
          },

          {
            title: 'Retenues',
            icon: icons.HiSolidUserGroup,
            to: 'personnel'
          },

          {
            title: 'Rappels',
            icon: icons.HiSolidUserGroup,
            to: 'personnel'
          },
          {
            title: 'Prets',
            icon: icons.HiSolidUserGroup,
            to: 'personnel'
          },

          {
            title: 'IDR',
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
            to: 'objectif-evaluation'
          },

          {
            title: 'Suivi des performances',
            icon: icons.HiSolidUserGroup,
            to: 'performance-evaluation'
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
        to: 'conge-permission'
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
    ],
    module_finance_suivi_evaluation: [
      {
        title: 'Parametrage',
        icon: icons.MenuFold,
        to: 'personnel',
        underMenu: [
          {
            title: 'Plan stratégiques',
            icon: icons.HiSolidUserGroup,
            to: 'plan-strategique'
          },
          {
            title: 'Plan sectoriel',
            icon: icons.HiSolidUserGroup,
            to: 'plan-sectoriel'
          },
          {
            title: 'Niveau analytiques',
            icon: icons.HiSolidUserGroup,
            to: 'niveau-analytique'
          },

          {
            title: 'Direction et services',
            icon: icons.HiSolidUserGroup,
            to: 'directions-services'
          },

          {
            title: 'Sources de financement',
            icon: icons.HiSolidUserGroup,
            to: 'source-financement'
          },
          {
            title: 'Unite de mesure',
            icon: icons.HiSolidUserGroup,
            to: 'unite-mesure'
          }
        ]
      },
      {
        title: 'PTA',
        icon: icons.MenuFold,
        to: 'pta',
        underMenu: [
          {
            title: 'PTA',
            icon: icons.EditIcon,
            to: 'pta'         },
          {
            title: 'Rapport PTA',
            icon: icons.SortAscIcon,
            to: 'pta-rapport'
          },
        
        ]
      }
,

{
  title: 'Indicateurs',
  icon: icons.MenuFold,
  to: 'pta',
  underMenu: [
    {
      title: 'Indicateurs ABSSA',
      icon: icons.HiSolidUserGroup,
      to: 'indicateur-abssa'
    },
  
    {
      title: 'Indicateurs Sensoriels',
      icon: icons.HiSolidUserGroup,
      to: 'plan-strategique'
    },
    {
      title: 'Rapport indicateurs ',
      icon: icons.HiSolidUserGroup,
      to: 'plan-strategique'
    },
  ]
}
      
    ]
  })

  return {
    navigations
  }
})
