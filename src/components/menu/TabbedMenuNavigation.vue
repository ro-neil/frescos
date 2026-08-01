<script setup lang="ts">
import { ref, computed } from 'vue';

// Define TS interface for tab shape
interface TabItem {
  id: string;
  label: string;
  iconName: 'sunrise' | 'sun' | 'moon';
}

interface Props {
  modelValue?: string;
  tabs?: TabItem[];
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 'lunch',
  tabs: () => [
    { id: 'breakfast', label: 'Breakfast', iconName: 'sunrise' },
    { id: 'lunch', label: 'Lunch', iconName: 'sun' },
    { id: 'dinner', label: 'Dinner', iconName: 'moon' }
  ]
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

// Track selected tab state
const activeTab = ref(props.modelValue);

// Find the index of the active tab to drive the sliding animation positioning
const activeIndex = computed(() => {
  return props.tabs.findIndex(tab => tab.id === activeTab.value);
});

const selectTab = (id: string) => {
  activeTab.value = id;
  emit('update:modelValue', id);
};

const isActive = (id: string) : boolean => {
  return activeTab.value === id;
}
</script>

<template>
  <div class="max-w-lg px-4">
    <div 
      role="tablist"
      aria-label="Menu Selection"
      class="bg-[#F5F3E9] dark:bg-slate-900 p-1.5 rounded-full flex justify-between gap-1 sm:gap-2 w-full shadow-inner border border-stone-200/50 dark:border-slate-800 transition-colors duration-300"
    >
      <button 
        v-for="(tab, index) in tabs" 
        :key="tab.id"
        @click="selectTab(tab.id)"
        role="tab"
        :aria-selected="isActive(tab.id)"
        :aria-controls="`${tab.id}-panel`"
        class="py-3 px-6 text-center transition-all duration-300 focus:outline-none group cursor-pointer rounded-full"
        :class="{ 'bg-orange-500': isActive(tab.id) }"
      >
        <span 
          class="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors duration-300"
          :class="isActive(tab.id) ? 'text-white' : 'text-stone-500 hover:text-stone-800 dark:text-slate-400 dark:hover:text-slate-200'"
        >
          <!-- Breakfast Icon (Sunrise) -->
          <svg 
            v-if="tab.iconName === 'sunrise'" 
            class="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover:scale-110" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2.5" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m-.386-6.364l1.591 1.591M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
          </svg>

          <!-- Lunch Icon (Sun) -->
          <svg 
            v-if="tab.iconName === 'sun'" 
            class="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover:scale-110" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2.5" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1.5m6.364 1.015l-1.061 1.061M21 12h-1.5m-1.015 6.364l-1.061-1.061M12 21v-1.5m-6.364-1.015l1.061-1.061M3 12h1.5m1.015-6.364l1.061 1.061M12 6a6 6 0 100 12 6 6 0 000-6z" />
          </svg>

          <!-- Dinner Icon (Moon) -->
          <svg 
            v-if="tab.iconName === 'moon'" 
            class="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover:rotate-12" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2.5" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>

          <span class="sm:inline">{{ tab.label }}</span>
        </span>
      </button>
      
    </div>
  </div>
</template>