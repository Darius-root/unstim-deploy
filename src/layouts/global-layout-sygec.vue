<script lang="ts" setup>
import DashboardHeader from '@/components/dashboard-hsygec.vue'
import DashboardSidebar from '@/components/dashboard-ssygec.vue'



</script>

<template>
    
  <div class="w-full h-full">

    
      <DashboardHeader />
    <div class="flex">
  <div class="w-1/5 shadow-card ">

    
        <DashboardSidebar />
   </div>
  <div class="w-4/5">
    <main class=" pt-12">
          <RouterView v-slot="{ Component }">
          <template v-if="Component">
            <Transition appear name="fade" mode="out-in">
              <component :key="$router.currentRoute.value.fullPath" :is="Component"></component>
            </Transition>
          </template>
        </RouterView>
      </main> </div>
</div>

  
  </div>
</template>

<style>
.fade-leave-to,
.fade-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.2s ease-out;
}

.fade-leave-from,
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>


