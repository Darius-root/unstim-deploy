<script lang="ts" setup>
import moment from 'moment'
import 'moment/locale/fr'

import { icons } from '@/assets/icons/oh-vue-icons'


moment.locale('fr')

</script>

<template>
  <header class="w-full bg-white fixed inset-x-0 z-20  text-black">
    <div class="flex items-center justify-between h-[50px] gap-3 px-3 border">
      <RouterLink :to="{ name: 'home' }" class="flex items-center gap-2" >
        <img class="w-auto h-auto lg:w-48" src="@/assets/logo/sygecLogo.png" alt="UNSTIM Logo" />
      </RouterLink>


      <div class="flex items-center gap-2 ends">
      
        <RouterLink to="." class="text-black my-notif position-relative">
          <span class="my-notif-icon me-3"> <v-icon :name="icons.NotifIcon" scale="1.4" /></span>
        </RouterLink>

        <div class="justify-self-end">
            <RouterLink to="." class="text-black my-notif position-relative">
          <span class="my-notif-icon me-3"> <v-icon :name="icons.FaUser" scale="1.4" /></span>
        </RouterLink>
          <!-- <span class="my-admin-name fw-medium">Evrajody Gildas</span> -->
        </div>
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
