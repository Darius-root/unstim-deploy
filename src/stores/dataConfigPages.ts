import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useDataConfigPages = defineStore('dataConfigPages', () => {
    const datapages = reactive([
        {
            id: 'diplomes',
            data: [
                {

                    title: 'Diplome',

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
                    },

                    buttons: [{ title: 'Ajouter un diplome', color: '#2b9eff', to: '' },],
                }],




        },
        {
            id: 'typeprets',
            data: [
                {
                    title: 'Type de prêt',
                    
                    headers: [{ text: 'Nom', sortable: true, value: 'nom' },
                    { text: 'Rubrique', sortable: true, value: 'rub' },
                    { text: 'Code comptable', sortable: true, value: 'codeComptable' },
                    { text: 'Actions', sortable: true, value: 'action' },],
                    items: [{
                        nom: 'John',
                        rub: 'xxxxx',
                        codeComptable: 'xxxxx',
                        action: '',
                    },

                    ], action: {
                        edit: true,
                        update: true,
                        delete: true
                    },
                    buttons: [{ title: 'Ajouter un type de prêt', color: '#2b9eff', to: '' },],

                }],




        },
        {
            id: 'distinction',
            data: [
                {

                    title: 'Distinction',
                    

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
                    , buttons: [{ title: 'Ajouter une distinction', color: '#2b9eff', to: '' },],

                }],




        },
        {
            id: 'direction',
            data: [
                {

                    title: 'Direction',
                    

                    headers: [{ text: 'Nom', sortable: true, value: 'nom' },
                    { text: 'Abréciation', sortable: true, value: 'abreciation' },
                    { text: 'Affiliation', sortable: true, value: 'affiliation' },
                    { text: 'Action', sortable: true, value: 'action' },],
                    items: [{
                        nom: 'Direction de l\'Administration et des Finances',
                        abreciation: 'DAF',
                        affiliation: '25',
                        action: '',
                    },

                    ], action: {
                        edit: true,
                        update: true,
                        delete: true
                    }
                    , buttons: [{ title: 'Ajouter une direction', color: '#2b9eff', to: '' },],

                }],

        },
        {
            id: 'departement',
            data: [
                {

                    title: 'Departement',
                    

                    headers: [{ text: 'Nom du département', sortable: true, value: 'nom' },
                    { text: 'Abréciation', sortable: true, value: 'abreciation' },
                    { text: 'Nom de la direction', sortable: true, value: 'direction' },
                    { text: 'Action', sortable: true, value: 'action' },],
                    items: [{
                        nom: 'Direction de l\'Administration et des Finances',
                        abreciation: 'DAF',
                        direction: '	Direction Générale',
                        action: '',
                    },

                    ], action: {
                        edit: true,
                        update: true,
                        delete: true
                    }
                    , buttons: [{ title: 'Ajouter un département', color: '#2b9eff', to: '' },],

                }],




        },
        {
            id: 'delegation',
            data: [
                {

                    title: 'Délegation',
                    

                    headers: [{ text: 'Nom de la délégation', sortable: true, value: 'nom' },
                    { text: 'Abréciation', sortable: true, value: 'abreciation' },
                    { text: 'Couverture', sortable: true, value: 'direction' },
                    { text: 'Action', sortable: true, value: 'action' },],
                    items: [{
                        nom: 'Délégation Régionale Atlantique-Littoral	',
                        abreciation: 'DR/AL',
                        direction: '	ATLANTIQUE LITTORAL',
                        action: '',
                    },

                    ], action: {
                        edit: true,
                        update: true,
                        delete: true
                    }
                    , buttons: [{ title: 'Ajouter une délégation', color: '#2b9eff', to: '' },],

                }],




        },
        {
            id: 'section',
            data: [
                {

                    title: 'Section',
                    

                    headers: [{ text: 'Nom de la section', sortable: true, value: 'nom' },
                    { text: 'Abréciation', sortable: true, value: 'abreciation' },
                    { text: 'Nom de departement', sortable: true, value: 'departement' },
                    { text: 'Action', sortable: true, value: 'action' },],
                    items: [{
                        nom: 'Section Régionale Atlantique-Littoral	',
                        abreciation: 'DR/AL',
                        departement: '	Département des Affaires Générales',
                        action: '',
                    },

                    ], action: {
                        edit: true,
                        update: true,
                        delete: true
                    }
                    , buttons: [{ title: 'Ajouter une section', color: '#2b9eff', to: '' },],

                }],




        },
        {
            id: 'agence',
            data: [
                {

                    title: 'Agence',
                    

                    headers: [{ text: 'Nom de l\'agence', sortable: true, value: 'nom' },
                    { text: 'Abréciation', sortable: true, value: 'abreciation' },
                    { text: 'Délégation', sortable: true, value: 'delegation' },
                    { text: 'Action', sortable: true, value: 'action' },],
                    items: [{
                        nom: 'Section Régionale Atlantique-Littoral	',
                        abreciation: 'DR/AL',
                        delegation: '		Délégation Régionale Atacora-Donga',
                        action: '',
                    },

                    ], action: {
                        edit: true,
                        update: true,
                        delete: false
                    }
                    , buttons: [{ title: 'Ajouter une agence', color: '#2b9eff', to: '' },],

                }],




        },
        {
            id: 'typeposte',
            data: [
                {

                    title: 'Type de poste',
                    

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
                    , buttons: [{ title: 'Ajouter un poste', color: '#2b9eff', to: '' },],

                }],




        },
        {
            id: 'ficheposte',
            data: [
                {

                    title: 'Fiches de poste',
                    

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
                    , buttons: [{ title: 'Ajouter une fiche de poste', color: '#2b9eff', to: '' },],

                }],




        },
        {
            id: 'categorieagent',
            data: [
                {

                    title: 'Categorie',
                    

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
                    , buttons: [{ title: 'Ajouter une categorie', color: '#2b9eff', to: '' },],

                }],




        },
        {
            id: 'typeconge',
            data: [
                {

                    title: 'Type de congé / Permission',
                    

                    headers: [{ text: 'Libellé', sortable: true, value: 'nom' },
                    { text: 'Nombre de jour (min)', sortable: true, value: 'min' },
                    { text: 'Déductible des congés', sortable: true, value: 'deduc' },
                    { text: 'Déductible des prime', sortable: true, value: 'prime' },

                    { text: 'Action', sortable: true, value: 'action' },],
                    items: [{
                        nom: 'Section Régionale Atlantique-Littoral	',
                        min: 'DR/AL',
                        deduc: '	Activer',
                        prime: '	Activer',
                        action: '',
                    },



                    ], action: {
                        edit: true,
                        update: true,
                        delete: false
                    }, buttons: [{ title: 'Ajouter un congé', color: '#2b9eff', to: '' },],
                }],




        },
        {
            id: 'typecessation',
            data: [
                {

                    title: 'Contrats',
                    

                    headers: [
                        { text: 'Nom de la  cession', sortable: true, value: 'nom' },

                        { text: 'Action', sortable: true, value: 'action' },],
                    items: [{
                        nom: 'Changement de Contrat',

                        action: '',
                    },

                    ], action: {
                        edit: true,
                        update: true,
                        delete: true
                    }
                    , buttons: [{ title: 'Ajouter un contrat', color: '#2b9eff', to: '' },],

                }],




        },
        {
            id: 'banque',
            data: [
                {

                    title: 'Listes des Banques ',
                    

                    headers: [{ text: 'Intitulé', sortable: true, value: 'nom' },
                    { text: 'Abreviation', sortable: true, value: 'min' },
                    { text: 'Numéro de compte', sortable: true, value: 'deduc' },
                    { text: 'Domiciliation', sortable: true, value: 'prime' },

                    { text: 'Action', sortable: true, value: 'action' },],
                    items: [{
                        nom: 'Compte Chèque Postal		',
                        min: 'CCP',
                        deduc: '	',
                        prime: '	',
                        action: '',
                    },

                    ], action: {
                        edit: true,
                        update: true,
                        delete: true
                    }
                    , buttons: [{ title: 'Ajouter une banque', color: '#2b9eff', to: '' },],

                }],




        },
        {
            id: 'autreparam',
            data: [
                {

                    title: 'Listes des paramètres',
                    

                    headers: [{ text: 'Nom du paramètre', sortable: true, value: 'nom' },
                    { text: 'Valeur', sortable: true, value: 'min' },

                    { text: 'Action', sortable: true, value: 'action' },],
                    items: [{
                        nom: 'Compte Chèque Postal		',
                        min: '21 33 19 56 / 21 33 16 32',

                        action: '',
                    },

                    ], action: {
                        edit: true,
                        update: false,
                        delete: false
                    }

                    , buttons: [{ title: 'Ajouter un paramètre', color: '#2b9eff', to: '' },],

                }],


        }
    ])

    return {
        datapages
    }
})

