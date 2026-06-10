<script setup lang="ts">
defineOptions({ inheritAttrs: false });
defineProps({
    text: {
        type: String,
        required: true
    }
});
</script>


<template>
	<p v-bind="$attrs" class="text-sm sm:text-base lg:text-lg font-normal max-w-lg mb-4">{{ text }}</p>
</template>
