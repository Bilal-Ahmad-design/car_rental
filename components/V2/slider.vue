<template>
  <div
    class="w-full lg:max-w-[1440px] mx-auto px-4 lg:px-32 lg:py-16 pt-[110px] md:pt-0"
  >
    <div class="relative h-auto sm:h-auto overflow-hidden lg:overflow-visible">
      <div
        ref="sliderContainer"
        class="flex lg:justify-center transition-transform duration-300 ease-in-out gap-[26px] mb-[50px]"
        :style="sliderStyle"
      >
        <!-- Card Loop -->
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="flex-shrink-0 w-full md:w-1/3 lg:w-[230px] xl:w-[255px] xl:h-[280px] lg:h-[250px] bg-white lg:shadow-lg lg:rounded-[6px] p-4 transition-all duration-300 ease-in-out transform hover:-translate-y-3 hover:shadow-xl lg:border lg:border-[#EEEEEE] hover:border-[#00D6CE] relative group"
        >
          <!-- Image -->
          <img
            :src="card.img"
            alt="car-image"
            class="w-[255px] lg:w-[200px] h-[143px] rounded-[6px] mx-auto"
          />

          <!-- Text Content -->
          <p class="h-[60px] text-center mb-4">
            <span class="block text-[14px] h-[17px] font-normal text-black">
              I Want a
            </span>
            <span class="block text-[22px] h-[27px] font-bold text-[#00D6CE]">
              {{ card.title }}
            </span>
            <span class="block text-[14px] h-[7px] font-normal text-black">
              start from {{ card.price }}
            </span>
          </p>

          <!-- Button - Visible on Hover of Card -->
          <div
            class="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <a
              href="#"
              class="inline-flex items-center justify-center w-[150px] h-[40px] text-center bg-[#00D6CE] text-white font-bold rounded-[6px] text-[14px] transition-colors duration-300 ease-in-out hover:bg-[#00a39c]"
            >
              GET STARTED
            </a>
          </div>
        </div>
      </div>

      <!-- Left Arrow (hidden for lg and xl screens) -->
      <div class="absolute inset-y-0 left-0 flex items-center pl-2 lg:hidden">
        <button
          @click="prevSlide"
          class="bg-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          :disabled="currentIndex === 0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <!-- Right Arrow (hidden for lg and xl screens) -->
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 lg:hidden">
        <button
          @click="nextSlide"
          class="bg-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          :disabled="currentIndex >= maxIndex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
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

const cards = [
  {
    img: "/car2.svg",
    title: "Truck",
    price: "$450/mo",
  },
  {
    img: "/car3.svg",
    title: "SUV",
    price: "$350/mo",
  },

  {
    img: "/car1.svg",
    title: "Car",
    price: "$300/mo",
  },
  {
    img: "/car4.svg",
    title: "Minivan",
    price: "$400/mo",
  },
];

const currentIndex = ref(0);
const windowWidth = ref(0);

// Handle window resizing
const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

// Set initial window width on client side only
onMounted(() => {
  if (process.client) {
    windowWidth.value = window.innerWidth;
    window.addEventListener("resize", handleResize);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("resize", handleResize);
  }
});

// Calculate visible cards based on window width
const visibleCards = computed(() => {
  if (windowWidth.value >= 1024) return 4; // Desktop (lg)
  if (windowWidth.value >= 768) return 3; // Tablet (md)
  if (windowWidth.value >= 640) return 2; // Small (sm)
  return 1; // Mobile (xs)
});

// Calculate maxIndex to prevent overflow
const maxIndex = computed(() => cards.length - visibleCards.value);

// Calculate the transform style based on the currentIndex
const sliderStyle = computed(() => {
  const cardWidth =
    windowWidth.value >= 1024 ? 230 : windowWidth.value >= 768 ? 230 : 100; // Approx card width (adjust if needed)
  const translateX = currentIndex.value * cardWidth;
  return {
    transform: `translateX(-${translateX}px)`,
  };
});

const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>
