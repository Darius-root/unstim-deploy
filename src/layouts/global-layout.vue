<script lang="ts" setup>
import DashboardHeader from '@/components/dashboard-header.vue'
import DashboardSidebar from '@/components/dashboard-sidebar.vue'
import { useNavigationStore } from '@/stores/navigations'
import { reactive } from 'vue'
import { useRoute } from 'vue-router';

const navItems = useNavigationStore().navigations

const noSidebarRoute = reactive(['home'])

const route = useRoute();


const getNavigationMenu = () => {
  const matchedRoute = route.matched[1]?.name;
  if (matchedRoute === 'module_rha') {
    return navItems.module_rha;
  } else if (matchedRoute === 'module_finance_suivi_evaluation') {
    return navItems.module_finance_suivi_evaluation;
  }
 else if (matchedRoute === 'module_marche') {
    return navItems.module_marche;
  }
};
// console.log(getNavigationMenu());
</script>

<template>
  <div class="min-h-screen  relative ">
    <div class="custom-back-full -z-30 bg-unstim-white/95 absolute inset-0"></div>
    <div class="fixed inset-x-0 z-20 w-full shadow-md h-28 header-unstim">
      <DashboardHeader />
    </div>

    <nav v-if="!noSidebarRoute.includes($route.name as string)" class="w-1/5 inset-y-0 fixed">
      <div class="custom-back  absolute inset-0"></div>
      <div class="bg-unstim-info/90 absolute inset-0"></div>
      <DashboardSidebar :navigations="getNavigationMenu()" />
    </nav>

    <main :class="{ 'xl:ml-[20%]': !noSidebarRoute.includes($route.name as string) }" class="pt-32 px-5 overflow-auto ">
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Transition appear name="fade" mode="out-in">
            <component :key="$router.currentRoute.value.fullPath" :is="Component"></component>
          </Transition>
        </template>
      </RouterView>
    </main>

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

.custom-back {
  background-image: url('/src/assets/images/unstim-plan1.png');
  background-size: cover;

}
</style>


