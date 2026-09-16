<script setup lang="ts">
import SiteNavigation from '@/components/shared/SiteNavigation.vue';
import Copyright from '@/components/shared/Copyright.vue';
import ContactForm from '@/components/contact/ContactForm.vue';
import Amenities from '@/components/contact/Amenities.vue';
import MapConnection from '@/components/contact/MapConnection.vue';
import outdoorDining from '@/assets/images/catering/outdoor-dining.jpg';
import mapLocation from '@/assets/images/contact/map-location.png';

const location = {
  heading: 'Location & Hours',
  subheading: 'Join us at our island oasis on Grand Cayman.',
  image: outdoorDining,
  map: mapLocation,
  address: 'George Town, Grand Cayman',
  hours: 'Open Daily | 7:00 AM - 8:00 PM',
  serviceHours: '(Breakfast is served 7:30 AM - 11:00 AM)',
}

const copyrightText = `©2026 Fresco's, George Town, Grand Cayman.`;

const handleFormSubmit = (user: { name: string; email: string; message: string }) => {
  alert(`Form submitted with user input: ${JSON.stringify(user)}`);
  // Here you can handle the form submission, e.g., send the data to a server or API
};
</script>

<template>
  <div>
    <SiteNavigation />
    <MapConnection :map-image-src="location.map" class="" />
    <div class="flex flex-col sm:items-center gap-4 sm:gap-6 p-4">
      <div class="flex flex-col max-w-3xl text-center">
        <h1 class="page-heading text-slate-900 dark:text-slate-50">
          Get in touch
        </h1>
        <p class="text-description text-slate-700 dark:text-slate-300">
          Please fill out the form below and we'll get back to you shortly. We'd love to hear from you!
        </p>
      </div>
      <ContactForm class="my-5 sm:my-8 w-full max-w-3xl" @submit="handleFormSubmit" />
    </div>
    <Copyright :text="copyrightText" class="mt-6!" />
  </div>
</template>
