<script lang="ts" setup>
import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue'

const headers = ref([
  { text: 'Echelons', value: 'echelons', fixed: true, width: 80 },
  {
    text: '1',
    sortable: true,
    value: 'action_1'
  },
  {
    text: '2',
    sortable: true,
    value: 'action_2'
  },
  {
    text: '3',
    sortable: true,
    value: 'action_3'
  },
  {
    text: '4',
    sortable: true,
    value: 'action_4'
  },
  {
    text: '5',
    sortable: true,
    value: 'action_5'
  },
  {
    text: '6',
    sortable: true,
    value: 'action_6'
  },
  {
    text: '7',
    sortable: true,
    value: 'action_7'
  },
  {
    text: '8',
    sortable: true,
    value: 'action_8'
  },
  {
    text: '9',
    sortable: true,
    value: 'action_9'
  },
  {
    text: '10',
    sortable: true,
    value: 'action_10'
  },
  {
    text: '11',
    sortable: true,
    value: 'action_11'
  },
  {
    text: '12',
    sortable: true,
    value: 'action_12'
  },
  {
    text: '13',
    sortable: true,
    value: 'action_12'
  },
  {
    text: '14',
    sortable: true,
    value: 'action_13'
  },
  {
    text: '15',
    sortable: true,
    value: 'action_14'
  },
  {
    text: '16',
    sortable: true,
    value: 'action_15'
  },
  {
    text: '17',
    sortable: true,
    value: 'action_16'
  },
  {
    text: '18',
    sortable: true,
    value: 'action_17'
  },
  {
    text: '19',
    sortable: true,
    value: 'action_18'
  },
  {
    text: '20',
    sortable: true,
    value: 'action_19'
  },
  {
    text: '21',
    sortable: true,
    value: 'action_21'
  }
])

