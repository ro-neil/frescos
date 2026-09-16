<script setup lang="ts">
defineProps<{
	text: string;
}>()
</script>

<template>
	<div class="border-t border-slate-200 dark:border-slate-800 pt-3 text-center">
		<p class="text-sm text-slate-500 dark:text-slate-400 font-medium">
			{{ text }}
		</p>
	</div>
</template>
