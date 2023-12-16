<script lang="ts" setup>
import { Form } from 'vee-validate'
import { icons } from '@/assets/icons/oh-vue-icons'
import { notyf } from '@/composables/notyf'

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
  <div class="w-full h-screen bg-[url('@/assets/images/sygec/sygec1.png')] bg-cover bg-center ">
    <div class="w-full h-full  flex flex-col justify-center items-center backdrop-blur-sm">


      <Form @submit="submitLoginForm"
        class="flex  flex-col px-7   pb-4 items-center  border-1 border-green-700 rounded-xl bg-unstim-light shadow-unstim-shadow ">


        <div class=" mt-4 justify-center text-green-700 font-bold items-center">Système de Gestion de Conférence de
          l'UNSTIM <br>
        </div>
        <div class="text-green-700 font-bold"> (SyGeC-UNSTIM)</div>

        <div class=" mt-4"> CONNEXION</div>

        <div class="flex flex-col w-full py-3 space-y-6 form-field">
          <div class="relative w-full">
            <v-icon :name="icons.FaEnvelope" :scale="1.3" class="absolute icon top-1.5 left-4" />
            <input type="text"
              class="w-full pl-12 border border-green-700  texte-sm transition-all  rounded-full outline-none ring-0 shadow-input"
              placeholder="Email de connexion " />
          </div>
          <div class="relative w-full">
            <v-icon :name="icons.FormPWIcon" :scale="1.3" class="absolute icon top-1.5 left-4" />

            <input type="password"
              class="w-full border border-green-700 pl-12 texte-sm transition-all  rounded-full outline-none ring-0 shadow-input"
              placeholder="Mot de passe" />

            <v-icon :name="icons.FormPWShowIcon" :scale="1.3" class="absolute icon top-1.5 cursor-pointer right-4" />
          </div>


        </div>

        <div>
          <hr class=" justify-center mt-3 border-slate-600 w-[200px]">
        </div>

        <div class="grid mx-auto place-items-center">

          <button type="submit"
            class="px-4 py-2.5 hover:bg-unstim-primary-pan transition-all shadow-btn rounded-lg mx-auto mt-4 texte-sm font-semibold text-white bg-green-700"
            to="">
            Se connecter
          </button>

          <RouterLink class="py-2 ml-3 texte-sm font-normal underline text-slate-600" to="">Mot de passe oublié ?
          </RouterLink>

          <RouterLink class="py-1 ml-3 texte-sm font-normal underline text-green-700" to="">S'inscrire
          </RouterLink>
        </div>
      </Form>

      <div class="fixed bottom-0 left-0  ml-5">
        <span class="mx-auto text-base font-medium text-white"> Copyright &copy; UNSTIM {{ 2023 }} </span>
      </div>
    </div>
  </div>
</template>
