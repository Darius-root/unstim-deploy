<template>
    <div class="mx-auto xl:container">
        <RouterLink @click.prevent="$router.back()" to=""
            class="flex items-center my-2 gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60">
            <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
            <span class="text-sm font-medium"> Retour </span>
        </RouterLink>



        <div class="flex py-2 border-b top-line">
            <span class="text-base font-normal">Entrée de stock avec un bon de commande</span>
        </div>

        <div class="bg-white shadow-md rounded-lg mt-3 p-6">
            <form>
                <div class="grid grid-cols-2 gap-6">
                    <imput :label="'Numéro bon de commande'" :isRequired="true" class="flex-grow" />
                    <imput :label="'Numéro bon de commande .pdf'" :isRequired="true" :type="'file'" class="flex-grow" />
                    <imput :label="'Date'" :type="'date'" :isRequired="true" class="flex-grow" />
                    <selecteImput :label="'Fournisseur'" :parameters="parameters" :isRequired="true" />
                    <selecteImput :label="'Entrepôt'" :parameters="parameters" :isRequired="true" />
                    <imput :label="'Description'" :isRequired="true" class="flex-grow" />


                    <button type="button" @click="addInput"
                        class="bg-green-500 p-2 w-48  text-white font-normal text-xs rounded-md hover:opacity-50">
                        Ajouter un article
                    </button>
                    <br />

                    <template v-for="(input, index) in inputs" :key="index">
                        <div class=" grid grid-cols-3 gap-10  ">
                                <selecteImput :label="'Article'" :parameters="parameters" :isRequired="true" />

                            <imput :label="'Quantité'" :type="'number'" :isRequired="true" class="flex-grow" />
                            <imput :label="'Prix unitaire'" :type="'number'" :isRequired="true" class="flex-grow" />
                        </div>



                        <button
                            class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-600 hover:bg-red-400"
                            v-if="inputs.length > 0" @click="removeInput(index)

                                ">
                            <v-icon :name="icons.DeleteIcon" scale="1.0" />
                        </button>
                    </template>


                </div>


                <button type="submit"
                    class="bg-blue-500 mt-4 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">
                    Enregistrer
                </button>
            </form>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { icons } from '@/assets/icons/oh-vue-icons'
import selecteImput from '@/components/inputs/unstim-select.vue'
import imput from '@/components/inputs/unstim-text.vue'
import { reactive, ref } from 'vue'
const parameters = reactive({
    options: ['xxx', 'xxxxxxx',],
    placeholder: '--Choississez un xxx--',
    searchable: true,
/*   mode: 'tags'
 */})








const inputs = ref([{ value: '' }])

const addInput = () => {
    inputs.value.push({ value: '' })
}

const removeInput = (index: number) => {
    if (inputs.value.length > 0) {
        inputs.value.splice(index, 1)
    }
}



</script>
  
<style scoped></style>
  