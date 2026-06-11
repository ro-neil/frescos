<script setup lang="ts">
import type { PropType } from 'vue';

defineOptions({ inheritAttrs: false });

defineProps({
  /**
   * Expects an array of exactly 4 image URLs.
   */
  images: {
    type: Array as PropType<string[]>,
    required: true,
    validator: (value: unknown) => {
      return Array.isArray(value) && value.length === 3;
    }
  },
  /**
   * Classes to group-style every grid square (e.g., borders, shadows, or background defaults).
   */
  itemClass: {
    type: [String, Object, Array] as PropType<string | Record<string, boolean> | string[]>,
  }
});

// Maps each loop index to its specific outer corner rounding class
const cornerClasses = [
  'rounded-full', // Top-left
  'rounded-full', // Top-right
  'rounded-t-[4px] rounded-b-[3rem] col-span-2', // Bottom
];
</script>

<template>
  <div 
    v-bind="$attrs" 
    class="grid w-full max-w-2xl grid-cols-2 grid-rows-2 gap-5 aspect-square"
  >
    <div 
      v-for="(img, index) in images" 
      :key="index"
      :class="[
        'overflow-hidden transition-all duration-300', 
        cornerClasses[index], 
        itemClass
      ]"
    >
      <img 
        :src="img" 
        :alt="`Grid image ${index + 1}`" 
        class="w-full h-full object-cover saturate-100"
      />
    </div>
  </div>
</template>