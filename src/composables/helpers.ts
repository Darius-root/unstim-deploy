// Une fonction qui retourne sur la route précedente avec router

import { useRouter } from 'vue-router'

export function usePreviousRoute() {
  //const route = useRoute()
  const router = useRouter()
  return () => router.go(-1)
}
