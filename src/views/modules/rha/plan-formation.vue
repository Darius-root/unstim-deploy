<template >
   <TemplatePagesConfig :headers="data.headers" :action="data.action" :items="data.items"
         :title="data.title"  :button="data.buttons" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TemplatePagesConfig from "@/components/templatePagesTab.vue";



const data =ref( { title: 'Liste des plans de formation',
                    
                    headers: [{ text: 'Plan de formation', sortable: true, value: 'nom' },
                    { text: 'Catalogue', sortable: true, value: 'cat' },
                    { text: 'Actions', sortable: true, value: 'action' },],
                    items: [{
                        nom: 'Dev vue',
                        cat: 'xxxxx',
                        action: '',
                    },

                    ], action: {
                        edit: true,
                        update: true,
                        delete: true
                    },
                    buttons: [{ title: 'Ajouter un plan de formation', color: '#2b9eff', to: '' },
                    { title: 'Imprimer', color: 'rgb(170, 167, 4)', to: '' },],})
</script>





<style scoped>

</style>