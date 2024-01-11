<template>
  <div class="flex py-2 border-b top-line">
    <span class="text-lg font-medium"> Avancements de l'année 2024 </span>
  </div>

  <RouterLink
    @click.prevent="$router.back()"
    to=""
    class="flex items-center mt-5 gap-2 p-2 mb-9 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
  >
    <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
    <span class="text-sm font-medium"> Retour </span>
  </RouterLink>

  <div class="bg-white shadow-md rounded-lg mt-3 p-6">
    <form>
      <div class="xl:container">
        <div class="flex py-2">
          <span class="text-base font-normal">Enregistrer une formation</span>
        </div>

        <TabsRoot class="flex flex-col w-full">
          <TabsList
            class="flex-grow flex border-b-5 space-x-5"
            aria-label="Enregistrement d'une évaluation"
          >
            <TabsTrigger
              class="bg-gray-100 text-neutral-700 px-5 h-[45px] flex-1 flex items-center justify-center text-[18px] leading-none select-none rounded-t-md hover:bg-slate-100 data-[state=active]:bg-white data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_0.5px] data-[state=active]:focus:shadow-black outline-none cursor-default bg-active"
              value="tab1"
            >
              Personnel administratif
            </TabsTrigger>
            <TabsTrigger
              class="bg-gray-100 sm:w-[550px] text-neutral-700 px-5 h-[45px] flex-1 flex items-center justify-center text-[18px] leading-none select-none rounded-t-md hover:bg-slate-100 data-[state=active]:bg-white data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_0.5px] data-[state=active]:focus:shadow-black outline-none cursor-default bg-active"
              value="tab2"
            >
              Personnel d'exploitaton
            </TabsTrigger>
          </TabsList>
          <TabsContent class="grow bg-white rounded-b-md outline-none" value="tab1">
            <fieldset class="pt-3">
              <legend class="font-bold text-2xl px-2 py-4 text-center">
                1-Informations générales
              </legend>
            </fieldset>
            <div class="bg-white rounded-lg mt-3">
              <form>
                <div class="grid grid-cols-2 gap-6">
                  <selecteImput :label="'Employé'" :parameters="parameters" :isRequired="true" />
                  <selecteImput
                    :label="'Date de l\' évaluation'"
                    :parameters="parameters"
                    :isRequired="true"
                  />

                  <imput
                    :label="'Date de début'"
                    :isRequired="true"
                    :type="'date'"
                    class="flex-grow"
                  />
                  <imput
                    :label="'Date de fin'"
                    :isRequired="true"
                    :type="'date'"
                    class="flex-grow"
                  />
                </div>

                <ol start="5" class="mt-24">
                  <li>1- Ne rencontre pas les attentes (1pt)</li>
                  <li>2- Nécessite une amélioration (2 pts)</li>
                  <li>3- Rencontre les attentes (3 pts)</li>
                  <li>4- Dépasse les attentes (4 pts)</li>
                </ol>

                <table class="border">
                  <tbody>
                    <tr>
                      <th rowspan="2">Critères</th>
                      <th rowspan="2">Signification</th>
                      <th colspan="4">Echelle d'appreciation</th>
                      <th rowspan="2">Commentaires</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <th rowspan="2">A - Qualité</th>
                      <td style="text-align: left">
                        Respecte les procédures et les méthodes de travail.(respecte les procédures
                        de travail mis en place)
                      </td>
                      <td><input type="radio" name="maitrise_q1" value="1" /></td>
                      <td><input type="radio" name="maitrise_q1" value="2" /></td>
                      <td><input type="radio" name="maitrise_q1" value="3" /></td>
                      <td><input type="radio" name="maitrise_q1" value="4" /></td>
                      <td rowspan="2">
                        <textarea
                          class="form-unstim"
                          name="maitrise_q_comment"
                          id=""
                          cols="30"
                          rows="5"
                        >
