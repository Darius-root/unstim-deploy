<template>
  
     
      <div class="max-w-full p-5 mt-3 border row">
<div class="my-5 text-xl font-medium">{{ props.title }} </div>

        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
          class="text-white bg-slate-500 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button">Exporter <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
  
        <!-- Dropdown menu -->
        <div id="dropdownHover"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            <li>
              <a href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                out</a>
            </li>
          </ul>
        </div>
  
  
        <div class="flex justify-end my-3 items-center space-x-2">
          <span class="text-base font-medium">Filtrer:</span>
          <input type="text" v-model="search" class=" border-gray-300 rounded-md px-3 py-1">
        </div>
  
  
  
        <el-table  :data="pagedTableData" style="width: 100%" :show-header="true" class="m-5"
        :pagination="true" :current-page="currentPage" :page-size="pageSize" 
        >
       
       <el-table-column label="N°" type="index" width="50" />
   
       <el-table-column prop="matricule" sortable label="Matricule" width="100" />
      
       <el-table-column prop="name" sortable  label="Nom & Prénom" width="150" />
       <el-table-column prop="departement" label="Département/Section/Agence" width="250" />
      
         <el-table-column align="center"  label="2021">
           <el-table-column prop="anne1.total" sortable label="Total du" width="70" />
           <el-table-column prop="anne1.joui" sortable label="Joui" width="70" />
           <el-table-column prop="anne1.reliquat" sortable label="Reliquat" width="88" />
   
         </el-table-column>
         <el-table-column align="center"  label="2022">
          <el-table-column prop="anne2.total" sortable label="Total du" width="70" />
           <el-table-column prop="anne2.joui" sortable label="Joui" width="70" />
           <el-table-column prop="anne2.reliquat" sortable label="Reliquat" width="88" />
         </el-table-column>
         <el-table-column align="center"  label="2023">
          <el-table-column prop="anne3.total" sortable label="Total du" width="70" />
           <el-table-column prop="anne3.joui" sortable label="Joui" width="70" />
           <el-table-column prop="anne3.reliquat" sortable label="Reliquat" width="88" />
         </el-table-column>
   
         <el-table-column prop="date1" sortable label="1ère date" width="65" />
       <el-table-column prop="date2" sortable label="2nd date" width="65" />
       <el-table-column prop="totalGlobal" sortable label="Total global solde" width="70" />
   
       
        
     </el-table> 
     <el-pagination background

      layout="prev, pager, next"
      :total="filterTableData.length"
      v-model:current-page="page"
      :page-size="pageSize"
      @current-change="setPage"
    >
    </el-pagination>  
  

  
    </div>
  </template>
  
  <script lang="ts"  setup>
  import { computed, reactive, ref } from 'vue';
  
  import { ElTable, ElTableColumn,ElPagination,ElTag } from 'element-plus';
  import 'element-plus/dist/index.css' 
  
  const search = ref('')


  const page = ref(1);
const pageSize = ref(10);
const setPage = (val: number) => {
  page.value = val;
};
const pagedTableData = computed(() => {
  return filterTableData.value.slice(
    pageSize.value * page.value - pageSize.value,
    pageSize.value * page.value
  );
});
  const filterTableData = computed(() =>
   props.datatable.filter(
      (data) =>
        !search.value ||
        data.name.toLowerCase().includes(search.value.toLowerCase())
    )
  )
  
  const   currentPage=1
  
  const props = defineProps({
  datatable: {
    type: Array as () => data[],
    required: true
  },

title:{
  type:String,
  required:false,
  default:''
}})

  interface data {
 
      matricule: String;
      name: String;
      departement: String;
      date1:String;
      date2:String;
      totalGlobal: String;
      anne1: {
        total:String;
        joui:String;
        reliquat:String

      },
      anne2: {
        total:String;
        joui:String;
        reliquat:String

      },
        anne3: {
        total:String;
        joui:String;
        reliquat:String;

      }

   
    }
  

  
  
  </script>
  
  <style lang="scss" scoped></style>