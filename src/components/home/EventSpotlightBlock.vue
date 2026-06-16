<script setup lang="ts">
import ContentBlock from '@/components/shared/ContentBlock.vue';
import Link from '@/components/utils/Link.vue';
import Leadtext from '@/components/shared/Leadtext.vue';
import Subtext from '@/components/shared/Subtext.vue';
import IconNorthEastArrow from '@/components/icons/IconNorthEastArrow.vue';
import { routeMap } from '@/router/index.ts'

const cateringRoute: string = String(routeMap.catering);
const leadText: string = "Host Your Next Gathering With Us";
const subtext1: string = 'Event Spotlight';
const subtext2: string = "From intimate group celebrations in our comfy, air-conditioned \
Private Dining Room, to large-scale island catering, \
we provide bespoke menus and seamless service for your special event.";
const subtext3: string = "Wi likkle, but wi tallawah!";
const exploreCateringText: string = 'Explore Catering & Private Dining';
const shortLinks = [
  {
    title: 'Private Dining Room',
    body: 'A cozy, air-conditioned indoor space perfect for groups.',
    to: cateringRoute
  },
  {
    title: 'Island Catering',
    body: 'Full service catering tailored entirely to your venue and guest needs.',
    to: cateringRoute
  },
]

</script>

<template>
  <ContentBlock class="sm:px-6 px-4 md:gap-8 bg-slate-700 !text-white">
    <template #A>
      <div class="flex flex-col gap-4 justify-center items-center text-center sm:text-left sm:items-start w-full">
        <Subtext :text="subtext1" class="font-bold! text-base! sm:text-lg! uppercase" />
        <Leadtext :text="leadText" class="" />
        <Subtext :text="subtext2" />
        <Subtext :text="subtext3" class="!mb-3 tracking-wide decoration-orange-400 underline decoration-wavy underline-offset-4" />
        <Link :to="cateringRoute" :text="exploreCateringText"
          class="hover:!no-underline text-white border-white hover:!bg-white hover:!text-slate-800 md:hidden" />
      </div>
    </template>
    <template #B>
      <div class="hidden w-[60%] md:flex md:flex-col md:justify-between md:gap-6 md:!p-4">
        <Link v-for="link in shortLinks" 
          :to="cateringRoute" :icon-end="true"
          class="border-none hover:!no-underline !px-0 items-start group transition-all">
          <span class="text-white group-hover:text-orange-300!">&Barv;</span>
          <div class="flex flex-col gap-2">
            <p class="text-base text-white sm:text-lg font-bold uppercase group-hover:underline group-hover:text-orange-300!">{{ link.title }}</p>
            <Subtext :text="link.body" class="text-white tracking-tight text-pretty" />
            <hr class="text-slate-500/25 !mt-2" />
          </div>
          <template #icon>
              <IconNorthEastArrow class="text-white group-hover:!text-orange-300"/>
          </template>
        </Link>
        <Link :to="cateringRoute" :text="exploreCateringText"
          class="hover:!no-underline bg-white text-gray-900! border-white hover:!bg-transparent hover:!text-white text-nowrap" />
      </div>
    </template>
  </ContentBlock>
</template>