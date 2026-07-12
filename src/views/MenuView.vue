<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Leadtext from '@/components/shared/Leadtext.vue';
import NavigationBar from '@/components/shared/NavigationBar.vue';
import { useMealStore } from '@/stores/meals';
import IconDining from '@/components/icons/IconDining.vue';
import NewsletterFooter from '@/components/shared/NewsletterFooter.vue';
import MenuTabs from '@/components/menu/MenuTabs.vue';
import type { Meal } from '@/types/Meal';

const store = useMealStore();
const headerText: string = 'Restaurant Menu';
const menuData = ref<Record<string, Meal[]>>({});

onMounted(async () => {
  await store.fetchMeals();
  const breakfastItems = store.getMealsByCategory('breakfast');
  const lunchItems = store.getMealsByCategory('lunch');
  const dinnerItems = store.getMealsByCategory('dinner');

  menuData.value = {
    'BREAKFAST': breakfastItems,
    'LUNCH': lunchItems,
    'DINNER': dinnerItems
  };
})
</script>

<template>
  <div class="bg-primary dark:bg-gray-900 dark:text-white">
    <div class="flex flex-col">
      <NavigationBar />
      <div class="flex flex-col items-center bg-gray-100 dark:bg-gray-800 w-full pt-10">
        <div class="w-4xl rounded-md shadow-sm px-18 py-8 flex flex-col items-center bg-emerald-50/25 dark:bg-gray-700 border border-emerald-100 dark:border-gray-600 mb-5!">
          <IconDining width="72px" height="72px" class="text-orange-400" />
          <Leadtext :text="headerText" class="tracking-tight" />
        </div>  
        <MenuTabs :tabs="menuData" class="py-10!" /> 
        <NewsletterFooter class="bg-primary" />
      </div>
    </div>
  </div>
</template>
