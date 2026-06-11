<script setup lang="ts">
import ContentBlock from './ContentBlock.vue';
import salmonDishPhoto from '@/assets/images/home/salmon-dish-1.jpg';
import salmonDishPhoto2 from '@/assets/images/home/salmon-dish-2.jpg';
import salmonDishPhoto3 from '@/assets/images/home/salmon-dish-3.jpg';
import Leadtext from './Leadtext.vue';
import Subtext from './Subtext.vue';

const leadtext: string = 'Experience Real Taste';
const subtext: string = 'Our casual, cozy, family-friendly indoor and outdoor seating options welcome tourists and locals alike. We offer a wide range of local specialties alongside international favorites, ensuring there is something to love for everyone, including dedicated vegetarian and vegan dishes.';
</script>

<template>
  <ContentBlock class="sm:px-6 px-4 md:gap-8 bg-[#FDFBF6] dark:bg-gray-800 sm:flex-col! lg:flex-row!">
    <template #first>
      <div class="w-full grid grid-cols-2 gap-4 sm:gap-6">
        <div
          class="col-span-1 aspect-square overflow-hidden rounded-full shadow-lg shadow-orange-400 transform transition duration-500 hover:scale-[1.02]">
          <img :src="salmonDishPhoto3" alt="Fresh Salmon Dish" class="w-full h-full object-cover" />
        </div>

        <div
          class="col-span-1  aspect-square overflow-hidden rounded-full shadow-lg shadow-orange-400 transform transition duration-500 hover:scale-[1.02] mt-8 sm:mt-12">
          <img :src="salmonDishPhoto2" alt="Creamy Salmon Dish" class="w-full h-full object-cover" />
        </div>
      </div>
    </template>

    <template #second>
      <div class="flex flex-col gap-2 justify-center items-center text-center lg:text-left lg:items-start lg:pl-8 w-full">
        <Leadtext :text="leadtext" />
        <Subtext :text="subtext" />
        <div class="mt-10 flex justify-center">
          <div class="w-32 h-1.5 bg-orange-500 rounded-full"></div>
        </div>

      </div>
    </template>

  </ContentBlock>
</template> 