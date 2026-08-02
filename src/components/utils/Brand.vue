<script setup lang="ts">
import { useBrand } from '@/composables/restaurant-brand';
import { RouterLink } from 'vue-router';
defineOptions({ inheritAttrs: false })
const brand = useBrand();
</script>

<template>
  <div class="brand">
      <RouterLink 
        v-bind="$attrs"
        :to="'/'" 
        class="font-semibold text-xl sm:text-2xl tracking-wide transition-all">
        <h1 class="">{{ brand }}</h1>
      </RouterLink>
  </div>
</template>

<style scoped>

</style>
