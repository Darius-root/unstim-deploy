
<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium">{{ dataPage.title }}</span>
    </div>

    <div class="flex justify-end my-3" v-if="dataPage.buttons">
      <template v-for="(btn, item) in dataPage.buttons" :key="item">
        <RouterLink :style="{ backgroundColor: btn.color }" :to="btn.to" class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60 mx-1">
          <v-icon :name="icons.AddIcon" scale="1.1" />
          <span class="text-sm font-medium">{{ btn.title }}</span>
        </RouterLink>
      </template>
    </div>

    <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="Client" name="client">
        <TableComponent :tableData="dataPage.client" />
      </el-tab-pane>
      <el-tab-pane label="Fournisseur" name="fournisseur">
        <TableComponent :tableData="dataPage.fournisseur" />
      </el-tab-pane>
      <el-tab-pane label="Personnel" name="personnel">
        <TableComponent :tableData="dataPage.personnel" />
      </el-tab-pane>
      <el-tab-pane label="Autres" name="autres">
        <TableComponent :tableData="dataPage.autres" />
      </el-tab-pane>
      <el-tab-pane label="Non catégorisés" name="categorie">
        <TableComponent :tableData="dataPage.categorie" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { icons } from '@/assets/icons/oh-vue-icons';
import TableComponent from '@/components/tab-compta.vue';
import type { TabsPaneContext } from 'element-plus';


const dataPage = {
  fournisseur: [

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
    }],
  client: [

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
    }],



    personnel:[

{
  numero: 5,
  libelle: 'Fournisseur',
  telephone: '123-456-7890',
  adresse: '123 Rue de l\'Exemple',
  ville: 'Exempleville',
  pays: 'Exemplepays',
  numeroCategorie: 1,
  nomCategorie: 'ExempleCatégorie',
  actions: 'éditer',  // exemple de valeurs pour la clé 'Actions'
}],

autres:[

{
  numero: 5,
  libelle: 'Fournisseur',
  telephone: '123-456-7890',
  adresse: '123 Rue de l\'Exemple',
  ville: 'Exempleville',
  pays: 'Exemplepays',
  numeroCategorie: 1,
  nomCategorie: 'ExempleCatégorie',
  actions: 'éditer',  // exemple de valeurs pour la clé 'Actions'
}],

categorie:[

{
  numero: 5,
  libelle: 'Fournisseur',
  telephone: '123-456-7890',
  adresse: '123 Rue de l\'Exemple',
  ville: 'Exempleville',
  pays: 'Exemplepays',
  numeroCategorie: '',
  nomCategorie: '',
  actions: 'éditer',  // exemple de valeurs pour la clé 'Actions'
}],

  title: 'Compte de Tiers',
  buttons: [
    { title: 'Ajouter un compte de tiers ', color: '#2b9eff', to: 'create-tiers' }
  ]
}



const activeName = ref('client');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab.props.name, event);
};
</script>

<style scoped></style>
