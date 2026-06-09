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
	<h2 v-bind="$attrs" class="text-4xl md:text-5xl lg:text-7xl font-bold md:!mb-2 lg:!mb-4 text-shadow-xs text-shadow-gray-800">{{ text }}</h2>
</template>
