<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium"> {{ dataPage.title }}</span>
    </div>

    <div class="flex justify-end my-3" v-if="dataPage.buttons">
      <template v-for="(btn, item) in dataPage.buttons">
        <RouterLink
          :style="{ backgroundColor: btn.color }"
          :to="btn.to"
          class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60 mx-1"
        >
          <span class="text-sm font-medium"> {{ btn.title }}</span>
        </RouterLink>
      </template>
    </div>
    <div class="max-w-full p-5 mt-3 border row">
      <TabsRoot class="flex flex-col w-full">
        <TabsList
          class="flex-grow flex border-b-5 space-x-5"
          aria-label="Enregistrement d'une évaluation"
        >
          <TabsTrigger
            class="bg-gray-100 text-neutral-700 px-5 h-[45px] flex-1 flex items-center justify-center text-[18px] leading-none select-none rounded-t-md hover:bg-slate-100 data-[state=active]:bg-white data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_0.5px] data-[state=active]:focus:shadow-black outline-none cursor-default bg-active"
            value="tab1"
          >
            Détail de la demandes
          </TabsTrigger>
          <TabsTrigger
            class="bg-gray-100 sm:w-[550px] text-neutral-700 px-5 h-[45px] flex-1 flex items-center justify-center text-[18px] leading-none select-none rounded-t-md hover:bg-slate-100 data-[state=active]:bg-white data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_0.5px] data-[state=active]:focus:shadow-black outline-none cursor-default bg-active"
            value="tab2"
          >
            Détail sur l'employé
          </TabsTrigger>
          <TabsTrigger
            class="bg-gray-100 sm:w-[550px] text-neutral-700 px-5 h-[45px] flex-1 flex items-center justify-center text-[18px] leading-none select-none rounded-t-md hover:bg-slate-100 data-[state=active]:bg-white data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_0.5px] data-[state=active]:focus:shadow-black outline-none cursor-default bg-active"
            value="tab3"
          >
            Point des 3 dernières années
          </TabsTrigger>
          <TabsTrigger
            class="bg-gray-100 sm:w-[550px] text-neutral-700 px-5 h-[45px] flex-1 flex items-center justify-center text-[18px] leading-none select-none rounded-t-md hover:bg-slate-100 data-[state=active]:bg-white data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_0.5px] data-[state=active]:focus:shadow-black outline-none cursor-default bg-active"
            value="tab4"
          >
            Historiques des demandes précedantes
          </TabsTrigger>
        </TabsList>

        <TabsContent class="grow p-5 bg-white rounded-b-md outline-none" value="tab1">
          <form>
            <table class="table mt-3 w-full">
              <tbody>
                <tr class="h-12">
                  <th class="text-left border-b">Type&nbsp;:</th>
                  <td class="border-b">Congé Annuel</td>
                </tr>
                <tr>
                  <th class="text-left border-b">Statut&nbsp;:</th>
                  <td class="border-b">
                    <span class="bg-green-500 text-white rounded">Accepté (Reporté)</span>
                  </td>
                </tr>
                <tr>
                  <th class="text-left border-b">Date de début&nbsp;:</th>
                  <td class="border-b">22 déc. 2023</td>
                </tr>
                <tr>
                  <th class="text-left border-b">Date de fin&nbsp;:</th>
                  <td class="border-b">26 janv. 2024</td>
                </tr>
                <tr>
                  <th class="text-left border-b">Date de Reprise&nbsp;:</th>
                  <td class="border-b">27 janv. 2024</td>
                </tr>
                <tr>
                  <th class="text-left border-b">Nombre de jours demandés&nbsp;:</th>
                  <td class="border-b">30</td>
                </tr>
                <tr>
                  <th class="text-left border-b">Année&nbsp;:</th>
                  <td class="border-b">30 jour(s) de 2022</td>
                </tr>
                <tr>
                  <th class="text-left border-b">Détails&nbsp;:</th>
                  <td class="border-b"></td>
                </tr>
                <tr>
                  <th class="text-left border-b">Possible à partir du&nbsp;:</th>
                  <td class="border-b">2023-11-03 00:00:00</td>
                </tr>
                <tr>
                  <th class="text-left border-b">Réponse&nbsp;:</th>
                  <td class="border-b"></td>
                </tr>
                <tr>
                  <th class="text-left border-b">Traitée le&nbsp;:</th>
                  <td class="border-b">03 nov. 2023</td>
                </tr>
              </tbody>
            </table>

            Statut actuel
            <button
              type="submit"
              disabled
              class="bg-green-500 mt-4 text-white font-medium py-2 px-4 rounded-md"
            >
              Accepté
            </button>
          </form>

          <legend class="text-lg font-medium py-5">Documents</legend>
          <RouterLink
            to=""
            class="inline-flex items-center bg-slate-400 p-2 text-white rounded shadow hover:bg-opacity-60 mx-1"
          >
            <v-icon :name="icons.BiPaperclip" scale="1.1" />

            <span class="text-sm font-medium">Joindre des documents</span>
          </RouterLink>
        </TabsContent>
        <TabsContent
          class="grow p-5 bg-white rounded-b-md outline-none justify-center"
          value="tab2"
        >
          <table class="table mt-3 w-full">
            <tbody>
              <tr class="h-12">
                <th class="py-2 text-left font-medium border-b">Nom &amp; Prénoms:</th>
                <td class="border-b">
                  Cliquez ici pour aller sur la page de l'agent ==>

                  <RouterLink to="" class="inline-flex items-center p-2 text- mx-1">
                    <span class="text-white bg-black text-base font-semibold rounded-md">
                      xxxxxxxx</span
                    >
                  </RouterLink>
                </td>
              </tr>
              <tr>
                <th class="py-2 text-left font-medium border-b">Date d'entrée :</th>
                <td class="border-b"></td>
              </tr>
              <tr>
                <th class="py-2 text-left font-medium border-b">Ancienneté (en années) :</th>
                <td class="border-b">10</td>
              </tr>
              <tr>
                <th class="py-2 text-left font-medium border-b">Date de naissance :</th>
                <td class="border-b">09 mars 1981</td>
              </tr>
              <tr>
                <th class="py-2 text-left font-medium border-b">Date de retraite :</th>
                <td class="border-b">10 mars 2041</td>
              </tr>
              <tr>
                <th class="py-2 text-left font-medium border-b">Type de contrat :</th>
                <td class="border-b">cdi</td>
              </tr>
            </tbody>
          </table>
        </TabsContent>

        <TabsContent
          class="grow p-5 bg-white mt-3 rounded-b-md outline-none justify-center"
          value="tab3"
        >
          <div class="flex py-2 justify-center top-line">
            <span class="text-base font-medium"> XXXXXXXX</span>
          </div>

          <div class="flex justify-between my-3 mt-16 items-center space-x-2">
            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              class="text-white bg-slate-500 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              Exporter
              <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              id="dropdownHover"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Dashboard</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Settings</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Earnings</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Sign out</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <span class="text-base font-medium">Filtrer: </span>
              <input
                type="text"
                v-model="searchValue"
                class="border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
          <easy-data-table
            alternating
            border-cell
            :headers="dataYear.headers"
            class="text-lg"
            theme-color="#2f9fff"
            :items="dataYear.items"
            buttons-pagination
            searchable
            :search-value="searchValue"
          >
          </easy-data-table>
        </TabsContent>
        <TabsContent
          class="grow p-5 bg-white mt-3 rounded-b-md outline-none justify-center"
          value="tab4"
        >
          <div class="flex justify-between my-3 mt-16 items-center space-x-2">
            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              class="text-white bg-slate-500 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              Exporter
              <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              id="dropdownHover"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Dashboard</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Settings</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Earnings</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Sign out</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <span class="text-base font-medium">Filtrer: </span>
              <input
                type="text"
                v-model="searchValue"
                class="border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          <easy-data-table
            alternating
            border-cell
            :headers="dataHistory.headers"
            class="text-lg"
            theme-color="#2f9fff"
            :items="dataHistory.items"
            buttons-pagination
            searchable
            :search-value="searchValue"
          >
            <template #item-statut="">
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-600 text-white"
              >
                Accepté
              </span>
            </template>
            <template #item-action="">
              <div class="flex gap-3 row justify-center items-center">
                <RouterLink
                  to="view-congepermission"
                  v-if="dataHistory.action.update"
                  class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary"
                >
                  <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
                </RouterLink>

                <RouterLink
                  v-if="dataHistory.action.edit"
                  to=""
                  class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary"
                >
                  <v-icon :name="icons.EditIcon" scale="1.0" />
                </RouterLink>

                <RouterLink
                  to=""
                  v-if="dataHistory.action.delete"
                  class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-600 hover:bg-red-400"
                >
                  <v-icon :name="icons.DeleteIcon" scale="1.0" />
                </RouterLink>
              </div>
            </template>
          </easy-data-table>
        </TabsContent>
      </TabsRoot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { icons } from '@/assets/icons/oh-vue-icons'

