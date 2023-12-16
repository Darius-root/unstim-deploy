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

const navigations = [
  {
    title: 'Tableau de bord',
    icon: icons.TachometerIcon,
    to: 'dash',
  }, {
    title: 'Colloques',
    icon: icons.FaUsers,
    to: 'colloques',
  },
  {
    title: 'Mes soumissions',
    icon: icons.FaFileAlt,
    to: 'personnel',

    underMenu: [

      {
        title: 'Nouvelle',
        icon: icons.AddIcon,
        to: 'new-soumission',
        params: { id: 'diplomes' }

      },
      {
        title: 'En cours',
        icon: icons.FaBullseye,
        to: 'loard-soumission'
      },
      {
        title: 'Toutes mes soumissions',
        icon: icons.FaMoneyCheck,
        to: 'all-soumission'
      }
    ]
  },
  {
    title: 'Reçus de paiement',
    icon: icons.InvoiceIcon,
    to: 'receipt-payment',
  },


]
</script>

<template>
  <simplebar class="w-full pt-12 h-[100vh] relative backgroundSygec">
    <div class="py-5 relative w-full">
      <AccordionRoot class="w-full" default-value="'item-1'" type="single" :collapsible="true">
        <template v-for="(item, index) in navigations" :key="index">
          <AccordionItem class="overflow-hidden " v-if="item.underMenu" :value="item.title">
            <AccordionHeader class="flex">
              <AccordionTrigger
                class="cursor-pointer data-[state=open]:bg-white font-bold text-white hover:text-black hover:bg-unstim-white transition-all flex h-[45px] flex-1 items-center justify-between px-5 text-sm group">
                <div class="flex items-center gap-2 elt-nav">
                  <v-icon :name="item.icon" :scale="1.3" class="text-white group-hover:text-black" />

                  <span>{{ item.title }}</span>
                </div>

                <v-icon :name="icons.ChevronDown" :scale="0.8"
                  class="hover:text-black text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
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
            class="flex font-bold text-white hover:bg-unstim-white hover:text-black group transition-all h-[45px] px-5 text-sm">
            <div class="flex items-center gap-2 elt-nav">
              <v-icon :name="item.icon" :scale="1.3" class="text-white group-hover:text-black" />

              <span>{{ item.title }}</span>
            </div>
          </RouterLink>




        </template>
        <!-- <div class="bottom-10 inset-x-0 fixed ">

          <div class="flex-1 h-[0.5px] hidden lg:block bg-white divider"></div>


          <RouterLink to="" class=" flex  font-medium  hover:bg-unstim-white transition-all h-[45px]  text-sm">
            <div class="flex items-center gap-2 elt-nav">
              <v-icon :name="icons.IoSettingsSharp" :scale="1.3" class="text-black" />

              <span>Paramètres</span>
            </div>
          </RouterLink>
        </div> -->
      </AccordionRoot>


    </div>
  </simplebar>
</template>

<style></style>
