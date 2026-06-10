<script setup lang="ts">
import salmonDishPhoto from '@/assets/images/home/salmon-dish-1.jpg';
import salmonDishPhoto2 from '@/assets/images/home/salmon-dish-2.jpg';
import salmonDishPhoto3 from '@/assets/images/home/salmon-dish-3.jpg';
import Leadtext from './Leadtext.vue';
import Subtext from './Subtext.vue';
import ContentBlock from './ContentBlock.vue';
import ImagePot from '@/components/utils/ImagePot.vue';

const leadtext: string = 'Experience Real Taste';
const subtext: string = 'Our casual, cozy, family-friendly indoor and outdoor seating options welcome tourists and locals alike. \
We offer a wide range of local specialties alongside international favorites, ensuring there is something to love for everyone, \
including dedicated vegetarian and vegan dishes.';
const images: Array<string> = [salmonDishPhoto3, salmonDishPhoto2, salmonDishPhoto];

</script>

<template>
  <ContentBlock class="sm:px-6 px-4 pb-4 my-8 lg:gap-8">
    <template #first>
      <div class="flex items-center justify-center w-full sm:items-start">
        <ImagePot :images='images' :item-class="'shadow-lg shadow-orange-400'"/>
      </div>  
    </template>
    <template #second>
      <div class="flex flex-col gap-4 justify-center items-center text-center w-full sm:items-end sm:text-right">
        <Leadtext :text="leadtext" class=""/>
        <Subtext :text="subtext"/>
      </div>
    </template>
  </ContentBlock>
</template>