<script setup lang="ts">
import ContentBlock from './ContentBlock.vue';
import Link from '@/components/utils/Link.vue';
import veganSalad from '@/assets/images/home/vegan-salad.jpg';
import Leadtext from './Leadtext.vue';
import Subtext from './Subtext.vue';

const leadText: string = 'Event Spotlight';
const subtext: string = 'A local George Town favorite, serving up delicious meals in a relaxed and welcoming atmosphere for over 20\
      years. Our menu features a fusion of caribbean and international flavors, crafted with fresh, locally sourced\
      ingredients.';
</script>

<template>
  <ContentBlock class="sm:px-6 px-4 py-16 mb-4 sm:!mb-8 bg-gray-200">
    <template #first>
      <div class="flex flex-col gap-4 justify-center items-center text-center w-full sm:items-start sm:text-left">
        <Leadtext :text="leadText" class=""/>
        <Subtext :text="subtext" />
      </div>
    </template>
    <!-- <template #second>
      <div class="flex items-center justify-center sm:justify-end order-first sm:order-last w-full !p-5">
        <div class="rounded-full shadow-lg shadow-orange-400">
          <img :src="veganSalad" alt="A photo of a delicious vegan salad" loading="lazy"
            class="rounded-full size-[16rem] md:size-[18rem] lg:size-[30rem] xl:size-[36rem] object-cover">
        </div>
      </div>
    </template> -->
  </ContentBlock>
</template>