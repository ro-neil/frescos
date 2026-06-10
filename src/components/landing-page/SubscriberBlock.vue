<script setup lang="ts">
import ContentBlock from './ContentBlock.vue';

</script>

<template>
  <ContentBlock class="sm:px-6 px-4 pb-4 mb-4 sm:!mb-8">
    <template #first>
      <form @submit.prevent="console.log('Subscribed')" class="flex justify-evenly w-full gap-8">
        <input type="email" name="subscriber-email" placeholder="Enter your email" class="border-2 border-slate-300 px-2 w-full rounded-sm font-medium" />
        <button type="submit" 
          class="rounded-full border-1 border-slate-700 font-semibold text-white 
          bg-slate-800 px-8 py-2 cursor-pointer hover:bg-slate-800">Subscribe</button>
      </form>
      
    </template>
    <template #second>
      
    </template>
  </ContentBlock>
</template>