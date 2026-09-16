<script setup lang="ts">
import { reactive } from 'vue';

// Emit the user input values to the parent component when the form is submitted
const emit = defineEmits<{
    (e: 'submit', user: { name: string; email: string; message: string }): void;
}>();

const userInput = reactive({
    name: '',
    email: '',
    message: ''
});

const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validateForm = (): boolean => {
    userInput.name = userInput.name.trim();
    userInput.email = userInput.email.trim();
    userInput.message = userInput.message.trim();
    return (
        userInput.name !== '' &&
        validateEmail(userInput.email) &&
        userInput.message !== ''
    );
};

const clearForm = () => {
    const keys = Object.keys(userInput);
    keys.forEach((key, index) => {
        setTimeout(() => {
            userInput[key as keyof typeof userInput] = '';
        }, index * 60);      
    });
};

const handleSubmit = () => {
    if (validateForm()) {
        emit('submit', userInput);
        clearForm();
    } else {
        alert('Please fill out all fields correctly.');
    }
};  
</script>

<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 max-w-3xl">
        <input id="name-input" v-model="userInput.name" type="text" required :placeholder="'Enter your name'"
            class="flex-1 px-4 text-base sm:text-lg text-semibold py-2 rounded-md border-2 
            border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none 
            focus:ring-2 focus:ring-slate-800 focus:border-transparent transition-all 
            dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100 dark:placeholder-slate-500 
            dark:focus:ring-slate-300" 
        />

        <input id="email-input" v-model="userInput.email" type="email" required :placeholder="'Enter your email'"
            class="flex-1 px-4 text-base sm:text-lg text-semibold py-2 rounded-md border-2 
            border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none 
            focus:ring-2 focus:ring-slate-800 focus:border-transparent transition-all 
            dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100 dark:placeholder-slate-500 
            dark:focus:ring-slate-300" 
        />

        <textarea id="message-input" v-model="userInput.message" required :placeholder="'Enter your message'"
            class="flex-1 px-4 text-base sm:text-lg text-semibold py-2 rounded-md border-2 
            border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none 
            focus:ring-2 focus:ring-slate-800 focus:border-transparent transition-all 
            dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100 dark:placeholder-slate-500 
            dark:focus:ring-slate-300" 
            rows="5"
        />

        <button type="submit"
            class="px-4 py-2 rounded-full cursor-pointer bg-slate-700 border-2 border-slate-700 text-white 
            font-medium hover:bg-transparent hover:text-slate-800 focus:outline-none focus:ring-2 
            focus:ring-offset-2 focus:ring-slate-900 transition-all whitespace-nowrap dark:bg-slate-100 
            dark:text-slate-900 dark:hover:bg-white dark:focus:ring-slate-200 dark:focus:ring-offset-slate-950"
        >
            <div class="flex justify-center gap-2">
                <span class="text-base sm:text-lg!">Submit</span>
            </div>
        </button>

    </form>
</template>