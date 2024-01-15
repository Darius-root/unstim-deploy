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

    <el-page-header title="Retour" @click="$router.go(-1)">
      <template #content>
        <div class="flex items-center">
          <span class="text-base font-medium"> Enrégistrement des informations de l'employé </span>
        </div>
      </template>

    </el-page-header>


    <el-card class="space-y-4 my-5 border border-gray-300 bg-slate-500">

      <div class="text-sm flex gap-3 font-medium items-center">
        <span class="text-red-400">*</span>
        Champs obligatoires
      </div>

      <el-tabs class="demo-tabs mt-4">
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <span>Informations personnel</span>
            </span>
          </template>

          <div class="persol space-y-4">

            <div class="w-full">

              <h3 class="py-3 text-xl font-medium">Informations générales</h3>

              <el-form label-position="top" require-asterisk-position="right" :model="employeFormData"
                class="demo-form-inline mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

                <el-form-item label="Nom" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.nom" placeholder="" size="large" />
                  </div>

                </el-form-item>

                <el-form-item label="Prénom" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.prenom" placeholder="" size="large" />
                  </div>
                </el-form-item>

                <el-form-item label="Date de naissance" required>
                  <div class="max-w-full w-full">
                    <el-date-picker class="w-full" type="date" placeholder="" size="large" />
                  </div>
                </el-form-item>

                <el-form-item label="Lieu de naissance" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.lieu_naissance" placeholder="" size="large" />
                  </div>

                </el-form-item>

                <el-form-item label="Sexe">
                  <div class="max-w-full w-full">
                    <el-select v-model="employeFormData.adresse" placeholder="" size="large" clearable>
                      <el-option label="Zone one" value="shanghai" />
                      <el-option label="Zone two" value="beijing" />
                    </el-select>
                  </div>
                </el-form-item>

                <el-form-item label="Téléphone" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.lieu_naissance" placeholder="" size="large" />
                  </div>

                </el-form-item>

                <el-form-item label="Situation matrimoniale" required>

                  <div class="max-w-full w-full">
                    <el-select v-model="employeFormData.situation_matrimoniale" placeholder="" size="large" clearable>
                      <el-option label="Zone one" value="shanghai" />
                      <el-option label="Zone two" value="beijing" />
                    </el-select>
                  </div>

                </el-form-item>


                <el-form-item label="CNI" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.numero_cni" placeholder="" size="large" />
                  </div>

                </el-form-item>

                <el-form-item label="Adresse" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.adresse" placeholder="" size="large" />
                  </div>

                </el-form-item>

                <el-form-item label="Numéro IFU" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.adresse" placeholder="" size="large" />
                  </div>

                </el-form-item>

                <el-form-item label="Email privé" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.lieu_naissance" placeholder="" size="large" />
                  </div>

                </el-form-item>

                <el-form-item label="Email professionnel" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.lieu_naissance" placeholder="" size="large" />
                  </div>

                </el-form-item>


              </el-form>



            </div>

            <div class="w-full mt-4">

              <h3 class="py-3 text-xl font-medium">Informations professionnelles</h3>

              <el-form label-position="top" require-asterisk-position="right" :model="employeFormData"
                class="demo-form-inline mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">

                <el-form-item label="Matricule" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.matricule" placeholder="" size="large" />
                  </div>

                </el-form-item>


                <el-form-item label="Categorie professionnelle" required>
                  <div class="max-w-full w-full">
                    <el-select v-model="employeFormData.adresse" placeholder="" size="large" clearable>
                      <el-option label="Zone one" value="shanghai" />
                      <el-option label="Zone two" value="beijing" />
                    </el-select>
                  </div>
                </el-form-item>

                <el-form-item label="Echelon" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.echelon" placeholder="" size="large" />
                  </div>

                </el-form-item>


                <el-form-item label="Qualifications professionnelles">

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.qualif_pro" placeholder="" size="large" />
                  </div>

                </el-form-item>


              </el-form>



            </div>

            <div class="w-full mt-4">

              <h3 class="py-3 text-xl font-medium">Autres</h3>

              <el-form label-position="top" require-asterisk-position="right" :model="employeFormData"
                class="demo-form-inline mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                <el-form-item label="Nom de la banque" required>
                  <div class="max-w-full w-full">
                    <el-select v-model="employeFormData.adresse" placeholder="" size="large" clearable>
                      <el-option label="Zone one" value="shanghai" />
                      <el-option label="Zone two" value="beijing" />
                    </el-select>
                  </div>
                </el-form-item>


                <el-form-item label="Numero de compte bancaire">

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.matricule" placeholder="" size="large" />
                  </div>

                </el-form-item>

                <el-form-item label="N° CNSS">

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.echelon" placeholder="" size="large" />
                  </div>

                </el-form-item>


                <el-form-item label="Date de la déclaration CNSS">

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.qualif_pro" placeholder="" size="large" />
                  </div>

                </el-form-item>

                <el-form-item label="Code Comptable">

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.qualif_pro" placeholder="" size="large" />
                  </div>

                </el-form-item>

              </el-form>

            </div>
          </div>

        </el-tab-pane>

        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <span>Contrat de travail</span>
            </span>
          </template>

          <div class="persol space-y-4">

            <div class="w-full">

              <h3 class="py-3 text-xl font-medium">Enrégister le contrat</h3>

              <el-form label-position="top" require-asterisk-position="right" :model="employeFormData"
                class="demo-form-inline mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">

                <el-form-item label="Type de contrat" required>

                  <div class="max-w-full w-full">
                    <el-select v-model="employeFormData.adresse" placeholder="" size="large" clearable>
                      <el-option label="Zone one" value="shanghai" />
                      <el-option label="Zone two" value="beijing" />
                    </el-select>
                  </div>

                </el-form-item>

                <el-form-item label="Dates du contrat" required>

                  <div class="max-w-full w-full">
                    <el-date-picker type="daterange" start-placeholder="Date de debut" end-placeholder="Date de fin"
                      size="large" />
                  </div>

                </el-form-item>



              </el-form>



            </div>


          </div>

        </el-tab-pane>


        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <span>Etats de services</span>
            </span>
          </template>


          <div class="persol space-y-4">

            <div class="w-full">

              <h3 class="py-3 text-xl font-medium">Enrégistrement des états de services</h3>

              <el-form label-position="top" require-asterisk-position="right" :model="employeFormData"
                class="demo-form-inline mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">

                <el-form-item label="Fonction" required>

                  <div class="max-w-full w-full">
                    <el-select v-model="employeFormData.adresse" placeholder="" size="large" clearable>
                      <el-option label="Zone one" value="shanghai" />
                      <el-option label="Zone two" value="beijing" />
                    </el-select>
                  </div>

                </el-form-item>

                <el-form-item label="Date de démarrage" required>
                  <div class="max-w-full w-full">
                    <el-date-picker class="w-full" type="date" placeholder="" size="large" />
                  </div>
                </el-form-item>


                <el-form-item label="Libelle de la fonction" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.echelon" placeholder="" size="large" />
                  </div>

                </el-form-item>

                <el-form-item label="Non/département/service/Agence" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.echelon" placeholder="" size="large" />
                  </div>

                </el-form-item>

                <el-form-item label="Ville" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.echelon" placeholder="" size="large" />
                  </div>

                </el-form-item>

                <el-form-item label="Logement" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.echelon" placeholder="" size="large" />
                  </div>

                </el-form-item>

                <el-form-item label="Promotion" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.echelon" placeholder="" size="large" />
                  </div>

                </el-form-item>

                <el-form-item label="Description" required>

                  <div class="max-w-full w-full">
                    <el-input v-model="employeFormData.echelon" placeholder="" size="large" />
                  </div>

                </el-form-item>



              </el-form>


            </div>


          </div>

        </el-tab-pane>

      </el-tabs>


      <div class="flex mt-5 col-span-full py-4 justify-end gap-3 border-t form-btn">
        <el-button type="primary" size="large">Rechercher </el-button>
      </div>

    </el-card>



  </div>
</template>

<style></style>
