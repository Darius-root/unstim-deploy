<template>
    <el-table :data="tableData" :border="true" stripe style="width: 100%">
      <!-- Colonnes de la table -->
      <el-table-column sortable  v-for="column in columns" :key="column.prop" :prop="column.prop" :label="column.label" >
      </el-table-column>
      <el-table-column  fixed="right" label="Action" width="170">
        <template #default>
          <div class="flex gap-3 row justify-center items-center">
            <RouterLink to=""  @click="dialogTableVisible=true"  class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-green-600 hover:opacity-50">
              <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
            </RouterLink><RouterLink to=""  @click="dialogVisible = true" class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-yellow-600 hover:opacity-50">
              <v-icon :name="icons.EditIcon" scale="1.0" />
            </RouterLink>
            <RouterLink to="" class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-600 hover:bg-red-400">
              <v-icon :name="icons.DeleteIcon" scale="1.0" />
            </RouterLink>
          </div>
        </template>
      </el-table-column>
    </el-table>


<!--     //details compte
 -->
   <el-dialog v-model="dialogTableVisible" title="Détails du compte xx">
    <el-table :data="accountData">
      <el-table-column property="numero" label="Numero"  />
      <el-table-column property="libelle" label="Libellé"  />
    </el-table>
  </el-dialog>

  
<!--   upadate compte
 -->
  <el-dialog v-model="dialogVisible" title="Modifier un compte" width="30%">
                        <el-form :status-icon="true" label-position="top" require-asterisk-position="right"
                    class="demo-form-inline gap-4  grid grid-cols-2 ">
                   
                    <el-form-item label="Numéro" prop="pass">
                        <el-input v-model="famille" type="text" autocomplete="on" />
                    </el-form-item>
                 <el-form-item label="Libellé" prop="pass">
                        <el-input v-model="famille" type="text" autocomplete="on" />
                    </el-form-item></el-form>
                        <template #footer>
                            <span class="dialog-footer">
                                <el-button @click="dialogVisible = false">Annuler</el-button>
                                <el-button type="primary" @click="dialogVisible = false">
                                    Enrégistrer
                                </el-button>

                                
                            </span>
                        </template>
                    </el-dialog>

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
    
  ]);
  

const dialogTableVisible = ref(false)

const accountData = [
{
    numero: 'xxxxxxxxxx',
    libelle: 'xxxxxxxxx',
  },
  {
    numero: 'xxxxxxxxxx',
    libelle: 'xxxxxxxxx',
  },
 
]

const dialogVisible = ref(false)

const famille = ref('')

  </script>
  
  <style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}</style>
  