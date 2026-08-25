<script setup lang="ts">
import outdoorDining from '@/assets/images/catering/outdoor-dining.jpg';

const props = defineProps({
    buttonAction: {
        type: Function,
        required: true
    }
})

const pageHeading: string = 'Island Catering & Private Dining';
const subtext: string = "We offer both comfortable indoor dining and scenic outdoor seating. Serving a diverse fusion of local specialties and international favorites.";
const inquireNowText: string = 'Inquire Now';

</script>

<template>
  <section class="section-container sm:flex-row!">
      <div class="flex flex-col gap-2 justify-center items-center text-center w-full sm:items-start sm:text-left">
        <h2 class="page-heading text-dark">{{ pageHeading }}</h2>
        <p class='text-description'>{{ subtext }}</p>
        <div class="controls !mt-5 flex flex-col gap-4 items-center">
          <button @click="buttonAction()"
            class="cursor-pointer border-orange-400 bg-orange-400 text-primary hover:bg-transparent hover:text-orange-500! hover:no-underline! 
            dark:hover:text-white! dark:hover:bg-transparent rounded-link flex items-center gap-1 border-2 px-4 py-2 rounded-full transition-colors 
        duration-100 ease-in-out font-medium text-gray-900 dark:text-white hover:text-white dark:hover:text-gray-900 text-base sm:text-lg!" > {{ inquireNowText }}
          </button>
        </div>
      </div>

      <div class="flex items-center justify-center sm:justify-end order-first sm:order-last w-full">
        <div class="rounded-full shadow-lg shadow-orange-400 transform transition duration-500 hover:scale-[1.02]">
          <img :src="outdoorDining" alt="A photo of a delicious meal prepared with boiled eggs and fresh ingredients"
            loading="eager"
            class="rounded-full size-[16rem] md:size-[18rem] lg:size-[30rem] xl:size-[36rem] object-cover saturate-200">
        </div>
      </div>

    </section>
</template>