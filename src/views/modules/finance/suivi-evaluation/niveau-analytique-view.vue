<template>
  <RouterLink
    @click.prevent="$router.back()"
    to=""
    class="flex items-center mt-2 gap-2 p-2 border rounded shadow text-unstim-primary border-unstim-primary w-fit hover:bg-opacity-60"
  >
    <v-icon :name="icons.ChevronUp" class="-rotate-90" scale="1.1" />
    <span class="text-sm font-medium"> Retour </span>
  </RouterLink>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-base font-medium"> Niveau analytique</span>
    </div>

    <div class="max-w-full p-5 mt-5 border row">
      <table class="table mt-3 w-full">
        <tbody>
          <tr>
            <th class="py-2 text-left font-medium border-b">Id :</th>
            <td class="border-b">xxxxxxxx</td>
          </tr>
          <tr>
            <th class="py-2 text-left font-medium border-b">Code :</th>
            <td class="border-b">xxxxxxxx</td>
          </tr>
          <tr>
            <th class="py-2 text-left font-medium border-b">Libelle :</th>
            <td class="border-b">xxxxxxxx</td>
          </tr>
          <tr>
            <th class="py-2 text-left font-medium border-b">Parent :</th>
            <td class="border-b">xxxxxxxx</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex space-x-8 m-6">
      <RouterLink
        to=""
        class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-green-600 hover:opacity-50"
      >
        <v-icon :name="icons.EditIcon" scale="1.0" /> Modifier
      </RouterLink>

      <RouterLink
        to=""
        class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-red-500 hover:opacity-50"
      >
        <v-icon :name="icons.DeleteIcon" scale="1.0" /> Supprimer
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { icons } from '@/assets/icons/oh-vue-icons'

const searchValue = ref('')
</script>

<style lang="scss" scoped>
.AccordionChevron {
  transition: transform 300ms;
}
.AccordionTrigger[data-state='open'] > .AccordionChevron {
  transform: rotate(40deg);
}
</style>
