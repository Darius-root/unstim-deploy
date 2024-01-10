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
    <div class="flex w-full justify-between bg-white py-2 border-b top-line">
      <span class="text-lg font-medium"> Nouvelle publication </span>

      <!-- <RouterLink :to="{ name: 'modifier-informations' }"
        class="flex items-center gap-2 p-2 text-sm font-medium text-white  bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
        Nouvelle publication
      </RouterLink> -->

    </div>

    <div class="flex gap-2 w-full py-5">

      <div class="left shadow space-y-3 rounded pt-4 w-1/2">

        <div class="grid grid-cols-1 gap-4 px-3 py-5 md:grid-cols-2">


          <div class="flex flex-col space-y-2 col-span-full input-group">
            <label for="" class="text-sm">Type de publication</label>
            <input type="text" class="form-unstim" />
          </div>

          <div class="flex flex-col space-y-2 col-span-full input-group">
            <label for="" class="text-sm">Titre</label>
            <input type="text" class="form-unstim" />
          </div>

          <div class="flex flex-col space-y-2 col-span-full input-group">
            <label for="" class="text-sm">Résumé</label>
            <input type="text" class="form-unstim" />
          </div>

          <div class="flex flex-col space-y-2 col-span-full input-group">
            <label for="" class="text-sm">Auteurs</label>
            <input type="text" class="form-unstim" />
          </div>

          <div class="flex flex-col space-y-2 col-span-full input-group">
            <label for="" class="text-sm">ISBN</label>
            <input type="text" class="form-unstim" />
          </div>

        </div>



      </div>

      <div class="right w-1/2">
        <div class="w-full space-y-3">
          <div class="w-full  rounded shadow">
            <div class="">


              <div class="grid grid-cols-1 gap-4 px-3 py-5 md:grid-cols-2">


                <div class="flex flex-col space-y-2 col-span-full input-group">
                  <label for="" class="text-sm">Date de publication</label>
                  <input type="text" class="form-unstim" />
                </div>

                <div class="flex flex-col space-y-2 col-span-full input-group">
                  <label for="" class="text-sm">Documents</label>
                  <input type="text" class="form-unstim" />
                </div>


              </div>

              <hr class="border mt-2 border-gray-300">

              <div class="w-full py-3 px-3 flex gap-2 justify-end">



                <RouterLink :to="{ name: 'modifier-informations' }"
                  class="flex items-center gap-2 p-2 text-sm font-medium text-white  bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60">
                  Publier
                </RouterLink>
              </div>


            </div>
          </div>
        </div>

      </div>

    </div>



  </div>
</template>
