<script lang="ts" setup>

import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from 'radix-vue'

import { icons } from '@/assets/icons/oh-vue-icons'

import { computed, reactive, ref } from 'vue';

import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from '@element-plus/icons-vue'



// const itemsSelected = ref([])

const searchOption = reactive({
  options: '',
  valeur: '',
  sexe: '',
  categorie: '',
  fonction: '',
  typeContrat: '',
  direction: '',
  situation: '',
  showAgentsInactifs: ''
})

const tableData = reactive([
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17,
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
])

const optionsParameters = reactive({
  options: ['Nom Complet', 'Prénoms', 'Noms']
})

const sexeParameters = reactive({
  options: ['Tout les sexes', 'Masculin', 'Feminin']
})

const categorieParameters = reactive({
  options: ['C1', 'C2', 'C3']
})

const fonctionsParameters = reactive({
  options: ['Agent commercial', 'Agent de Guichet', 'Analyste']
})


</script>

<template>
  <div class="p-5 mt-3 border space-y-4 row">

    <RouterLink :to="{ name: 'modifier-informations' }"
      class="flex items-center gap-2 p-2 text-sm font-medium text-white  bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
      Faire un nouveau contrat
    </RouterLink>

    <AccordionRoot class="w-full border z-10" default-value="'item-1'" type="single" :collapsible="true">
      <AccordionItem class="overflow-hidden" value="Recherche avancée">
        <AccordionHeader class="flex">
          <AccordionTrigger
            class="text-base bg-slate-100 font-medium hover:bg-slate-200 transition-all flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] group">
            <span>Recherche avancées</span>
            <v-icon :name="icons.ChevronDown" :scale="0.8"
              class="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent
          class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp -z-20 overflow-hidden text-[15px]">
          <div class="px-5 py-4 space-y-4">

            <!-- <el-descriptions class-name="w-full bg-red-500" direction="horizontal" :column="1" border>

              <el-descriptions-item label="Nom de l'agent">Nom de l'agent</el-descriptions-item>
              <el-descriptions-item label="Type de contrat">Type de contrat</el-descriptions-item>
              <el-descriptions-item label="Date de démarrage">Date de d</el-descriptions-item>
              <el-descriptions-item label="Date de fin"></el-descriptions-item>
              <el-descriptions-item label="Statut"> Cotonou </el-descriptions-item>
              <el-descriptions-item label="Date de création">00 22 55 00</el-descriptions-item>
              <el-descriptions-item label="Date de dernière modification">00 22 55 00</el-descriptions-item>
              <el-descriptions-item label="Date de dernière disponibilité">00 22 55 00</el-descriptions-item>
              <el-descriptions-item label="Date de dernière réhabilitation">00 22 55 00</el-descriptions-item>

            </el-descriptions> -->

            <el-descriptions class="" title="Informations de base" :column="1" border>
              <template #extra>
                <el-button type="primary">Operation</el-button>
              </template>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">
                    <el-icon>
                      <user />
                    </el-icon>
                    Username
                  </div>
                </template>
                kooriookami
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">
                    <el-icon>
                      <iphone />
                    </el-icon>
                    Telephone
                  </div>
                </template>
                18100000000
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">
                    <el-icon>
                      <location />
                    </el-icon>
                    Place
                  </div>
                </template>
                Suzhou
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">
                    <el-icon>
                      <tickets />
                    </el-icon>
                    Remarks
                  </div>
                </template>
                <el-tag size="small">School</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">
                    <el-icon>
                      <office-building />
                    </el-icon>
                    Address
                  </div>
                </template>
                No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
              </el-descriptions-item>
            </el-descriptions>


            <div class="flex gap-2">

              <RouterLink :to="{ name: 'modifier-informations' }"
                class="flex items-center gap-2 p-2 text-sm font-medium text-white  bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
                Modifier le contrat
              </RouterLink>

              <RouterLink :to="{ name: 'modifier-informations' }"
                class="flex items-center gap-2 p-2 text-sm font-medium text-white  bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
                Suspendre le contrat
              </RouterLink>

              <RouterLink :to="{ name: 'modifier-informations' }"
                class="flex items-center gap-2 p-2 text-sm font-medium text-white  bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
                Nouvel Acte
              </RouterLink>

              <RouterLink :to="{ name: 'modifier-informations' }"
                class="flex items-center gap-2 p-2 text-sm font-medium text-white  bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
                Intérim
              </RouterLink>

            </div>

            <h3 class="text-xl font-semibold">Déroulement de la carrière</h3>

            <el-table :data="tableData" :border="true" style="width: 100%">
              <el-table-column prop="Status" label="ID" width="180" />
              <el-table-column prop="Fonction" label="Name" />
              <el-table-column prop="amount1" sortable label="Amount 1" />
              <el-table-column prop="amount2" sortable label="Amount 2" />
              <el-table-column prop="amount3" sortable label="Amount 3" />
              <el-table-column prop="amount3" sortable label="Amount 3" />
              <el-table-column prop="amount3" sortable label="Amount 3" />
              <el-table-column prop="amount3" sortable label="Amount 3" />
              <el-table-column prop="amount3" sortable label="Amount 3" />
              <el-table-column prop="amount3" sortable label="Amount 3" />
              <el-table-column prop="amount3" sortable label="Amount 3" />
              <el-table-column prop="amount3" sortable label="Amount 3" />

            </el-table>


          </div>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>


  </div>
</template>

<style></style>
