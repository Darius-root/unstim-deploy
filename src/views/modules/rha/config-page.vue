<template>
    <TemplatePagesConfig :headers="currentPage[0].headers" :action="currentPage[0].action" :items="currentPage[0].items"
        :route-create="currentPage[0].routecreate" :title="currentPage[0].title" />
</template>


 



<script setup lang="ts">
import TemplatePagesConfig from "@/components/templatePagesConfig.vue";

import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
const route = useRoute()
const currentPage = ref()
const datapage = ref([
    {
        id: 'diplomes',
        data: [
            {

                title: 'Diplome',
                routecreate: 'create-diplome',

                headers: [{ text: 'Nom', sortable: true, value: 'nom' },

                { text: 'Actions', sortable: true, value: 'action', width: "200" }],
                items: [{
                    nom: 'xxxxx',

                    action: ''
                },

                ], action: {
                    edit: true,
                    update: true,
                    delete: true
                }
            }],




    },
    {
        id: 'typeprets',
        data: [
            {
                title: 'Type de prêt',
                routecreate: '',
                headers: [{ text: 'Nom', sortable: true, value: 'nom' },
                { text: 'Rubrique', sortable: true, value: 'nom' },
                { text: 'Code comptable', sortable: true, value: 'codeComptable' },
                { text: 'Actions', sortable: true, value: 'action' },],
                items: [{
                    nom: 'John',
                    codeComptable: 'xxxxx',
                    action: '',
                },

                ], action: {
                    edit: true,
                    update: true,
                    delete: true
                }
            }],




    },
    {
        id: 'distinction',
        data: [
            {

                title: 'Distinction',
                routecreate: '',

                headers: [{ text: 'Nom', sortable: true, value: 'nom' },
                { text: 'Nombre d\'années', sortable: true, value: 'nombreAnnee' },
                { text: 'Actions', sortable: true, value: 'action' },],
                items: [{
                    nom: 'Prime d\'attachement',
                    nombreAnnee: '25',
                    action: '',
                },

                ], action: {
                    edit: true,
                    update: true,
                    delete: true
                }
            }],




    },
    {
        id: 'direction',
        data: [
            {

                title: 'Direction',
                routecreate: '',

                headers: [{ text: 'Nom', sortable: true, value: 'nom' },
                { text: 'Abréciation', sortable: true, value: 'abreciation' },
                { text: 'Affiliation', sortable: true, value: 'affiliation' },
                { text: 'Action', sortable: true, value: 'action' },],
                items: [{
                    nom: 'Direction de l\'Administration et des Finances',
                    abreciation: 'DAF',
                    affiliation:'25',
                    action: '',
                },

                ], action: {
                    edit: true,
                    update: true,
                    delete: true
                }
            }],

    },
    {
        id: 'departement',
        data: [
            {

                title: 'Departement',
                routecreate: '',

                headers: [{ text: 'Nom du département', sortable: true, value: 'nom' },
                { text: 'Abréciation', sortable: true, value: 'abreciation' },
                { text: 'Nom de la direction', sortable: true, value: 'direction' },
                { text: 'Action', sortable: true, value: 'action' },],
                items: [{
                    nom: 'Direction de l\'Administration et des Finances',
                    abreciation: 'DAF',
                    direction:'	Direction Générale',
                    action: '',
                },

                ], action: {
                    edit: true,
                    update: true,
                    delete: true
                }
            }],




    },
    {
        id: 'delegation',
        data: [
            {

                title: 'Délegation',
                routecreate: '',

                headers: [{ text: 'Nom de la délégation', sortable: true, value: 'nom' },
                { text: 'Abréciation', sortable: true, value: 'abreciation' },
                { text: 'Couverture', sortable: true, value: 'direction' },
                { text: 'Action', sortable: true, value: 'action' },],
                items: [{
                    nom: 'Délégation Régionale Atlantique-Littoral	',
                    abreciation: 'DR/AL',
                    direction:'	ATLANTIQUE LITTORAL',
                    action: '',
                },

                ], action: {
                    edit: true,
                    update: true,
                    delete: true
                }
            }],




    },
    {
        id: 'section',
        data: [
            {

                title: 'Section',
                routecreate: '',

                headers: [{ text: 'Nom de la section', sortable: true, value: 'nom' },
                { text: 'Abréciation', sortable: true, value: 'abreciation' },
                { text: 'Nom de departement', sortable: true, value: 'departement' },
                { text: 'Action', sortable: true, value: 'action' },],
                items: [{
                    nom: 'Section Régionale Atlantique-Littoral	',
                    abreciation: 'DR/AL',
                    departement:'	Département des Affaires Générales',
                    action: '',
                },

                ], action: {
                    edit: true,
                    update: true,
                    delete: true
                }
            }],




    },
    {
        id: 'agence',
        data: [
            {

                title: 'Agence',
                routecreate: '',

                headers: [{ text: 'Nom de l\'agence', sortable: true, value: 'nom' },
                { text: 'Abréciation', sortable: true, value: 'abreciation' },
                { text: 'Délégation', sortable: true, value: 'delegation' },
                { text: 'Action', sortable: true, value: 'action' },],
                items: [{
                    nom: 'Section Régionale Atlantique-Littoral	',
                    abreciation: 'DR/AL',
                    delegation:'		Délégation Régionale Atacora-Donga',
                    action: '',
                },

                ], action: {
                    edit: true,
                    update: true,
                    delete: false
                }
            }],




    },
    {
        id: 'typeposte',
        data: [
            {

                title: 'Type de poste',
                routecreate: '',

                headers: [{ text: 'Nom du poste', sortable: true, value: 'nom' },
                { text: 'Abréciation', sortable: true, value: 'abreciation' },
                { text: 'Action', sortable: true, value: 'action' },],
                items: [{
                    nom: 'Section Régionale Atlantique-Littoral	',
                    abreciation: 'DR/AL',
                    action: '',
                },

                ], action: {
                    edit: true,
                    update: true,
                    delete: true
                }
            }],




    },
    {
        id: 'ficheposte',
        data: [
            {

                title: 'Fiches de poste',
                routecreate: '',

                headers: [{ text: 'Nom du poste', sortable: true, value: 'nom' },
                { text: 'Abréciation', sortable: true, value: 'abreciation' },
                { text: 'Poste clé', sortable: true, value: 'postcle' },
                { text: 'Description', sortable: true, value: 'description' },
                { text: 'Action', sortable: true, value: 'action' },],
                items: [{
                    nom: 'Section Régionale Atlantique-Littoral	',
                    abreciation: 'DR/AL',
                    postclecle: 'DR/AL',
                    description: '.....',

                    action: '',
                },

                ], action: {
                    edit: true,
                    update: true,
                    delete: true
                }
            }],




    },
    {
        id: 'categorieagent',
        data: [
            {

                title: 'Categorie',
                routecreate: '',

                headers: [{ text: 'Nom categorie', sortable: true, value: 'nom' },
                { text: 'Nombre argent', sortable: true, value: 'nbr' },
               
                { text: 'Action', sortable: true, value: 'action' },],
                items: [{
                    nom: ' Régionale',
                    nbr: '50',
                    action: '',
                },

                ], action: {
                    edit: false,
                    update: true,
                    delete: false
                }
            }],




    },
    {
        id: 'typeconge',
        data: [
            {

                title: 'Type de congé / Permission',
                routecreate: '',

                headers: [{ text: 'Libellé', sortable: true, value: 'nom' },
                { text: 'Nombre de jour (min)', sortable: true, value: 'min' },
                { text: 'Déductible des congés', sortable: true, value: 'deduc' },
                { text: 'Déductible des prime', sortable: true, value: 'prime' },

                { text: 'Action', sortable: true, value: 'action' },],
                items: [{
                    nom: 'Section Régionale Atlantique-Littoral	',
                    min: 'DR/AL',
                    deduc:'	Activer',
                    prime:'	Activer',
                    action: '',
                },

                ], action: {
                    edit: true,
                    update: true,
                    delete: false
                }
            }],




    },


]);
watch(
    () => route.params.id,
    async (newId) => {
        const page = datapage.value.find((item) => item.id === newId);
        if (page) {
            currentPage.value = page.data;
        }
    },
    { immediate: true }
);

console.log(currentPage.value)
</script>
<style scoped></style>



