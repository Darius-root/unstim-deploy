<script lang="ts" setup>
import { axiosLaravelInstance } from '@/composables/axios';
import { useAxios } from '@vueuse/integrations/useAxios.mjs';
import { notyf } from '@/composables/notyf'
import { type Ref, watch } from 'vue'
import { reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import type { ResponseType, Role } from '@/composables/helpers';
import type { AxiosRequestConfig } from 'axios';


const route = useRoute()
const router = useRouter()


const id: Ref<string | string[]> = ref('');

watch(() => route.params.id, async (newId) => {
  if (!newId) {
    router.push('/not-found')
  } else {
    id.value = route.params.id
  }
}, { immediate: true });



// retrieve of id
const roleName = reactive({
  name: '',
})

const getRoleRequestConfig = ref<AxiosRequestConfig>({
  method: 'GET',
  headers: { "Authorization": `Bearer ${sessionStorage.getItem('authToken')}` }
})

const roleRequestConfig = ref<AxiosRequestConfig>({
  method: 'PUT',
  data: roleName,
  headers: { "Authorization": `Bearer ${sessionStorage.getItem('authToken')}` }
})


const getRoleRequest = useAxios(`api/role/${id.value}`, getRoleRequestConfig.value, axiosLaravelInstance, {
  immediate: true,
  onSuccess: (data: ResponseType<Role>) => {
    roleName.name = data.body.name
  }

})


const roleRequestError = ref({} as {
  name?: Array<string>,
})


const roleRequest = useAxios(`api/role/${id.value}`, roleRequestConfig.value, axiosLaravelInstance, {
  immediate: false,

  onError: (e: any) => {
    roleRequestError.value = e.response.data.errors
    notyf.error('Échec de modification')
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

    <el-page-header title="Retour">
      <template #content>
        <div class="flex items-center">
          <span class="text-base font-medium"> Modifier le role </span>
        </div>
      </template>

    </el-page-header>

    <el-card class="w-full  my-5 border border-gray-300 bg-unstim-light card">


      <div class="personal-infos-group space-y-3">

        <Suspense>

          <template #fallback>
            Loading...
          </template>

        </Suspense>


        <el-form :status-icon="true" label-position="top" require-asterisk-position="right"
          class="demo-form-inline gap-4  grid grid-cols-1">

          <el-form-item label="Nom du rôle" required :error="roleRequestError.name?.at(0)">

            <div class="max-w-full w-full">
              <el-input v-model="roleName.name" type="text" placeholder="" size="large" />
            </div>

          </el-form-item>


        </el-form>

        <div class="flex gap-3">
          <el-button type="primary" size="large" @click="submitCreateRole" :loading="roleRequest.isLoading.value">

            <template #loading>
              <div class="custom-loading pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24">true
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


            <span class="text-white text-sm">Enregistrer</span>
          </el-button>


        </div>
      </div>
    </el-card>
  </div>
</template>


