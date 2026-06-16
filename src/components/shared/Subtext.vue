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
	<p v-bind="$attrs" class="text-base sm:text-lg lg:text-xl max-w-lg mb-4 tracking-tight leading-relaxed font-medium">{{ text }}</p>
</template>
