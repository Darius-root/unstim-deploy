<template>
    <el-table :data="tableData" :border="true" stripe style="width: 100%">
      <!-- Colonnes de la table -->
      <el-table-column sortable  v-for="column in columns" :key="column.prop" :prop="column.prop" :label="column.label" >
      </el-table-column>
      <el-table-column  fixed="right" label="Action" width="170">
        <template #default>
          <div class="flex gap-3 row justify-center items-center">
            <RouterLink to="contrat-update" class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-yellow-600 hover:opacity-50">
              <v-icon :name="icons.EditIcon" scale="1.0" />
            </RouterLink>
            <RouterLink to="" class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-600 hover:bg-red-400">
              <v-icon :name="icons.DeleteIcon" scale="1.0" />
            </RouterLink>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { icons } from '@/assets/icons/oh-vue-icons'

  defineProps({
    tableData: {
    type: Array ,
    required: true
  },  })


  
  const columns = ref([
    { prop: 'numero', label: 'Numéro' },
    { prop: 'libelle', label: 'Libellé' },
    { prop: 'telephone', label: 'Téléphone' },
    { prop: 'adresse', label: 'Adresse', width: '180' },
    { prop: 'ville', label: 'Ville' },
    { prop: 'pays', label: 'Pays' },
    { prop: 'numeroCategorie', label: 'Numéro catégorie',  },
    { prop: 'nomCategorie', label: 'Nom catégorie' }
  ]);
  

  </script>
  
  <style scoped></style>
  