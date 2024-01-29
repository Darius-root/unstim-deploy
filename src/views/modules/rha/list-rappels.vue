<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { reactive, ref } from 'vue'


import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from 'radix-vue'

const data = [
  [1, 2],
  [3, 4],
];


const items = ref([
  {
    matricule: '6638200010',
    employe: 'AHOYO ELVIS ROCK',
    ancien_grade: 'C104',
    nouveau_grade: 'C106',
    solde_indexe: '13 118',
    brut: '17 053',
    jours: '25',
    debut: '25 août 2023',
    fin: '25 août 2025',
  },

  {
    matricule: '6638200010',
    employe: 'OGBU ELISABETH OGOMA',
    ancien_grade: '144',
    nouveau_grade: 'Variable',
    solde_indexe: '8 031',
    brut: '17 053',
    jours: '25',
    debut: '25 août 2023',
    fin: '25 août 2025',
  },

  {
    matricule: '6638200010',
    employe: 'OGBU ELISABETH OGOMA',
    ancien_grade: '144',
    nouveau_grade: 'Variable',
    solde_indexe: '8 031',
    brut: '17 053',
    jours: '25',
    debut: '25 août 2023',
    fin: '25 août 2025',
  },

])

const columns = [
  { data: 'matricule', title: 'Matricule' },
  { data: 'employe', title: 'Nom & Prénom' },
  { data: 'ancien_grade', title: 'Ancien grade' },
  { data: 'nouveau_grade', title: 'Nouveau grade' },
  { data: 'brut', title: 'Brut' },
  { data: 'jours', title: 'Jours' },
  { data: 'debut', title: 'Debut' },
  { data: 'fin', title: 'Fin' },
  { data: 'actions', title: 'Actions' },

];

const options = {
  responsive: true,
  select: true,
};

