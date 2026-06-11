<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { routes } from '@/router/index.ts'
import { computed } from 'vue'

const filteredRoutes = computed(() => routes.filter(r => r.path !== '/'));
</script>

<template>
	<nav>
		<ul class="flex gap-4 justify-end m-0 p-0 list-none">
			<li v-for="route in filteredRoutes" :key="route.name">
				<RouterLink :to="route.path">
					{{ route.name }}
				</RouterLink>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
nav {
  font-size: 1rem;
  /* padding: 1rem 0;
  margin-top: 1rem; */
}


nav li {
  margin: 0;
}

</style>
