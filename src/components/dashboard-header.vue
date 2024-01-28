<script lang="ts" setup>
import moment from 'moment'
import 'moment/locale/fr'

import { icons } from '@/assets/icons/oh-vue-icons'

import { useModuleStore } from '@/stores/modules'

moment.locale('fr')

const modules = useModuleStore().modules

import { ref } from 'vue'

const activeIndex = ref('0')

const handleSelect = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
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
          <img src="@/assets/images/avatars/admin.png" alt="admin-profile-avatar"
            class="bg-white rounded-full shadow-lg h-14 img-profile" />
          <!-- <span class="my-admin-name fw-medium">Evrajody Gildas</span> -->
        </div>
      </div>
    </div>

    <el-menu :router="true" :default-active="activeIndex" class="justify-center -space-x-2" mode="horizontal"
      @select="handleSelect">
      <div class="" v-for="(module, item) in modules" :key="item">

        <template v-if="!module.submenus">
          <el-menu-item :route="{ name: module.to }" class="text-sm" :index="item.toString()">
            <template #title>
              <span class="font-semibold text-sm">{{ module.label }}</span>
            </template>
          </el-menu-item>
        </template>

        <template v-else>
          <el-sub-menu :index="item.toString()">

            <template #title>
              <span class="font-semibold text-sm">{{ module.label }}</span>
            </template>

            <template v-for="(item, index) in module.submenus" :key="index">
              <el-menu-item :route="{ name: item.to }" class="text-sm" :index="`under-${index}`">
                {{ item.title }}
              </el-menu-item>
            </template>


          </el-sub-menu>
        </template>
      </div>


    </el-menu>

  </header>
</template>

<style></style>