const datatables = reactive([
  {
    "id": "1",
    "name": "Tiger Nixon",
    "position": "System Architect",
    "salary": "$320,800",
    "start_date": "2011/04/25",
    "office": "Edinburgh",
    "extn": "5421"
  },
  {
    "id": "2",
    "name": "Garrett Winters",
    "position": "Accountant",
    "salary": "$170,750",
    "start_date": "2011/07/25",
    "office": "Tokyo",
    "extn": "8422"
  },
  {
    "id": "3",
    "name": "Ashton Cox",
    "position": "Junior Technical Author",
    "salary": "$86,000",
    "start_date": "2009/01/12",
    "office": "San Francisco",
    "extn": "1562"
  },
  {
    "id": "4",
    "name": "Cedric Kelly",
    "position": "Senior Javascript Developer",
    "salary": "$433,060",
    "start_date": "2012/03/29",
    "office": "Edinburgh",
    "extn": "6224"
  },
  {
    "id": "5",
    "name": "Airi Satou",
    "position": "Accountant",
    "salary": "$162,700",
    "start_date": "2008/11/28",
    "office": "Tokyo",
    "extn": "5407"
  },
  {
    "id": "6",
    "name": "Brielle Williamson",
    "position": "Integration Specialist",
    "salary": "$372,000",
    "start_date": "2012/12/02",
    "office": "New York",
    "extn": "4804"
  },
  {
    "id": "7",
    "name": "Herrod Chandler",
    "position": "Sales Assistant",
    "salary": "$137,500",
    "start_date": "2012/08/06",
    "office": "San Francisco",
    "extn": "9608"
  },
  {
    "id": "8",
    "name": "Rhona Davidson",
    "position": "Integration Specialist",
    "salary": "$327,900",
    "start_date": "2010/10/14",
    "office": "Tokyo",
    "extn": "6200"
  },
  {
    "id": "9",
    "name": "Colleen Hurst",
    "position": "Javascript Developer",
    "salary": "$205,500",
    "start_date": "2009/09/15",
    "office": "San Francisco",
    "extn": "2360"
  },
  {
    "id": "10",
    "name": "Sonya Frost",
    "position": "Software Engineer",
    "salary": "$103,600",
    "start_date": "2008/12/13",
    "office": "Edinburgh",
    "extn": "1667"
  },
  {
    "id": "11",
    "name": "Jena Gaines",
    "position": "Office Manager",
    "salary": "$90,560",
    "start_date": "2008/12/19",
    "office": "London",
    "extn": "3814"
  },
  {
    "id": "12",
    "name": "Quinn Flynn",
    "position": "Support Lead",
    "salary": "$342,000",
    "start_date": "2013/03/03",
    "office": "Edinburgh",
    "extn": "9497"
  },
  {
    "id": "13",
    "name": "Charde Marshall",
    "position": "Regional Director",
    "salary": "$470,600",
    "start_date": "2008/10/16",
    "office": "San Francisco",
    "extn": "6741"
  },
  {
    "id": "14",
    "name": "Haley Kennedy",
    "position": "Senior Marketing Designer",
    "salary": "$313,500",
    "start_date": "2012/12/18",
    "office": "London",
    "extn": "3597"
  },
  {
    "id": "15",
    "name": "Tatyana Fitzpatrick",
    "position": "Regional Director",
    "salary": "$385,750",
    "start_date": "2010/03/17",
    "office": "London",
    "extn": "1965"
  },
  {
    "id": "16",
    "name": "Michael Silva",
    "position": "Marketing Designer",
    "salary": "$198,500",
    "start_date": "2012/11/27",
    "office": "London",
    "extn": "1581"
  },
  {
    "id": "17",
    "name": "Paul Byrd",
    "position": "Chief Financial Officer (CFO)",
    "salary": "$725,000",
    "start_date": "2010/06/09",
    "office": "New York",
    "extn": "3059"
  },
  {
    "id": "18",
    "name": "Gloria Little",
    "position": "Systems Administrator",
    "salary": "$237,500",
    "start_date": "2009/04/10",
    "office": "New York",
    "extn": "1721"
  },
  {
    "id": "19",
    "name": "Bradley Greer",
    "position": "Software Engineer",
    "salary": "$132,000",
    "start_date": "2012/10/13",
    "office": "London",
    "extn": "2558"
  },
  {
    "id": "20",
    "name": "Dai Rios",
    "position": "Personnel Lead",
    "salary": "$217,500",
    "start_date": "2012/09/26",
    "office": "Edinburgh",
    "extn": "2290"
  },
  {
    "id": "21",
    "name": "Jenette Caldwell",
    "position": "Development Lead",
    "salary": "$345,000",
    "start_date": "2011/09/03",
    "office": "New York",
    "extn": "1937"
  },
  {
    "id": "22",
    "name": "Yuri Berry",
    "position": "Chief Marketing Officer (CMO)",
    "salary": "$675,000",
    "start_date": "2009/06/25",
    "office": "New York",
    "extn": "6154"
  },
  {
    "id": "23",
    "name": "Caesar Vance",
    "position": "Pre-Sales Support",
    "salary": "$106,450",
    "start_date": "2011/12/12",
    "office": "New York",
    "extn": "8330"
  },
  {
    "id": "24",
    "name": "Doris Wilder",
    "position": "Sales Assistant",
    "salary": "$85,600",
    "start_date": "2010/09/20",
    "office": "Sydney",
    "extn": "3023"
  },
  {
    "id": "25",
    "name": "Angelica Ramos",
    "position": "Chief Executive Officer (CEO)",
    "salary": "$1,200,000",
    "start_date": "2009/10/09",
    "office": "London",
    "extn": "5797"
  },
  {
    "id": "26",
    "name": "Gavin Joyce",
    "position": "Developer",
    "salary": "$92,575",
    "start_date": "2010/12/22",
    "office": "Edinburgh",
    "extn": "8822"
  },
  {
    "id": "27",
    "name": "Jennifer Chang",
    "position": "Regional Director",
    "salary": "$357,650",
    "start_date": "2010/11/14",
    "office": "Singapore",
    "extn": "9239"
  },
  {
    "id": "28",
    "name": "Brenden Wagner",
    "position": "Software Engineer",
    "salary": "$206,850",
    "start_date": "2011/06/07",
    "office": "San Francisco",
    "extn": "1314"
  },
  {
    "id": "29",
    "name": "Fiona Green",
    "position": "Chief Operating Officer (COO)",
    "salary": "$850,000",
    "start_date": "2010/03/11",
    "office": "San Francisco",
    "extn": "2947"
  },
  {
    "id": "30",
    "name": "Shou Itou",
    "position": "Regional Marketing",
    "salary": "$163,000",
    "start_date": "2011/08/14",
    "office": "Tokyo",
    "extn": "8899"
  },
  {
    "id": "31",
    "name": "Michelle House",
    "position": "Integration Specialist",
    "salary": "$95,400",
    "start_date": "2011/06/02",
    "office": "Sydney",
    "extn": "2769"
  },
  {
    "id": "32",
    "name": "Suki Burks",
    "position": "Developer",
    "salary": "$114,500",
    "start_date": "2009/10/22",
    "office": "London",
    "extn": "6832"
  },
  {
    "id": "33",
    "name": "Prescott Bartlett",
    "position": "Technical Author",
    "salary": "$145,000",
    "start_date": "2011/05/07",
    "office": "London",
    "extn": "3606"
  },
  {
    "id": "34",
    "name": "Gavin Cortez",
    "position": "Team Leader",
    "salary": "$235,500",
    "start_date": "2008/10/26",
    "office": "San Francisco",
    "extn": "2860"
  },
  {
    "id": "35",
    "name": "Martena Mccray",
    "position": "Post-Sales support",
    "salary": "$324,050",
    "start_date": "2011/03/09",
    "office": "Edinburgh",
    "extn": "8240"
  },
  {
    "id": "36",
    "name": "Unity Butler",
    "position": "Marketing Designer",
    "salary": "$85,675",
    "start_date": "2009/12/09",
    "office": "San Francisco",
    "extn": "5384"
  },
  {
    "id": "37",
    "name": "Howard Hatfield",
    "position": "Office Manager",
    "salary": "$164,500",
    "start_date": "2008/12/16",
    "office": "San Francisco",
    "extn": "7031"
  },
  {
    "id": "38",
    "name": "Hope Fuentes",
    "position": "Secretary",
    "salary": "$109,850",
    "start_date": "2010/02/12",
    "office": "San Francisco",
    "extn": "6318"
  },
  {
    "id": "39",
    "name": "Vivian Harrell",
    "position": "Financial Controller",
    "salary": "$452,500",
    "start_date": "2009/02/14",
    "office": "San Francisco",
    "extn": "9422"
  },
  {
    "id": "40",
    "name": "Timothy Mooney",
    "position": "Office Manager",
    "salary": "$136,200",
    "start_date": "2008/12/11",
    "office": "London",
    "extn": "7580"
  },
  {
    "id": "41",
    "name": "Jackson Bradshaw",
    "position": "Director",
    "salary": "$645,750",
    "start_date": "2008/09/26",
    "office": "New York",
    "extn": "1042"
  },
  {
    "id": "42",
    "name": "Olivia Liang",
    "position": "Support Engineer",
    "salary": "$234,500",
    "start_date": "2011/02/03",
    "office": "Singapore",
    "extn": "2120"
  },
  {
    "id": "43",
    "name": "Bruno Nash",
    "position": "Software Engineer",
    "salary": "$163,500",
    "start_date": "2011/05/03",
    "office": "London",
    "extn": "6222"
  },
  {
    "id": "44",
    "name": "Sakura Yamamoto",
    "position": "Support Engineer",
    "salary": "$139,575",
    "start_date": "2009/08/19",
    "office": "Tokyo",
    "extn": "9383"
  },
  {
    "id": "45",
    "name": "Thor Walton",
    "position": "Developer",
    "salary": "$98,540",
    "start_date": "2013/08/11",
    "office": "New York",
    "extn": "8327"
  },
  {
    "id": "46",
    "name": "Finn Camacho",
    "position": "Support Engineer",
    "salary": "$87,500",
    "start_date": "2009/07/07",
    "office": "San Francisco",
    "extn": "2927"
  },
  {
    "id": "47",
    "name": "Serge Baldwin",
    "position": "Data Coordinator",
    "salary": "$138,575",
    "start_date": "2012/04/09",
    "office": "Singapore",
    "extn": "8352"
  },
  {
    "id": "48",
    "name": "Zenaida Frank",
    "position": "Software Engineer",
    "salary": "$125,250",
    "start_date": "2010/01/04",
    "office": "New York",
    "extn": "7439"
  },
  {
    "id": "49",
    "name": "Zorita Serrano",
    "position": "Software Engineer",
    "salary": "$115,000",
    "start_date": "2012/06/01",
    "office": "San Francisco",
    "extn": "4389"
  },
  {
    "id": "50",
    "name": "Jennifer Acosta",
    "position": "Junior Javascript Developer",
    "salary": "$75,650",
    "start_date": "2013/02/01",
    "office": "Edinburgh",
    "extn": "3431"
  },
  {
    "id": "51",
    "name": "Cara Stevens",
    "position": "Sales Assistant",
    "salary": "$145,600",
    "start_date": "2011/12/06",
    "office": "New York",
    "extn": "3990"
  },
  {
    "id": "52",
    "name": "Hermione Butler",
    "position": "Regional Director",
    "salary": "$356,250",
    "start_date": "2011/03/21",
    "office": "London",
    "extn": "1016"
  },
  {
    "id": "53",
    "name": "Lael Greer",
    "position": "Systems Administrator",
    "salary": "$103,500",
    "start_date": "2009/02/27",
    "office": "London",
    "extn": "6733"
  },
  {
    "id": "54",
    "name": "Jonas Alexander",
    "position": "Developer",
    "salary": "$86,500",
    "start_date": "2010/07/14",
    "office": "San Francisco",
    "extn": "8196"
  },
  {
    "id": "55",
    "name": "Shad Decker",
    "position": "Regional Director",
    "salary": "$183,000",
    "start_date": "2008/11/13",
    "office": "Edinburgh",
    "extn": "6373"
  },
  {
    "id": "56",
    "name": "Michael Bruce",
    "position": "Javascript Developer",
    "salary": "$183,000",
    "start_date": "2011/06/27",
    "office": "Singapore",
    "extn": "5384"
  },
  {
    "id": "57",
    "name": "Donna Snider",
    "position": "Customer Support",
    "salary": "$112,000",
    "start_date": "2011/01/25",
    "office": "New York",
    "extn": "4226"
  }
])
</script>

