<script setup lang="ts">
import NavigationBar from '@/components/shared/NavigationBar.vue';
import HeroBlock from '@/components/home/HeroBlock.vue';
import ExperienceBlock from '@/components/home/ExperienceBlock.vue';
import EventSpotlightBlock from '@/components/home/EventSpotlightBlock.vue';
import NewsletterFooter from '@/components/shared/NewsletterFooter.vue';

</script>

<template>
  <main class="bg-primary dark:bg-gray-900 dark:text-white">
    <div class="flex flex-col">
      <NavigationBar />
      <HeroBlock />
      <ExperienceBlock />
      <EventSpotlightBlock />
      <NewsletterFooter />
    </div>
  </main>
</template>
