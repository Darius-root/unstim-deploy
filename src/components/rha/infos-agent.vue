<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons';
import { ref } from 'vue';


const headers = ref([
  { text: 'Actions', sortable: true, value: 'action' },
  { text: 'Matricule', sortable: true, value: 'matricule' },
  { text: 'Nom', sortable: true, value: 'nom' },
  { text: 'Prénom', sortable: true, value: 'prenom' },
  { text: 'Sexe', sortable: true, value: 'sexe' },
  { text: 'Catégorie', sortable: true, value: 'categorie' },
  { text: 'Date de naissance', sortable: true, value: 'date_naissance' }
])

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

const itemsSelected = ref([])


</script>

<template>

  
  <div class="w-full p-5  border border-gray-300 bg-unstim-light card">

    <div class="infos-group">

      <h3 class="pt-5 text-xl font-semibold">Informations Générales</h3>

      <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-2">

        <div class="flex flex-col col-span-full space-y-2 input-group">
          <label for="" class="text-sm">Photo de profil</label>
          <div class="flex  item-center">
            <input type="file" class="form-unstim focus:border-none focus:outline-none bg-white lg:w-1/3 px-3" />

            <RouterLink to="{ name: item.to }"
              class="flex items-center gap-2 p-2 rounded-r shadow bg-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
              <v-icon :name="icons.PersonPlus" class="text-white" scale="1.1" />
              <span class="text-sm font-medium text-white"> Enrégistrer </span>
            </RouterLink>

          </div>
        </div>

      </div>


      <div class="grid grid-cols-1 border-y border-gray-300 gap-4 py-5 md:grid-cols-2 lg:grid-cols-3">

        <div class="infos-item flex flex-col">

          <span class="text-lg  font-medium"> Fonction : </span>

          <span class="text-base"> ASSISTANT </span>

        </div>

        <div class="infos-item flex flex-col">

          <span class="text-lg font-medium"> Service : </span>

          <span class="text-base"> Agence Commerciale Nikki </span>

        </div>


        <div class="infos-item flex flex-col">

          <span class="text-lg font-medium"> Entité : </span>

          <span class="text-base"> Direction de l'Exploitation Commerciale </span>

        </div>

      </div>


      <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-2">


        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Nom </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Prénom </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Date de naissance : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Lieu de naissance : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Sexe : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Nombre d'enfants : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Numéro de téléphone : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Situation matrimoniale : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Numéro de la pièce d'identité : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Addresse : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Email privé : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Email Professionnel : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Numero IFU : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Etrennes : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>


      </div>


      <h3 class="pt-5 text-xl font-semibold"> Informations professionnelles</h3>


      <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-2">

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Matricule : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Catégorie professionnelle : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="col-span-full">



        </div>




      </div>

      <h3 class="pt-5 text-xl font-semibold"> Autres </h3>

      <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-2">

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Nom de la banque : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Numéro de compte bancaire: </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Echelon: </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>


        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> CNSS : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col space-y-2 input-group">
          <label for="" class="text-sm"> Date de la déclaration CNSS : </label>
          <div class="flex w-full gap-2 item-center">
            <input type="text" class="form-unstim w-full" />
            <RouterLink to="{ name: item.to }"
              class="flex items-center justify-center p-2 rounded shadow bg-unstim-primary border-unstim-primary hover:bg-opacity-60">
              <v-icon :name="icons.EditIcon" class="text-white" scale="1.1" />
              <!-- <span class="text-sm font-medium"> Enrégistrer </span> -->
            </RouterLink>
          </div>
        </div>


      </div>




    </div>


  </div>


</template>

<style></style>