<template>
  <div class="mx-auto xl:container">


    <el-page-header title="Retour">
      <template #content>
        <div class="flex items-center">
          <span class="text-base font-medium"> Rappels </span>
        </div>
      </template>

      <template #extra>
        <div class="flex gap-2">

          <RouterLink to="{ name: item.to }"
            class="flex items-center gap-2 py-1.5 px-2 rounded shadow text-white bg-unstim-primary w-fit hover:bg-opacity-60">
            <v-icon :name="icons.AddIcon" class="" scale="1.0" />
            <span class="text-sm font-medium"> Ajouter un rappel </span>
          </RouterLink>


          <RouterLink to="{ name: item.to }"
            class="flex items-center gap-2 py-1.5 px-2 rounded shadow text-white bg-unstim-primary w-fit hover:bg-opacity-60">
            <v-icon :name="icons.AddIcon" class="" scale="1.0" />
            <span class="text-sm font-medium"> Imprimer pour un mois </span>
          </RouterLink>

        </div>
      </template>

    </el-page-header>



    <el-card class="box-card my-5">
      <template #header>
        <div class="flex items-center justify-between">
          <!-- <span> Dans 08 mois </span>
          <RouterLink to="{ name: item.to }"
            class="flex items-center gap-2 py-1.5 px-2 rounded shadow bg-yellow-500 w-fit hover:bg-opacity-60">
            <v-icon :name="icons.PersonPlus" class="" scale="1.0" />
            <span class="text-sm font-medium"> Imprimer </span>
          </RouterLink> -->
        </div>

        <AccordionRoot class="w-full border z-10" default-value="'item-1'" type="single" :collapsible="true">
          <AccordionItem class="overflow-hidden" value="Recherche avancée">
            <AccordionHeader class="flex">
              <AccordionTrigger
                class="text-base bg-slate-100 font-medium hover:bg-slate-200 transition-all flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] group">
                <span>Recherche Avancée</span>
                <v-icon :name="icons.ChevronDown" :scale="0.8"
                  class="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent
              class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp -z-20 overflow-hidden text-[15px]">
              <div class="px-5 py-4">
                <el-form require-asterisk-position="right"
                  class="demo-form-inline  grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                  <el-form-item label="Mois" required>

                    <div class="max-w-full w-full">
                      <el-input placeholder="" size="large" />
                    </div>

                  </el-form-item>

                  <el-form-item>

                    <div class="max-w-full w-full">
                      <el-button type="primary" size="large"> Rechercher </el-button>
                    </div>

                  </el-form-item>

                </el-form>

              </div>
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </template>


      <DataTable :columns="columns" :options="options" class="py-5 text-sm stripe hover cell-border">
        <tbody>
          <tr v-for="item in items" :key="item.matricule">
            <td> {{ item.matricule }} </td>
            <td> {{ item.employe }}</td>
            <td> {{ item.ancien_grade }}</td>
            <td> {{ item.nouveau_grade }}</td>
            <td>{{ item.brut }}</td>
            <td>{{ item.jours }}</td>
            <td>{{ item.debut }}</td>
            <td>{{ item.fin }}</td>
            <td>
              <div class="grid grid-cols-2 gap-2">

                <RouterLink :to="{ name: 'permissions-roles' }"
                  class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
                  <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
                </RouterLink>


                <RouterLink :to="{ name: 'permissions-roles' }"
                  class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
                  <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
                </RouterLink>

                <RouterLink to=""
                  class="flex items-center gap-2 p-2 my-2 text-white bg-red-400 rounded shadow-md w-fit hover:bg-red-500">

                  <v-icon :name="icons.EditIcon" scale="1.0" />
                </RouterLink>

                <RouterLink to=""
                  class="flex items-center gap-2 p-2 my-2 text-white bg-black/75 rounded shadow-md w-fit hover:bg-black/75">
                  <v-icon :name="icons.DeleteIcon" scale="1.0" />
                </RouterLink>
              </div>
            </td>
          </tr>
        </tbody>
      </DataTable>


      <!-- <el-table :data="items" size="small" :lazy="true" :border="true" style="width: 100%">

        <el-table-column width="150" prop="matricule" label="Matricule" />
        <el-table-column width="250" prop="employe" label="Nom & Prenoms" />
        <el-table-column width="100" prop="ancien_grade" label="Ancien grade" />
        <el-table-column width="150" prop="nouveau_grade" label="Nouveau grade" />
        <el-table-column width="150" prop="solde_indexe" label="Solde indexé (FCFA)" />
        <el-table-column width="95" prop="brut" label="Brut (FCFA)" />
        <el-table-column width="100" prop="jours" label="Nbr de jours" />
        <el-table-column width="150" prop="debut" label="Début" />
        <el-table-column width="150" prop="fin" label="Fin" />

        <el-table-column width="200" fixed="right" label="Actions">

          <template #default="">

            <div class="flex gap-2">

              <RouterLink :to="{ name: 'permissions-roles' }"
                class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
                <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
              </RouterLink>


              <RouterLink :to="{ name: 'permissions-roles' }"
                class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
                <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
              </RouterLink>

              <RouterLink to=""
                class="flex items-center gap-2 p-2 my-2 text-white bg-red-400 rounded shadow-md w-fit hover:bg-red-500">

                <v-icon :name="icons.EditIcon" scale="1.0" />
              </RouterLink>

              <RouterLink to=""
                class="flex items-center gap-2 p-2 my-2 text-white bg-black/75 rounded shadow-md w-fit hover:bg-black/75">
                <v-icon :name="icons.DeleteIcon" scale="1.0" />
              </RouterLink>
            </div>
          </template>

        </el-table-column>

      </el-table> -->

    </el-card>

  </div>
</template>

<style></style>
