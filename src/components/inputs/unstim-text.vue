<script lang="ts" setup>
import { onMounted, watch, ref } from 'vue'

const props = defineProps({
  label: String,
  isRequired: Boolean,
  type: {
    type: String,
    default: 'text'
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
    ></textarea>
    <input v-else :type="props.type" v-model="modelVariable" class="form-unstim" />
  </div>
</template>

<style></style>
