<template>
  <div class="w-full py-12 bg-white">
    <!-- Slider Container -->
    <div class="relative overflow-hidden">
      <!-- Cards Wrapper -->
      <div
        class="slider flex space-x-6 items-center justify-center transition-transform duration-300"
        :style="{ transform: `translateX(-${currentSlide * cardWidth}px)` }"
      >
        <!-- Card 1 -->
        <div class="card border-l-[1px] border-r-[1px] border-[#DEDEDE]">
          <div class="flex items-center mb-4">
            <img
              src="/profile.png"
              alt="Profile Logo"
              class="h-16 w-16 rounded-full mr-4"
            />
            <div>
              <h3 class="text-gray-800 text-lg font-semibold">PastaChann</h3>
              <p class="text-gray-500 text-sm">Feb 21, 2024</p>
            </div>
          </div>
          <div class="mb-4">
            <img src="/rating.png" alt="Stars" class="w-24" />
          </div>
          <p class="text-gray-700 text-sm leading-6">
            "These guys were great, helped me and my family get into the vehicle
            that's best for us. Thank you guys, will refer you to everyone to
            get their vehicles from you guys. Weooooo!"
          </p>
        </div>

        <!-- Card 2 -->
        <div class="card border-l-[1px] border-r-[1px] border-[#DEDEDE]">
          <div class="flex items-center mb-4">
            <img
              src="/profile.png"
              alt="Profile Logo"
              class="h-16 w-16 rounded-full mr-4"
            />
            <div>
              <h3 class="text-gray-800 text-lg font-semibold">PastaChann</h3>
              <p class="text-gray-500 text-sm">Feb 21, 2024</p>
            </div>
          </div>
          <div class="mb-4">
            <img src="/rating.png" alt="Stars" class="w-24" />
          </div>
          <p class="text-gray-700 text-sm leading-6">
            "These guys were great, helped me and my family get into the vehicle
            that's best for us. Thank you guys, will refer you to everyone to
            get their vehicles from you guys. Weooooo!"
          </p>
        </div>

        <!-- Card 3 -->
        <div class="card border-l-[1px] border-r-[1px] border-[#DEDEDE]">
          <div class="flex items-center mb-4">
            <img
              src="/profile.png"
              alt="Profile Logo"
              class="h-16 w-16 rounded-full mr-4"
            />
            <div>
              <h3 class="text-gray-800 text-lg font-semibold">PastaChann</h3>
              <p class="text-gray-500 text-sm">Feb 21, 2024</p>
            </div>
          </div>
          <div class="mb-4">
            <img src="/rating.png" alt="Stars" class="w-24" />
          </div>
          <p class="text-gray-700 text-sm leading-6">
            "These guys were great, helped me and my family get into the vehicle
            that's best for us. Thank you guys, will refer you to everyone to
            get their vehicles from you guys. Weooooo!"
          </p>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div class="flex justify-center items-center mt-8 space-x-4">
        <button
          @click="prevSlide"
          :class="currentSlide === 0 ? 'bg-[#00D6CE]' : 'bg-gray-300'"
          class="p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          @click="nextSlide"
          :class="
            currentSlide === totalSlides - 1 ? 'bg-[#00D6CE]' : 'bg-gray-300'
          "
          class="p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const currentSlide = ref(0);
const totalSlides = 3;

// Adjust card width based on screen size
const cardWidth = computed(() => (window.innerWidth >= 1024 ? 400 : 300));

// Function to move slides left
const prevSlide = () => {
  if (currentSlide.value === 0) {
    currentSlide.value = totalSlides - 1;
  } else {
    currentSlide.value -= 1;
  }
};

// Function to move slides right
const nextSlide = () => {
  if (currentSlide.value === totalSlides - 1) {
    currentSlide.value = 0;
  } else {
    currentSlide.value += 1;
  }
};
</script>

<style scoped>
.card {
  @apply w-[400px] h-[250px] bg-white border-l-[1px] border-r-[1px] border-[#DEDEDE] p-4 flex-shrink-0;
  border-top: none;
  border-bottom: none;
}
</style>
