<script setup lang="ts">
import { computed } from 'vue';

// Define strict TypeScript interface for props
interface Props {
  name: string;
  description: string;
  price: string | number;
  image?: string;
  orientation?: 'horizontal' | 'vertical';
  reverse?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
  reverse: false
});

// Format price consistently if passed as a raw number
const formattedPrice = computed(() => {
  if (typeof props.price === 'number') {
    return `$${props.price.toFixed(2)}`;
  }
  return props.price.startsWith('$') ? props.price : `$${props.price}`;
});

// Compute structural layout classes based on orientation and reverse flags
const cardClasses = computed(() => {
  if (props.orientation === 'vertical') {
    return [
      'flex-col max-h-[24rem]',
      props.reverse ? 'flex-col-reverse' : ''
    ];
  } else {
    // Horizontal layout (stacks to vertical on mobile automatically)
    return [
      'flex-col sm:flex-row items-stretch sm:max-h-[12rem]',
      props.reverse ? 'sm:flex-row-reverse' : ''
    ];
  }
});

// Compute structural image dimensions based on configuration
const imageWrapperClasses = computed(() => {
  if (props.orientation === 'vertical') {
    return 'w-full h-3/5 aspect-[4/3] max-h-[420px]';
  } else {
    return 'w-full sm:w-1/2 h-full aspect-[16/10] sm:aspect-auto min-h-[160px] max-h-[300px]';
  }
});
</script>

<template>
  <div 
    :class="[
      'bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden flex transition-all duration-300 hover:shadow-md',
      ...cardClasses
    ]"
  >
    <div :class="['relative overflow-hidden bg-stone-100', imageWrapperClasses]">
      <img v-if="image"
        :src="image" 
        :alt="name" 
        class="w-full h-full object-cover transform transition duration-500 hover:scale-[1.03]"
        loading="lazy"
      />
        <div v-else class="w-full h-full flex items-center justify-center bg-stone-200">
            <span class="text-stone-400 text-lg font-semibold">No Image</span>
        </div>
    </div>

    <div class="flex-1 p-6 flex flex-col justify-between gap-4">
      <div class="space-y-2">
        <h3 class="text-xl font-bold text-[#111827] tracking-tight">
          {{ name }}
        </h3>
        <p class="text-sm text-stone-600 leading-relaxed font-normal">
          {{ description }}
        </p>
      </div>

      <div class="flex justify-end items-end mt-auto">
        <span class="text-xl font-extrabold text-orange-500">
          {{ formattedPrice }}
        </span>
      </div>
    </div>
  </div>
</template>