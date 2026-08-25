<script setup lang="ts">

interface Props {
  headerText: string;
}

const props = defineProps<Props>();
</script>


<template>
	<div class="flex flex-col gap-1 items-center justify-start">
		<slot name="icon" />			
		<h2 class="page-heading">{{ headerText }}</h2>
	</div>
</template>
