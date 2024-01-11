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
    <div class="flex py-2">
      <span class="text-xl mb-4 font-normal">Enregistrer un congé</span>
    </div>

    <TabsRoot class="flex flex-col w-full">
      <TabsList
        class="flex-grow flex border-b-5 space-x-5"
        aria-label="Enregistrement d'une évaluation"
      >
        <TabsTrigger
          class="bg-gray-100 text-neutral-700 px-5 h-[45px] flex-1 flex items-center justify-center text-[18px] leading-none select-none rounded-t-md hover:bg-slate-100 data-[state=active]:bg-white data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_0.5px] data-[state=active]:focus:shadow-black outline-none cursor-default bg-active"
          value="tab1"
        >
          Enregistrer un conger
        </TabsTrigger>
        <TabsTrigger
          class="bg-gray-100 sm:w-[550px] text-neutral-700 px-5 h-[45px] flex-1 flex items-center justify-center text-[18px] leading-none select-none rounded-t-md hover:bg-slate-100 data-[state=active]:bg-white data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_0.5px] data-[state=active]:focus:shadow-black outline-none cursor-default bg-active"
          value="tab2"
        >
          Point des 3 dernières années
        </TabsTrigger>
      </TabsList>
      <TabsContent class="grow p-5 bg-white rounded-b-md outline-none" value="tab1">
        <div class="flex py-2 border-b top-line">
          <span class="text-base font-normal">Créer une attente</span>
        </div>

        <div class="bg-white shadow-md rounded-lg mt-3 p-6">
          <form>
            <div class="grid grid-cols-2 gap-6">
              <selecteImput
                :label="'Nom de l\'employé'"
                :parameters="parameters"
                :isRequired="true"
              />
              <selecteImput :label="'Type'" :parameters="parameters" :isRequired="true" />
              <imput
                :label="'Nombre de jours '"
                :isRequired="true"
                :type="'number'"
                class="flex-grow"
              />
              <selecteImput :label="'Intérimaire'" :parameters="parameters" :isRequired="true" />
              <imput
                :label="'Date de la saisir'"
                :isRequired="true"
                :type="'date'"
                class="flex-grow"
              />
              <imput :label="'Date début'" :isRequired="true" :type="'date'" class="flex-grow" />
              <imput :label="'Détails'" :isRequired="true" :type="'textearea'" class="flex-grow" />
            </div>

            <button
              type="submit"
              class="bg-blue-500 mt-4 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Valider
            </button>
          </form>
        </div>
      </TabsContent>
      <TabsContent class="grow p-5 bg-white rounded-b-md outline-none justify-center" value="tab2">
        Aucun elément disponibe
      </TabsContent>
    </TabsRoot>
  </div>
</template>

<script setup lang="ts">
import imput from '@/components/inputs/unstim-text.vue'
import selecteImput from '@/components/inputs/unstim-select.vue'
import { icons } from '@/assets/icons/oh-vue-icons'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import { reactive } from 'vue'

const parameters = reactive({
  options: ['Darius', 'ZKP', 'JOHN Doe'],
  placeholder: '--Choississez un employe--',
  searchable: true
})
</script>

<style scoped>
table,
tbody,
td,
th {
  border-style: solid;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(92, 91, 91);
}
</style>
