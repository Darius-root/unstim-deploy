<script lang="ts" setup>
import { useStaticStore } from '@/stores/statics'
import { Form } from 'vee-validate'
import { icons } from '@/assets/icons/oh-vue-icons'
import { notyf } from '@/composables/notyf'

const statics = useStaticStore()

/**
 * Soumet le formulaire de connexion et
 * affiche une notification d'erreur si les identifiants sont incorrects.
 *
 * @return {void}
 */

const submitLoginForm = () => {

  notyf.error('Identifiants incorrects')
}



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

      <Form @submit="submitLoginForm"
        class="flex flex-col px-3 pb-4 mx-auto border-2 border-white rounded-md bg-unstim-light shadow-unstim-shadow w-[350px]">
        <div class="flex flex-col items-center justify-center">
          <img class="h-44" src="@/assets/logo/logo.png" alt="UNSTIM logo" />
          <p class="text-lg">Veuillez vous connecter</p>
        </div>

        <div class="w-24 h-1 mx-auto my-4 bg-black"></div>

        <div class="flex flex-col w-full py-3 space-y-6 form-field">
          <div class="relative w-full">
            <v-icon :name="icons.FormUNIcon" :scale="1.3" class="absolute icon top-1.5 left-4" />
            <input type="text"
              class="w-full pl-12 text-base transition-all border-none rounded-full outline-none ring-0 shadow-input"
              placeholder="Email" />
          </div>

          <div class="relative w-full">
            <v-icon :name="icons.FormPWIcon" :scale="1.3" class="absolute icon top-1.5 left-4" />

            <input type="password"
              class="w-full pl-12 text-base transition-all border-none rounded-full outline-none ring-0 shadow-input"
              placeholder="Mot de passe" />

            <v-icon :name="icons.FormPWShowIcon" :scale="1.3" class="absolute icon top-1.5 cursor-pointer right-4" />
          </div>
        </div>

        <RouterLink class="py-2 ml-3 text-base font-medium underline text-unstim-primary" to="">Mot de passe oublié ?
        </RouterLink>

        <div class="grid mx-auto place-items-center">
          <button type="submit"
            class="px-4 py-2.5 hover:bg-unstim-primary-pan transition-all shadow-btn rounded-full mx-auto mt-4 text-base font-semibold text-white bg-unstim-primary"
            to="">
            Se connecter
          </button>
        </div>
      </Form>

      <div class="flex flex-col items-center justify-center w-full">
        <span class="mx-auto text-base font-medium"> Copyright &copy; UNSTIM {{ 2023 }} </span>

        <RouterLink class="py-2 mx-auto text-base font-medium text-unstim-primary" to="">
          Contacter l’Administrateur
        </RouterLink>
      </div>
    </div>
  </div>
</template>
