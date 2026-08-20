<script setup lang="ts">
import venueDisplay from '@/assets/images/catering/venue-display.jpg';

// Define props for full extensibility
interface Image {
  path: string;
  alt: string;
}

const image: Image = {
  path: venueDisplay,
  alt: "A photo of an indoor dining area.",
}

</script>

<template>
  <div class="w-full shadow-sm shadow-gray-200 transform transition duration-500 hover:scale-[1.02]">
    <img :src="image.path" :alt="image.alt" loading="eager" class="object-cover saturate-200 w-full max-h-150">
  </div>
</template>