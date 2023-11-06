<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'

</script>

<template>
  <div class="mx-auto xl:container">

    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium"> Informations de l'agent : Nom Agent </span>
    </div>

    <div class="flex gap-3">
      <RouterLink @click.prevent="$router.back()" to=""
        class="flex items-center gap-2 p-2 mt-5 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
        <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
        <span class="text-sm font-medium"> Retour </span>
      </RouterLink>

    </div>

    <div class="tab-content mt-5">

      <TabsRoot class="flex flex-col w-full" default-value="infos-agent">

        <TabsList class="flex items-center flex-wrap gap-3" aria-label="Manage your account">

          <TabsTrigger
            class="flex cursor-pointer data-[state=active]:bg-green-500 data-[state=active]:shadow text-sm items-center rounded bg-gray-200 gap-2 p-2  w-fit hover:bg-opacity-60"
            value="infos-agent">
            Information sur l'agent
          </TabsTrigger>

          <TabsTrigger
            class="flex cursor-pointer text-sm items-center gap-2 p-2 rounded bg-gray-200 w-fit hover:bg-opacity-60"
            value="infos-agent">
            Carriere
          </TabsTrigger>

          <TabsTrigger
            class="flex cursor-pointer text-sm items-center gap-2 p-2 rounded bg-gray-200 w-fit hover:bg-opacity-60"
            value="infos-agent">
            Liste des enfants
          </TabsTrigger>

          <TabsTrigger
            class="flex cursor-pointer text-sm items-center gap-2 p-2 rounded bg-gray-200 w-fit hover:bg-opacity-60"
            value="infos-agent">
            Conjoints
          </TabsTrigger>

          <TabsTrigger
            class="flex cursor-pointer text-sm items-center gap-2 p-2 rounded bg-gray-200 w-fit hover:bg-opacity-60"
            value="infos-agent">
            Prime & Indémnité
          </TabsTrigger>

          <TabsTrigger
            class="flex cursor-pointer text-sm items-center gap-2 p-2 rounded bg-gray-200 w-fit hover:bg-opacity-60"
            value="infos-agent">
            Expériences
          </TabsTrigger>

          <TabsTrigger
            class="flex cursor-pointer text-sm items-center gap-2 p-2 rounded bg-gray-200 w-fit hover:bg-opacity-60"
            value="infos-agent">
            Compétence clé et atouts
          </TabsTrigger>

          <TabsTrigger
            class="flex cursor-pointer text-sm items-center gap-2 p-2 rounded bg-gray-200 w-fit hover:bg-opacity-60"
            value="infos-agent">
            Salaires
          </TabsTrigger>

          <TabsTrigger
            class="flex cursor-pointer text-sm items-center gap-2 p-2 rounded bg-gray-200 w-fit hover:bg-opacity-60"
            value="infos-agent">
            Diplomes
          </TabsTrigger>

          <TabsTrigger
            class="flex cursor-pointer text-sm items-center gap-2 p-2 rounded bg-gray-200 w-fit hover:bg-opacity-60"
            value="infos-agent">
            Distinction
          </TabsTrigger>

        </TabsList>

        <TabsContent class="mt-5 bg-white rounded-b-md" value="infos-agent">

          <div class="w-full p-5  border border-gray-300 bg-unstim-light card">
            <p class="flex items-center gap-3">
              <span class="text-red-400">*</span>
              <span class="text-sm">Champs obligatoire</span>
            </p>


            <div class="personal-infos-group">
              <!-- INFOS PERSON -->

              <h3 class="pt-5 text-xl font-semibold">Informations Générales</h3>

              <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-2 lg:grid-cols-4">
                <!-- NOM -->

                <div class="flex flex-col space-y-2 input-group">
                  <label for="" class="text-sm">Nom</label>
                  <input type="text" class="form-unstim" />
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
                  <input type="text" class="form-unstim" />
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
                  <input type="text" class="form-unstim" />
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


          </div>

        </TabsContent>


        <TabsContent class="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="tab2">
          <p class="mb-5 !mt-0 text-mauve11 text-[15px] !leading-normal">
            Change your password here. After saving, you'll be logged out.
          </p>
          <fieldset class="mb-[15px] w-full flex flex-col justify-start">
            <label class="text-[13px] leading-none mb-2.5 text-green12 block" for="currentPassword">
              Current password
            </label>
            <input id="currentPassword"
              class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none"
              type="password">
          </fieldset>
          <fieldset class="mb-[15px] w-full flex flex-col justify-start">
            <label class="text-[13px] leading-none mb-2.5 text-green12 block" for="newPassword"> New password </label>
            <input id="newPassword"
              class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none"
              type="password">
          </fieldset>
          <fieldset class="mb-[15px] w-full flex flex-col justify-start">
            <label class="text-[13px] leading-none mb-2.5 text-green12 block" for="confirmPassword">
              Confirm password
            </label>
            <input id="confirmPassword"
              class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none"
              type="password">
          </fieldset>
          <div class="flex justify-end mt-5">
            <button
              class="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
              Change password
            </button>
          </div>
        </TabsContent>
      </TabsRoot>

    </div>



  </div>
</template>

<style>
@import url('@/assets/css/easy-table.css');
</style>
