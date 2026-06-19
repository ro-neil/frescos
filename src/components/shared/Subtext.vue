<script setup lang="ts">
defineOptions({ inheritAttrs: false });
defineProps({
    text: {
        type: String,
        required: false
    }
});
</script>


<template>
	<p v-if="text" v-bind="$attrs" class="text-base sm:text-lg lg:text-xl max-w-lg mb-4 tracking-tight leading-relaxed font-medium">{{ text }}</p>
    <p v-else class="text-base sm:text-lg lg:text-xl max-w-lg mb-4 tracking-tight leading-relaxed font-medium">
        <slot  ></slot>
    </p> 
</template>
