<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { icons } from '@/assets/icons/oh-vue-icons'
import { RouterLink } from 'vue-router'
import 'flatpickr/dist/flatpickr.css'
import flatPickr from 'vue-flatpickr-component'
import { French } from 'flatpickr/dist/l10n/fr.js'

import type { BaseOptions } from 'flatpickr/dist/types/options'

const startDate = ref('')

// const endDate = ref(null)

const searchConfig = ref<Partial<BaseOptions>>({
  wrap: true,
  dateFormat: 'j/m/Y',
  locale: French
})

const welcomeActions = reactive([
  { name: '', label: 'Actualiser', icon: icons.RefreshIcon },
  { name: '', label: 'Droits', icon: icons.RefreshIcon },
  { name: '', label: 'Configurations des modules', icon: icons.SettingsIcon }
])

const userSumaryStats = reactive([
  { label: 'Utilisateurs connectés', value: '04', color: '#6ce392', to: { name: 'online-users' } },
  {
    label: 'Modules Ouverts',
    color: '#d976e8',
    value: '04',
    to: { name: 'online-users-per-module' }
  },
  { label: 'Visiteurs', color: '#ff5ab6', value: '04' }
])

function filterModule() {
  alert('Module');
}
</script>

<template>
  <div class="w-full h-full mx-auto xl:container">

    <div class="grid grid-cols-1 gap-8 mb-3 lg:grid-cols-3">
      <div class="space-y-4 lg:col-span-2 left">

        <el-card class="box-card">
          <div class="">
            <h3 class="py-3 text-xl font-extrabold">Salut Admin !</h3>

            <p class="max-w-2xl">
              Bienvenue sur votre espace d’administration du SIG. Consultez ici toutes les
              informations en liens avec les utilisateurs de la plateforme.
            </p>

            <div class="flex flex-col gap-3 py-4 lg:items-center lg:flex-row divider-x">
              <div v-for="(item, index) in welcomeActions" :key="index" class="flex items-center gap-3">
                <v-icon :name="item.icon" scale="1" />
                <RouterLink class="text-base font-semibold underline underline-offset-4 text-unstim-primary"
                  to="{ name: name }">{{ item.label }}</RouterLink>
              </div>
            </div>
          </div>

          <template #footer>Footer content</template>
        </el-card>

        <hr />

        <div class="grid w-full place-items-center">
          <h3 class="text-xl font-extrabold">En temps réel</h3>

          <div class="flex flex-col w-full gap-3 pt-4 lg:flex-row">
            <RouterLink to="" v-for="(item, index) in userSumaryStats" :key="index"
              class="inline-flex items-center justify-center w-full gap-3 px-5 py-2 rounded-lg shadow-card">
              <span class="text-xl font-extrabold" :style="{ color: item.color }">
                {{ item.value }}
              </span>
              <span class="text-base"> {{ item.label }}</span>
            </RouterLink>
          </div>
        </div>

        <hr />

        <el-card class="box-card">
          <template #header>
            <div class="flex justify-between">
              <h3 class="text-xl font-extrabold">Filtrage</h3>
            </div>
          </template>
          <div class="w-full">
            <el-row :gutter="10" class="py-4 space-y-4 lg:space-y-0" justify="center">

              <el-col :xs="24" :lg="12">
                <el-date-picker type="date" v-model="startDate" placeholder="Date de début" size="large" />
              </el-col>

              <el-col :xs="24" :lg="12">
                <el-date-picker class="w-full" v-model="startDate" type="date" placeholder="Date de fin" size="large" />
              </el-col>

            </el-row>

            <el-row :gutter="10" class="space-y-4 lg:space-y-0" justify="center">

              <el-col :xs="24" :lg="24">
                <el-button @click="filterModule" type="primary" size="large">Filtrer les modules </el-button>
              </el-col>

            </el-row>

          </div>

          <!-- <template #footer>Footer content</template> -->
        </el-card>


      </div>

      <div class="w-full space-y-3 lg:col-span-1 left">
        <div class="w-full px-5 py-6 rounded-lg stats-card shadow-card">
          <div class="grid space-y-3 place-items-center">
            <h3 class="text-xl font-extrabold underline underline-offset-4">
              Statistiques des modules
            </h3>

            <span class=""> Fréquence d'ouverture </span>

            <flat-pickr v-model="startDate" :placeholder="`jj/mm/aaaa`"
              class="px-6 border-gray-300 rounded-full shadow-input" :config="searchConfig" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
