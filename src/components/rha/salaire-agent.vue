<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons';
import { ref } from 'vue';

const items = ref([
  {
    rubrique: 'SALAIRE DE BASE',
    janvier: '0',
    fevrier: '0',
    mars: '0',
    avril: '0',
    mai: '0',
    juin: '0',
    juillet: '0',
    aout: '0',
    septembre: '0',
    octobre: '0',
    novembre: '0',
    decembre: '0'

  },

  {
    rubrique: 'SALAIRE BRUT',
    janvier: '0',
    fevrier: '0',
    mars: '0',
    avril: '0',
    mai: '0',
    juin: '0',
    juillet: '0',
    aout: '0',
    septembre: '0',
    octobre: '0',
    novembre: '0',
    decembre: '0'

  },

  {
    rubrique: 'IPTS',
    janvier: '10',
    fevrier: '0',
    mars: '0',
    avril: '0',
    mai: '0',
    juin: '0',
    juillet: '0',
    aout: '0',
    septembre: '0',
    octobre: '0',
    novembre: '0',
    decembre: '0'

  },

  {
    rubrique: 'NET À PAYER',
    janvier: '0',
    fevrier: '0',
    mars: '0',
    avril: '0',
    mai: '0',
    juin: '0',
    juillet: '0',
    aout: '0',
    septembre: '0',
    octobre: '0',
    novembre: '0',
    decembre: '0'

  },

])
</script>

<template>
  <el-card class="space-y-4 my-5">

    <el-table :data="items" size="small" :lazy="true" :border="true" style="width: 100%" table-layout="auto">

      <!-- <el-table-column type="selection" width="50" /> -->
      <el-table-column width="150" prop="rubrique" label="Rubrique" />
      <el-table-column width="150" prop="janvier" sortable label="Janvier" />
      <el-table-column width="150" prop="fevrier" sortable label="Fevrier" />
      <el-table-column width="150" prop="mars" sortable label="Mars" />
      <el-table-column width="150" prop="avril" sortable label="Avril" />
      <el-table-column width="150" prop="mai" sortable label="Mai" />
      <el-table-column width="150" prop="juin" sortable label="Juin" />
      <el-table-column width="150" prop="juillet" sortable label="Juillet" />
      <el-table-column width="150" prop="aout" sortable label="Aout" />
      <el-table-column width="150" prop="septembre" sortable label="Septembre" />
      <el-table-column width="150" prop="octobre" sortable label="Octobre" />
      <el-table-column width="150" prop="novembre" sortable label="Novembre" />
      <el-table-column width="150" prop="decembre" sortable label="Decembre" />

    </el-table>

  </el-card>
</template>

<style></style>
