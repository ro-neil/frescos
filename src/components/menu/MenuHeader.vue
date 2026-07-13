<script setup lang="ts">

import Leadtext from '@/components/shared/Leadtext.vue';

interface Props {
  headerText: string;
}

const props = defineProps<Props>();
</script>


<template>
	<div class="flex flex-col gap-2 items-center justify-start">
		<slot name="icon" />			
		<Leadtext :text="headerText" class="tracking-tight text-center text-2xl md:text-5xl lg:text-7xl" />
	</div>
</template>
