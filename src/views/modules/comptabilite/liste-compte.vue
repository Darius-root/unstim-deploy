

<template>
    <div class="mx-auto xl:container">
      <div class="flex py-2 border-b top-line">
        <span class="text-base font-medium">{{ dataPage.title }}</span>
      </div>
  

<div class="flex my-6 items-center">
  <el-button>Excel</el-button>
  <el-button type="primary" class="ml-2">CSV</el-button>
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
  import {  ref } from 'vue';
  import TableComponent from '@/components/tab-listCompte.vue';
  import type { TabsPaneContext } from 'element-plus';
  
  const dataPage = {
    title: 'Listes des comptes',
    buttons: [
      { title: 'Ajouter un compte ', color: '#2b9eff', to: '' }
    ],
    categories: [
      {
        name: 'classe 1',
        label: 'classe 1',
        data: [
        {
            numero: 1,
            libelle: 'categorie',
          
            actions: 'éditer',  
          }
        ]
      },
      {
        name: 'classe 2',
        label: 'classe 2',
        data: [
        {
            numero: 1,
            libelle: 'categorie',
          
            actions: 'éditer',  
          }
        ]
      },
  
      {
        name: 'classe 3',
        label: 'classe 3',
        data: [
        {
            numero: 1,
            libelle: 'categorie',
          
            actions: 'éditer',  
          }
        ]
      },
  
      {
        name: 'classe 4',
        label: 'classe 4',
        data: [
        {
            numero: 1,
            libelle: 'categorie',
          
            actions: 'éditer',  
          }
        ]
      },
  
      {
        name: 'classe 5',
        label: 'classe 5',
        data: [
        {
            numero: 1,
            libelle: 'categorie',
          
            actions: 'éditer',  
          }
        ]
      },
      {
        name: 'classe 6',
        label: 'classe 6',
        data: [
        {
            numero: 1,
            libelle: 'categorie',
          
            actions: 'éditer',  
          }
        ]
      },
      {
        name: 'classe 7',
        label: 'classe 7',
        data: [
        {
            numero: 1,
            libelle: 'categorie',
          
            actions: 'éditer',  
          }
        ]
      },
      {
        name: 'classe 8',
        label: 'classe 8',
        data: [
        {
            numero: 1,
            libelle: 'categorie',
          
            actions: 'éditer',  
          }
        ]
      },
      {
        name: 'classe 9',
        label: 'classe 9',
        data: [
          {
            numero: 9,
            libelle: 'categorie',
          
            actions: 'éditer',  
          }
        ]
      },
  
  
  
  
    ]
  };
  
  const activeName = ref('classe 1');
  
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab.props.name, event);
  };


  </script>
  
  <style scoped>
</style>
  
  









