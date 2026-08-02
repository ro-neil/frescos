<script setup lang="ts">
import { ref, nextTick, type Ref } from 'vue';
import SiteNavigation from '@/components/shared/SiteNavigation.vue';
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
  <div class="bg-primary dark:bg-gray-900 dark:text-white">
    <div class="flex flex-col">
      <SiteNavigation />
      <HeroBlock :buttonAction="scrollToEventBooking"/>
      <VenueBlock /> 
      <div ref="eventBookingSection">
        <EventBookingBlock />
      </div>
      <NewsletterFooter />
    </div>
  </div>
</template>
