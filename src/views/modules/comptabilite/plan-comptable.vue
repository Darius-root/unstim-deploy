<template>

<div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium">Plan comptable</span>
    </div>

   

    <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="classe 1" name="classe1">
        <el-input v-model="filterText" placeholder="Filter keyword" />
  
  <el-tree
    ref="treeRef"
    class="filter-tree"
    :data="planCompta.classe1"
    :props="defaultProps"
    accordion

    :filter-node-method="filterNode"
  />       </el-tab-pane>

  <el-tab-pane label="classe 2" name="classe2">
        <el-input v-model="filterText" placeholder="Filter keyword" />
  
  <el-tree
    ref="treeRef"
    class="filter-tree"
    :data="planCompta.classe2"
    :props="defaultProps"
    accordion

    :filter-node-method="filterNode"
  />       </el-tab-pane>
    </el-tabs>
  </div>


  </template>
  
  <script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { ElTree, type TabsPaneContext } from 'element-plus'
  import {usePlanComptableStore  } from "@/stores/plan-comptable";
const planCompta = usePlanComptableStore().PlanComptableStats
  const activeName = ref('classe1');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab.props.name, event);
};
  interface Tree {
    [key: string]: any
  }
  
  const filterText = ref('')
  const treeRef = ref<InstanceType<typeof ElTree>>()
  
  const defaultProps = {
    children: 'children',
    label: 'label',
  }
  
  watch(filterText, (val) => {
    treeRef.value!.filter(val)
  })
  
  const filterNode = (value: string, data: Tree) => {
    if (!value) return true
    return data.label.toLowerCase().includes(value)
  }
  
 
  </script>
  