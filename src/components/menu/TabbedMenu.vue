<script setup lang="ts">
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'
import MenuCategory from '@/components/menu/MenuCategory.vue';
import { computed, onMounted, ref, type ComputedRef } from 'vue';
import { useMealStore } from '@/stores/meals';
import { useMealTime, type MealTimeKey, type MealTimeValue } from '@/composables/meal-time';

interface Props {
  footerText: string;
  defaultTab?: MealTimeValue;
}

const props = defineProps<Props>();

const store = useMealStore();
const mealTime = useMealTime();

const breakfastMeals = computed(() => store.getMealsByCategory(mealTime.BREAKFAST));
const lunchMeals = computed(() => store.getMealsByCategory(mealTime.LUNCH));
const dinnerMeals = computed(() => store.getMealsByCategory(mealTime.DINNER));


const getDefaultTab: ComputedRef<MealTimeValue> = computed(() => {
  // If no defaultTab is provided, use the breakfast tab
  if (!props.defaultTab) {
    return mealTime.BREAKFAST;
  }
  return props.defaultTab;
});

const currentTab = ref<MealTimeValue>(getDefaultTab.value);
const setCurrentTab = (tab: MealTimeValue) => {
  currentTab.value = tab;
};
const isCurrentTab = (tab: MealTimeValue) => {
  return tab === currentTab.value;
}

const borderClass = 'border-orange-200';
const backgroundClass = 'bg-orange-200';
const triggerHoverBackgroundClass = 'hover:bg-orange-100';

const tabTriggerClasses = {
  container: `flex items-center justify-center gap-2 px-4 py-2 sm:px-10 sm:py-3 transition-colors cursor-pointer ${triggerHoverBackgroundClass}`,
  text: 'text-sm sm:text-base font-bold text-[var(--fresco-text-color)] dark:text-gray-200 uppercase'
};
const tabContentClasses = 'w-full flex justify-center transition-colors hover:bg-emerald-50/25';
const menuCategoryClasses = 'max-w-4xl mx-auto mt-3';
const menuItemClasses = `${borderClass} rounded-lg`

onMounted(async () => {
  await store.fetchMeals();
});

</script>

<template>
  <TabsRoot :default-value="getDefaultTab" orientation="vertical"
    class="flex flex-col items-center gap-3 sm:gap-5 w-full">
    <TabsList :class="['flex justify-between shadow-lg sm:w-lg lg:w-xl border rounded-sm', borderClass]"
      aria-label="tabs">
      <TabsTrigger :value="mealTime.BREAKFAST" >
        <div @click="setCurrentTab(mealTime.BREAKFAST)" 
          :class="[tabTriggerClasses.container, 'rounded-l-sm', isCurrentTab(mealTime.BREAKFAST) ? backgroundClass : '']">
          <span :class="tabTriggerClasses.text">
            {{ mealTime.BREAKFAST }}
          </span>
        </div>
      </TabsTrigger>
      <TabsTrigger :value="mealTime.LUNCH" >
        <div @click="setCurrentTab(mealTime.LUNCH)" 
          :class="[tabTriggerClasses.container, isCurrentTab(mealTime.LUNCH) ? backgroundClass : '']">
          <span :class="tabTriggerClasses.text">
            {{ mealTime.LUNCH }}
          </span> 
        </div>
      </TabsTrigger>
      <TabsTrigger :value="mealTime.DINNER" >
        <div @click="setCurrentTab(mealTime.DINNER)" 
          :class="[tabTriggerClasses.container, 'rounded-r-sm', isCurrentTab(mealTime.DINNER) ? backgroundClass : '']">
          <span :class="tabTriggerClasses.text">
            {{ mealTime.DINNER }}
          </span>
        </div>
      </TabsTrigger>
    </TabsList>
    <TabsContent class="breakfast-content" :class="tabContentClasses" :value="mealTime.BREAKFAST">
      <MenuCategory :class="menuCategoryClasses" :name="mealTime.BREAKFAST" :items="breakfastMeals" :item-card-classes="menuItemClasses" />
    </TabsContent>
    <TabsContent class="lunch-content"  :class="tabContentClasses" :value="mealTime.LUNCH">
      <MenuCategory  :class="menuCategoryClasses" :name="mealTime.LUNCH" :items="lunchMeals" :item-card-classes="menuItemClasses" />
    </TabsContent>
    <TabsContent class="dinner-content"  :class="tabContentClasses" :value="mealTime.DINNER">
      <MenuCategory  :class="menuCategoryClasses" :name="mealTime.DINNER" :items="dinnerMeals" :item-card-classes="menuItemClasses" />
    </TabsContent>
    <footer class="w-full flex justify-center mt-6 mb-3">
      <p class="font-medium text-xs text-center text-gray-400">{{ footerText }}</p>
    </footer>
  </TabsRoot>
</template>

<style scoped></style>