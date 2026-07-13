<script setup lang="ts">
import { onMounted, ref } from 'vue';
import NavigationBar from '@/components/shared/NavigationBar.vue';
import IconDining from '@/components/icons/IconDining.vue';
import NewsletterFooter from '@/components/shared/NewsletterFooter.vue';
import TabbedMenu from '@/components/menu/TabbedMenu.vue';
import MenuHeader from '@/components/menu/MenuHeader.vue';
import { useMealTime } from '@/composables/meal-time';

const menuHeaderText = ref('Restaurant Menu');
const menuFooterText = ref('All prices are quoted in KYD (Cayman Islands Dollar) and are subject to change without notice.');
const mealTime = useMealTime();

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
})
</script>

<template>
  <div class="bg-primary dark:bg-gray-900 dark:text-white">
    <div class="flex flex-col">
      <NavigationBar />
      <div class="flex flex-col items-center bg-gray-100 dark:bg-gray-800 w-full pt-10 px-4">
        <MenuHeader :headerText="menuHeaderText" class="w-full sm:max-w-2xl lg:max-w-4xl rounded-md shadow-sm px-6 sm:px-18 lg:px-46 pt-6 pb-8 flex flex-col items-center bg-emerald-50/25 dark:bg-gray-700 border border-emerald-100 dark:border-gray-600 mb-5! text-[var(--fresco-text-color)]">
          <template #icon>
            <IconDining width="72px" height="72px" />
          </template>
        </MenuHeader>

        <TabbedMenu v-if="!isLoading" :footerText="menuFooterText" :defaultTab="mealTime.LUNCH" class="py-10!">
        </TabbedMenu>
        <div v-else class="flex flex-col items-center justify-center space-y-6 py-20 w-full">
          <div class="flex flex-col items-center justify-center gap-4 max-w-5xl w-full px-4">
            <div class="h-14 w-3/5 rounded-xl bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div class="flex flex-col gap-4">
                <div class="h-48 rounded-[2rem] bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                <div class="h-6 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                <div class="h-6 w-4/5 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
              </div>
              <div class="flex flex-col gap-4">
                <div class="h-48 rounded-[2rem] bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                <div class="h-6 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                <div class="h-6 w-4/5 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsletterFooter class="bg-primary" />
    </div>
  </div>
</template>
