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

const items = ref([
  {
    matricule: '#64035',
    nom: 'HOUNDJO M',
    prenom: 'Stephen',
    sexe: 'M',
    categorie: 'M1',
    date_naissance: '01/01/2000',
    action: ''
  },
  {
    matricule: '#64035',
    nom: 'HOUNDJO M',
    prenom: 'Stephen',
    sexe: 'M',
    categorie: 'M1',
    date_naissance: '01/01/2000',
    action: ''
  },
  {
    matricule: '#64035',
    nom: 'HOUNDJO M',
    prenom: 'Stephen',
    sexe: 'M',
    categorie: 'M1',
    date_naissance: '01/01/2000',
    action: ''
  },
  // Repeat the object 17 more times
  {
    matricule: '#64035',
    nom: 'HOUNDJO M',
    prenom: 'Stephen',
    sexe: 'M',
    categorie: 'M1',
    date_naissance: '01/01/2000',
    action: ''
  },

  {
    matricule: '#64034',
    nom: 'BIAOU',
    prenom: 'Hamidou',
    sexe: 'M',
    categorie: 'M1',
    date_naissance: '01/01/2000',
    action: ''
  },

  {
    matricule: '#64032',
    nom: 'TOSSOU',
    prenom: 'Valentin',
    sexe: 'M',
    categorie: 'M1',
    date_naissance: '01/01/2000',
    action: ''
  },

  {
    matricule: '#64031',
    nom: 'CODJIA',
    prenom: 'Orens Eudie',
    sexe: 'F',
    categorie: 'M1',
    date_naissance: '01/01/2000',
    action: ''
  },

  {
    matricule: '#64131',
    nom: "D'ALMEIDA",
    prenom: 'Mensen Gilberte',
    sexe: 'F',
    categorie: 'M1',
    date_naissance: '01/01/2000',
    action: ''
  }
])


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

const employeFormData = reactive({
  nom: '',
  prenom: '',
  date_naissance: '',
  lieu_naissance: '',
  sexe: '',
  numero_telephone: '',
  situation_matrimoniale: '',
  numero_cni: '',
  adresse: '',
  numero_ifu: '',
  email_prive: '',
  email_professionnel: '',
  matricule: '',
  categorie_pro: '',
  echelon: '',
  qualif_pro: '',
  nom_banque: '',
  numero_compte_bancaire: '',
  numero_cnss: '',
  date_declaration_cnss: '',
  code_comptable: '',
  type_contrat: '',
  date_debut_contrat: '',
  date_fin_contrat: '',
  fonction: '',
  libelle_fonction: '',
  ville: '',
  isPromotion: '',
  date_demarrage: '',
  nom_departement: '',
  logement: '',
  description: ''
})

</script>

<template>
  <el-card class="space-y-4 my-5">

    <div class="space-y-4">
      <AccordionRoot class="w-full border z-10" default-value="'item-1'" type="single" :collapsible="true">
        <AccordionItem class="overflow-hidden" value="cmp">
          <AccordionHeader class="flex">
            <AccordionTrigger
              class="text-base bg-slate-100 font-medium hover:bg-slate-200 transition-all flex h-[45px] flex-1 cursor-pointer items-center justify-between px-5 text-[15px] group">
              <span class="text-sm font-medium"> Ajouter de nouvelles Compétences/Atouts </span>
              <v-icon :name="icons.ChevronDown" :scale="0.8"
                class="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent
            class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp -z-20 overflow-hidden text-[15px]">
            <div class="px-5 py-4 space-y-4">

              <el-form label-position="top" require-asterisk-position="right" :model="employeFormData"
                class="demo-form-inline grid grid-cols-1 gap-4 md:grid-cols-2">

                <div class="col-span-full">

                  <el-form-item label="Entrez les libéllés des nouvelles compétences/atouts">
                    <div class="max-w-full w-full">
                      <el-select v-model="employeFormData.adresse" placeholder="" size="large" clearable>
                        <el-option label="Zone one" value="shanghai" />
                        <el-option label="Zone two" value="beijing" />
                      </el-select>
                    </div>
                  </el-form-item>

                </div>


              </el-form>


            </div>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>


      <el-table :data="items" size="small" :lazy="true" :border="true" style="width: 100%" table-layout="auto">

        <el-table-column type="selection" width="50" />
        <el-table-column prop="distinction" label="Distinction" />
        <el-table-column prop="date" sortable label="Date" />

        <el-table-column label="Actions">
          <template #default>
            <div class="flex gap-2">
              <RouterLink :to="{ name: 'infos-employee' }"
                class="flex items-center gap-2 p-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
                <v-icon :name="icons.EditIcon" scale="1.0" />
              </RouterLink>

              <RouterLink to=""
                class="flex items-center gap-2 p-2 text-white bg-red-400 rounded shadow-md w-fit hover:bg-red-500">
                <v-icon :name="icons.DeleteIcon" scale="1.0" />
              </RouterLink>
            </div>
          </template>
        </el-table-column>

      </el-table>

    </div>




  </el-card>
</template>

<style></style>
