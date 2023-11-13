<template>
    <TemplatePagesConfig 
    :headers="currentPage[0].headers"
      :action="currentPage[0].action" 
     :items="currentPage[0].items"
        :title="currentPage[0].title"
       :button="currentPage[0].buttons"
        />
</template>


 



<script setup lang="ts">
import TemplatePagesConfig from "@/components/templatePagesTab.vue";
import { useDataConfigPages } from '@/stores/dataConfigPages'

import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import router from "@/router";
const route = useRoute()
const currentPage = ref()
const datapage = ref(useDataConfigPages().datapages)
watch(
    () => route.params.id,
    async (newId) => {
        const page = datapage.value.find((item) => item.id === newId);
        if (page) {
            currentPage.value = page.data;
        }
        else{

            router.push('/not-found')
        }
    },
    { immediate: true }
);

console.log(currentPage.value)
</script>
<style scoped></style>



