<script setup lang="ts">
import NavigationBar from '@/components/shared/NavigationBar.vue';
import IntroBlock from '@/components/landing-page/IntroBlock.vue';
import ExperienceBlock from '@/components/landing-page/ExperienceBlock.vue';
import EventSpotlightBlock from './EventSpotlightBlock.vue';
import NewsletterFooter from '../shared/NewsletterFooter.vue';

</script>

<template>
  <main class="bg-primary dark:bg-gray-900 dark:text-white">
    <div class="flex flex-col">
      <NavigationBar />
      <IntroBlock />
      <ExperienceBlock />
      <EventSpotlightBlock />
      <NewsletterFooter />
    </div>
  </main>
</template>