const items = ref([
  {
    echelons: 'M6',
    action_1: '261392',
    action_2: '609463',
    action_3: '677446',
    action_4: '841664',
    action_5: '674307',
    action_6: '789923',
    action_7: '541957',
    action_8: '295779',
    action_9: '520297',
    action_10: '690088',
    action_11: '625640',
    action_12: '165664',
    action_13: '469972',
    action_14: '667894',
    action_15: '437250',
    action_16: '178882',
    action_17: '832017',
    action_18: '141177',
    action_19: '188151',
    action_20: '100067',
    action_21: '793595'
  },
  {
    echelons: 'M5',
    action_1: Math.floor(Math.random() * 1000000).toString(),
    action_2: Math.floor(Math.random() * 1000000).toString(),
    action_3: Math.floor(Math.random() * 1000000).toString(),
    action_4: Math.floor(Math.random() * 1000000).toString(),
    action_5: Math.floor(Math.random() * 1000000).toString(),
    action_6: Math.floor(Math.random() * 1000000).toString(),
    action_7: Math.floor(Math.random() * 1000000).toString(),
    action_8: Math.floor(Math.random() * 1000000).toString(),
    action_9: Math.floor(Math.random() * 1000000).toString(),
    action_10: Math.floor(Math.random() * 1000000).toString(),
    action_11: Math.floor(Math.random() * 1000000).toString(),
    action_12: Math.floor(Math.random() * 1000000).toString(),
    action_13: Math.floor(Math.random() * 1000000).toString(),
    action_14: Math.floor(Math.random() * 1000000).toString(),
    action_15: Math.floor(Math.random() * 1000000).toString(),
    action_16: Math.floor(Math.random() * 1000000).toString(),
    action_17: Math.floor(Math.random() * 1000000).toString(),
    action_18: Math.floor(Math.random() * 1000000).toString(),
    action_19: Math.floor(Math.random() * 1000000).toString(),
    action_20: Math.floor(Math.random() * 1000000).toString(),
    action_21: Math.floor(Math.random() * 1000000).toString()
  },
  {
    echelons: 'M4',
    action_1: Math.floor(Math.random() * 1000000).toString(),
    action_2: Math.floor(Math.random() * 1000000).toString(),
    action_3: Math.floor(Math.random() * 1000000).toString(),
    action_4: Math.floor(Math.random() * 1000000).toString(),
    action_5: Math.floor(Math.random() * 1000000).toString(),
    action_6: Math.floor(Math.random() * 1000000).toString(),
    action_7: Math.floor(Math.random() * 1000000).toString(),
    action_8: Math.floor(Math.random() * 1000000).toString(),
    action_9: Math.floor(Math.random() * 1000000).toString(),
    action_10: Math.floor(Math.random() * 1000000).toString(),
    action_11: Math.floor(Math.random() * 1000000).toString(),
    action_12: Math.floor(Math.random() * 1000000).toString(),
    action_13: Math.floor(Math.random() * 1000000).toString(),
    action_14: Math.floor(Math.random() * 1000000).toString(),
    action_15: Math.floor(Math.random() * 1000000).toString(),
    action_16: Math.floor(Math.random() * 1000000).toString(),
    action_17: Math.floor(Math.random() * 1000000).toString(),
    action_18: Math.floor(Math.random() * 1000000).toString(),
    action_19: Math.floor(Math.random() * 1000000).toString(),
    action_20: Math.floor(Math.random() * 1000000).toString(),
    action_21: Math.floor(Math.random() * 1000000).toString()
  },

  {
    echelons: 'E1',
    action_1: Math.floor(Math.random() * 1000000).toString(),
    action_2: Math.floor(Math.random() * 1000000).toString(),
    action_3: Math.floor(Math.random() * 1000000).toString(),
    action_4: Math.floor(Math.random() * 1000000).toString(),
    action_5: Math.floor(Math.random() * 1000000).toString(),
    action_6: Math.floor(Math.random() * 1000000).toString(),
    action_7: Math.floor(Math.random() * 1000000).toString(),
    action_8: Math.floor(Math.random() * 1000000).toString(),
    action_9: Math.floor(Math.random() * 1000000).toString(),
    action_10: Math.floor(Math.random() * 1000000).toString(),
    action_11: Math.floor(Math.random() * 1000000).toString(),
    action_12: Math.floor(Math.random() * 1000000).toString(),
    action_13: Math.floor(Math.random() * 1000000).toString(),
    action_14: Math.floor(Math.random() * 1000000).toString(),
    action_15: Math.floor(Math.random() * 1000000).toString(),
    action_16: Math.floor(Math.random() * 1000000).toString(),
    action_17: Math.floor(Math.random() * 1000000).toString(),
    action_18: Math.floor(Math.random() * 1000000).toString(),
    action_19: Math.floor(Math.random() * 1000000).toString(),
    action_20: Math.floor(Math.random() * 1000000).toString(),
    action_21: Math.floor(Math.random() * 1000000).toString()
  },
  {
    echelons: 'E2',
    action_1: Math.floor(Math.random() * 1000000).toString(),
    action_2: Math.floor(Math.random() * 1000000).toString(),
    action_3: Math.floor(Math.random() * 1000000).toString(),
    action_4: Math.floor(Math.random() * 1000000).toString(),
    action_5: Math.floor(Math.random() * 1000000).toString(),
    action_6: Math.floor(Math.random() * 1000000).toString(),
    action_7: Math.floor(Math.random() * 1000000).toString(),
    action_8: Math.floor(Math.random() * 1000000).toString(),
    action_9: Math.floor(Math.random() * 1000000).toString(),
    action_10: Math.floor(Math.random() * 1000000).toString(),
    action_11: Math.floor(Math.random() * 1000000).toString(),
    action_12: Math.floor(Math.random() * 1000000).toString(),
    action_13: Math.floor(Math.random() * 1000000).toString(),
    action_14: Math.floor(Math.random() * 1000000).toString(),
    action_15: Math.floor(Math.random() * 1000000).toString(),
    action_16: Math.floor(Math.random() * 1000000).toString(),
    action_17: Math.floor(Math.random() * 1000000).toString(),
    action_18: Math.floor(Math.random() * 1000000).toString(),
    action_19: Math.floor(Math.random() * 1000000).toString(),
    action_20: Math.floor(Math.random() * 1000000).toString(),
    action_21: Math.floor(Math.random() * 1000000).toString()
  },
  {
    echelons: 'E3',
    action_1: Math.floor(Math.random() * 1000000).toString(),
    action_2: Math.floor(Math.random() * 1000000).toString(),
    action_3: Math.floor(Math.random() * 1000000).toString(),
    action_4: Math.floor(Math.random() * 1000000).toString(),
    action_5: Math.floor(Math.random() * 1000000).toString(),
    action_6: Math.floor(Math.random() * 1000000).toString(),
    action_7: Math.floor(Math.random() * 1000000).toString(),
    action_8: Math.floor(Math.random() * 1000000).toString(),
    action_9: Math.floor(Math.random() * 1000000).toString(),
    action_10: Math.floor(Math.random() * 1000000).toString(),
    action_11: Math.floor(Math.random() * 1000000).toString(),
    action_12: Math.floor(Math.random() * 1000000).toString(),
    action_13: Math.floor(Math.random() * 1000000).toString(),
    action_14: Math.floor(Math.random() * 1000000).toString(),
    action_15: Math.floor(Math.random() * 1000000).toString(),
    action_16: Math.floor(Math.random() * 1000000).toString(),
    action_17: Math.floor(Math.random() * 1000000).toString(),
    action_18: Math.floor(Math.random() * 1000000).toString(),
    action_19: Math.floor(Math.random() * 1000000).toString(),
    action_20: Math.floor(Math.random() * 1000000).toString(),
    action_21: Math.floor(Math.random() * 1000000).toString()
  },
  {
    echelons: 'C1',
    action_1: Math.floor(Math.random() * 1000000).toString(),
    action_2: Math.floor(Math.random() * 1000000).toString(),
    action_3: Math.floor(Math.random() * 1000000).toString(),
    action_4: Math.floor(Math.random() * 1000000).toString(),
    action_5: Math.floor(Math.random() * 1000000).toString(),
    action_6: Math.floor(Math.random() * 1000000).toString(),
    action_7: Math.floor(Math.random() * 1000000).toString(),
    action_8: Math.floor(Math.random() * 1000000).toString(),
    action_9: Math.floor(Math.random() * 1000000).toString(),
    action_10: Math.floor(Math.random() * 1000000).toString(),
    action_11: Math.floor(Math.random() * 1000000).toString(),
    action_12: Math.floor(Math.random() * 1000000).toString(),
    action_13: Math.floor(Math.random() * 1000000).toString(),
    action_14: Math.floor(Math.random() * 1000000).toString(),
    action_15: Math.floor(Math.random() * 1000000).toString(),
    action_16: Math.floor(Math.random() * 1000000).toString(),
    action_17: Math.floor(Math.random() * 1000000).toString(),
    action_18: Math.floor(Math.random() * 1000000).toString(),
    action_19: Math.floor(Math.random() * 1000000).toString(),
    action_20: Math.floor(Math.random() * 1000000).toString(),
    action_21: Math.floor(Math.random() * 1000000).toString()
  },
  {
    echelons: 'C2',
    action_1: Math.floor(Math.random() * 1000000).toString(),
    action_2: Math.floor(Math.random() * 1000000).toString(),
    action_3: Math.floor(Math.random() * 1000000).toString(),
    action_4: Math.floor(Math.random() * 1000000).toString(),
    action_5: Math.floor(Math.random() * 1000000).toString(),
    action_6: Math.floor(Math.random() * 1000000).toString(),
    action_7: Math.floor(Math.random() * 1000000).toString(),
    action_8: Math.floor(Math.random() * 1000000).toString(),
    action_9: Math.floor(Math.random() * 1000000).toString(),
    action_10: Math.floor(Math.random() * 1000000).toString(),
    action_11: Math.floor(Math.random() * 1000000).toString(),
    action_12: Math.floor(Math.random() * 1000000).toString(),
    action_13: Math.floor(Math.random() * 1000000).toString(),
    action_14: Math.floor(Math.random() * 1000000).toString(),
    action_15: Math.floor(Math.random() * 1000000).toString(),
    action_16: Math.floor(Math.random() * 1000000).toString(),
    action_17: Math.floor(Math.random() * 1000000).toString(),
    action_18: Math.floor(Math.random() * 1000000).toString(),
    action_19: Math.floor(Math.random() * 1000000).toString(),
    action_20: Math.floor(Math.random() * 1000000).toString(),
    action_21: Math.floor(Math.random() * 1000000).toString()
  },
  {
    echelons: 'C3',
    action_1: Math.floor(Math.random() * 1000000).toString(),
    action_2: Math.floor(Math.random() * 1000000).toString(),
    action_3: Math.floor(Math.random() * 1000000).toString(),
    action_4: Math.floor(Math.random() * 1000000).toString(),
    action_5: Math.floor(Math.random() * 1000000).toString(),
    action_6: Math.floor(Math.random() * 1000000).toString(),
    action_7: Math.floor(Math.random() * 1000000).toString(),
    action_8: Math.floor(Math.random() * 1000000).toString(),
    action_9: Math.floor(Math.random() * 1000000).toString(),
    action_10: Math.floor(Math.random() * 1000000).toString(),
    action_11: Math.floor(Math.random() * 1000000).toString(),
    action_12: Math.floor(Math.random() * 1000000).toString(),
    action_13: Math.floor(Math.random() * 1000000).toString(),
    action_14: Math.floor(Math.random() * 1000000).toString(),
    action_15: Math.floor(Math.random() * 1000000).toString(),
    action_16: Math.floor(Math.random() * 1000000).toString(),
    action_17: Math.floor(Math.random() * 1000000).toString(),
    action_18: Math.floor(Math.random() * 1000000).toString(),
    action_19: Math.floor(Math.random() * 1000000).toString(),
    action_20: Math.floor(Math.random() * 1000000).toString(),
    action_21: Math.floor(Math.random() * 1000000).toString()
  },
  {
    echelons: 'C4',
    action_1: Math.floor(Math.random() * 1000000).toString(),
    action_2: Math.floor(Math.random() * 1000000).toString(),
    action_3: Math.floor(Math.random() * 1000000).toString(),
    action_4: Math.floor(Math.random() * 1000000).toString(),
    action_5: Math.floor(Math.random() * 1000000).toString(),
    action_6: Math.floor(Math.random() * 1000000).toString(),
    action_7: Math.floor(Math.random() * 1000000).toString(),
    action_8: Math.floor(Math.random() * 1000000).toString(),
    action_9: Math.floor(Math.random() * 1000000).toString(),
    action_10: Math.floor(Math.random() * 1000000).toString(),
    action_11: Math.floor(Math.random() * 1000000).toString(),
    action_12: Math.floor(Math.random() * 1000000).toString(),
    action_13: Math.floor(Math.random() * 1000000).toString(),
    action_14: Math.floor(Math.random() * 1000000).toString(),
    action_15: Math.floor(Math.random() * 1000000).toString(),
    action_16: Math.floor(Math.random() * 1000000).toString(),
    action_17: Math.floor(Math.random() * 1000000).toString(),
    action_18: Math.floor(Math.random() * 1000000).toString(),
    action_19: Math.floor(Math.random() * 1000000).toString(),
    action_20: Math.floor(Math.random() * 1000000).toString(),
    action_21: Math.floor(Math.random() * 1000000).toString()
  },

  {
    echelons: 'C5',
    action_1: Math.floor(Math.random() * 1000000).toString(),
    action_2: Math.floor(Math.random() * 1000000).toString(),
    action_3: Math.floor(Math.random() * 1000000).toString(),
    action_4: Math.floor(Math.random() * 1000000).toString(),
    action_5: Math.floor(Math.random() * 1000000).toString(),
    action_6: Math.floor(Math.random() * 1000000).toString(),
    action_7: Math.floor(Math.random() * 1000000).toString(),
    action_8: Math.floor(Math.random() * 1000000).toString(),
    action_9: Math.floor(Math.random() * 1000000).toString(),
    action_10: Math.floor(Math.random() * 1000000).toString(),
    action_11: Math.floor(Math.random() * 1000000).toString(),
    action_12: Math.floor(Math.random() * 1000000).toString(),
    action_13: Math.floor(Math.random() * 1000000).toString(),
    action_14: Math.floor(Math.random() * 1000000).toString(),
    action_15: Math.floor(Math.random() * 1000000).toString(),
    action_16: Math.floor(Math.random() * 1000000).toString(),
    action_17: Math.floor(Math.random() * 1000000).toString(),
    action_18: Math.floor(Math.random() * 1000000).toString(),
    action_19: Math.floor(Math.random() * 1000000).toString(),
    action_20: Math.floor(Math.random() * 1000000).toString(),
    action_21: Math.floor(Math.random() * 1000000).toString()
  },
  {
    echelons: 'C7',
    action_1: Math.floor(Math.random() * 1000000).toString(),
    action_2: Math.floor(Math.random() * 1000000).toString(),
    action_3: Math.floor(Math.random() * 1000000).toString(),
    action_4: Math.floor(Math.random() * 1000000).toString(),
    action_5: Math.floor(Math.random() * 1000000).toString(),
    action_6: Math.floor(Math.random() * 1000000).toString(),
    action_7: Math.floor(Math.random() * 1000000).toString(),
    action_8: Math.floor(Math.random() * 1000000).toString(),
    action_9: Math.floor(Math.random() * 1000000).toString(),
    action_10: Math.floor(Math.random() * 1000000).toString(),
    action_11: Math.floor(Math.random() * 1000000).toString(),
    action_12: Math.floor(Math.random() * 1000000).toString(),
    action_13: Math.floor(Math.random() * 1000000).toString(),
    action_14: Math.floor(Math.random() * 1000000).toString(),
    action_15: Math.floor(Math.random() * 1000000).toString(),
    action_16: Math.floor(Math.random() * 1000000).toString(),
    action_17: Math.floor(Math.random() * 1000000).toString(),
    action_18: Math.floor(Math.random() * 1000000).toString(),
    action_19: Math.floor(Math.random() * 1000000).toString(),
    action_20: Math.floor(Math.random() * 1000000).toString(),
    action_21: Math.floor(Math.random() * 1000000).toString()
  }
])
</script>

