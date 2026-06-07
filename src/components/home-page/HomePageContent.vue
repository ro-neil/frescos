<script setup lang="ts">
defineOptions({ inheritAttrs: false })
</script>

<template>
  <section v-bind="$attrs" class="home-section grid grid-cols-1 gap-5 sm:grid-cols-12">
    <slot />
  </section>
</template>