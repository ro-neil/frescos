<script setup lang="ts">
import NavigationBar from '@/components/shared/NavigationBar.vue';
import HeroBlock from '@/components/catering/HeroBlock.vue';
import VenueBlock from '@/components/catering/VenueBlock.vue';
import EventBookingBlock from '@/components/catering/EventBookingBlock.vue';
import NewsletterFooter from '@/components/shared/NewsletterFooter.vue';


</script>

<template>
  <main class="bg-primary dark:bg-gray-900 dark:text-white">
    <div class="flex flex-col">
      <NavigationBar />
      <HeroBlock />
      <VenueBlock /> 
      <EventBookingBlock />
      <NewsletterFooter />
    </div>
  </main>
</template>