Néant</textarea
                        >
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: left">
                        Maitrise les exigences et spécifications du produit.(connaitre tous les
                        produits à vendre)
                      </td>
                      <td><input type="radio" name="maitrise_q2" value="1" /></td>
                      <td><input type="radio" name="maitrise_q2" value="2" /></td>
                      <td><input type="radio" name="maitrise_q2" value="3" /></td>
                      <td><input type="radio" name="maitrise_q2" value="4" /></td>
                    </tr>
                    <tr>
                      <td colspan="8"></td>
                    </tr>
                    <tr>
                      <th rowspan="2">B- Productivité</th>
                      <td style="text-align: left">
                        Répond aux exigences relatives à la quantité de travail à effectuer.
                        (répondre aux exigences relatives aux travaux à effectuer et les horaires de
                        travail )
                      </td>
                      <td><input type="radio" name="maitrise_ao1" value="1" /></td>
                      <td><input type="radio" name="maitrise_ao1" value="2" /></td>
                      <td><input type="radio" name="maitrise_ao1" value="3" /></td>
                      <td><input type="radio" name="maitrise_ao1" value="4" /></td>
                      <td rowspan="2">
                        <textarea
                          class="form-unstim"
                          name="maitrise_ao1_comment"
                          id=""
                          cols="30"
                          rows="5"
                        >
Néant</textarea
                        >
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: left">
                        Maintient un rendement constant et utilise son temps efficacement. (maitenir
                        un rythme de travail constant et efficace et être exigent envers soi-même)
                      </td>
                      <td><input type="radio" name="maitrise_ao2" value="1" /></td>
                      <td><input type="radio" name="maitrise_ao2" value="2" /></td>
                      <td><input type="radio" name="maitrise_ao2" value="3" /></td>
                      <td><input type="radio" name="maitrise_ao2" value="4" /></td>
                    </tr>
                    <tr>
                      <td colspan="8"></td>
                    </tr>
                    <tr>
                      <th rowspan="2">C- Connaissance du travail</th>
                      <td style="text-align: left">
                        Possède les connaissances techniques nécessaires pour effectuer son travail.
                        (avoir la capacité technique repondant à sa position de travail, bonne
                        maîtrise du travail)?
                      </td>
                      <td><input type="radio" name="maitrise_ri1" value="1" /></td>
                      <td><input type="radio" name="maitrise_ri1" value="2" /></td>
                      <td><input type="radio" name="maitrise_ri1" value="3" /></td>
                      <td><input type="radio" name="maitrise_ri1" value="4" /></td>
                      <td rowspan="2">
                        <textarea
                          class="form-unstim"
                          name="maitrise_ri1_comment"
                          id=""
                          cols="30"
                          rows="5"
                        >
Néant</textarea
                        >
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: left">
                        Effectue correctement les activités reliées à son travail.(efficacité dans
                        le travail)
                      </td>
                      <td><input type="radio" name="maitrise_ri2" value="1" /></td>
                      <td><input type="radio" name="maitrise_ri2" value="2" /></td>
                      <td><input type="radio" name="maitrise_ri2" value="3" /></td>
                      <td><input type="radio" name="maitrise_ri2" value="4" /></td>
                    </tr>
                    <tr>
                      <td colspan="8"></td>
                    </tr>
                    <tr>
                      <th rowspan="2">D- Respect des normes</th>
                      <td style="text-align: left">
                        Travaille de manière sécuritaire et applique les normes de sécurité.
                      </td>
                      <td><input type="radio" name="maitrise_rn1" value="1" /></td>
                      <td><input type="radio" name="maitrise_rn1" value="2" /></td>
                      <td><input type="radio" name="maitrise_rn1" value="3" /></td>
                      <td><input type="radio" name="maitrise_rn1" value="4" /></td>
                      <td rowspan="2">
                        <textarea
                          class="form-unstim"
                          name="maitrise_rn1_comment"
                          id=""
                          cols="30"
                          rows="5"
                        >
