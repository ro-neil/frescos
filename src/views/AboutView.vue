<script setup lang="ts">
import NavigationBar from '@/components/navigation/NavigationBar.vue'
</script>

<template>
  <div class="about">
    <NavigationBar />
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
