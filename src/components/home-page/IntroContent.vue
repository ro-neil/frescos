<script setup lang="ts">
import { RouterLink } from 'vue-router';
import RoundedLink from '@/components/RoundedLink.vue';
import FoodImage1 from '@/assets/images/home/food1.png';
import FoodImage2 from '@/assets/images/home/food2.png';
import OverlappingImages from '@/components/OverlappingImages.vue';
import HomePageContent from './HomePageContent.vue';
</script>

<template>
  <HomePageContent id="home-section-intro">
    <div
      class="sm:col-span-6 flex flex-col gap-4 justify-center items-center sm:items-start text-center sm:text-left">
      <h2 class="text-4xl md:text-5xl lg:text-7xl font-bold md:!mb-2 lg:!mb-4">Island Flavor Meets Casual Elegance</h2>
      <p class="text-sm sm:text-base lg:text-lg font-normal max-w-lg">
        A local George Town favorite, serving up delicious meals in a relaxed and welcoming atmosphere for over 20
        years. Our menu features a fusion of caribbean and international flavors, crafted with fresh, locally sourced
        ingredients.
      </p>
      <RoundedLink :to="'/catering'" class="border-1 border-orange-400 bg-orange-400 text-white hover:!text-orange-400">
        <span>Book Private Event</span>
      </RoundedLink>
      <RouterLink to="/menu" class="flex items-center gap-1 !text-emerald-500">
        <span>View Daily Menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </svg>
      </RouterLink>
    </div>
    <div class="sm:col-span-6 flex items-center justify-center order-first sm:order-last">
      <div class="border-3 border-orange-400 rounded-full">
        <img :src="FoodImage1" alt="Delicious Food" loading="lazy"
          class="rounded-full size-[16rem] md:size-[18rem] lg:size-[30rem] xl:size-[36rem] object-cover">
      </div>
    </div>
  </HomePageContent>
</template>