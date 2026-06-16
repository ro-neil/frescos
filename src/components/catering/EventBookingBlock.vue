<script setup lang="ts">

import BookingForm from './BookingForm.vue';
import type { EventFormData } from './BookingForm.vue';
import ContentBlock from '@/components/shared/ContentBlock.vue';

// Setup props for maximum extensibility
const props = withDefaults(defineProps<{
  title?: string;
}>(), {
  title: 'Tell Us About Your Event',
});

const handleSubmit = (formData: { data: EventFormData, formReset: Function}) => {
  alert(`Thank you for your interest. We'll be in touch!`)
  console.log(`Submitted: ${JSON.stringify(formData)}`)
  formData.formReset()
}

</script>

<template>
  <ContentBlock class="sm:px-12 px-8 py-12 md:gap-8 bg-primary-darker sm:flex-col!">
    <template #A>
      <h2 class="text-4xl md:text-5xl font-serif text-slate-900 dark:text-slate-50 tracking-tight text-center">
        {{ title }}
      </h2>

    </template>
    <template #B>
      <BookingForm @submit="handleSubmit" class="lg:min-w-3xl max-w-4xl px-6 py-8 sm:px-10 sm:py-14 bg-primary rounded-xl"/>
    </template>
  </ContentBlock>
</template>