<template>
  <div class="mx-auto xl:container">
    <div class="flex py-2 border-b top-line">
      <span class="text-lg font-medium"> Grille indiciaire des salaires </span>
    </div>

    <div class="w-full mt-5 border border-gray-300 bg-unstim-light card">
      <div class="card-content">
        <easy-data-table
          alternating
          hide-footer
          border-cell
          :headers="headers"
          class="text-lg"
          theme-color="#2f9fff"
          :items="items"
        >
          <template #item-action="">
            <div class="flex gap-3">
              <RouterLink
                :to="{ name: 'permissions-roles' }"
                class="flex items-center gap-2 p-2 my-2 text-white rounded shadow-md w-fit bg-unstim-info hover:bg-unstim-primary"
              >
                <v-icon :name="icons.FormPWShowIcon" scale="1.0" />
              </RouterLink>

              <RouterLink
                :to="{ name: 'edit-role' }"
                class="flex items-center gap-2 p-2 my-2 text-white bg-red-400 rounded shadow-md w-fit hover:bg-red-500"
              >
                <v-icon :name="icons.EditIcon" scale="1.0" />
              </RouterLink>

              <RouterLink
                to=""
                class="flex items-center gap-2 p-2 my-2 text-white bg-black/75 rounded shadow-md w-fit hover:bg-black/75"
              >
                <v-icon :name="icons.DeleteIcon" scale="1.0" />
              </RouterLink>
            </div>
          </template>
        </easy-data-table>
      </div>
    </div>
  </div>
</template>

<style>
@import url('@/assets/css/easy-table.css');
</style>
