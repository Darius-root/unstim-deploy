<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons';
import { reactive } from 'vue';



const attributs = reactive([
  {
    icon: icons.FaPencilAlt,
    label: "Début du contrat",
    value: "10/10/2021",
    color: "primary"

  },

  {
    icon: icons.FaPencilAlt,
    label: "Fin du contrat",
    value: "10/10/2021",
    color: "primary"
  },

  {
    icon: icons.FaPencilAlt,
    label: "Salaire de base",
    value: "10/10/2021",
    color: "primary"

  },

  // {
  //   icon: icons.FaPencilAlt,
  //   label: "Qualification",
  //   value: "Docteur en Sciences Agronomiques",
  //   color: "primary"

  // },


  {
    icon: icons.FaPencilAlt,
    label: "Grade",
    value: "Chef de Département",
    color: "primary"

  },

])

</script>

<template>
  <div class="w-full space-y-5 h-full mx-auto xl:container">


    <el-page-header title="Retour">
      <template #content>
        <div class="flex items-center">
          <span class="text-base font-medium"> Initier un accord </span>
        </div>
      </template>
      <template #extra>

        <!-- <div class="flex gap-3 items-center">
          <el-date-picker v-model="startDate" type="daterange" start-placeholder="Date de debut"
            end-placeholder="Date de fin" />
        </div> -->

        <div class="flex items-center gap-2">
          <span class="text-sm font-medium text-unstim-primary uppercase"> Date de signature </span>
          <el-dropdown>
            <span class="el-dropdown-link text-sm font-medium text-unstim-primary">
              2023
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>2017</el-dropdown-item>
                <el-dropdown-item>2018</el-dropdown-item>
                <el-dropdown-item>2019</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>

      </template>

    </el-page-header>

    <el-card class="box-card my-5">

      <template #header>
        <div class="flex justify-center">
          <span> Initier un accord </span>
        </div>
      </template>

      <el-form label-position="top" require-asterisk-position="right"
        class="demo-form-inline grid grid-cols-1 gap-5 md:grid-cols-2">

        <el-form-item label="Dénomination" required>

          <div class="max-w-full w-full">
            <el-input placeholder="" size="large" />
          </div>

        </el-form-item>

        <el-form-item label="Date de fin" required>

          <div class="max-w-full w-full">
            <el-input placeholder="" size="large" />
          </div>
        </el-form-item>

        <el-form-item label="Entité concernée de l'UNSTIM" required>
          <div class="max-w-full w-full">
            <el-date-picker class="w-full" type="date" placeholder="" size="large" />
          </div>
        </el-form-item>

        <el-form-item label="Type de partenariat" required>

          <div class="max-w-full w-full">
            <el-input placeholder="" size="large" />
          </div>

        </el-form-item>

        <el-form-item label="Partie prenante">
          <div class="max-w-full w-full">
            <el-select placeholder="" size="large" clearable>
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </div>
        </el-form-item>

        <el-form-item label="Document" required>

          <div class="max-w-full w-full">
            <el-input placeholder="" size="large" />
          </div>

        </el-form-item>

      </el-form>



      <div class="flex">


      </div>


    </el-card>

  </div>
</template>