Néant</textarea
                        >
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: left">
                        Respecte les politiques et les règlements de l’entreprise. (s'approprier le
                        règlement intérieur, le code d'étique,….)
                      </td>
                      <td><input type="radio" name="maitrise_rn2" value="1" /></td>
                      <td><input type="radio" name="maitrise_rn2" value="2" /></td>
                      <td><input type="radio" name="maitrise_rn2" value="3" /></td>
                      <td><input type="radio" name="maitrise_rn2" value="4" /></td>
                    </tr>
                    <tr>
                      <td colspan="8"></td>
                    </tr>
                    <tr>
                      <th rowspan="10">E- Attitudes et comportements au travail</th>
                      <td style="text-align: left">
                        Traite ses collègues et son supérieur avec respect. (relation harmonieuse de
                        travail)
                      </td>
                      <td><input type="radio" name="maitrise_app1" value="1" /></td>
                      <td><input type="radio" name="maitrise_app1" value="2" /></td>
                      <td><input type="radio" name="maitrise_app1" value="3" /></td>
                      <td><input type="radio" name="maitrise_app1" value="4" /></td>
                      <td rowspan="10">
                        <textarea
                          class="form-unstim"
                          name="maitrise_app_comment"
                          id=""
                          cols="30"
                          rows="8"
                        >
Néant</textarea
                        >
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: left">
                        Maintient des relations harmonieuses et collabore avec ses collègues.
                        (sociabilité)
                      </td>
                      <td><input type="radio" name="maitrise_app2" value="1" /></td>
                      <td><input type="radio" name="maitrise_app2" value="2" /></td>
                      <td><input type="radio" name="maitrise_app2" value="3" /></td>
                      <td><input type="radio" name="maitrise_app2" value="4" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: left">
                        Fait face aux imprévus et aux urgences en gardant son calme. (capacité
                        d'adaptation facile)
                      </td>
                      <td><input type="radio" name="maitrise_app3" value="1" /></td>
                      <td><input type="radio" name="maitrise_app3" value="2" /></td>
                      <td><input type="radio" name="maitrise_app3" value="3" /></td>
                      <td><input type="radio" name="maitrise_app3" value="4" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: left">
                        Fait preuve de souplesse face aux changements qui lui sont apportés. (Ne pas
                        être hostile au changement)
                      </td>
                      <td><input type="radio" name="maitrise_app4" value="1" /></td>
                      <td><input type="radio" name="maitrise_app4" value="2" /></td>
                      <td><input type="radio" name="maitrise_app4" value="3" /></td>
                      <td><input type="radio" name="maitrise_app4" value="4" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: left">
                        Assurer l’accueil du client au sein de l’agence en respectant au minimum le
                        SBAM (Sourire-Bonjour-Au revoir-Merci)
                      </td>
                      <td><input type="radio" name="maitrise_app5" value="1" /></td>
                      <td><input type="radio" name="maitrise_app5" value="2" /></td>
                      <td><input type="radio" name="maitrise_app5" value="3" /></td>
                      <td><input type="radio" name="maitrise_app5" value="4" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: left">
                        Veille au bon fonctionnement et à l’entretien de son équipement.(notion de
                        respect du bien public)
                      </td>
                      <td><input type="radio" name="maitrise_app6" value="1" /></td>
                      <td><input type="radio" name="maitrise_app6" value="2" /></td>
                      <td><input type="radio" name="maitrise_app6" value="3" /></td>
                      <td><input type="radio" name="maitrise_app6" value="4" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: left">Fait preuve de ponctualité et d’assiduité.</td>
                      <td><input type="radio" name="maitrise_app7" value="1" /></td>
                      <td><input type="radio" name="maitrise_app7" value="2" /></td>
                      <td><input type="radio" name="maitrise_app7" value="3" /></td>
                      <td><input type="radio" name="maitrise_app7" value="4" /></td>
                    </tr>
                  </tbody>
                </table>
                <fieldset class="pt-3 mt-5">
                  <legend class="font-bold text-2xl text-center">
                    3- ÉVALUATION DES OBJECTIFS
                  </legend>
                  <ol>
                    <h5>1- Evaluation des résultats</h5>
                    <li>2- Objectif non atteint (3pts)</li>
                    <li>3- Objectif partiellement atteint (5pts)</li>
                    <li>4- Objectif atteint (8pts)</li>
                    <li>5- Objectif dépassé (10pts)</li>
                  </ol>

                  <table class="border mt-3" style="width: 100%">
                    <tbody>
                      <tr>
                        <th rowspan="2">Objectifs poursuivis</th>
                        <th rowspan="2" class="text-center">Principales réalisations</th>
                        <th colspan="4" class="text-center">Evaluation des résultats</th>
                      </tr>
                      <tr class="font-bold text-center">
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td class="font-bold">1er Trimestre</td>
                        <td>
                          <input
                            type="text"
                            name="1er_trimestre_input"
                            value="Néant"
                            style="width: 100%"
                          />
                        </td>
                        <td class="text-center">
                          <input type="radio" name="1er_trimestre_note" value="3" />
                        </td>
                        <td class="text-center">
                          <input type="radio" name="1er_trimestre_note" value="5" />
                        </td>
                        <td class="text-center">
                          <input type="radio" name="1er_trimestre_note" value="8" />
                        </td>
                        <td class="text-center">
                          <input type="radio" name="1er_trimestre_note" value="10" />
                        </td>
                      </tr>
                      <tr>
                        <td class="font-bold">2er Trimestre</td>
                        <td>
                          <input
                            type="text"
                            name="2er_trimestre_input"
                            value="Néant"
                            style="width: 100%"
                          />
                        </td>
                        <td class="text-center">
                          <input type="radio" name="2er_trimestre_note" value="3" />
                        </td>
                        <td class="text-center">
                          <input type="radio" name="2er_trimestre_note" value="5" />
                        </td>
                        <td class="text-center">
                          <input type="radio" name="2er_trimestre_note" value="8" />
                        </td>
                        <td class="text-center">
                          <input type="radio" name="2er_trimestre_note" value="10" />
                        </td>
                      </tr>
                      <tr>
                        <td class="font-bold">3er Trimestre</td>
                        <td>
                          <input
                            type="text"
                            name="3er_trimestre_input"
                            value="Néant"
                            style="width: 100%"
                          />
                        </td>
                        <td class="text-center">
                          <input type="radio" name="3er_trimestre_note" value="3" />
                        </td>
                        <td class="text-center">
                          <input type="radio" name="3er_trimestre_note" value="5" />
                        </td>
                        <td class="text-center">
                          <input type="radio" name="3er_trimestre_note" value="8" />
                        </td>
                        <td class="text-center">
                          <input type="radio" name="3er_trimestre_note" value="10" />
                        </td>
                      </tr>
                      <tr>
                        <td class="font-bold">4er Trimestre</td>
                        <td>
                          <input
                            type="text"
                            name="4er_trimestre_input"
                            value="Néant"
                            style="width: 100%"
                          />
                        </td>
                        <td class="text-center">
                          <input type="radio" name="4er_trimestre_note" value="3" />
                        </td>
                        <td class="text-center">
                          <input type="radio" name="4er_trimestre_note" value="5" />
                        </td>
                        <td class="text-center">
                          <input type="radio" name="4er_trimestre_note" value="8" />
                        </td>
                        <td class="text-center">
                          <input type="radio" name="4er_trimestre_note" value="10" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <fieldset class="pt-3 mt-5">
                    <legend class="font-bold text-2xl text-center">4- ÉVALUATION GLOBALE</legend>
                    <table class="main-table" style="width: 100%">
                      <tbody>
                        <tr>
                          <th colspan="2">Forces de l’employé</th>
                          <th>
                            <textarea class="form-unstim" name="besoin_rh" id="" cols="70" rows="4">
Néant</textarea
                            >
                          </th>
                        </tr>
                        <tr>
                          <th colspan="2">Points à améliorer</th>
                          <th>
                            <textarea
                              class="form-unstim"
                              name="besoin_equipement"
                              id=""
                              cols="70"
                              rows="4"
                            >
Néant</textarea
                            >
                          </th>
                        </tr>
                        <tr>
                          <th colspan="2">
                            Programme de développement (moyens à prendre pour supporter l’employé ou
                            aider à son développement)
                          </th>
                          <th>
                            <textarea
                              class="form-unstim"
                              name="besoin_autres"
                              id=""
                              cols="70"
                              rows="4"
                            >
Néant</textarea
                            >
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </fieldset>
                  <br />
                  <table class="main-table" style="width: 100%">
                    <tbody>
                      <tr>
                        <th class="text-center">Commentaires de l’employé</th>
                      </tr>
                      <tr>
                        <td>
                          <textarea
                            class="form-unstim"
                            name="entretien_commentaire"
                            type="text"
                            style="border: none; width: 100%; height: 200px"
                          >
Néant</textarea
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <table class="main-table" style="width: 100%">
                    <tbody>
                      <tr class="text-center">
                        <th>Appréciation générale du supérieur hiérarchique</th>
                      </tr>
                      <tr>
                        <td>
                          <textarea
                            class="form-unstim"
                            name="entretien_appreciations_superieur"
                            type="text"
                            style="border: none; width: 100%; height: 200px"
                          >
Néant</textarea
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </fieldset>

                <button
                  type="submit"
                  class="bg-blue-500 mt-4 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Valider
                </button>
              </form>
            </div>
          </TabsContent>
          <TabsContent class="grow p-5 bg-white rounded-b-md outline-none" value="tab2">
            content 2
          </TabsContent>
        </TabsRoot>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import imput from '@/components/inputs/unstim-text.vue'
import selecteImput from '@/components/inputs/unstim-select.vue'
import { icons } from '@/assets/icons/oh-vue-icons'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import { reactive } from 'vue'

const parameters = reactive({
  options: ['Darius', 'ZKP', 'JOHN Doe'],
  placeholder: '--Choississez un employe--',
  searchable: true
})
</script>

<style scoped>
table,
tbody,
td,
th {
  border-style: solid;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(92, 91, 91);
}
</style>
