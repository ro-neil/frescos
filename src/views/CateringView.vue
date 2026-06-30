<script setup lang="ts">
import { ref, nextTick, type Ref } from 'vue';
import NavigationBar from '@/components/shared/NavigationBar.vue';
import HeroBlock from '@/components/catering/HeroBlock.vue';
import VenueBlock from '@/components/catering/VenueBlock.vue';
import EventBookingBlock from '@/components/catering/EventBookingBlock.vue';
import NewsletterFooter from '@/components/shared/NewsletterFooter.vue';

const eventBookingSection = ref();
const scrollToEventBooking = async () => {
  await nextTick()
  eventBookingSection.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

</script>

<template>
  <main class="bg-primary dark:bg-gray-900 dark:text-white">
    <div class="flex flex-col">
      <NavigationBar />
      <HeroBlock :buttonAction="scrollToEventBooking"/>
      <VenueBlock /> 
      <div ref="eventBookingSection">
        <EventBookingBlock />
      </div>
      <NewsletterFooter />
    </div>
  </main>
</template>
