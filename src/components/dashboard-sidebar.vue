<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from 'radix-vue'

import simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'

defineProps({
  navigations: Object
})
</script>

<template>
  <simplebar class="w-full h-[100vh] ">
    <div class="py-5 pt-36 z-10">
      <AccordionRoot class="w-full " default-value="'item-1'" type="single" :collapsible="true">
        <template v-for="(item, index) in navigations" :key="index">
          <AccordionItem class="overflow-hidden" v-if="item.underMenu" :value="item.title">
            <AccordionHeader class="flex">
              <AccordionTrigger
                class="cursor-pointer data-[state=open]:bg-white data-[state=open]:text-black group font-bold hover:text-black text-white hover:bg-unstim-white transition-all flex h-[45px] flex-1 items-center justify-between px-5 text-sm group">
                <div class="flex items-center gap-2 elt-nav">
                  <v-icon :name="item.icon" :scale="1.3"
                    class="text-white data-[state=open]:text-black group-hover:text-black" />
                  <span class="">{{ item.title }}</span>
                </div>

                <v-icon :name="icons.ChevronDown" :scale="0.8"
                  class="text-white group-hover:text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent
              class="data-[state=open]:animate-slideDown data-[state=open]:bg-white data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
              <div class="">
                <ul class="list-disc">
                  <li class="w-full pl-3 border-b hover:bg-gray-100" v-for="(elts, index) in item.underMenu" :key="index">
                    <RouterLink :to="elts.params
                      ? { name: elts.to, params: { id: elts.params.id || '' } }
                      : { name: elts.to }
                      " class="flex font-medium transition-all w-full h-[45px] px-5 text-sm">
                      <div class="flex items-center gap-2 elt-nav">
                        <v-icon :name="elts.icon" :scale="1.0" class="text-black" />
                        <span>{{ elts.title }}</span>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <RouterLink v-else :to="{ name: item.to }"
            class="flex font-bold text-white hover:bg-unstim-white group hover:text-black transition-all h-[45px] px-5 text-sm">
            <div class="flex items-center gap-2 elt-nav">
              <v-icon :name="item.icon" :scale="1.3" class="text-white group-hover:text-black" />

              <span>{{ item.title }}</span>
            </div>
          </RouterLink>
        </template>
      </AccordionRoot>
    </div>
  </simplebar>
</template>


