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
const viewMenuText: string = 'View Daily Menu';
</script>

<template>
  <ContentBlock class="sm:px-6 px-4 pb-4 mb-4 sm:!mb-8">
    <template #first>
      <div class="flex flex-col gap-4 justify-center items-center text-center w-full sm:items-start sm:text-left">
        <Leadtext :text="leadText" class=""/>
        <Subtext :text="subtext" />
        <div class="controls !mt-5 flex flex-col gap-4">
          <Link :to="'/catering'" :text="bookEventText" class="border-orange-400 bg-orange-400 !text-[var(--color-primary)] hover:bg-transparent hover:!text-orange-500 hover:!no-underline" />
          <Link to="/menu" :text="viewMenuText" :iconEnd="true" class="!text-emerald-500 border-none !py-0 sm:!px-0 hover:!text-emerald-600" >
            <template #icon>
              <IconRightArrow />
            </template>
          </Link>
        </div>
      </div>
    </template>
    <template #second>
      <div class="flex items-center justify-center sm:justify-end order-first sm:order-last w-full !p-5">
        <div class="rounded-full shadow-lg shadow-orange-400">
          <img :src="eggDishPhoto" alt="A photo of a delicious meal prepared with boiled eggs and fresh ingredients" loading="lazy"
            class="rounded-full size-[16rem] md:size-[18rem] lg:size-[30rem] xl:size-[36rem] object-cover">
        </div>
      </div>
    </template>
  </ContentBlock>
</template>