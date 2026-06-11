<script setup lang="ts">
import { ref } from 'vue';
import Subtext from '@/components/landing-page/Subtext.vue';

// Define props for full extensibility
interface Props {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  copyright?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Connect With Us",
  subtitle: "Subscribe for seasonal event menu updates and island happenings.",
  placeholder: "Enter your e-mail",
  buttonText: "Subscribe Now",
  copyright: `©2026 Fresco's, George Town, Grand Cayman.`
});

// Emit the email value to the parent component when the form is submitted
const emit = defineEmits<{
  (e: 'subscribe', email: string): void;
}>();

const emailInput = ref('');

const handleSubmit = () => {
  if (emailInput.value.trim()) {
    emit('subscribe', emailInput.value);
    emailInput.value = ''; // clear input after submission
  }
};
</script>

<template>
  <footer class="w-full flex justify-center pt-8 pb-4 md:pt-12 px-4 sm:px-6 transition-colors duration-300 dark:bg-slate-950">
    <div class="flex flex-col align-center gap-3 text-center ">
      
      <h2 class="text-4xl md:text-5xl font-serif text-slate-900 dark:text-slate-50 mb-3 tracking-tight">
        {{ title }}
      </h2>
      <Subtext :text="subtitle" class="text-slate-700 dark:text-slate-300" />

      <form 
        @submit.prevent="handleSubmit" 
        class="flex flex-col sm:flex-row gap-3 mb-10 max-w-3xl sm:mx-auto"
      >
        <label class="sr-only" for="email-input">Email address</label>
        <input 
          id="email-input"
          v-model="emailInput"
          type="email" 
          required
          :placeholder="placeholder"
          class="flex-1 px-4 py-2 rounded border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent transition-all dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:ring-slate-300"
        />
        
        <button 
          type="submit"
          class="px-4 py-2 rounded-full cursor bg-slate-700 text-white font-medium hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all whitespace-nowrap dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:focus:ring-slate-200 dark:focus:ring-offset-slate-950"
        >
          <div class="flex justify-center gap-2">
            <span class="text-base sm:text-lg!">{{ buttonText }}</span>     
          </div>
        </button>
        
      </form>

      <div class="border-t border-slate-200 dark:border-slate-800 pt-2 mt-4! text-center">
        <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">
          {{ copyright }}
        </p>
      </div>
      
    </div>
  </footer>
</template>