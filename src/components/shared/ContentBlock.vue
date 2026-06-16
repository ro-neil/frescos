<script setup lang="ts">
defineOptions({ inheritAttrs: false })
</script>

<template>
  <section v-bind="$attrs" class="content-block flex flex-col sm:flex-row justify-between items-center gap-8 md:gap-8 lg:gap-12 py-12 sm:py-24">
    <slot name="A" />
    <slot name="B" />
  </section>
</template>