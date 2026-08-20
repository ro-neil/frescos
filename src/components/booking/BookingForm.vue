<script setup lang="ts">
import { ref } from 'vue';

// Define the shape of our form data for TypeScript support
export interface EventFormData {
	fullName: string;
	email: string;
	eventDate: string;
	guestCount: number | null;
	eventType: string;
}

// Setup props for maximum extensibility
const props = withDefaults(defineProps<{
	buttonText?: string;
	eventTypes?: string[];
}>(), {
	buttonText: 'Submit Request',
	eventTypes: () => ['Private Indoor Dining', 'Off-site Catering', 'Outdoor Patio Event']
});

// Emit the form data payload up to the parent component
const emit = defineEmits<{
	(e: 'submit', payload: {
		data: EventFormData,
		formReset: Function
	}): void;
}>();

const getNewForm = () => {
	return {
		fullName: '',
		email: '',
		eventDate: '',
		guestCount: null,
		eventType: ''
	}
}

// Initialize reactive state
const formData = ref<EventFormData>(getNewForm());

const resetForm = () => {
	formData.value = getNewForm();
}

const submitForm = () => {
	emit('submit', {
		data: formData.value,
		formReset: resetForm
	});
	console.log('Emitted submit:', {
		data: formData.value,
		formReset: resetForm
	})
};

</script>

<template>
	<form @submit.prevent="submitForm" class="grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-5">

		<div class="sm:col-span-3">
			<label for="fullName" class="font-semibold">Full Name</label>
			<input id="fullName" v-model="formData.fullName" type="text" placeholder="" maxlength="50" required
				class="w-full px-4 py-2 bg-white dark:bg-gray-700 dark:text-white! border border-slate-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white-500 transition-colors" />
		</div>

		<div class="sm:col-span-3">
			<label for="email" class="font-semibold ">Email Address</label>
			<input id="email" v-model="formData.email" type="email" placeholder="" required
				class="w-full px-4 py-2 bg-white dark:bg-gray-700 dark:text-white! border border-slate-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white-500 transition-colors" />
		</div>

		<div class="sm:col-span-3 md:col-span-2">
			<label for="eventDate" class="font-semibold ">Event Date</label>
			<input 
				id="eventDate" 
				v-model="formData.eventDate" 
				type="date"
				required
				class="w-full px-4 py-2 bg-white dark:bg-gray-700 dark:text-white! border border-slate-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:border-white focus:ring-1 focus:ring-white-100 transition-colors" />
		</div>

		<div class="sm:col-span-3 md:col-span-2">
			<label for="guestCount" class="font-semibold ">Estimated Guest Count</label>
			<input id="guestCount" v-model="formData.guestCount" type="number" min="1"
				placeholder="" max="500" required
				class="w-full px-4 py-2 bg-white dark:bg-gray-700 dark:text-white! border border-slate-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white-100 transition-colors" />
		</div>

		<div class="sm:col-span-6 md:col-span-2 relative">
			<label for="eventType" class="font-semibold ">Event Type</label>
			<select id="eventType" v-model="formData.eventType" required
				class="w-full px-4 py-2 bg-white dark:bg-gray-700 dark:text-white! border border-slate-300 rounded-md shadow-sm text-gray-700 appearance-none focus:outline-none focus:border-white focus:ring-1 focus:ring-white-500 transition-colors cursor-pointer">
				<option value="" disabled>Select Event Type</option>
				<option v-for="option in eventTypes" :key="option" :value="option">
					{{ option }}
				</option>
			</select>

			<div class="pointer-events-none absolute inset-y-0 top-7 right-0 flex items-center px-2 text-gray-500">
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
				</svg>
			</div>
		</div>

		<div class="sm:col-span-6 mt-3!">
			<button type="submit"
				class="bg-orange-400 text-slate-100! border-orange-400 hover:!bg-transparent hover:border-orange-300 hover:text-orange-400! w-full rounded-full! py-2 px-6 border-2 focus:outline-none focus:ring-4 focus:ring-white-300 font-medium rounded-md text-base sm:text-lg transition-colors duration-200 cursor-pointer">
				{{ buttonText }}
			</button>
		</div>

	</form>
</template>

<style scoped>
label {
  display: inline-block;
  margin-bottom: 0.25rem;
}
</style>
