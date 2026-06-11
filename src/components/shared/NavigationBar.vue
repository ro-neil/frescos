<script setup lang="ts">
import Brand from '@/components/utils/Brand.vue'
import NavigationMenu from './NavigationMenu.vue'

</script>

<template>
	<header>
	    <div class="flex justify-between items-center sm:px-6 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
	      <Brand class="text-shadow-xs text-shadow-gray-700/75"/>
	      <NavigationMenu class="sm:block hidden" />
	    </div>
	  </header>
</template>

<style scoped>

</style>
