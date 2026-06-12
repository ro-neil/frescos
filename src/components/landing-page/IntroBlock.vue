<script setup lang="ts">
import ContentBlock from './ContentBlock.vue';
import Link from '@/components/utils/Link.vue';
import eggDishPhoto from '@/assets/images/home/egg-dish.jpg';
import Leadtext from './Leadtext.vue';
import Subtext from './Subtext.vue';
import IconRightArrow from '@/components/icons/IconRightArrow.vue';

const leadText: string = 'Island Flavor Meets Casual Elegance';
const subtext: string = 'A local George Town favorite, serving up delicious meals in a relaxed and welcoming atmosphere for over 20\
      years. Our menu features a fusion of caribbean and international flavors, crafted with fresh, locally sourced\
      ingredients.';
const bookEventText: string = 'Book Private Event';
const viewMenuText: string = 'View Menu';
</script>

<template>
  <ContentBlock class="sm:px-6 px-4 pt-8! md:gap-8">
    <template #first>
      <div class="flex flex-col gap-2 justify-center items-center text-center w-full sm:items-start sm:text-left">
        <Leadtext :text="leadText" class=""/>
        <Subtext :text="subtext" />
        <div class="controls !mt-5 flex flex-col gap-4 items-center">
          <Link :to="'/catering'" :text="bookEventText" 
            class="border-orange-400 bg-orange-400 text-primary hover:bg-transparent hover:text-orange-500! hover:no-underline! 
            dark:hover:text-white! dark:hover:bg-transparent" />
          <Link to="/menu" :text="viewMenuText" :iconEnd="true" 
          class="border-none text-emerald-500! dark:text-emerald-400! py-0! sm:px-0! hover:text-emerald-600! dark:hover:text-emerald-500!" >
            <template #icon>
              <IconRightArrow />
            </template>
          </Link>
        </div>
      </div>
    </template>
    <template #second>
      <div class="flex items-center justify-center sm:justify-end order-first sm:order-last w-full">
        <div class="rounded-full shadow-lg shadow-orange-400 transform transition duration-500 hover:scale-[1.02]">
          <img :src="eggDishPhoto" alt="A photo of a delicious meal prepared with boiled eggs and fresh ingredients" loading="eager"
            class="rounded-full size-[16rem] md:size-[18rem] lg:size-[30rem] xl:size-[36rem] object-cover saturate-200">
        </div>
      </div>
    </template>
  </ContentBlock>
</template>