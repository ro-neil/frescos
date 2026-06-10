<script setup lang="ts">
import ContentBlock from './ContentBlock.vue';
import Link from '@/components/utils/Link.vue';
import veganSalad from '@/assets/images/home/vegan-salad.jpg';
import Leadtext from './Leadtext.vue';
import Subtext from './Subtext.vue';

const leadText: string = "Host Your Next Gathering With Us";
const subtext1: string = 'Event Spotlight';
const subtext2: string = "From intimate group celebrations in our comfy, air-conditioned \
Private Dining Room, to large-scale island catering, \
Fresco's provides bespoke menus and seamless service to your special event.";
const subtext3: string = "Let's create an unforgettable experience for you!";
const exploreCateringText: string = 'Explore Catering & Private Dining';
</script>

<template>
  <ContentBlock class="sm:px-6 px-4 py-16 mb-4 sm:!mb-8 bg-slate-700 !text-white">
    <template #first>
      <div class="flex flex-col gap-4 justify-center items-center text-center w-full sm:items-start sm:text-left">
        <Subtext :text="subtext1" class="!font-bold text-orange-200"/>
        <Leadtext :text="leadText" class=""/>
        <Subtext :text="subtext2" />
        <Subtext :text="subtext3" class="!mb-3"/>
        <Link :to="'/catering'" :text="exploreCateringText" class="hover:!no-underline bg-white text-slate-800 border-white hover:!bg-transparent hover:!text-white" />
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