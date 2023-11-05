<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { reactive, ref } from 'vue'

const totalStep = ref(3)

const currentFormStep = ref(1)

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
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium"> Enrégistrement des informations de l'employé </span>
    </div>

    <RouterLink
      @click.prevent="$router.back()"
      to=""
      class="flex items-center gap-2 p-2 mt-5 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
    >
      <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
      <span class="text-sm font-medium"> Retour </span>
    </RouterLink>

    <div class="w-full p-5 mt-5 border border-gray-300 bg-unstim-light card">
      <p class="flex items-center gap-3">
        <span class="text-red-400">*</span>

        <span class="text-sm">Champs obligatoire</span>
      </p>

      <Transition name="fade" mode="out-in">
        <div class="personal-infos-group" v-if="currentFormStep === 1">
          <!-- INFOS PERSON -->

          <h3 class="pt-5 text-xl font-semibold">Informations Générales</h3>

          <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-2 lg:grid-cols-4">
            <!-- NOM -->

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Nom</label>
              <input type="text" :name="employeFormData.nom" class="form-unstim" />
            </div>

            <!-- PRENOM -->

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Prénom</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Date de naissance</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Lieu de naissance</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Sexe</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Numéro de téléphone</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Situation matrimoniale</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Numéro de la pièce d'identité</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Addresse</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Numero IFU</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Email privé</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm"> Email Professionnel</label>
              <input type="text" class="form-unstim" />
            </div>
          </div>

          <!-- INFOS PRO -->

          <h3 class="pt-5 text-xl font-semibold">Informations professionnelles</h3>

          <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Matricule</label>
              <input type="text" :name="employeFormData.nom" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Categorie professionnelle</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Echelon</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 col-span-full input-group">
              <label for="" class="text-sm">Qualifications professionnelles</label>
              <input type="text" class="form-unstim" />
            </div>
          </div>

          <!-- AUTRES -->

          <h3 class="pt-5 text-xl font-semibold">Autres</h3>

          <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Nom de la banque </label>
              <input type="text" :name="employeFormData.nom" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Numero de compte bancaire</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">N° CNSS</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Date de la déclaration CNSS</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 col-span-full input-group">
              <label for="" class="text-sm">Code Comptable</label>
              <input type="text" class="form-unstim" />
            </div>
          </div>
        </div>
      </Transition>

      <Transition name="fade" mode="out-in">
        <div class="contrat-group" v-if="currentFormStep === 2">
          <h3 class="pt-5 text-xl font-semibold">Enregistrer le contrat</h3>

          <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-3">
            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Type de contrat</label>
              <input type="text" :name="employeFormData.nom" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Date de debut du contrat</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Date de fin du contrat</label>
              <input type="text" class="form-unstim" />
            </div>
          </div>
        </div>
      </Transition>

      <Transition name="fade" mode="out-in">
        <div class="contrat-group" v-if="currentFormStep === totalStep">
          <h3 class="pt-5 text-xl font-semibold">Enregistrement des états de service</h3>

          <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-2">
            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Fonction</label>
              <input type="text" :name="employeFormData.nom" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Date de démarrage</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Libellé de la fonction</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Nom du Département/Section/Agence</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Ville</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Logement</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Est une promotion ?</label>
              <input type="text" class="form-unstim" />
            </div>

            <div class="flex flex-col space-y-2 input-group">
              <label for="" class="text-sm">Description</label>
              <input type="text" class="form-unstim" />
            </div>
          </div>
        </div>
      </Transition>

      <div class="flex gap-3 border-t form-btn">
        <button
          v-if="currentFormStep > 1"
          @click.prevent="currentFormStep--"
          class="flex items-center gap-2 p-2 px-3 mt-5 text-white rounded shadow bg-unstim-black-pan w-fit hover:bg-opacity-60"
        >
          <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.0" />
          <span class="text-sm font-medium"> Précédent </span>
        </button>

        <button
          v-if="currentFormStep >= 1 && currentFormStep < totalStep"
          @click.prevent="currentFormStep++"
          class="flex items-center gap-2 p-2 px-3 mt-5 text-white rounded shadow bg-unstim-primary w-fit hover:bg-opacity-60"
        >
          <span class="text-sm font-medium"> Suivant </span>
          <v-icon :name="icons.ChevronUp" class="rotate-90" scale="1.0" />
        </button>

        <button
          v-if="currentFormStep === totalStep"
          class="flex items-center gap-2 p-2 px-3 mt-5 text-white rounded shadow bg-unstim-primary w-fit hover:bg-opacity-60"
        >
          <span class="text-sm font-medium"> Enrégistrer </span>
          <!-- <v-icon :name="icons.ChevronUp" class="rotate-90" scale="1.0" /> -->
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
