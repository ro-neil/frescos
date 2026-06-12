<script setup lang="ts">
import { useBrand } from '@/composables/useBrand'
import { RouterLink } from 'vue-router'
defineOptions({ inheritAttrs: false })
const brand = useBrand();
</script>

<template>
  <div class="brand">
      <RouterLink 
        v-bind="$attrs"
        :to="'/'" 
        class="font-semibold text-2xl dark:hover:decoration-emerald-600! hover:decoration-emerald-800 tracking-wide transition-all">
        <h1 class="">{{ brand }}</h1>
      </RouterLink>
  </div>
</template>

<style scoped>

</style>
