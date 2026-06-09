<script setup lang="ts">
import NavigationBar from '@/components/navigation/NavigationBar.vue';
import IntroBlock from '@/components/landing-page/IntroBlock.vue';
import ExperienceBlock from '@/components/landing-page/ExperienceBlock.vue';
import EventSpotlightBlock from './EventSpotlightBlock.vue';
import SubscriberBlock from './SubscriberBlock.vue';

</script>

<template>
  <main class="bg-primary">
    <div class="flex flex-col gap-4 md:gap-6 lg:gap-8">
      <NavigationBar />
      <IntroBlock />
      <ExperienceBlock />
      <EventSpotlightBlock />
      <SubscriberBlock />
      
      <div class="min-h-[4rem] bg-gray-400 shadow col-span-12 grid grid-cols-12 gap-4 p-1">
        <div class="min-h-[4rem] bg-gray-100 shadow sm:col-span-9">Email Input</div>
        <div class="min-h-[4rem] bg-gray-700 text-white shadow sm:col-span-3">Subscribe Button</div>
      </div>
      <div class="min-h-[2rem] bg-gray-600 text-white shadow col-span-12 text-center">Location & Copyright</div>
    </div>
  </main>
</template>
