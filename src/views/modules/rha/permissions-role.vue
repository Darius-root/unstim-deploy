<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue'

const headers = ref([{ text: 'Permissions', sortable: true, value: 'libelle_permission' }])

const items = ref([
  {
    libelle_permission: 'HOUNDJO M Stephen'
  },

  {
    libelle_permission: 'BIAOU Hamidou'
  },

  {
    libelle_permission: 'TOSSOU Valentin'
  },

  {
    libelle_permission: 'CODJIA Orens Eudie'
  },

  {
    libelle_permission: "D'ALMEIDA Mensen Gilberte"
  }
])
</script>

<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-lg font-medium"> Permissions du rôle : Super Admin </span>
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

      <RouterLink
        :to="{ name: 'edit-role' }"
        class="flex items-center gap-2 p-2 mt-5 bg-unstim-primary rounded shadow border-unstim-primary w-fit hover:bg-opacity-60"
      >
        <v-icon :name="icons.PersonPlus" class="text-white" scale="1.1" />
        <span class="text-sm font-medium text-white"> Modifier le role </span>
      </RouterLink>
    </div>

    <div class="w-full mt-5 border border-gray-300 bg-unstim-light card">
      <div class="flex items-center gap-3 px-4 py-3 card-header">
        <!-- <span class="">Exporter</span> -->
      </div>

      <div class="card-content">
        <easy-data-table
          alternating
          border-cell
          :headers="headers"
          class="text-lg"
          theme-color="#2f9fff"
          :items="items"
          buttons-pagination
        >
          <template #item-action="">
            <div class="flex gap-3">
              <RouterLink
                :to="{ name: 'edit-user' }"
                class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary"
              >
                <v-icon :name="icons.EditIcon" scale="1.0" />
              </RouterLink>

              <RouterLink
                to=""
                class="flex items-center gap-2 p-2 my-2 text-white bg-red-400 rounded shadow-md w-fit hover:bg-red-500"
              >
                <v-icon :name="icons.DeleteIcon" scale="1.0" />
              </RouterLink>
            </div>

              </template>
        </easy-data-table>
      </div>
    </div>
  </div>
</template>

<style>
@import url('@/assets/css/easy-table.css');
</style>
