<template>
  <div>
    <AlertDialogRoot class="">
      <AlertDialogTrigger
        :style="{ backgroundColor: props.colorBtn }"
        class="flex items-center gap-2 p-2 text-white rounded shadow hover:bg-opacity-60"
      >
        <v-icon :name="$props.icons" scale="1.1" />

        <span class="text-sm font-medium">{{ props.titleBtn }} </span>
      </AlertDialogTrigger>

      <AlertDialogPortal>
        <AlertDialogOverlay
          class="bg-black/50 data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayClose fixed inset-0 z-30"
        />
        <AlertDialogContent
          class="z-[100] text-[15px] data-[state=open]:animate-contentShow data-[state=closed]:animate-contentClose fixed top-[30%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
        >
          <AlertDialogTitle
            class="px-5 py-3 border-b border-gray-200 m-0 text-[17px] font-semibold"
          >
            {{ props.titleModal }}
          </AlertDialogTitle>

          <AlertDialogDescription class="text-[15px] p-5 leading-normal">
            <div class="grid grid-cols-1 gap-4">
              <div class="flex flex-col space-y-2 input-group">
                <slot></slot>
              </div>
            </div>
          </AlertDialogDescription>

          <div class="flex justify-end border-t border-gray-200 px-5 py-3 gap-[25px]">
            <AlertDialogCancel
              class="bg-slate-400 shadow hover:bg-slate-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold"
            >
              Annuler
            </AlertDialogCancel>
            <AlertDialogAction
              class="text-red11 bg-red-400 shadow hover:bg-red-500 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold"
            >
              Enregistrer
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialogRoot>
  </div>
</template>

<script setup lang="ts">
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger
} from 'radix-vue'

const props = defineProps({
  titleModal: {
    type: String,
    required: true
  },
  icons: {
    type: String,
    required: true
  },
  titleBtn: {
    type: String,
    required: true
  },

  colorBtn: {
    type: String,
    default: '#2b9eff'
  }
})
</script>

<style scoped></style>
