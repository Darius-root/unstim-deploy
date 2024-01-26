<template>
    <el-table :data="tableData" :border="true" stripe style="width: 100%">
      <!-- Colonnes de la table -->
      <el-table-column v-for="column in columns" :key="column.prop" :prop="column.prop" :label="column.label" :width="column.width">
      </el-table-column>
      <el-table-column fixed="right" label="Operations" width="170">
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

  const props=defineProps({
    tableData: {
    type: Array ,
    required: true
  },  })


  console.log(props.tableData);
  
  const columns = ref([
    { prop: 'numero', label: 'Numéro', width: '100' },
    { prop: 'libelle', label: 'Libellé', width: '100' },
    { prop: 'telephone', label: 'Téléphone', width: '100' },
    { prop: 'adresse', label: 'Adresse', width: '180' },
    { prop: 'ville', label: 'Ville', width: '100' },
    { prop: 'pays', label: 'Pays', width: '100' },
    { prop: 'numeroCategorie', label: 'Numéro catégorie', width: '95' },
    { prop: 'nomCategorie', label: 'Nom catégorie', width: '100' }
  ]);
  

  </script>
  
  <style scoped></style>
  