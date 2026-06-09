<script setup lang="ts">
defineOptions({ inheritAttrs: false })
</script>

<template>
  <section v-bind="$attrs" class="content-block flex flex-col sm:flex-row justify-between items-center gap-5">
    <slot name="first" />
    <slot name="second" />
  </section>
</template>