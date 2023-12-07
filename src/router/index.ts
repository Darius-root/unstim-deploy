import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // LES ROUTES INEXISTANTS

    {
      path: '/not-found',
      name: 'not-found',
      component: () => import('@/views/errors/not-found.vue')
    },

    {
      path: '/:notFound(.*)*',
      redirect: '/not-found'
    },

    // ROUTE D'AUTHENTICATION - UTILISATEUR SYSTEME

    {
      path: '/sign',
      name: 'sign',
      component: () => import('@/layouts/auth-layout.vue'),
      children: [
        {
          path: 'in',
          name: 'signin',
          component: () => import('@/views/auth/sign-in.vue')
        },

        {
          path: 'up',
          name: 'signup',
          component: () => import('@/views/auth/sign-up.vue')
        }
      ]
    },

    // ROUTE DE GESTION DES MODULES

    {
      path: '/',
      component: () => import('@/layouts/global-layout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/home/dashboard-home.vue')
        },

        // ROUTES CONCERNANT LE MODULE RHA (RESSOURCE HUMAINE ET ADMINISTRATION)

        {
          path: '/module_rha',
          name: 'module_rha',
          meta: { requireAuth: true },
          redirect: { name: 'tableauBord' },
          children: [
            {
              path: 'tableau-de-bord',
              name: 'tableauBord',
              component: () => import('@/views/modules/rha/rha-dashboard.vue')
            },
            {
              path: 'personnel',
              name: 'personnel',
              component: () => import('@/views/modules/rha/personnel-action.vue')
            },

            {
              path: 'create-employee',
              name: 'create-employee',
              component: () => import('@/views/modules/rha/create-employee.vue')
            },

            {
              path: 'departs-retraite',
              name: 'departs-retraite',
              component: () => import('@/views/modules/rha/depart-retraite.vue')
            },

            {
              path: 'deductions',
              name: 'deductions',
              component: () => import('@/views/modules/rha/deductions-employee.vue')
            },

            {
              path: 'statistiques',
              name: 'statistiques',
              component: () => import('@/views/modules/rha/rha-statistiques.vue')
            },

            {
              path: 'situation-enfants',
              name: 'situation-enfants',
              component: () => import('@/views/modules/rha/situation-enfants.vue')
            },

            {
              path: 'avancements',
              name: 'avancements',
              component: () => import('@/views/modules/rha/rha-avancement.vue')
            },

            {
              path: 'modifier-echelon',
              name: 'modifier-echelon',
              component: () => import('@/views/modules/rha/edit-echelon.vue')
            },

            {
              path: 'infos-employee',
              name: 'infos-employee',
              component: () => import('@/views/modules/rha/infos-employee.vue')
            },

            {
              path: 'users',
              name: 'users',
              component: () => import('@/views/modules/rha/list-users.vue')
            },

            {
              path: 'create-user',
              name: 'create-user',
              component: () => import('@/views/modules/rha/create-user.vue')
            },

            {
              path: 'edit-user',
              name: 'edit-user',
              component: () => import('@/views/modules/rha/edit-user.vue')
            },

            {
              path: 'roles',
              name: 'roles',
              component: () => import('@/views/modules/rha/list-roles.vue')
            },

            {
              path: 'create-role',
              name: 'create-role',
              component: () => import('@/views/modules/rha/create-role.vue')
            },

            {
              path: 'edit-role',
              name: 'edit-role',
              component: () => import('@/views/modules/rha/edit-role.vue')
            },

            {
              path: 'permissions-roles',
              name: 'permissions-roles',
              component: () => import('@/views/modules/rha/permissions-role.vue')
            },

            {
              path: 'sanctions',
              name: 'sanctions',
              component: () => import('@/views/modules/rha/list-sanctions.vue')
            },

            {
              path: 'create-sanction',
              name: 'create-sanction',
              component: () => import('@/views/modules/rha/create-sanction.vue')
            },

            {
              path: 'types-sanctions',
              name: 'types-sanctions',
              component: () => import('@/views/modules/rha/type-sanction.vue')
            },

            {
              path: 'create-type-sanction',
              name: 'create-type-sanction',
              component: () => import('@/views/modules/rha/create-type-sanction.vue')
            },

            {
              path: 'config/:id',
              name: 'config',
              component: () => import('@/views/modules/rha/config-page.vue')
            },

            {
              path: 'plan-formation',
              name: 'plan-formation',
              component: () => import('@/views/modules/rha/plan-formation.vue')
            },
            {
              path: 'syste-formation',
              name: 'syste-formation',
              component: () => import('@/views/modules/rha/syste-formation.vue')
            },
            {
              path: 'config/create-diplome',
              name: 'create-diplome',
              component: () => import('@/views/modules/rha/create-diplome.vue')
            },
            {
              path: 'config/create-typepret',
              name: 'create-typepret',
              component: () => import('@/views/modules/rha/create-typepret.vue')
            },

            {
              path: 'config/create-distinction',
              name: 'create-distinction',
              component: () => import('@/views/modules/rha/create-distinction.vue')
            },

            {
              path: 'config/create-direction',
              name: 'create-direction',
              component: () => import('@/views/modules/rha/create-direction.vue')
            },
            {
              path: 'config/create-departement',
              name: 'create-departement',
              component: () => import('@/views/modules/rha/create-departement.vue')
            },

            {
              path: 'config/create-delegation',
              name: 'create-delegation',
              component: () => import('@/views/modules/rha/create-delegation.vue')
            },

            {
              path: 'config/create-section',
              name: 'create-section',
              component: () => import('@/views/modules/rha/create-section.vue')
            },

            {
              path: 'config/create-agence',
              name: 'create-agence',
              component: () => import('@/views/modules/rha/create-agence.vue')
            },

            {
              path: 'config/create-typeposte',
              name: 'create-typeposte',
              component: () => import('@/views/modules/rha/create-typeposte.vue')
            },
            {
              path: 'config/create-ficheposte',
              name: 'create-ficheposte',
              component: () => import('@/views/modules/rha/create-ficheposte.vue')
            },

            {
              path: 'config/create-typeconge',
              name: 'create-typeconge',
              component: () => import('@/views/modules/rha/create-typeconge.vue')
            },
            {
              path: 'config/create-banque',
              name: 'create-banque',
              component: () => import('@/views/modules/rha/create-banque.vue')
            },

            {
              path: 'config/create-typecessation',
              name: 'create-typecessation',
              component: () => import('@/views/modules/rha/create-typecessation.vue')
            },

            {
              path: 'create-formation',
              name: 'create-formation',
              component: () => import('@/views/modules/rha/create-formation.vue')
            },

            {
              path: 'evaluation',
              name: 'evaluation',
              component: () => import('@/views/modules/rha/rha-evaluation.vue')
            },
            {
              path: 'create-evaluation',
              name: 'create-evaluation',
              component: () => import('@/views/modules/rha/create-evaluation.vue')
            },

            {
              path: 'salary-scales',
              name: 'salary-scales',
              component: () => import('@/views/modules/rha/grille-indiciaire.vue')
            },

            {
              path: 'mouth-salary',
              name: 'mouth-salary',
              component: () => import('@/views/modules/rha/grille-salaire.vue')
            },

            {
              path: 'allowance',
              name: 'allowance',
              component: () => import('@/views/modules/rha/list-indemnite.vue')
            },

            {
              path: 'objectif-evaluation',
              name: 'objectif-evaluation',
              component: () => import('@/views/modules/rha/objectif-evaluation.vue')
            },

            {
              path: 'create-objectif',
              name: 'create-objectif',
              component: () => import('@/views/modules/rha/create-objectif.vue')
            },

            {
              path: 'performance-evaluation',
              name: 'performance-evaluation',
              component: () => import('@/views/modules/rha/performance-evaluation.vue')
            },

            {
              path: 'create-performance',
              name: 'create-performance',
              component: () => import('@/views/modules/rha/create-performance.vue')
            },

            {
              path: 'conge-permission',
              name: 'conge-permission',
              component: () => import('@/views/modules/rha/conge-permission.vue')
            },
            {
              path: 'conge-annuel',
              name: 'conge-annuel',
              component: () => import('@/views/modules/rha/conge-annuel.vue')
            },
            {
              path: 'conge-service',
              name: 'conge-service',
              component: () => import('@/views/modules/rha/conge-service.vue')
            },
            {
              path: 'save-conge',
              name: 'save-conge',
              component: () => import('@/views/modules/rha/save-conge.vue')
            },

            {
              path: 'type-conge',
              name: 'type-conge',
              component: () => import('@/views/modules/rha/type-conge.vue')
            },
            {
              path: 'view-typeconge',
              name: 'view-typeconge',
              component: () => import('@/views/modules/rha/view-typeconge.vue')
            },
            {
              path: 'edit-typeconge',
              name: 'edit-typeconge',
              component: () => import('@/views/modules/rha/edit-typeconge.vue')
            },

            {
              path: 'end-conge',
              name: 'end-conge',
              component: () => import('@/views/modules/rha/end-conge.vue')
            },

            {
              path: 'view-congepermission',
              name: 'view-congepermission',
              component: () => import('@/views/modules/rha/view-congepermission.vue')
            },
            {
              path: 'edit-congepermission',
              name: 'edit-congepermission',
              component: () => import('@/views/modules/rha/edit-congepermission.vue')
            }
          ]
        },

        // ROUTES CONCERNANT LE MODULE finance-SUIVI-EVELUATION

        {
          path: '/module_finance_suivi_evaluation',
          name: 'module_finance_suivi_evaluation',
          meta: { requireAuth: true },
          redirect: { name: 'plan-strategique' },
          children: [
            {
              path: '/plan-strategique',
              name: 'plan-strategique',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/plan-strategique.vue')
            },
            {
              path: '/plan-strategique-create',
              name: 'plan-strategique-create',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/plan-strategique-create.vue')
            },
            {
              path: '/plan-strategique-update',
              name: 'plan-strategique-update',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/plan-strategique-update.vue')
            },
            {
              path: '/plan-strategique-view',
              name: 'plan-strategique-view',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/plan-strategique-view.vue')
            },
            {
              path: '/element-analytique-create',
              name: 'element-analytique-create',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/element-analytique-create.vue')
            },
            {
              path: '/element-analytique-update',
              name: 'element-analytique-update',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/element-analytique-update.vue')
            },

            {
              path: '/element-analytique-view',
              name: 'element-analytique-view',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/element-analytique-view.vue')
            },

            {
              path: '/plan-sectoriel',
              name: 'plan-sectoriel',
              component: () => import('@/views/modules/finance/suivi-evaluation/plan-sectoriel.vue')
            },
            {
              path: '/plan-sectoriel-create',
              name: 'plan-sectoriel-create',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/plan-sectoriel-create.vue')
            },
            {
              path: '/plan-sectoriel-update',
              name: 'plan-sectoriel-update',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/plan-sectoriel-update.vue')
            },
            {
              path: '/plan-sectoriel-view',
              name: 'plan-sectoriel-view',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/plan-sectoriel-view.vue')
            },
           
            {
              path: '/plan-sectoriel-join',
              name: 'plan-sectoriel-join',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/plan-sectoriel-join.vue')
            },

            {
              path: '/niveau-analytique',
              name: 'niveau-analytique',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/niveau-analytique.vue')
            },
            {
              path: '/niveau-analytique-create',
              name: 'niveau-analytique-create',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/niveau-analytique-create.vue')
            },
            {
              path: '/niveau-analytique-update',
              name: 'niveau-analytique-update',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/niveau-analytique-update.vue')
            },
            
            {
              path: '/niveau-analytique-view',
              name: 'niveau-analytique-view',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/niveau-analytique-view.vue')
            },

            {
              path: '/source-financement',
              name: 'source-financement',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/source-financement.vue')
            },
            {
              path: '/source-financement-create',
              name: 'source-financement-create',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/source-financement-create.vue')
            },

            {
              path: '/source-financement-update',
              name: 'source-financement-update',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/source-financement-update.vue')
            },

            {
              path: '/bailleur-create',
              name: 'bailleur-create',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/bailleur-create.vue')
            },
            {
              path: '/bailleur',
              name: 'bailleur',
              component: () => import('@/views/modules/finance/suivi-evaluation/bailleur-liste.vue')
            },
            {
              path: '/bailleur-update',
              name: 'bailleur-update',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/bailleur-update.vue')
            },

            {
              path: '/mode-financement-create',
              name: 'mode-financement-create',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/mode-financement-create.vue')
            },

            {
              path: '/mode-financement-update',
              name: 'mode-financement-update',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/mode-financement-update.vue')
            }

            ,

            {
              path: '/mode-financement-update',
              name: 'mode-financement-update',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/mode-financement-update.vue')
            }
,


            {
              path: '/unite-mesure',
              name: 'unite-mesure',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/unite-mesure.vue')
            },
            {
              path: '/unite-mesure-create',
              name: 'unite-mesure-create',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/unite-mesure-create.vue')
            },

            {
              path: '/unite-mesure-update',
              name: 'unite-mesure-update',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/unite-mesure-update.vue')
            },
            {
              path: '/directions-services',
              name: 'directions-services',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/directions-services.vue')
            },

            {
              path: '/directions-view',
              name: 'directions-view',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/directions-view.vue')
            },
            {
              path: '/directions-create',
              name: 'directions-create',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/directions-create.vue')
            },
            {
              path: '/directions-update',
              name: 'directions-update',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/directions-update.vue')
            },


            {
              path: '/pta',
              name: 'pta',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/pta-finance.vue')
            },

            {
              path: '/pta-view',
              name: 'pta-view',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/pta-view.vue')
            },
            {
              path: '/pta-create',
              name: 'pta-create',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/pta-create.vue')
            },

            {
              path: '/pta-update',
              name: 'pta-update',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/pta-update.vue')
            },
            {
              path: '/pta-view',
              name: 'pta-view',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/pta-view.vue')
            },
            {
              path: '/pta-validate',
              name: 'pta-validate',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/pta-validate.vue')
            },

{
  path: '/pta-version-create',
  name: 'pta-version-create',
  component: () =>
    import('@/views/modules/finance/suivi-evaluation/pta-version-create.vue')
},

            {
              path: '/pta-activite-create',
              name: 'pta-activite-create',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/pta-activite-create.vue')
            },
            {
              path: '/pta-activite-update',
              name: 'pta-activite-update',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/pta-activite-update.vue')
            },

            {
              path: '/pta-activite-view',
              name: 'pta-activite-view',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/pta-activite-view.vue')
            },
            {
              path: '/pta-execution-financiere-create',
              name: 'pta-execution-financiere-create',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/pta-execution-financiere-create.vue')
            }, 
            {
              path: '/pta-execution-financiere-update',
              name: 'pta-execution-financiere-update',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/pta-execution-financiere-update.vue')
            },

            {
              path: '/pta-tache-create',
              name: 'pta-tache-create',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/pta-tache-create.vue')
            },
            {
              path: '/pta-tache-view',
              name: 'pta-tache-view',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/pta-tache-view.vue')
            },
            
            {
              path: '/pta-tache-update',
              name: 'pta-tache-update',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/pta-tache-update.vue')
            },

            {
              path: '/pta-rapport',
              name: 'pta-rapport',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/pta-rapport.vue')
            },


            {
              path: '/indicateur-abssa',
              name: 'indicateur-abssa',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/indicateur-abssa.vue')
            },

            {
              path: '/indicateur-abssa-create',
              name: 'indicateur-abssa-create',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/indicateur-abssa-create.vue')
            },
            {
              path: '/indicateur-abssa-update',
              name: 'indicateur-abssa-update',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/indicateur-abssa-update.vue')
            },

            {
              path: '/indicateur-abssa-view',
              name: 'indicateur-abssa-view',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/indicateur-abssa-view.vue')
            },





            {
              path: '/cadre-resultat-create',
              name: 'cadre-resultat-create',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/cadre-resultat-create.vue')
            },
            {
              path: '/cadre-resultat-update',
              name: 'cadre-resultat-update',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/cadre-resultat-update.vue')
            },

            {
              path: '/cadre-resultat-view',
              name: 'cadre-resultat-view',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/cadre-resultat-view.vue')
            },

            {
              path: '/operandes-multiple-create',
              name: 'operandes-multiple-create',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/operandes-multiple-create.vue')
            },
            {
              path: '/operandes-multiple-follow',
              name: 'operandes-multiple-follow',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/operandes-multiple-follow.vue')
            },

            {
              path: '/rapport-indicateur',
              name: 'rapport-indicateur',
              component: () =>
                import('@/views/modules/finance/suivi-evaluation/rapport-indicateur.vue')
            },
            
          ]
        }
      ]
    }
  ]
})

export default router
