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
    <div class="flex w-full bg-white py-2 border-b top-line">
      <span class="text-lg font-medium"> Tableau de bord </span>
    </div>
    <div class="flex flex-col lg:flex-row lg:space-x-4">
      <div class="space-y-4 lg:col-span-2">
        <div class="flex p-4 lg:px-4 -z-10 border-x border-x-teal-500 rounded-lg shadow-card welcome-card">
          <div class="">
            <h3 class="py-2 text-lg font-extrabold"> Bonjour Dr David !</h3>

            <div class="max-w-3xl">
              <h4 class="font-semibold py-2"> Bienvenue sur votre espace personnel du SIG; </h4>

              <p class="text-sm">
                Consultez ici toutes les informations vous concernant
                et accédez non seulement aux travaux publiés des autres professeurs mais également au module de soumission
                des dossiers pour le CAMES.
              </p>
            </div>

          </div>

          <div class="hidden lg:block">
            <img class="w-48 " src="@/assets/images/enseignant-mascotte.png" alt="" />
          </div>
        </div>
        <hr>

        <div class="space-y-3">
          <h4 class="text-lg text-center underline font-extrabold">
            Mes Attributs
          </h4>


          <div class="stats-content mx-auto flex gap-3 justify-center py-4 items-center flex-wrap">

            <div v-for="(item, index) in attributs"
              class="p-3 border space-y-2 rounded-lg border-gray-600  bg-white shadow-md flex-col flex justify-center items-center w-auto h-auto"
              :key="index">
              <v-icon :name="item.icon" :scale="1.3" />

              <span class="text-center text-sm font-extrabold px-2">{{ item.label }}</span>

              <hr class="bg-slate-500 w-full" />

              <div class="text-center">
                {{ item.value }}
              </div>

            </div>


          </div>

        </div>


      </div>

      <div class="w-full space-y-3">
        <div class="w-full  rounded-lg stats-card shadow-card">
          <div class="">
            <h3 class="text-lg text-center py-3 font-extrabold underline underline-offset-4">
              Mes Informations
            </h3>



            <el-descriptions class-name="w-full bg-red-500" direction="horizontal" :column="1" border>

              <el-descriptions-item label="Noms & Prénoms">David RANDOM</el-descriptions-item>
              <el-descriptions-item label="Email">davidrandom@unstim.prof</el-descriptions-item>
              <el-descriptions-item label="Téléphone">00 22 55 00</el-descriptions-item>
              <el-descriptions-item label="Adresse"></el-descriptions-item>
              <el-descriptions-item label="Ville"> Cotonou </el-descriptions-item>
              <el-descriptions-item label="Situation matrimoniale">00 22 55 00</el-descriptions-item>

            </el-descriptions>

            <hr class="border mt-2 border-gray-300">

            <div class="w-full py-3 grid place-items-center">

              <RouterLink :to="{ name: 'modifier-informations' }"
                class="flex items-center gap-2 p-2 text-sm font-medium text-white  bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
                Modifier les informations
              </RouterLink>
            </div>





          </div>
        </div>

        <div class="w-full  rounded-lg stats-card shadow-card">
          <div class="">
            <h3 class="text-lg text-center py-3 font-extrabold underline underline-offset-4">
              Biographie
            </h3>

            <p class="text-sm px-4 pb-3">
              Spécialiste en agronomie, passionné par la transmission du savoir.
              J'enseigne les sciences agronomiques avec enthousiasme et rigueur.
              Mon objectif : former les futurs acteurs d'une agriculture durable.
              J'aime partager mes connaissances et accompagner les étudiants dans leur réussite.
            </p>

          </div>
        </div>
      </div>



    </div>
  </div>
</template>