import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'

const searchValue = ref('')
const dataPage = ref({
  title: 'Demandes de Congés / Permissions',
  buttons: [
    { title: 'Modifier', color: '#2b9eff', to: 'edit-congepermission' },
    { title: 'Demande de congé', color: '#2b9eff', to: '' },
    { title: 'Autorisation de congé ', color: '#2b9eff', to: '' }
  ]
})

const dataYear = ref({
  headers: [
    { text: 'Matricule', sortable: true, value: 'MA' },
    { text: 'Année', sortable: true, value: 'NO' },
    { text: 'Total annuel (jour)', sortable: true, value: 'PR' },
    { text: 'Détails pris (jour)', sortable: true, value: 'SE' },
    { text: 'Restant (jours)', sortable: true, value: 'TY' }
  ],
  items: [
    {
      MA: '1566AJ-S',
      NO: 'EKP',
      PR: 'DARIUS',
      SE: 'xx',
      TY: 'xx'
    },
    {
      MA: '1566AJ-S',
      NO: 'EKP',
      PR: 'DARIUS',
      SE: 'xx',
      TY: 'xx'
    }
  ]
})

const dataHistory = ref({
  title: 'Demandes de Congés / Permissions',

  headers: [
    { text: 'Type', sortable: true, value: 'MA' },
    { text: 'Date de début', sortable: true, value: 'NO' },
    { text: 'Nombre de jours', sortable: true, value: 'PR' },

    { text: 'Statut', sortable: true, value: 'statut' },
    { text: 'Mise à jour le', sortable: true, value: 'NJ' },

    { text: 'Actions', sortable: true, value: 'action' }
  ],
  items: [
    {
      MA: 'Congé Annuel',
      NO: '22 déc. 2023',
      PR: '25',

      NJ: '	03 nov. 2023 02:41:32',
      statut: 'accepte'
    }
  ],
  action: {
    edit: false,
    update: true,
    delete: false
  }
})
</script>

<style lang="scss" scoped>
tr {
  height: 2rem /* 48px */;
}

table {
  font-size: smaller;
}
</style>
