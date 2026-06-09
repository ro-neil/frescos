<script setup lang="ts">
defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>


<template>
	<p class="text-sm sm:text-base lg:text-lg font-normal max-w-lg mb-4">{{ text }}</p>
</template>
