<script setup lang="ts">
defineOptions({ inheritAttrs: false });
defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>

<template>
	<h2 v-bind="$attrs" class="text-4xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-3! lg:mb-6! text-shadow-xs text-shadow-gray-800 tracking-tighter">{{ text }}</h2>
</template>
