<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import Multiselect from '@vueform/multiselect'

const props = defineProps({
  label: String,
  model: String,
  isRequired: Boolean,
  parameters: Object
})

const emits = defineEmits(['valueChanged'])

const modelVariable = ref(props.model)

// Cette fonction observe les changements de la variable modelVariable
//et émet un événement 'valueChanged' avec la nouvelle valeur
watch(modelVariable, (newValue) => {
  emits('valueChanged', newValue)
})

onMounted(() => {})
</script>

<template>
  <div class="flex flex-col space-y-2 input-group">
    <label for="" class="text-sm text-gray-600"
      >{{ label }} <span v-if="isRequired" class="text-red-500">*</span>
    </label>
    <Multiselect v-model="modelVariable" v-bind="parameters" />
  </div>
</template>

<style src="@/assets/css/custom-multiselect.css"></style>
