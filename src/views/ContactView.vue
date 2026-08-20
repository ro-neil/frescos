<script setup lang="ts">
import SiteNavigation from '@/components/shared/SiteNavigation.vue';
import NewsletterFooter from '@/components/shared/NewsletterFooter.vue';
import LocationHours from '@/components/contact/LocationHours.vue';
import Amenities from '@/components/contact/Amenities.vue';
import MapConnection from '@/components/contact/MapConnection.vue';
import outdoorDining from '@/assets/images/catering/outdoor-dining.jpg';

const location = {
  image: outdoorDining,
  map: outdoorDining,

  address: 'George Town, Grand Cayman',
  hours: 'Open Daily | 7:00 AM – 8:00 PM',
  serviceHours: '(Breakfast served 7:30 AM – 11:00 AM)',
}
</script>

<template>
  <div>
    <SiteNavigation />
    <div class="w-full overflow-hidden">
      <LocationHours :image-src="location.image" :address="location.address" :hours="location.hours"
        :service-hours="location.serviceHours" />

      <Amenities />

      <MapConnection :map-image-src="location.map" />
    </div>
    <NewsletterFooter />
  </div>
</template>
