<script setup lang="ts">
import SiteNavigation from '@/components/shared/SiteNavigation.vue';
import HeroBlock from '@/components/home/HeroBlock.vue';
import ExperienceBlock from '@/components/home/ExperienceBlock.vue';
import EventSpotlightBlock from '@/components/home/EventSpotlightBlock.vue';
import NewsletterFooter from '@/components/shared/NewsletterFooter.vue';

</script>

<template>
  <div class="bg-primary dark:bg-gray-900 dark:text-white">
    <div class="flex flex-col">
      <SiteNavigation />
      <HeroBlock />
      <ExperienceBlock />
      <EventSpotlightBlock />
      <NewsletterFooter />
    </div>
  </div>
</template>
