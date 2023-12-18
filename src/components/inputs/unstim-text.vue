<script lang="ts" setup>
import { onMounted, watch, ref } from 'vue'

const props = defineProps({
  label: String,
  isRequired: Boolean,
  type: {
    type: String,
    default: 'text'
  },
  status: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['valueChanged'])

const modelVariable = ref('')

// Cette fonction observe les changements de la variable modelVariable
// et émet un événement 'valueChanged' avec la nouvelle valeur

watch(modelVariable, (newValue) => {
  emits('valueChanged', newValue)
})

onMounted(() => {})
</script>

<template>
  <div class="flex flex-col space-y-2 input-group">
    <label for="" class="text-sm text-gray-600"
      >{{ props.label }}
      <span v-if="props.isRequired" class="text-red-500">*</span>
    </label>
    <textarea
      v-if="props.type == 'textearea'"
      name=""
      id=""
      class="form-unstim"
      rows="6"
    >
    
  </textarea>
 
  <input v-else-if="props.type == 'checkbox'"
  :class="{'bg-gray-100': props.status}"
  class="appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
    type="checkbox"
    value=""
    id="checkboxDefault" /> 
    



    <div  v-else-if="props.type == 'file'" class="mb-3">
  
  <input
    class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
    type="file"
    id="formFile" />
</div>
    <input v-else :type="props.type" v-model="modelVariable" :disabled="props.status" class="form-unstim"
    :class="{'bg-gray-100': props.status}"  />
  </div>

  


</template>

<style></style>
