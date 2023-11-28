<script lang="ts" setup>
import moment from 'moment'
import 'moment/locale/fr'

import { icons } from '@/assets/icons/oh-vue-icons'

import { useModuleStore } from '@/stores/modules'

moment.locale('fr')

const modules = useModuleStore().modules
</script>

<template>
  <header class="w-full bg-white">
    <div class="flex items-center justify-between h-[70px] gap-3 px-3 bg-unstim-gradient">
      <RouterLink :to="{ name: 'home' }" class="flex items-center gap-2">
        <img class="w-16 h-auto lg:w-20" src="@/assets/logo/logo.png" alt="UNSTIM Logo" />
        <span class="text-xl font-extrabold text-white lg:text-2xl">SIG UNSTIM</span>
      </RouterLink>

      <div class="flex-1 h-[1px] hidden lg:block bg-white divider"></div>

      <div class="flex items-center gap-2 ends">
        <span class="hidden font-semibold text-white lg:block">
          {{ moment().format('DD MMMM YYYY') }}
        </span>

        <RouterLink to="." class="text-white my-notif position-relative">
          <span class="my-notif-icon me-3"> <v-icon :name="icons.NotifIcon" scale="1.6" /></span>
        </RouterLink>

        <div class="justify-self-end">
          <img
            src="@/assets/images/avatars/admin.png"
            alt="admin-profile-avatar"
            class="bg-white rounded-full shadow-lg h-14 img-profile"
          />
          <!-- <span class="my-admin-name fw-medium">Evrajody Gildas</span> -->
        </div>
      </div>
    </div>

    <div class="flex bg-white space-x-12 relative items-center h-[42px] justify-center w-full">
      <div class="hidden h-full lg:block group" v-for="(module, item) in modules" :key="item">
        <button
          class="flex items-center h-full px-3 py-1 bg-white rounded-sm outline-none focus:outline-none min-w-32"
        >
          <span class="flex-1 pr-1 font-semibold">{{ module.label }}</span>
          <span v-if="module.submenus">
            <svg
              class="w-4 h-4 transition duration-150 ease-in-out transform fill-current group-hover:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </span>
        </button>
        <ul
          class="absolute top-[42px] transition duration-150 ease-in-out origin-top transform scale-0 bg-white border rounded-sm shadow-md rounded-b-md group-hover:scale-100 w-[250px]"
        >
          <li
            v-for="(item, index) in module.submenus"
            class="p-3 font-medium transition-all rounded-sm cursor-pointer hover:bg-unstim-primary hover:bg-opacity-70 hover:text-white"
            :key="index"
          >
            <RouterLink
              :to="{ name: item.to }"
              active-class="my-link-active"
              class="flex items-center gap-3"
              aria-expanded="false"
            >
              <v-icon :name="item.icon" scale="1.1" />
              <span class="text-sm"> {{ item.title }} </span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style>
/* since nested groupes are not supported we have to use 
     regular css for the nested dropdowns 
  */
li > ul {
  transform: translatex(100%) scale(0);
}

li:hover > ul {
  transform: translatex(101%) scale(1);
}

li > button svg {
  transform: rotate(-90deg);
}

li:hover > button svg {
  transform: rotate(-270deg);
}

/* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
  	 See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
  	 for implementation with config file
  */
.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}

.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}

.scale-0 {
  transform: scale(0);
}

.min-w-32 {
  min-width: 8rem;
}
</style>
