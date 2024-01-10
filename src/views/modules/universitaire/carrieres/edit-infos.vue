<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons';
import { reactive } from 'vue';



const attributs = reactive([
  {
    icon: icons.FaPencilAlt,
    label: "Début du contrat",
    value: "10/10/2021",
    color: "primary"

  },

  {
    icon: icons.FaPencilAlt,
    label: "Fin du contrat",
    value: "10/10/2021",
    color: "primary"
  },

  {
    icon: icons.FaPencilAlt,
    label: "Salaire de base",
    value: "10/10/2021",
    color: "primary"

  },

  // {
  //   icon: icons.FaPencilAlt,
  //   label: "Qualification",
  //   value: "Docteur en Sciences Agronomiques",
  //   color: "primary"

  // },


  {
    icon: icons.FaPencilAlt,
    label: "Grade",
    value: "Chef de Département",
    color: "primary"

  },

])

</script>

<template>
  <div class="w-full space-y-5 h-full mx-auto xl:container">
    <div class="flex w-full  bg-white py-2 border-b top-line">
      <span class="text-lg font-medium"> Modifier mes informations </span>
    </div>

    <div class="flex gap-2 w-full py-5">

      <div class="left shadow space-y-3 rounded pt-4 w-1/2">
        <div class="demo-type w-full flex flex-col space-y-4 items-center">
          <el-avatar :size="120" src="https://empty">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
          </el-avatar>

          <RouterLink :to="{ name: 'modifier-informations' }"
            class="flex items-center gap-2 p-2 text-sm font-medium text-white  bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
            Changer ma photo
          </RouterLink>

          <hr class="border mt-2 border-gray-300">

        </div>


        <div class="grid grid-cols-1 gap-4 px-3 py-5 md:grid-cols-2">


          <div class="flex flex-col space-y-2 input-group">
            <label for="" class="text-sm">Mot de passe actuel</label>
            <input type="text" class="form-unstim" />
          </div>



          <div class="flex flex-col space-y-2 input-group">
            <label for="" class="text-sm">Nouveau mot de passe</label>

            <input type="text" class="form-unstim" />
          </div>

        </div>

        <div class="w-full grid place-items-center">
          <RouterLink :to="{ name: 'modifier-informations' }"
            class="flex items-center gap-2 p-2 text-sm font-medium text-white  bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
            Changer mon mot de passe
          </RouterLink>
        </div>

      </div>

      <div class="right w-1/2">
        <div class="w-full space-y-3">
          <div class="w-full  rounded shadow">
            <div class="">
              <h3 class="text-lg text-center py-3 font-extrabold underline underline-offset-4">
                Mes Informations
              </h3>



              <div class="grid grid-cols-1 px-3 gap-4 py-5 md:grid-cols-2">
                <!-- NOM -->

                <div class="flex flex-col space-y-2 input-group">
                  <label for="" class="text-sm">Nom</label>
                  <input type="text" class="form-unstim" />
                </div>

                <!-- PRENOM -->

                <div class="flex flex-col space-y-2 input-group">
                  <label for="" class="text-sm">Prénom (s)</label>
                  <input type="text" class="form-unstim" />
                </div>

                <div class="flex flex-col space-y-2 input-group">
                  <label for="" class="text-sm"> Téléphone </label>
                  <input type="text" class="form-unstim" />
                </div>

                <div class="flex flex-col space-y-2 input-group">
                  <label for="" class="text-sm"> Email </label>
                  <input type="text" class="form-unstim" />
                </div>

                <div class="flex flex-col col-span-full space-y-2 input-group">
                  <label for="" class="text-sm">Adresse</label>
                  <input type="text" class="form-unstim" />
                </div>

                <div class="flex flex-col space-y-2 input-group">
                  <label for="" class="text-sm">Ville</label>
                  <input type="text" class="form-unstim" />
                </div>

                <div class="flex flex-col space-y-2 input-group">
                  <label for="" class="text-sm">Situation matrimoniale</label>
                  <input type="text" class="form-unstim" />
                </div>

                <div class="flex flex-col col-span-full space-y-2 input-group">
                  <label for="" class="text-sm">Grade</label>
                  <input type="text" class="form-unstim" />
                </div>



                <div class="flex flex-col col-span-full space-y-2 input-group">
                  <label for="" class="text-sm">Bio</label>
                  <input type="text" class="form-unstim" />
                </div>

              </div>

              <hr class="border mt-2 border-gray-300">

              <div class="w-full py-3 flex gap-2 justify-center">

                <RouterLink :to="{ name: 'modifier-informations' }"
                  class="flex items-center gap-2 p-2 text-sm font-medium border  rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
                  Annuler
                </RouterLink>

                <RouterLink :to="{ name: 'modifier-informations' }"
                  class="flex items-center gap-2 p-2 text-sm font-medium text-white  bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
                  Mettre à jour
                </RouterLink>
              </div>


            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>
