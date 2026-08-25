<script setup lang="ts">
import ContentBlock from '@/components/shared/ContentBlock.vue';
import salmonDishPhoto from '@/assets/images/home/salmon-dish-1.jpg';
import salmonDishPhoto2 from '@/assets/images/home/salmon-dish-2.jpg';
import salmonDishPhoto3 from '@/assets/images/home/salmon-dish-3.jpg';
import Leadtext from '@/components/shared/Leadtext.vue';

const leadtext: string = 'Experience Real Taste';
const subtext1: string = 'We offer a wide range of local specialties alongside international favorites, ensuring there is something to love for everyone, including dedicated vegetarian and vegan dishes.';
const subtext2: string = 'Our casual, cozy, family-friendly indoor and outdoor seating options welcome tourists and locals alike.';
</script>

<template>
  <ContentBlock class="sm:px-6 px-4 md:gap-8 bg-[#FDFBF6] dark:bg-gray-800 sm:flex-col! lg:flex-row!">
    <template #A>
      <div class="w-full grid grid-cols-2 gap-4 sm:gap-6">
        <div
          class="col-span-1 aspect-square overflow-hidden rounded-full shadow-lg shadow-orange-400 hover-scale-2">
          <img :src="salmonDishPhoto3" alt="Fresh Salmon Dish" class="circular-image size-full" />
        </div>

        <div
          class="col-span-1 aspect-square overflow-hidden rounded-full shadow-lg shadow-orange-400 hover-scale-2 mt-8 sm:mt-12">
          <img :src="salmonDishPhoto2" alt="Creamy Salmon Dish" class="circular-image size-full" />
        </div>
      </div>
    </template>

    <template #B>
      <div class="flex flex-col gap-2 justify-center items-center text-center lg:text-left lg:items-start lg:pl-8 w-full">
        <Leadtext :text="leadtext" />
        <p class="text-description">{{ subtext1 }}</p>
        <p class="text-description">{{ subtext2 }}</p>
        <div class="mt-4! flex justify-center">
          <div class="w-32 md:w-64 h-1.5 bg-orange-500 rounded-full"></div>
        </div>
      </div>
    </template>

  </ContentBlock>
</template> 