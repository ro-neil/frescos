<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SiteNavigation from '@/components/shared/SiteNavigation.vue';
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
    <div class="flex flex-col justify-center">
      <SiteNavigation />
      <div class="flex flex-col items-center justify-center bg-gray-100 dark:bg-transparent w-full py-10 gap-12">
        <MenuHeader :headerText="menuHeaderText"
          class="w-full sm:max-w-2xl lg:max-w-4xl flex flex-col items-center bg-emerald-50/25 dark:bg-transparent text-[var(--fresco-text-color)]">
          <template #icon>
            <IconDining width="72px" height="72px" />
          </template>
        </MenuHeader>
        <TabbedMenu :footerText="menuFooterText" :defaultTab="mealTime.LUNCH"/>  
      </div>
      <NewsletterFooter class="dark:bg-gray-800"/>
    </div>
  </div>
</template>
