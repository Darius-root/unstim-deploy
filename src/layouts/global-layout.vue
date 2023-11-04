<script lang="ts" setup>
import DashboardHeader from '@/components/dashboard-header.vue'
import DashboardSidebar from '@/components/dashboard-sidebar.vue'
import { useNavigationStore } from '@/stores/navigations'
import { reactive } from 'vue'

const navItems = useNavigationStore().navigations

const noSidebarRoute = reactive(['home'])

</script>

<template>
  <div class="w-full h-full">
    <div class="fixed inset-x-0 z-20 w-full shadow-md h-28 header-unstim">
      <DashboardHeader />
    </div>

    <div class="w-full pt-28 content">
      <div v-if="!noSidebarRoute.includes($route.name as string)"
        class="fixed w-[300px] top-0 bottom-0 pt-28 z-10 shadow-xl hidden xl:block bg-unstim-info unstim-sidebar ">
        <DashboardSidebar :navigations="navItems" />
      </div>

      <main :class="{ 'ml-[300px]': !noSidebarRoute.includes($route.name as string) }"
        class="flex-1 px-4 py-5 unstim-main">
        <RouterView v-slot="{ Component }">
          <template v-if="Component">
            <Transition appear name="fade" mode="out-in">
              <component :key="$router.currentRoute.value.fullPath" :is="Component"></component>
            </Transition>
          </template>
        </RouterView>
      </main>
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
