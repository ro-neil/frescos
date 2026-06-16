<script setup lang="ts">
import ContentBlock from '@/components/shared/ContentBlock.vue';
import Link from '@/components/utils/Link.vue';
import tableAesthetics from '@/assets/images/catering/table-aesthetics.jpg';
import Leadtext from '@/components/shared/Leadtext.vue';
import Subtext from '@/components/shared/Subtext.vue';
const leadText: string = 'Island Catering & Private Dining';
const subtext: string = "We offer both comfortable indoor dining and scenic outdoor seating. Serving a diverse fusion of local specialties and international favorites.";
const inquireNowText: string = 'Inquire Now';
</script>

<template>
  <ContentBlock class="sm:px-6 px-4 pt-8! md:gap-8">
    <template #A>
      <div class="flex flex-col gap-2 justify-center items-center text-center w-full sm:items-start sm:text-left">
        <Leadtext :text="leadText" class=""/>
        <Subtext :text="subtext" />
        <!-- <div class="controls !mt-5 flex flex-col gap-4 items-center">
          <Link :to="'/catering'" :text="inquireNowText" 
            class="border-orange-400 bg-orange-400 text-primary hover:bg-transparent hover:text-orange-500! hover:no-underline! 
            dark:hover:text-white! dark:hover:bg-transparent" />
        </div> -->
      </div>
    </template>
    <template #B>
      <div class="flex items-center justify-center sm:justify-end order-first sm:order-last w-full">
        <div class="rounded-full shadow-lg shadow-orange-400 transform transition duration-500 hover:scale-[1.02]">
          <img :src="tableAesthetics" alt="A photo of a delicious meal prepared with boiled eggs and fresh ingredients" loading="eager"
            class="rounded-full size-[16rem] md:size-[18rem] lg:size-[30rem] xl:size-[36rem] object-cover saturate-200">
        </div>
      </div>
    </template>
  </ContentBlock>
</template>