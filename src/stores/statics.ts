import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStaticStore = defineStore('statics', () => {
  const appName = ref('Sig Unstim')

  const appCompleteName = ref('SYSTEME INTEGRE DE GESTION')

  return {
    appName,
    appCompleteName
  }
})
