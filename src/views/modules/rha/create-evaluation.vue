<template>
       <RouterLink
        @click.prevent="$router.back()"
        to=""
        class="flex items-center mb- gap-2 p-2 mb-9 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
      >
<v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
        <span class="text-sm font-medium"> Retour </span>
      </RouterLink>




      
    <div class="mx-auto xl:container">
       <div class="flex py-2 border-b top-line">
         <span class="text-base font-normal ">Créer une Formation</span>
       </div>
    
   

       <TabsRoot class="flex flex-col w-full sm:w-[300px]">
    <TabsList class="flex-grow shrink-0 flex border-b border-mauveradix-vue 6" aria-label="Enregistrement d'une évaluation">
      <TabsTrigger
        class="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-grass11 data-[state=active]:text-grass11 data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
        value="tab1"
      >
        Personnel administratif 
      </TabsTrigger>
      <TabsTrigger
        class="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-grass11 data-[state=active]:text-grass11 data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
        value="tab2"
      >
        Personnel d'exploitaton
      </TabsTrigger>
    </TabsList>
    <TabsContent
      class="grow p-5 bg-white rounded-b-md outline-none"
      value="tab1"
    >
    content 1
    </TabsContent>
    <TabsContent
      class="grow p-5 bg-white rounded-b-md outline-none"
      value="tab2"
    >
    content 2
    </TabsContent>
  </TabsRoot>




       
       <div class="bg-white shadow-md rounded-lg mt-3 p-6">
         <form>
            <div class="grid grid-cols-2 gap-6">

                <selecteImput :label="'Direction'" :parameters='parameters'  :isRequired="true"/>
                <selecteImput :label="'Service'" :parameters='parameters'  :isRequired="true"/>
                <imput :label="'Nom et Prénoms'"  :isRequired="true" class="flex-grow" />

                <imput :label="'Thème de formation'"  :isRequired="true" class="flex-grow" />

                <imput :label="'Lieu de formation'"  :isRequired="true" class="flex-grow" />

                <imput :label="'Date de début'"  :isRequired="true" :type="'date'" class="flex-grow" />
                <imput :label="'Date de fin'"  :isRequired="true" :type="'date'" class="flex-grow" />

        </div>
 
           <button type="submit" class="bg-blue-500 mt-4 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">Valider</button>
         </form>
       </div>
       </div>
   </template> 
   
   <script setup lang="ts">

   import  imput from '@/components/inputs/unstim-text.vue'
   import  selecteImput from '@/components/inputs/unstim-select.vue'
   import { icons } from '@/assets/icons/oh-vue-icons'
   import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'

   const parameters={name:'1', direct:'2'}

   
   </script>
   
   <style scoped>
   
   </style>       