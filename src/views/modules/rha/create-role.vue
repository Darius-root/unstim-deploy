<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import {axiosLaravelInstance} from '@/composables/axios';
import { useAxios } from '@vueuse/integrations/useAxios.mjs';
import { notyf } from '@/composables/notyf'

import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const dataRole=  reactive({
  name: '',
})
const roleRequestError = ref({} as {
  name?: Array<string>,
})


const roleRequest = useAxios('api/role', { method: 'POST',data: dataRole  }, axiosLaravelInstance, {
  immediate: false,
  shallow: false,

  onError: (e: any) => {
    roleRequestError.value = e.response.data.errors    
    notyf.error('Échec de création')
  },
  onSuccess: (data) => {
    router.push({ name: 'roles' })
    notyf.success(data.message)

  }
})

const submitCreateRole = () => roleRequest.execute();


</script>

<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-lg font-medium"> Ajouter un nouveau rôle </span>
    </div>

    <div class="flex justify-between">
      <RouterLink @click.prevent="$router.back()" to=""
        class="flex items-center gap-2 p-2 mt-5 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
        <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
        <span class="text-sm font-medium"> Retour </span>
      </RouterLink>
    </div>

    <div class="w-full p-5 mt-5 border border-gray-300 bg-unstim-light card">
      

      <div class="personal-infos-group">
       

        <el-form :status-icon="true" v-model="dataRole" label-position="top" require-asterisk-position="right"
          class="demo-form-inline gap-4 mx-3 grid grid-cols-1">

          <el-form-item label="Nom du rôle" required :error="roleRequestError.name?.at(0)">

            <div class="max-w-full w-full">
              <el-input v-model="dataRole.name" type="text" placeholder="" size="large" />
            </div>

          </el-form-item>


        </el-form>





        <div class="flex ml-4 gap-3  mt-6 form-btn">
          <el-button type="primary" size="large" @click="submitCreateRole" :loading="roleRequest.isLoading.value">

<template #loading>
  <div class="custom-loading pr-3">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
        <path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3"
          d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0" />
        </path>
        <path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />
          <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate"
            values="0 12 12;360 12 12" />
        </path>
      </g>
    </svg>
  </div>
</template>


<span class="text-white text-base">Enregistrer</span>
</el-button>






        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('@/assets/css/easy-table.css');
</style>
