<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import unstimSelect from '@/components/inputs/unstim-select.vue'
import unstimText from '@/components/inputs/unstim-text.vue'
import { reactive } from 'vue'

const employeParams = reactive({
  options: ['Evrajody Gildas', 'AGOSSOU Jean', 'JOHN Doe'],
  placeholder: '--Choississez un employe--',
  searchable: true
})

const rolesParams = reactive({
  options: ['Administrateur', 'Agent', 'Chef conseiller', 'Chef département'],
  placeholder: '--Choississez un role--',
  searchable: true,
  mode: 'tags'
})
</script>

<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-lg font-medium"> Creer un nouvel utilisateur </span>
    </div>

    <div class="flex justify-between">
      <RouterLink
        @click.prevent="$router.back()"
        to=""
        class="flex items-center gap-2 p-2 mt-5 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
      >
        <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
        <span class="text-sm font-medium"> Retour </span>
      </RouterLink>
    </div>

    <div class="w-full p-5 mt-5 border border-gray-300 bg-unstim-light card">
      <p class="flex items-center gap-3">
        <span class="text-red-400">*</span>
        <span class="text-sm">Champs obligatoire</span>
      </p>

      <div class="personal-infos-group">
        <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-2">
          <unstim-select
            isRequired
            label="Selectionner l'employé"
            @valueChanged="(e) => {}"
            :parameters="employeParams"
          />

          <unstim-text isRequired label="Email de l'employee" @valueChanged="(e) => {}" />

          <div class="flex col-span-full flex-col space-y-2 input-group">
            <unstim-select
              isRequired
              label="Roles"
              @valueChanged="(e) => {}"
              :parameters="rolesParams"
            />
          </div>
        </div>

        <div class="flex gap-3 border-t form-btn">
          <button
            class="flex items-center gap-2 p-2 px-3 mt-5 text-white rounded shadow bg-unstim-primary w-fit hover:bg-opacity-60"
          >
            <span class="text-sm font-medium"> Enregistrer </span>
            <!-- <v-icon :name="icons.ChevronUp" class="rotate-90" scale="1.0" /> -->
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('@/assets/css/easy-table.css');
</style>
