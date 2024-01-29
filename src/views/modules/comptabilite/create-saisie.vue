<template>
    <div class="mx-auto xl:container">
        <RouterLink @click.prevent="$router.back()" to=""
            class="flex items-center my-2 gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
            <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
            <span class="text-sm font-medium"> Retour </span>
        </RouterLink>



        <div class="flex py-2 border-b top-line justify-between">
            <span class="text-base font-normal">Ajouter une saisie</span>
             <el-form-item label="Activer les imputations budgétaires" prop="delivery">
      <el-switch v-model="imputation" />
    </el-form-item>
        </div>
       
        <div class="bg-white shadow-md rounded-lg my-3 p-6">


            <template v-for="(input, index) in inputs" :key="index">


                <el-form :status-icon="true" label-position="top" require-asterisk-position="right"
                    class="demo-form-inline gap-4 mb-5  grid grid-cols-3 -">
                    <el-form-item label="Sélectionnez un journal: ">
                        <el-select placeholder="Ajouter un nouveau journal" v-model="value">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                    </el-form-item>

                    <el-form-item label="Référence" prop="pass">
                        <el-input v-model="famille" type="text" autocomplete="on" />
                    </el-form-item> <el-form-item label="Description" prop="pass">
                        <el-input v-model="famille" type="text" autocomplete="on" />
                    </el-form-item> <el-form-item label="Date" prop="pass">
                        
                        <el-date-picker
            v-model="date"
            type="date"
            label="Pick a date"
            placeholder="Pick a date"
            style="width: 100%"
          />                    </el-form-item> <el-form-item label="Code de saisie comptable" prop="pass">
                        <el-input v-model="famille" type="text" autocomplete="on" />
                    </el-form-item>

                    <el-form-item label="Monnaie : ">
                        <el-select placeholder="Ajouter un nouveau journal" v-model="value">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                    </el-form-item>


                    <el-upload ref="uploadRef" class="upload-demo"
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :auto-upload="false">
                        <template #trigger>
                            <el-button type=""> Choisissez une pièce comptable (file)</el-button>
                        </template>
                        <template #tip>
                            <div class="el-upload__tip">
                                jpg/png files une taille max 500kb
                            </div>
                        </template>
                    </el-upload>
                    <el-button v-if="inputs.length > 1" @click="removeInput(index)" type="danger" circle> <v-icon
                            :name="icons.DeleteIcon" scale="1.0" />
                    </el-button>

                </el-form>



            </template>
            <el-button type="warning" @click="dialogVisible = true">Ajouter un compte</el-button>
            <el-button type="danger" @click="addInput"> Ajouter une ligne</el-button>

            <div class="flex gap-3 mt-8">
                <el-button type="primary" size="large">

                    <template #loading>
                        <div class="custom-loading pr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24">true
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
                                    <path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3"
                                        d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0" />
                                    </path>
                                    <path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />
                                        <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite"
                                            type="rotate" values="0 12 12;360 12 12" />
                                    </path>
                                </g>
                            </svg>
                        </div>
                    </template>


                  
                    <span class="text-white text-sm">Enrégistrer</span>
                </el-button>


            </div>


            <el-dialog v-model="dialogVisible" title="Ajout d'un compte" width="30%">
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

        </div>






    </div>
</template>
      
<script setup lang="ts">
import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue';

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },

]
const value = ref('')
const imputation = ref(true)
const date = ref('')
const famille = ref('')

import type { UploadInstance } from 'element-plus'

const uploadRef = ref<UploadInstance>()

const inputs = ref([{ value: '' }])

const addInput = () => {
    inputs.value.push({ value: '' })
}

const removeInput = (index: number) => {
    if (inputs.value.length > 1) {
        inputs.value.splice(index, 1)
    }
}

const dialogVisible = ref(false)


</script>
<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}


</style>