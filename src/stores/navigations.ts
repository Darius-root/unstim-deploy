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
            icon: icons.HiTable,
            to: 'salary-scales'
          },

          {
            title: 'Voir les salaires',
            icon: icons.FaMoneyBill,
            to: 'mouth-salary'
          },

          {
            title: 'Gains',
            icon: icons.FaDollarSign,
            to: 'allowance'
          },

          {
            title: 'Retenues',
            icon: icons.FaMinusCircle,
            to: 'personnel'
          },

          {
            title: 'Rappels',
            icon: icons.FaBell,
            to: 'personnel'
          },
          {
            title: 'Prets',
            icon: icons.FaMoneyCheck,
            to: 'personnel'
          },

          {
            title: 'IDR',
            icon: icons.FaBed,
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
            icon: icons.FaChartBar,
            to: 'evaluation'
          },
          {
            title: 'Objectifs',
            icon: icons.FaBullseye,
            to: 'objectif-evaluation'
          },

          {
            title: 'Suivi des performances',
            icon: icons.FaChartLine,
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
            icon: icons.FaBook,
            to: 'plan-formation'
          },
          {
            title: 'Formations',
            icon: icons.FaUserGraduate,
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
        icon: icons.FaExclamationTriangle,
        to: 'sanctions'
      },

      {
        title: 'Gestion utilisateurs',
        icon: icons.FaUserCircle,
        to: 'personnel',
        underMenu: [
          {
            title: 'Utilisateurs',
            icon: icons.FaUser,
            to: 'users'
          },
          {
            title: 'Roles',
            icon: icons.FaUserTag,
            to: 'roles'
          }
        ]
      },
      {
        title: 'Configuration',
        icon: icons.IoSettingsSharp,
        to: 'config',
        underMenu: [
          {
            title: 'Diplômes',
            icon: icons.FaCertificate,
            to: 'config',
            params: { id: 'diplomes' }
          },

          
          {
            title: 'Type de prêt',
            icon: icons.FaHandHoldingUsd,
            to: 'config',
            params: { id: 'typeprets' }
          },

          {
            title: 'Distinctions',
            icon: icons.FaAward,
            to: 'config',
            params: { id: 'distinction' }
          },

          {
            title: 'Directions',
            icon: icons.FaCompass,
            to: 'config',
            params: { id: 'direction' }
          },
          {
            title: 'Départements',
            icon: icons.FaBuilding,
            to: 'config',
            params: { id: 'departement' }
          },
          {
            title: 'Délégations',
            icon: icons.FaUserFriends,
            to: 'config',
            params: { id: 'delegation' }
          },
          {
            title: 'Sections',
            icon: icons.FaLayerGroup,
            to: 'config',
            params: { id: 'section' }
          },
          {
            title: 'Agences',
            icon: icons.FaIndustry,
            to: 'config',
            params: { id: 'agence' }
          },

          {
            title: 'Type de postes',
            icon: icons.FaBriefcase,
            to: 'config',
            params: { id: 'typeposte' }
          },

          {
            title: 'Fiches de postes',
            icon: icons.FaFileAlt,
            to: 'config',
            params: { id: 'ficheposte' }
          },

          {
            title: "Catégorie d'agents",
            icon: icons.FaMoneyCheckAlt,
            to: 'config',
            params: { id: 'categorieagent' }
          },

          {
            title: 'Type de congés/Permis.',
            icon: icons.FaCalendarAlt,
            to: 'config',
            params: { id: 'typeconge' }
          },

          {
            title: 'Type de cessat. serv.',
            icon: icons.FaUserTimes,
            to: 'config',
            params: { id: 'typecessation' }
          },

          {
            title: 'Banque',
            icon: icons.FaUniversity,
            to: 'config',
            params: { id: 'banque' }
          },

          {
            title: 'Autres paramètres',
            icon: icons.FaCogs,
            to: 'config',
            params: { id: 'autreparam' }
          }
        ]
      }
    ],
    module_finance_suivi_evaluation: [
      {
        title: 'Parametrage',
        icon: icons.FaSlidersH,
        to: 'personnel',
        underMenu: [
          {
            title: 'Plan stratégiques',
            icon: icons.FaBullseye,
            to: 'plan-strategique'
          },
          {
            title: 'Plan sectoriel',
            icon: icons.FaSitemap,
            to: 'plan-sectoriel'
          },
          {
            title: 'Niveau analytiques',
            icon: icons.FaChartBar,
            to: 'niveau-analytique'
          },

          {
            title: 'Direction et services',
            icon: icons.FaBuilding,
            to: 'directions-services'
          },

          {
            title: 'Sources de financement',
            icon: icons.FaMoneyBillWave,
            to: 'source-financement'
          },
          {
            title: 'Unite de mesure',
            icon: icons.FaRuler,
            to: 'unite-mesure'
          }
        ]
      },
      {
        title: 'PTA',
        icon: icons.FaCalendarCheck,
        to: 'pta',
        underMenu: [
          {
            title: 'PTA',
            icon: icons.FaCalendarCheck,
            to: 'pta'
          },
          {
            title: 'Rapport PTA',
            icon: icons.FaFileAlt,
            to: 'pta-rapport'
          }
        ]
      },

      {
        title: 'Indicateurs',
        icon: icons.FaFlag,
        to: 'pta',
        underMenu: [
          {
            title: 'Indicateurs ABSSA',
            icon: icons.FaChartArea,
            to: 'indicateur-abssa'
          },

          {
            title: 'Indicateurs Sensoriels',
            icon: icons.FaChartArea,
            to: 'plan-strategique'
          },
          {
            title: 'Rapport indicateurs ',
            icon: icons.FaFileAlt,
            to: 'rapport-indicateur'
          }
        ]
      }
    ],

    module_marche: [
      {
        title: 'Parametrage',
        icon: icons.FaSlidersH,
        to: 'param-config'
      },
      {
        title: 'Notification',
        icon: icons.NotifIcon,
        to: 'notification-contrat'
      },
      {
        title: 'Marché',
        icon: icons.FaStore,
        to: 'marche-view'
      },

      {
        title: 'Contrat',
        icon: icons.FaFileContract,
        to: 'contrat-view'
      },

      {
        title: 'Recours',
        icon: icons.FaGavel,
        to: 'recour-view'
      },

      {
        title: 'Edition',
        icon: icons.FaPencilAlt,
        to: 'recour-view',
        underMenu: [
          {
            title: 'Evolution des marchés',
            icon: icons.FaChartPie,
            to: 'evolution-marche'
          },

          {
            title: 'Point étapes marchés',
            icon: icons.FaMapMarked,
            to: 'point-etape-marche'
          },
          {
            title: 'Point recours',
            icon: icons.FaLifeRing,
            to: 'point-recour-marche'
          },
          {
            title: 'Rapport indicateur',
            icon: icons.PrChartLine,
            to: 'rapport-indicateur'
          }
        ]
      }
    ],

    module_carriere_enseignant: [
      {
        title: 'Tableau de bord',
        icon: icons.FaPencilAlt,
        to: 'carrieres-enseignants',
        underMenu: [
          {
            title: 'Mes informations',
            icon: icons.FaChartPie,
            to: 'evolution-marche'
          },

          {
            title: 'Modifier Informations',
            icon: icons.FaMapMarked,
            to: 'point-etape-marche'
          }
        ]
      },

      {
        title: 'Publications',
        icon: icons.FaPencilAlt,
        to: 'recour-view',
        underMenu: [
          {
            title: 'Toute les publications',
            icon: icons.FaChartPie,
            to: 'evolution-marche'
          },

          {
            title: 'Mes publications',
            icon: icons.FaMapMarked,
            to: 'point-etape-marche'
          }
        ]
      },

      {
        title: 'Dossiers CAMES',
        icon: icons.FaPencilAlt,
        to: 'recour-view',
        underMenu: [
          {
            title: 'Soumettre mes dossiers',
            icon: icons.FaChartPie,
            to: 'evolution-marche'
          },

          {
            title: 'Soumissions en cours',
            icon: icons.FaMapMarked,
            to: 'point-etape-marche'
          },

          {
            title: 'Historiques',
            icon: icons.FaMapMarked,
            to: 'point-etape-marche'
          }
        ]
      }
    ],


    module_gestion_stock: [
      {
        title: 'Opération stock',
        icon: icons.FaCubes,
        to: 'carrieres-enseignants',
        underMenu: [
          {
            title: 'Entrées en stock',
            icon: icons.FaArrowUp,
            to: 'entree-stock'
          },

          {
            title: 'sortie de stock',
            icon: icons.FaArrowDown,
            to: 'sortie-stock'
          }
        ]
      },

      {
        title: 'Article',
        icon: icons.FaFile,
        to: 'article-view',
      
      },

      {
        title: 'Demandes',
        icon: icons.FaClipboardList,
        to: 'demande-list',
        underMenu: [
          {
            title: 'Liste',
            icon: icons.FaChartPie,
            to: 'demande-list'
          },

          {
            title: 'Envoyés',
            icon: icons.FaMapMarked,
            to: 'demande-send'
          }
        ]
      },
   

      {
        title: 'Editions',
        icon: icons.FaPencilAlt,
        to: 'carrieres-enseignants',
        underMenu: [
          {
            title: 'Stock fiche',
            icon: icons.FaFileAlt,
            to: 'stock-fiche'
          },

          {
            title: 'Stock mouvement',
            icon: icons.FaExchangeAlt,
            to: 'fiche-mouvement'
          },

          {
            title: 'Stock final',
            icon: icons.FaCheckCircle,
            to: 'fiche-final'
          }
        ]
      },

      {
        title: 'Catégorie',
        icon: icons.FaTags,
        to: 'categorie-article',
   
      }, {
        title: 'Famille article',
        icon: icons.FaFileContract,
        to: 'famille-article',
   
      },

      {
        title: 'Entrepot',
        icon: icons.FaWarehouse,
        to: 'entrepot-stock',
   
      }, {
        title: 'Bureau',
        icon: icons.FaBuilding,
        to: 'bureau-stock',
   
      }, {
        title: 'Founisseur',
        icon: icons.FaTruck,
        to: 'fournisseur-stock',
   
      }, {
        title: 'Paramétrage',
        icon: icons.FaPencilAlt,
        to: 'parametrage-stock',
   
      },
    ]
  })

  return {
    navigations
  }
})
