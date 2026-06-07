<script setup lang="ts">
import FoodImage2 from '@/assets/images/home/food2.png';
import HomePageContent from './HomePageContent.vue';
</script>

<template>
  <HomePageContent id="home-section-intro">
    <div class="sm:col-span-6 flex items-center justify-center sm:justify-start">
      <div class="border-3 border-orange-400 rounded-full">
        <img :src="FoodImage2" alt="Delicious Food" loading="lazy"
          class="rounded-full size-[16rem] md:size-[18rem] lg:size-[30rem] xl:size-[36rem] object-cover">
      </div>
    </div>
    <div class="sm:col-span-6 flex flex-col gap-4 justify-center sm:items-end text-center sm:text-left">
      <h2 class="text-4xl md:text-5xl lg:text-7xl font-bold md:!mb-2 lg:!mb-4">Experience Real Taste</h2>
      <p class="text-sm sm:text-base lg:text-lg font-normal">
        Our casual, cozy, family-friendly indoor and outdoor seating options welcome tourists and locals alike. 
        We offer a wide range of local specialties alongside international favorites, 
        ensuring there is something to love for everyone, including dedicated vegetarian and vegan dishes.
      </p>
    </div>
  </HomePageContent>
</template>