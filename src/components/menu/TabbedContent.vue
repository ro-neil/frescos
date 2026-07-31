<script setup lang="ts">
import { ref, watch, type CSSProperties } from 'vue';

// Define the TS interface for tab shape (matching the navigation component)
interface TabItem {
  id: string;
  label: string;
  iconName: 'sunrise' | 'sun' | 'moon';
}

const props = withDefaults(defineProps<{
  // Controlled active tab ID (v-model)
  modelValue?: string;
  // The tab definitions array (matching the navigation)
  tabs?: TabItem[];
  // Transition duration in ms (default 300ms)
  transitionDuration?: number;
}>(), {
  modelValue: 'dinner',
  tabs: () => [
    { id: 'breakfast', label: 'Breakfast', iconName: 'sunrise' },
    { id: 'lunch', label: 'Lunch', iconName: 'sun' },
    { id: 'dinner', label: 'Dinner', iconName: 'moon' }
  ],
  transitionDuration: 300,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

// Track the current active tab panel internally
const activeTab = ref(props.modelValue);

// Use v-show for faster transitions, as it conditionally updates visibility but keeps in DOM
const activeTabIndex = ref(props.tabs.findIndex(tab => tab.id === props.modelValue));

// Watch modelValue prop for external changes
watch(() => props.modelValue, (newVal) => {
  if (newVal && newVal !== activeTab.value) {
    activeTab.value = newVal;
    activeTabIndex.value = props.tabs.findIndex(tab => tab.id === newVal);
  }
});

// Emit updates when internal state changes (to support direct manipulation if needed)
watch(activeTab, (newVal) => {
  if (newVal !== props.modelValue) {
    emit('update:modelValue', newVal);
  }
});

// Calculate styles for smooth panel transitions (fade and optional slide)
const getPanelStyles = (index: number): CSSProperties => {
  const isActive = index === activeTabIndex.value;
  return {
    opacity: isActive ? 1 : 0,
    visibility: isActive ? 'visible' : 'hidden',
    transitionDuration: `${props.transitionDuration}ms`,
    // For optional slide effect:
    // transform: `translateX(${(index - activeTabIndex.value) * 5}px)`
  } as CSSProperties;
};

</script>

<template>
  <div class="w-full">
    <!-- 
      Outer Container: Rounded card with subtle drop shadows and border
      Matching the clean aesthetic of the navigation component.
    -->
    <div 
      class="relative bg-gray-100 dark:bg-slate-900 p-4 md:p-6 transition-colors duration-300"
    >
      
      <!-- Panel Wrapper with Transition (fade in/out) -->
      <div 
        v-for="(tab, index) in tabs" 
        :key="tab.id"
        role="tabpanel"
        :id="`${tab.id}-panel`"
        :aria-labelledby="`${tab.id}-tab`"
        class="transition-opacity ease-in-out"
        :style="getPanelStyles(index)"
      >
        <!-- Use Named Slot for Custom Content -->
        <slot v-if="activeTab === tab.id" :name="tab.id" :tab="tab">
          <!-- Default content if no slot provided -->
          <div class="flex flex-col items-center justify-center text-center py-10">
            <span class="text-4xl text-stone-400 dark:text-slate-600 mb-4 opacity-70">
                <svg v-if="tab.iconName === 'sunrise'" class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m-.386-6.364l1.591 1.591M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" /></svg>
                <svg v-if="tab.iconName === 'sun'" class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1.5m6.364 1.015l-1.061 1.061M21 12h-1.5m-1.015 6.364l-1.061-1.061M12 21v-1.5m-6.364-1.015l1.061-1.061M3 12h1.5m1.015-6.364l1.061 1.061M12 6a6 6 0 100 12 6 6 0 000-6z" /></svg>
                <svg v-if="tab.iconName === 'moon'" class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
            </span>
            <h3 class="text-2xl font-black text-stone-800 dark:text-slate-100 tracking-tight leading-tight">
              {{ tab.label }}
            </h3>
            <p class="text-sm text-stone-600 dark:text-slate-400 mt-2 max-w-sm">
                Add content to the <code class="bg-stone-100 dark:bg-slate-800 p-1 rounded">#{{ tab.id }}</code> slot in your component.
            </p>
          </div>
        </slot>
      </div>
      
    </div>
  </div>
</template>