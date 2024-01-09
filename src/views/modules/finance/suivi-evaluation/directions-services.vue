<template>
 
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium"> Détail plan stratégique</span>
    </div>




    <div class="flex justify-end my-3">
      <RouterLink to="directions-create"
        class="flex items-center gap-2 p-2 bg-unstim-primary text-white rounded shadow hover:bg-opacity-60 mx-1">
        <v-icon :name="icons.AddIcon" scale="1.1" />

        <span class="text-sm font-medium"> Ajouter une direction </span>
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
    toAdd: "sous-direction-create",
         toUpdate: "directions-update",
    children: [
      {
        value: "RECTORAT",
        type: "",
        toView: "sous-direction-view"
        ,
        title: "Sous direction",
        toDelete: " String",
        toAdd: "service-create",
             toUpdate: "sous-direction-update",
        children: [
          {
            value: "Service",
            type: "", toView: "service-view"
            ,
            title: "Service",
            toDelete: " String",
            toAdd: "fonction-create",
                 toUpdate: "serviec-update",
            children: [
            {
            value: "fonction",
            type: "", toView: "fonction-view"
            ,
            title: "Fonctions",
            toDelete: " String",
            toAdd: "structure-create",
                 toUpdate: "fonction-update",
            children: [

          
            ]
          }
            ]
          },
        
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
