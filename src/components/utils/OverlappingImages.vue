<script setup lang="ts">
defineProps({
  backImage: {
    type: String,
    required: true,
    description: 'The image that sits in the background (top)'
  },
  frontImage: {
    type: String,
    required: true,
    description: 'The larger image that overlaps the background (bottom)'
  }
});
</script>

<template>
  <div class="relative size-[16rem] md:size-[18rem] lg:size-[30rem] mx-auto">
    
    <div class="absolute top-0 left-0 z-0">
      <img
        :src="backImage"
        alt="Background image"
        class="w-64 h-64 object-cover rounded-full border-5 border-orange-400 shadow-md"
      />
    </div>

    <div class="absolute top-[100px] left-[50px] z-10">
      <img
        :src="frontImage"
        alt="Foreground image"
        class="w-72 h-72 object-cover rounded-full border-5 border-orange-400 shadow-xl"
      />
    </div>
    
  </div>
</template>