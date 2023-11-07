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
          path: '/module-rha',
          name: 'module-rha',
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
              path: 'create-diplome',
              name: 'create-diplome',
              component: () => import('@/views/modules/rha/create-diplome.vue')
            },
            
            {
              path: 'config-distinction',
              name: 'config-distinction',
              component: () => import('@/views/modules/rha/distinction-config.vue')
            },
            {
              path: 'config/:id',
              name: 'config',
              component: () => import('@/views/modules/rha/config-page.vue')
            },

           /*  {
              path: 'config-direction',
              name: 'config-direction',
              component: () => import('@/views/modules/rha/direction-config.vue')
            },
            {
              path: 'config-departement',
              name: 'config-departement',
              component: () => import('@/views/modules/rha/departement-config.vue')
            },
             {
              path: 'config-departement',
              name: 'config-departement',
              component: () => import('@/views/modules/rha/departement-config.vue')
            }, {
              path: 'config-delegation',
              name: 'config-delegation',
              component: () => import('@/views/modules/rha/delegation-config.vue')
            }, {
              path: 'config-section',
              name: 'config-section',
              component: () => import('@/views/modules/rha/section-config.vue')
            }, {
              path: 'config-agences',
              name: 'config-agences',
              component: () => import('@/views/modules/rha/agences-config.vue')
            }, {
              path: 'config-typeposte',
              name: 'config-typeposte',
              component: () => import('@/views/modules/rha/typeposte-config.vue')
            }, {
              path: 'config-ficheposte',
              name: 'config-ficheposte',
              component: () => import('@/views/modules/rha/ficheposte-config.vue')
            }, {
              path: 'config-categorieagent',
              name: 'config-categorieagent',
              component: () => import('@/views/modules/rha/categorieagent-config.vue')
            }, {
              path: 'config-conge-permis',
              name: 'config-conge-permis',
              component: () => import('@/views/modules/rha/departeconge-permis.vue')
            },
            {
              path: 'config-cessat',
              name: 'config-cessat',
              component: () => import('@/views/modules/rha/cessat-config.vue')
            },
            {
              path: 'config-banque',
              name: 'config-banque',
              component: () => import('@/views/modules/rha/banque-config.vue')
            }, */
          ]
        }
      ]
    }
  ]
})

export default router
