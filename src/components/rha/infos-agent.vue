<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { reactive, ref } from 'vue'
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'

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

// const itemsSelected = ref([])


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
  <el-card class="space-y-4 my-5 border border-gray-300 bg-slate-500">

    <div class="persol space-y-4">

      <div class="w-full">

        <h3 class="pt-3 text-xl font-semibold">Informations Générales</h3>

        <el-form label-position="top" require-asterisk-position="right" :model="employeFormData"
          class="demo-form-inline mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">

          <el-form-item label="Nom" required>

            <div class="max-w-full flex items-center gap-2  w-full">
              <el-input v-model="employeFormData.nom" placeholder="" size="large" />
              <el-button type="primary" size="large" :icon="Edit" />
            </div>

          </el-form-item>

          <el-form-item label="Prénom" required>

            <div class="max-w-full w-full flex items-center gap-2">
              <el-input v-model="employeFormData.prenom" placeholder="" size="large" />
              <el-button type="primary" size="large" :icon="Edit" />
            </div>
          </el-form-item>

          <el-form-item label="Date de naissance" required>
            <div class="max-w-full w-full flex items-center gap-2">
              <el-date-picker class="w-full" type="date" placeholder="" size="large" />
              <el-button type="primary" size="large" :icon="Edit" />

            </div>
          </el-form-item>

          <el-form-item label="Lieu de naissance" required>

            <div class="max-w-full w-full flex items-center gap-2">
              <el-input v-model="employeFormData.lieu_naissance" placeholder="" size="large" />
              <el-button type="primary" size="large" :icon="Edit" />
            </div>

          </el-form-item>

          <el-form-item label="Sexe">
            <div class="max-w-full w-full flex items-center gap-2">
              <el-select v-model="employeFormData.adresse" placeholder="" size="large" clearable>
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
              <el-button type="primary" size="large" :icon="Edit" />

            </div>
          </el-form-item>

          <el-form-item label="Téléphone" required>

            <div class="max-w-full w-full flex items-center gap-2">
              <el-input v-model="employeFormData.lieu_naissance" placeholder="" size="large" />
              <el-button type="primary" size="large" :icon="Edit" />

            </div>

          </el-form-item>

          <el-form-item label="Situation matrimoniale" required>

            <div class="max-w-full w-full flex items-center gap-2">
              <el-select v-model="employeFormData.situation_matrimoniale" placeholder="" size="large" clearable>
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
              <el-button type="primary" size="large" :icon="Edit" />

            </div>

          </el-form-item>


          <el-form-item label="CNI" required>

            <div class="max-w-full w-full flex items-center gap-2">
              <el-input v-model="employeFormData.numero_cni" placeholder="" size="large" />
              <el-button type="primary" size="large" :icon="Edit" />

            </div>

          </el-form-item>

          <el-form-item label="Adresse" required>

            <div class="max-w-full w-full flex items-center gap-2">
              <el-input v-model="employeFormData.adresse" placeholder="" size="large" />
              <el-button type="primary" size="large" :icon="Edit" />

            </div>

          </el-form-item>

          <el-form-item label="Numéro IFU" required>

            <div class="max-w-full w-full flex items-center gap-2">
              <el-input v-model="employeFormData.adresse" placeholder="" size="large" />
              <el-button type="primary" size="large" :icon="Edit" />

            </div>

          </el-form-item>

          <el-form-item label="Email privé" required>

            <div class="max-w-full w-full flex items-center gap-2">
              <el-input v-model="employeFormData.lieu_naissance" placeholder="" size="large" />
              <el-button type="primary" size="large" :icon="Edit" />

            </div>

          </el-form-item>

          <el-form-item label="Email professionnel" required>

            <div class="max-w-full w-full flex items-center gap-2">
              <el-input v-model="employeFormData.lieu_naissance" placeholder="" size="large" />
              <el-button type="primary" size="large" :icon="Edit" />

            </div>

          </el-form-item>


        </el-form>

      </div>

      <div class="w-full mt-4">

        <h3 class="pt-3 text-xl font-semibold">Informations professionnelles</h3>

        <el-form label-position="top" require-asterisk-position="right" :model="employeFormData"
          class="demo-form-inline mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">

          <el-form-item label="Matricule" required>

            <div class="max-w-full w-full flex items-center gap-2">
              <el-input v-model="employeFormData.matricule" placeholder="" size="large" />
              <el-button type="primary" size="large" :icon="Edit" />

            </div>

          </el-form-item>


          <el-form-item label="Categorie professionnelle" required>
            <div class="max-w-full w-full flex items-center gap-2">
              <el-select v-model="employeFormData.adresse" placeholder="" size="large" clearable>
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
              <el-button type="primary" size="large" :icon="Edit" />

            </div>
          </el-form-item>

          <div class="col-span-full">

            <el-descriptions class-name="w-full bg-red-500" direction="horizontal" :column="1" :border="true">

              <el-descriptions-item label="Salaire de base"> 450 000 FCFA </el-descriptions-item>
              <el-descriptions-item label="Avantage en nature">
                <div class="max-w-full w-full flex items-center gap-2">
                  <el-input v-model="employeFormData.matricule" placeholder="" size="large" />
                  <el-button type="primary" size="large" :icon="Edit" />
                </div>
              </el-descriptions-item>
              <el-descriptions-item label="Date de départ à la retraite">
                <div class="max-w-full w-full flex items-center gap-2">
                  <el-date-picker class="w-full" type="date" placeholder="" size="large" />
                  <el-button type="primary" size="large" :icon="Edit" />
                </div>
              </el-descriptions-item>
              <el-descriptions-item label="Code Comptable">
                <div class="max-w-full w-full flex items-center gap-2">
                  <el-input v-model="employeFormData.matricule" placeholder="" size="large" />
                  <el-button type="primary" size="large" :icon="Edit" />
                </div>
              </el-descriptions-item>
              <el-descriptions-item label="Qualifications professionnelles">
                <div class="max-w-full w-full flex items-center gap-2">
                  <el-input v-model="employeFormData.matricule" placeholder="" size="large" />
                  <el-button type="primary" size="large" :icon="Edit" />
                </div>
              </el-descriptions-item>

            </el-descriptions>



          </div>

        </el-form>



      </div>

      <div class="w-full mt-4">

        <h3 class="py-3 text-xl font-semibold">Autres</h3>

        <el-form label-position="top" require-asterisk-position="right" :model="employeFormData"
          class="demo-form-inline mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">

          <el-form-item label="Nom de la banque" required>
            <div class="max-w-full w-full flex items-center gap-2">
              <el-select v-model="employeFormData.adresse" placeholder="" size="large" clearable>
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
              <el-button type="primary" size="large" :icon="Edit" />

            </div>
          </el-form-item>


          <el-form-item label="Numero de compte bancaire">

            <div class="max-w-full w-full flex items-center gap-2">
              <el-input v-model="employeFormData.matricule" placeholder="" size="large" />
              <el-button type="primary" size="large" :icon="Edit" />

            </div>

          </el-form-item>

          <el-form-item label="N° CNSS">

            <div class="max-w-full w-full flex items-center gap-2">
              <el-input v-model="employeFormData.echelon" placeholder="" size="large" />
              <el-button type="primary" size="large" :icon="Edit" />

            </div>

          </el-form-item>


          <el-form-item label="Date de la déclaration CNSS">

            <div class="max-w-full w-full flex items-center gap-2">
              <el-input v-model="employeFormData.qualif_pro" placeholder="" size="large" />
              <el-button type="primary" size="large" :icon="Edit" />

            </div>

          </el-form-item>

          <el-form-item label="Code Comptable">

            <div class="max-w-full w-full flex items-center gap-2">
              <el-input v-model="employeFormData.qualif_pro" placeholder="" size="large" />
              <el-button type="primary" size="large" :icon="Edit" />
            </div>

          </el-form-item>

        </el-form>

      </div>
    </div>

  </el-card>
</template>
