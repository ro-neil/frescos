<script setup lang="ts">
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'
import MenuCategory from '@/components/menu/MenuCategory.vue';
import { computed, onMounted, ref, type ComputedRef } from 'vue';
import { useMealStore } from '@/stores/meals';
import { useMealTime, type MealTimeKey, type MealTimeValue } from '@/composables/meal-time';
import TabbedMenuNavigation from './TabbedMenuNavigation.vue';
import TabbedContent from './TabbedContent.vue';
import MenuPlaceholder from './MenuPlaceholder.vue';

interface Props {
  footerText: string;
  defaultTab?: string;
}

const props = defineProps<Props>();

const store = useMealStore();
const mealTime = useMealTime();

const breakfastMeals = computed(() => store.getMealsByCategory(mealTime.BREAKFAST));
const lunchMeals = computed(() => store.getMealsByCategory(mealTime.LUNCH));
const dinnerMeals = computed(() => store.getMealsByCategory(mealTime.DINNER));


const getDefaultTab: ComputedRef<string> = computed(() => {
  // If no defaultTab is provided, use the breakfast tab
  if (!props.defaultTab) {
    return mealTime.BREAKFAST;
  }
  return props.defaultTab;
});

// const selectedTab = ref('');
// const setCurrentTab = (tabId: string) => {
//   selectedTab.value = tabId;
// }

const currentTab = ref<string>(getDefaultTab.value);
const setCurrentTab = (tab: string) => {
  currentTab.value = tab;
};
const isCurrentTab = (tab: string) => {
  return tab === currentTab.value;
}

const borderClass = 'border-0';
const backgroundClass = 'bg-orange-200';
const triggerHoverBackgroundClass = 'hover:bg-orange-100';
const menuCategoryClasses = 'max-w-4xl rounded-2xl';
const menuItemClasses = `${borderClass} rounded-sm`;

const isLoading = ref(true);

onMounted(async () => {
  await store.fetchMeals();
  isLoading.value = false;
});

</script>

<template >
  <MenuPlaceholder v-if="isLoading"/>
  <div v-else class="flex flex-col items-center justify-center gap-3">
    <TabbedMenuNavigation @update:modelValue="setCurrentTab" />
    <TabbedContent :model-value="currentTab">
      <template v-if="currentTab === mealTime.BREAKFAST" #breakfast>
        <MenuCategory :class="menuCategoryClasses" :name="mealTime.BREAKFAST" :items="breakfastMeals"
          :item-card-classes="menuItemClasses" />
      </template>
      <template v-if="currentTab === mealTime.LUNCH" #lunch>
        <MenuCategory :class="menuCategoryClasses" :name="mealTime.LUNCH" :items="lunchMeals"
          :item-card-classes="menuItemClasses" />
      </template>
      <template v-if="currentTab === mealTime.DINNER" #dinner>
        <MenuCategory :class="menuCategoryClasses" :name="mealTime.DINNER" :items="dinnerMeals"
          :item-card-classes="menuItemClasses" />
      </template>
    </TabbedContent>
  </div>
</template>