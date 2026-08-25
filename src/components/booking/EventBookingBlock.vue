<script setup lang="ts">

import BookingForm from './BookingForm.vue';
import type { EventFormData } from './BookingForm.vue';

// Setup props for maximum extensibility
const props = withDefaults(
  defineProps<{
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
  <section class="section-container bg-primary-darker dark:bg-slate-800!">
      <h2 class="page-heading text-dark text-center">
        {{ title }}
      </h2>
      <BookingForm @submit="handleSubmit" class="w-full lg:min-w-3xl max-w-4xl p-6 sm:px-10 sm:py-12 bg-primary dark:bg-slate-700 rounded-xl"/>
  </section>
</template>