<script setup lang="ts">
import MenuItemCard from '@/components/menu/MenuItemCard.vue';
import type { Meal } from '@/types/Meal';

interface Props {
    name: string,
    orientation?: 'horizontal' | 'vertical';
    items: Meal[];
    itemCardClasses?: string;
}

const props = withDefaults(defineProps<Props>(), {
    orientation: 'vertical',
    reverse: false,
});


</script>

<template>
    <div class="rounded-2xl pb-10 w-full max-w-4xl">
        <div class="grid grid-cols-1 gap-5 max-w-4xl mx-auto mt-5!"
            :class="{ 'md:grid-cols-2': orientation === 'vertical' }">
            <MenuItemCard v-for="(meal, index) in items" :key="index" :name="meal.name" :description="meal.description"
                :price="meal.price" :image="meal.image" :orientation="orientation"
                :reverse="orientation === 'horizontal' && (index % 2 === 1)"
                :class="itemCardClasses" />
        </div>
    </div>
</template>