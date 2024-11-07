<template>
  <div class="w-full py-[75px]">
    <!-- Slider Container -->
    <div class="relative overflow-hidden">
      <!-- Cards Wrapper -->
      <div
        class="slider flex space-x-[27px] items-center justify-center transition-transform duration-300"
        :style="{ transform: `translateX(-${currentSlide * cardWidth}px)` }"
      >
        <!-- Card 1 -->
        <div class="card">
          <div class="flex items-center mb-4">
            <img
              src="/profile.png"
              alt="Profile Logo"
              class="h-[64px] w-[64px] rounded-full mr-4"
            />
            <div>
              <h3 class="text-white text-[28px] font-semibold">PastaChann</h3>
              <p class="text-white/70 text-base">Feb 21, 2024</p>
            </div>
          </div>
          <div class="mb-4">
            <img src="/rating.png" alt="Stars" class="w-[100px]" />
          </div>
          <p class="text-white text-[16px] leading-6">
            "These guys were great, helped me and my family get into the
            vehicle, that's best for us. thank you guys, will refer you to
            everyone, to get their vehicles from you guys. weooooo"
          </p>
        </div>

        <!-- Card 2 -->
        <div class="card">
          <div class="flex items-center mb-4">
            <img
              src="/profile.png"
              alt="Profile Logo"
              class="h-[64px] w-[64px] rounded-full mr-4"
            />
            <div>
              <h3 class="text-white text-[28px] font-semibold">PastaChann</h3>
              <p class="text-white/70 text-base">Feb 21, 2024</p>
            </div>
          </div>
          <div class="mb-4">
            <img src="/rating.png" alt="Stars" class="w-[100px]" />
          </div>
          <p class="text-white text-[16px] leading-6">
            "These guys were great, helped me and my family get into the
            vehicle, that's best for us. thank you guys, will refer you to
            everyone, to get their vehicles from you guys. weooooo"
          </p>
        </div>

        <!-- Card 3 -->
        <div class="card">
          <div class="flex items-center mb-4">
            <img
              src="/profile.png"
              alt="Profile Logo"
              class="h-[64px] w-[64px] rounded-full mr-4"
            />
            <div>
              <h3 class="text-white text-[28px] font-semibold">PastaChann</h3>
              <p class="text-white/70 text-base">Feb 21, 2024</p>
            </div>
          </div>
          <div class="mb-4">
            <img src="/rating.png" alt="Stars" class="w-[100px]" />
          </div>
          <p class="text-white text-[16px] leading-6">
            "These guys were great, helped me and my family get into the
            vehicle, that's best for us. thank you guys, will refer you to
            everyone, to get their vehicles from you guys. weooooo"
          </p>
        </div>
      </div>

      <!-- Navigation Buttons (both for mobile and desktop) -->
      <div class="flex justify-center items-center mt-8 space-x-4">
        <button @click="prevSlide" class="p-2 rounded-full bg-gray-300">
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
          class="p-2 rounded-full bg-purple-600 text-white"
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
import { ref, computed, onMounted, onUnmounted } from "vue";

// Set up the current slide state
const currentSlide = ref(0);
const totalSlides = 3; // Total number of cards

// Card width depending on the screen size
const cardWidth = computed(() =>
  window.innerWidth >= 1024 ? 553 + 27 : 319 + 27
);

// Functions to handle navigation
const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value -= 1;
  }
};

const nextSlide = () => {
  if (currentSlide.value < totalSlides - 1) {
    currentSlide.value += 1;
  }
};

// Mouse swipe logic for desktop
const handleMouseMove = (event) => {
  const movementX = event.movementX;
  if (movementX > 0) {
    prevSlide();
  } else {
    nextSlide();
  }
};

// Add event listener to detect mouse swipe on desktop
onMounted(() => {
  if (window.innerWidth >= 1024) {
    window.addEventListener("mouseclick", handleMouseMove);
  }
});

// Cleanup event listener when component unmounts
onUnmounted(() => {
  window.removeEventListener("mouseclick", handleMouseMove);
});
</script>

<style scoped>
/* Desktop Styles */
.card {
  @apply w-[553px] h-[269.19px] bg-[#0F0E0E] rounded-[7px] p-[22px] flex-shrink-0;
}

/* Mobile Styles */
@media (max-width: 1024px) {
  .card {
    @apply w-[319px] h-[350px];
  }
}
</style>
