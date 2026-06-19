<script setup lang="ts">
import { ref } from 'vue';
import ContentBlock from '@/components/shared/ContentBlock.vue';
import Link from '@/components/utils/Link.vue';
import servingWine from '@/assets/images/catering/serving-wine.jpg';
import diningRoom1 from '@/assets/images/catering/dining-room-1.jpg';
import diningRoom2 from '@/assets/images/catering/dining-room-2.jpg';
import tableAesthetics from '@/assets/images/catering/table-aesthetics.jpg';
import outdoorDining from '@/assets/images/catering/outdoor-dining.jpg';
import Subtext from '@/components/shared/Subtext.vue';
import Leadtext from '@/components/shared/Leadtext.vue';

// Define props for full extensibility
interface Image {
  path: string;
  alt: string;
}

const imageA: Image = {
  path: diningRoom1,
  alt: "A photo of an indoor dining area.",
}

const imageB: Image = {
  path: outdoorDining,
  alt: "A photo of an outdoor dining area.",
}

const imageC: Image = {
  path: tableAesthetics,
  alt: "A photo of an aesthetically appealing table.",
}

</script>

<template>
  <div class="w-full shadow-sm shadow-gray-200 transform transition duration-500 hover:scale-[1.02]">
    <div class="my-4! flex justify-center">
      <div class="w-32 md:w-64 h-1.5 bg-orange-400 rounded-full"></div>
    </div>
    <img :src="imageA.path" :alt="imageA.alt" loading="eager" class="object-cover saturate-200 w-full max-h-150">
  </div>
</template>