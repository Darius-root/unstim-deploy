<template>
     <AccordionRoot
    class="bg-white w-300 rounded-md shadow-sm"
    type="single"
    :collapsible="true"
    default-value="UNSTIM"
  >
    <template v-for="item in props.data" :key="item.value">
      <AccordionItem class="accordion-item  border-l-4 border-b border-t "  :value="item.value.toString()">
        <AccordionHeader class="flex">
          <AccordionTrigger class="AccordionTrigger accortrigger group w-full">
            <div class="flex justify-between py-1">
              <div class="flex min-w-0 gap-x-0">
                <v-icon
                  :name="icons.AddIcon"
                  class="text-gray-600 mr-2 AccordionChevron"
                  aria-hidden
                  scale="1.0"
                />

                <div class="min-w-0 flex-auto">
                  <p class="text-sm font-semibold leading-6 text-gray-900">{{ item.title }}</p>
                </div>
              </div>
              <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end mx-9">
                <div class="flex gap-1 row justify-center items-center">
                  <RouterLink
                  :to="item.toView.toString()"
                    class="flex items-center gap-10 p-1 my-2"                  >
                    <v-icon :name="icons.FormPWShowIcon" scale="0.8" />
                  </RouterLink>

                  <RouterLink
                    :to="item.toAdd.toString()"
                    class="flex items-center gap-10 p-1 my-2"
                  >
                    <v-icon :name="icons.AddIcon" class="text-green-600" scale="0.8" />
                  </RouterLink>
                  <RouterLink
                  :to="item.toUpdate.toString()"
                    class="flex items-center gap-10 p-1 my-2"
                  >
                    <v-icon :name="icons.EditIcon" class="text-yellow-600" scale="0.8" />
                  </RouterLink>
                  <RouterLink
                    to=""
                    class="flex items-center gap-10 p-1 my-2"
                  >
                    <v-icon :name="icons.DeleteIcon"  class="text-red-600" scale="0.8" />
                  </RouterLink>
                </div>
              </div>
            </div>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="accordion-content">
<accordiongenerate :data="item.children "  class="mx-5 " />

</AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
  </template>
  
  <script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import  accordiongenerate from '@/components/accordion/accordion-child.vue'


import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent
} from 'radix-vue'



  const props = defineProps({
    data: {
      type: Object as () => accordion[],
      required: true
    },
  
   
  })
  

  interface accordion {
    value: String,
    title: String,
    toView:String
    type: String,
    toDelete: String,
    toAdd: String,
    toUpdate: String,
    children:accordion[]
  }
  
  </script>
  
  <style lang="scss" scoped></style>
  