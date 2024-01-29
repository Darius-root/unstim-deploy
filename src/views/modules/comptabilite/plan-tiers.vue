

<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium">{{ dataPage.title }}</span>
    </div>

    <div class="flex justify-end my-3" v-if="dataPage.buttons">
      <template v-for="(btn, index) in dataPage.buttons" :key="index">
        <RouterLink :style="{ backgroundColor: btn.color }" :to="btn.to" class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60 mx-1">
          <v-icon :name="icons.AddIcon" scale="1.1" />
          <span class="text-sm font-medium">{{ btn.title }}</span>
        </RouterLink>
      </template>
    </div>

    <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
      <template v-for="(category, index) in dataPage.categories" :key="index">
        <el-tab-pane :label="category.label" :name="category.name">
          <TableComponent :tableData="category.data" />
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { icons } from '@/assets/icons/oh-vue-icons';
import TableComponent from '@/components/tab-compta.vue';
import type { TabsPaneContext } from 'element-plus';

const dataPage = {
  title: 'Compte de Tiers',
  buttons: [
    { title: 'Ajouter un compte de tiers ', color: '#2b9eff', to: 'create-tiers' }
  ],
  categories: [
    {
      name: 'client',
      label: 'Client',
      data: [
        {
          numero: 2,
          libelle: 'Fournisseur',
          telephone: '123-456-7890',
          adresse: '123 Rue de l\'Exemple',
          ville: 'Exempleville',
          pays: 'Exemplepays',
          numeroCategorie: 1,
          nomCategorie: 'ExempleCatégorie',
          actions: 'éditer',  // exemple de valeurs pour la clé 'Actions'
        }
      ]
    },
    {
      name: 'fournisseur',
      label: 'Fournisseur',
      data: [
        {
          numero: 1,
          libelle: 'Exemple',
          telephone: '123-456-7890',
          adresse: '123 Rue de l\'Exemple',
          ville: 'Exempleville',
          pays: 'Exemplepays',
          numeroCategorie: 1,
          nomCategorie: 'ExempleCatégorie',
          actions: 'éditer',  // exemple de valeurs pour la clé 'Actions'
        }
      ]
    },

    {
      name: 'personnel',
      label: 'personnel',
      data: [
        {
          numero: 1,
          libelle: 'personnel',
          telephone: '123-456-7890',
          adresse: '123 Rue de l\'Exemple',
          ville: 'Exempleville',
          pays: 'Exemplepays',
          numeroCategorie: 1,
          nomCategorie: 'ExempleCatégorie',
          actions: 'éditer',  // exemple de valeurs pour la clé 'Actions'
        }
      ]
    },

    {
      name: 'autres',
      label: 'autres',
      data: [
        {
          numero: 1,
          libelle: 'autres',
          telephone: '123-456-7890',
          adresse: '123 Rue de l\'Exemple',
          ville: 'Exempleville',
          pays: 'Exemplepays',
          numeroCategorie: 1,
          nomCategorie: 'ExempleCatégorie',
          actions: 'éditer',  // exemple de valeurs pour la clé 'Actions'
        }
      ]
    },

    {
      name: 'categorie',
      label: 'categorie',
      data: [
        {
          numero: 1,
          libelle: 'categorie',
          telephone: '123-456-7890',
          adresse: '123 Rue de l\'Exemple',
          ville: 'Exempleville',
          pays: 'Exemplepays',
          numeroCategorie: 1,
          nomCategorie: 'ExempleCatégorie',
          actions: 'éditer',  // exemple de valeurs pour la clé 'Actions'
        }
      ]
    },

  ]
};

const activeName = ref('client');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab.props.name, event);
};
</script>

<style scoped></style>

