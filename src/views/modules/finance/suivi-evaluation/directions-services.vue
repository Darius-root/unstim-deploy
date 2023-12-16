<template>
 
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium"> Détail plan stratégique</span>
    </div>




    <div class="flex justify-end my-3">
      <RouterLink to="element-analytique-create"
        class="flex items-center gap-2 p-2 bg-unstim-primary text-white rounded shadow hover:bg-opacity-60 mx-1">
        <v-icon :name="icons.AddIcon" scale="1.1" />

        <span class="text-sm font-medium"> Ajouter un plan stratégique</span>
      </RouterLink>
    </div>
    <accordion :data="accordionsData" />
  </div>
</template>

<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import accordion from '@/components/accordion/accordion-child.vue'


const accordionsData = [
  {
    value: "UNSTIM",
    type: "",
    toView: "directions-view",
    title: "UNSTIM",
    toDelete: " String",
    toAdd: "directions-create",
         toUpdate: "directions-update",
    children: [
      {
        value: "RECTORAT",
        type: "",
        toView: "directions-view"
        ,
        title: "RECTORAT",
        toDelete: " String",
        toAdd: "directions-create",
             toUpdate: "directions-update",
        children: [
          {
            value: "VICES RECTORAT CHARGÉ DE LA RECHERCHE UNIVERSITAIRE",
            type: "", toView: "directions-view"
            ,
            title: "VICES RECTORAT CHARGÉ DE LA RECHERCHE UNIVERSITAIRE",
            toDelete: " String",
            toAdd: "directions-create",
                 toUpdate: "directions-update",
            children: []
          },
          {
            value: "VICES RECTORAT CHARGÉ DES AFFAIRE ACADÉMIQUES",
            type: "", toView: "directions-view"
            ,
            title: "VICES RECTORAT CHARGÉ DES AFFAIRE ACADÉMIQUES",
            toDelete: " String",
            toAdd: "directions-create",
                 toUpdate: "directions-update",
            children: []
          },
          {
            value: "VICES RECTORAT CHARGÉ DE LA COPEREATION ET DE L'INSERTION PROFESSIONNELLE",
            type: "", toView: "directions-view"
            ,
            title: "VICES RECTORAT CHARGÉ DE LA COPEREATION ET DE L'INSERTION PROFESSIONNELLE",
            toDelete: " String",
            toAdd: "directions-create",
                 toUpdate: "directions-update",
            children: []
          }
        ]
      },

    ]
  },


];



</script>

<style lang="scss" scoped>
.AccordionChevron {
  transition: transform 300ms;
}

.AccordionTrigger[data-state='open']>.AccordionChevron {
  transform: rotate(40deg);
}
</style>
