<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue'
import IntroContent from '@/components/home-page/IntroContent.vue'
import IntroContent2 from '@/components/home-page/IntroContent2.vue'

</script>

<template>
  <main class="bg-primary">
    <div class="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 sm:grid-cols-12 text-center align-middle">
      <div class="sm:col-span-12">
        <NavigationBar />
      </div>
      <div class="sm:col-span-12 sm:px-6 px-4 pb-4">
        <IntroContent />
      </div>
      <div class="sm:col-span-12 sm:px-6 px-4 pb-4 my-8">
        <IntroContent2 />
      </div>
      <!--
      <div class="min-h-[10rem] bg-gray-500 text-white shadow sm:col-span-12 grid grid-cols-6 gap-4 p-4">
        <div class="min-h-[2rem] bg-gray-300 shadow sm:col-span-3 col-span-6">Event Spotlight Intro</div>
        <div class="min-h-[2rem] bg-gray-300 shadow sm:col-span-3 col-span-6">Event Spotlight Explore</div>
      </div>
      
      <div class="min-h-[4rem] bg-gray-400 shadow col-span-12 grid grid-cols-12 gap-4 p-1">
        <div class="min-h-[4rem] bg-gray-100 shadow sm:col-span-9">Email Input</div>
        <div class="min-h-[4rem] bg-gray-700 text-white shadow sm:col-span-3">Subscribe Button</div>
      </div>
      <div class="min-h-[2rem] bg-gray-600 text-white shadow col-span-12 text-center">Location & Copyright</div> -->
    </div>
  </main>
</template>
