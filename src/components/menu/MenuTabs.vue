<script setup lang="ts">
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'
import type { Meal } from '@/types/Meal';
import MenuCategory from '@/components/menu/MenuCategory.vue';
import { computed } from 'vue';

interface Props {
  tabs: Record<string, Meal[]>;
}

const props = defineProps<Props>();
const defaultTab = computed(() => {
  const categories = Object.keys(props.tabs);
  return categories.length > 0 ? categories[0] : '';
});

</script>

<template>
  <TabsRoot v-if="defaultTab" :default-value="defaultTab" orientation="vertical" class="flex flex-col items-center gap-5 w-full">
    <TabsList class="shadow-lg" aria-label="tabs example">
      <TabsTrigger v-for="(meals, category, index) in tabs" class="transition-all font-bold text-lg px-4 py-2 hover:bg-orange-100/50 uppercase data-[state=active]:bg-orange-200" :class="{'border-r-1 border-orange-100': index < Object.keys(tabs).length - 1}" :value="category">
        {{ category }}
      </TabsTrigger>
    </TabsList>
    <TabsContent v-for="(meals, category) in tabs" class="w-full flex justify-center transition-colors hover:bg-emerald-50/25" :value="category">
      <MenuCategory class="max-w-4xl mx-auto mt-3" :key="category" :name="category" :items="meals" />
    </TabsContent>
    <p class="font-light text-sm">All prices are quoted in KYD (Cayman Islands Dollar) and are subject to change without notice.</p>
  </TabsRoot>
</template>

<style scoped>

</style>