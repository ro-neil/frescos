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

</script>

<template>
  <ContentBlock class="sm:px-6 px-4 pt-8! md:gap-8">
    <template #A>
      <section class="flex justify-center items-center gap-4">
      <div class="flex flex-col gap-8 items-center justify-center sm:justify-end order-first sm:order-last w-full">
        <div class="rounded-full shadow-lg shadow-emerald-200 transform transition duration-500 hover:scale-[1.02]">
          <img :src="imageA.path" :alt="imageA.alt" loading="eager"
            class="rounded-full size-[8rem] md:size-[12rem] lg:size-[14rem] xl:size-[18rem] object-cover saturate-200">
        </div>
        <div class="text-center">
          <p class="font-bold text-lg">Private Dining Room</p>
          <span>Up to 15 guests</span>
        </div>   
      </div>

      <div class="flex flex-col gap-8 items-center justify-center sm:justify-end order-first sm:order-last w-full">
        <div class="rounded-full shadow-lg shadow-emerald-200 transform transition duration-500 hover:scale-[1.02]">
          <img :src="imageB.path" :alt="imageB.alt" loading="eager"
            class="rounded-full size-[8rem] md:size-[12rem] lg:size-[14rem] xl:size-[18rem] object-cover saturate-200">
        </div>
        <div class="text-center">
          <p class="font-bold text-lg">Breezy Outdoor Gatherings</p>
          <span>Up to 10 guests</span>
        </div>
      </div>

      </section>
    </template>
    <template #B>
      
    </template>
  </ContentBlock>
</template>