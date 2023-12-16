<template>
  <div class="mx-6">

    <div class="w-full  bg-white  mx-auto xl:container   text-black ">
      <div class="flex  justify-between font-bold text-base p-2">
        <div>Colloques</div>
        <span class="my-notif-icon me-3"> <v-icon :name="icons.FaUsers" scale="1.4" /></span>
      </div>
    </div>
















    <div class="mx-8">



      <div class="mt-4">
        <label for="" class="text-sm  font-semibold text-gray-600">A venir
        </label>
        <el-input clearable v-model="input" placeholder="Rechercher"
          class="input-with-select  border border-white h-10 mt-3 border-none focus:border-none">
          <template #prepend>
            <el-button class="bg-green-700 font-bold" style="color: green;" :icon="Search" />
          </template>
          <template #append>
            <el-select v-model="select" placeholder="2023" class="border-none focus:border-none w-20  ">
              <el-option label="2022" value="2022" />
              <el-option label="2024" value="2024" />
            </el-select>
          </template>
        </el-input>
      </div>
    </div>


    <hr class="m-5">

    <div class=" flex flex-col items-center pb-4 ">


      <div
        class="max-w-md bg-[url('@/assets/images/sygec/bg-2.png')] bg-cover bg-center  border border-gray-200 rounded-3xl shadow-card">

        <div class="relative  flex flex-col justify-end overflow-hidden rounded-2xl m-5 px-8 pb-5 pt-40 ">
          <img src="@/assets/images/sygec/sygec3.png" alt="" class="absolute inset-0 h-full w-full   object-cover">
          <h3 class="z-10 mt-6 text-md font-bold text-white">CU_Jan_2023</h3>
        </div>



        <div class="flex flex-col items-center  px-4">
          <div class="font-bold text-sm"> COLLOQUE-UNSTIM-2024</div>
          <p class="text-[9px] "> Colloques du premiers semestre organisépar le rectorat de l' UNSTIM session 2021-2022
          </p>


          <div class="flex text-[10px] my-2 border-y-2 font-medium whitespace-nowrap">

            <v-icon :name="icons.FaCalendarAlt" class="mt-1 text-green-700" scale="0.9" />

            <div class="p-1 font-medium text-green-700">
              <div class="flex ">Date de l'événement:
              </div>
              <div class="flex ">Date de l'événement:
              </div>
              <div class="flex ">Date de l'événement:
              </div>


            </div>



            <div class=" p-1 ">
              <p>20 Janvier 2024</p>
              <p>20 Janvier 2024</p>
              <p>20 Janvier 2024</p>
            </div>

            <div class=" m-2 border-r-4">

            </div>


            <div class="text-center ml-6 m-2">
              <div class="flex items-center ">
                <img class="rounded-full w-5 h-5 mr-1 mb-1 " src="@/assets/images/sygec/icon2.png" alt="" />
                <p>95 participations
                </p>
              </div>
              <div class="flex items-center ">
                <img class="rounded-full w-5 h-5 mr-1 " src="@/assets/images/sygec/icon1.png" alt="" />
                <p>95 participations
                </p>
              </div>
            </div>


          </div>

          <div class="flex whitespace-nowrap  ">

            <RouterLink to=""
              class="flex items-center text-[10px]  backgroundSygec my-2 h-8  p-1 border rounded-md shadow text-white  hover:opacity-60">
              <v-icon :name="icons.Money" class=" " scale="0.8" />
              <span class=" font-bold"> Payer mon inscription </span>
            </RouterLink>
            <RouterLink to=""
              class="flex items-center text-[10px]  backgroundSygec my-2 mx-3 h-8  p-1 border rounded-md shadow text-white  hover:opacity-60">
              <v-icon :name="icons.FormPWShowIcon" class=" " scale="0.8" />
              <span class=" font-bold">Voire la circulaire</span>
            </RouterLink>
            <RouterLink to=""
              class="flex items-center text-[10px]  backgroundSygec my-2 h-8  p-1 border rounded-md shadow text-white  hover:opacity-60">
              <v-icon :name="icons.FaBell" class=" " scale="0.8" />
              <span class=" font-bold">Me tenir informer </span>
            </RouterLink>
          </div>

        </div>

      </div>







    </div>



    <hr>



    <div class="mx-8">



      <div class="mt-4 ">
        <label for="" class="text-sm  font-semibold text-gray-600">Colloques passés
        </label>
        <el-input clearable v-model="input" placeholder="Rechercher"
          class="input-with-select  border border-white h-10 mt-3 border-none focus:border-none">
          <template #prepend>
            <el-button class="bg-green-700 font-bold" style="color: green;" :icon="Search" />
          </template>
          <template #append>
            <div class="flex gap-8">
              <el-checkbox label="Uniquement mes participations" class="text-black " name="type" />

              <el-select v-model="select" placeholder="2023" class="  border-l focus:border-none w-20  ">
                <el-option label="2022" value="2022" />
                <el-option label="2024" value="2024" />
              </el-select>
            </div>
          </template>
        </el-input>


      </div>
    </div>


    <hr class="m-5">

    <div class=" grid  grid-cols-2 pb-4  mx-10">


      <div
        class="max-w-md bg-[url('@/assets/images/sygec/bg-1.png')] bg-cover bg-center  border border-gray-200 rounded-3xl shadow-card">

        <div class="relative  flex flex-col justify-end overflow-hidden rounded-2xl m-5 px-8 pb-5 pt-40 ">
          <img src="@/assets/images/sygec/sygec4.png" alt="" class="absolute inset-0 h-full w-full   object-cover">
          <h3 class="z-10 mt-6 text-md font-bold text-white">CU_Jan_2023</h3>
        </div>



        <div class="flex flex-col items-center px-4 ">
          <div class="font-bold text-sm"> COLLOQUE-UNSTIM-2024</div>
          <p class="text-[9px] "> Colloques du premiers semestre organisépar le rectorat de l' UNSTIM session 2021-2022
          </p>


          <div class="flex text-[10px] my-2 border-y-2 font-medium whitespace-nowrap ">

            <v-icon :name="icons.FaCalendarAlt" class="mt-1 text-green-700" scale="0.9" />

            <div class="p-1 font-medium text-green-700">
              <div class="flex ">Date de l'événement:
              </div>
              <div class="flex ">Date de l'événement:
              </div>
              <div class="flex ">Date de l'événement:
              </div>


            </div>



            <div class=" p-1 ">
              <p>20 Janvier 2024</p>
              <p>20 Janvier 2024</p>
              <p>20 Janvier 2024</p>
            </div>

            <div class=" m-2 border-r-4  ">

            </div>


            <div class="text-center ml-6 m-2">
              <div class="flex items-center ">
                <img class="rounded-full w-5 h-5 mr-1 mb-1 " src="@/assets/images/sygec/icon2.png" alt="" />
                <p>95 participations
                </p>
              </div>
              <div class="flex items-center ">
                <img class="rounded-full w-5 h-5 mr-1 " src="@/assets/images/sygec/icon1.png" alt="" />
                <p>95 participations
                </p>
              </div>
            </div>


          </div>

          <div class="flex whitespace-nowrap gap-5 ">

            <RouterLink to=""
              class="flex items-center text-[10px]  backgroundSygec my-2 h-8  p-1 border rounded-md shadow text-white  hover:opacity-60">
              <v-icon :name="icons.FormPWShowIcon" class=" " scale="0.8" />
              <span class=" font-bold"> Voir mon résumé </span>
            </RouterLink>
            <RouterLink to=""
              class="flex items-center text-[10px]  backgroundSygec my-2 h-8  p-1 border rounded-md shadow text-white  hover:opacity-60">
              <v-icon :name="icons.Money" class=" " scale="0.8" />
              <span class=" font-bold">Ma facture de payement</span>
            </RouterLink>
          </div>

        </div>

      </div>
      <div
        class="max-w-md bg-[url('@/assets/images/sygec/bg-3.png')] bg-cover bg-center  border border-gray-200 rounded-3xl shadow-card">

        <div class="relative  flex flex-col justify-end overflow-hidden rounded-2xl m-5 px-8 pb-5 pt-40 ">
          <img src="@/assets/images/sygec/sygec5.png" alt="" class="absolute inset-0 h-full w-full   object-cover">
          <h3 class="z-10 mt-6 text-md font-bold text-white">CU_Jan_2023</h3>
        </div>



        <div class="flex flex-col items-center px-4 ">
          <div class="font-bold text-sm"> COLLOQUE-UNSTIM-2024</div>
          <p class="text-[9px] "> Colloques du premiers semestre organisépar le rectorat de l' UNSTIM session 2021-2022
          </p>


          <div class="flex text-[10px] my-2 border-y-2 font-medium whitespace-nowrap ">

            <v-icon :name="icons.FaCalendarAlt" class="mt-1 text-green-700" scale="0.9" />

            <div class="p-1 font-medium text-green-700">
              <div class="flex ">Date de l'événement:
              </div>
              <div class="flex ">Date de l'événement:
              </div>
              <div class="flex ">Date de l'événement:
              </div>


            </div>



            <div class=" p-1 ">
              <p>20 Janvier 2024</p>
              <p>20 Janvier 2024</p>
              <p>20 Janvier 2024</p>
            </div>

            <div class=" m-2 border-r-4  ">

            </div>


            <div class="text-center ml-6 m-2">
              <div class="flex items-center ">
                <img class="rounded-full w-5 h-5 mr-1 mb-1 " src="@/assets/images/sygec/icon2.png" alt="" />
                <p>95 participations
                </p>
              </div>
              <div class="flex items-center ">
                <img class="rounded-full w-5 h-5 mr-1 " src="@/assets/images/sygec/icon1.png" alt="" />
                <p>95 participations
                </p>
              </div>
            </div>


          </div>

          <div class="flex whitespace-nowrap gap-5 ">

            <RouterLink to=""
              class="flex items-center text-[10px]  backgroundSygec my-2 h-8  p-1 border rounded-md shadow text-white  hover:opacity-60">
              <v-icon :name="icons.FormPWShowIcon" class=" " scale="0.8" />
              <span class=" font-bold"> Voir mon résumé </span>
            </RouterLink>
            <RouterLink to=""
              class="flex items-center text-[10px]  backgroundSygec my-2 h-8  p-1 border rounded-md shadow text-white  hover:opacity-60">
              <v-icon :name="icons.Money" class=" " scale="0.8" />
              <span class=" font-bold">Ma facture de payement</span>
            </RouterLink>
          </div>

        </div>

      </div>







    </div>



    <hr>













  </div>
</template>

<script setup lang="ts">
import { icons } from '@/assets/icons/oh-vue-icons'
import { ref } from 'vue'
import 'element-plus/dist/index.css'

import { ElSelect, ElOption, ElInput, ElButton,  ElCheckbox, } from 'element-plus'

import { Search } from '@element-plus/icons-vue'
const input = ref('')

const select = ref('')
</script>



<style scoped></style>