<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { useAxios } from '@vueuse/integrations/useAxios'
import axiosLaravelInstance from '@/composables/axios'
import type { ResponseType, Role } from '@/composables/helpers';
import { ref } from 'vue';


const roles = ref<Role[]>([]);
const roleRequest = useAxios('api/role', { method: 'GET' }, axiosLaravelInstance, {
  immediate: true,
  shallow: false,

  onSuccess: (data: ResponseType<Role>) => {
    roles.value = data.body
  }

})


</script>

<template>
  <div class="mx-auto xl:container">


    <el-page-header title="Retour">
      <template #content>
        <div class="flex items-center">
          <span class="text-base font-medium"> Liste des roles </span>
        </div>
      </template>

      <template #extra>
        <div class="flex gap-2">
          <RouterLink to="{ name: item.to }"
            class="flex items-center gap-2 py-1.5 px-2 rounded shadow bg-yellow-500 w-fit hover:bg-opacity-60">
            <v-icon :name="icons.PersonPlus" class="" scale="1.0" />
            <span class="text-sm font-medium"> Ajouter un role </span>
          </RouterLink>
        </div>
      </template>

    </el-page-header>

    <el-card class="box-card my-5">
      <template #header>
        <div class="flex items-center justify-between">
          <span class="text-base font-medium"> Roles des utilisateurs </span>
        </div>
      </template>

      <el-table v-loading="roleRequest.isLoading.value" :data="roles" size="small" :border="true" style="width: 100%">

        <el-table-column type="selection" width="50" />

        <el-table-column width="100" prop="id" label="Identifiant" />
        <el-table-column prop="name" label="Libelle du role" />

        <el-table-column width="200" label="Actions">
          <div class="flex gap-2">
            <RouterLink :to="{ name: 'permissions-roles' }"
              class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary">
              <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
            </RouterLink>

            <RouterLink :to="{ name: 'edit-role' }"
              class="flex items-center gap-2 p-2 my-2 text-white bg-red-400 rounded shadow-md w-fit hover:bg-red-500">
              <v-icon :name="icons.EditIcon" scale="1.0" />
            </RouterLink>

            <RouterLink to=""
              class="flex items-center gap-2 p-2 my-2 text-white bg-black/75 rounded shadow-md w-fit hover:bg-black/75">
              <v-icon :name="icons.DeleteIcon" scale="1.0" />
            </RouterLink>
          </div>
        </el-table-column>

      </el-table>

    </el-card>

  </div>
</template>
