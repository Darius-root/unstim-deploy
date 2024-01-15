<script lang="ts" setup>
import { useStaticStore } from '@/stores/statics'
import { notyf } from '@/composables/notyf'
import { reactive, ref } from 'vue';

import { useAxios } from '@vueuse/integrations/useAxios'
import axiosLaravelInstance from '@/composables/axios'

const statics = useStaticStore()

const loginData = reactive({
  email: '',
  password: ''
})

const loginRequestError = ref({} as {
  email?: Array<string>,
  password?: Array<string>
})

const loginRequest = useAxios('/api/login', { method: 'POST' }, axiosLaravelInstance, {
  immediate: false,
  shallow: false,
  initialData: loginData,
  onError: (e: any) => {
    loginRequestError.value = e.response.data.errors
    notyf.error('Authentification echouée')
  },

  onSuccess: (data) => {
    console.log(data);
  }

})

const submitLoginForm = () => loginRequest.execute();


</script>

<template>
  <div class="flex w-full bg-white h-screen">
    <div class="relative hidden w-1/2 h-full lg:block right-panel">
      <img src="@/assets/images/unstim-plan1.png" class="object-cover object-right w-full h-full" alt="" />

      <div class="absolute bottom-0 left-0 px-5 py-4 text-base font-medium text-white">
        <RouterLink to="" class="z-10 underline"> https://www.unstim.bj </RouterLink>
      </div>
    </div>

    <div class="flex flex-col justify-center w-full h-full space-y-6 lg:w-1/2 right-panel">
      <h3 class="mx-auto text-lg font-extrabold md:text-2xl lg:text-3xl">
        {{ statics.appCompleteName }}
      </h3>


      <div
        class="flex flex-col px-3 pb-4 mx-auto border-2 border-white rounded-md bg-unstim-light shadow-unstim-shadow w-[350px]">
        <div class="flex flex-col items-center justify-center">
          <img class="h-32" src="@/assets/logo/logo.png" alt="UNSTIM logo" />
          <p class="text-lg">Veuillez vous connecter</p>
        </div>

        <div class="w-24 h-1 mx-auto my-2 bg-black"></div>

        <el-form :status-icon="true" v-model="loginData" label-position="top" require-asterisk-position="right"
          class="demo-form-inline gap-4 mx-3 grid grid-cols-1">


          <el-form-item label="Email" required :error="loginRequestError.email?.at(0)">

            <div class="max-w-full w-full">
              <el-input v-model="loginData.email" type="email" placeholder="" size="large" />
            </div>

          </el-form-item>

          <el-form-item label="Mot de passe" required :error="loginRequestError.password?.at(0)">

            <div class="max-w-full w-full">
              <el-input v-model="loginData.password" type="password" placeholder="" size="large" />
            </div>
          </el-form-item>

        </el-form>

        <RouterLink class="py-2 ml-3 text-sm font-medium underline text-unstim-primary" to="">Mot de passe oublié ?
        </RouterLink>

        <div class="grid mx-auto place-items-center">
          <button type="submit" @click.prevent="submitLoginForm"
            class="px-5 py-2.5 hover:bg-unstim-primary-pan transition-all shadow-btn rounded-full mx-auto mt-4 text-base font-semibold text-white bg-unstim-primary">
            Se connecter
          </button>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center w-full">
        <span class="mx-auto text-base font-medium"> Copyright &copy; UNSTIM {{ 2023 }} </span>

        <RouterLink class="py-2 mx-auto text-base font-medium text-unstim-primary" to="">
          Contacter l’Administrateur
        </RouterLink>
      </div>
    </div>
  </div>
</template>
