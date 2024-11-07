<template>
  <div
    class="bg-[url('/assets/images/hero-section-image.png')] md:bg-center bg-center bg-no-repeat bg-cover background-class"
  >
    <header class="absolute inset-x-0 top-0 z-50 border-b-2 border-black">
      <!-- Navigation bar -->
      <nav class="flex items-center justify-between p-6" aria-label="Global">
        <!-- Logo Section -->
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <!-- Change logo for mobile view and web view -->
            <img
              v-if="!mobileMenuOpen"
              class="h-8 w-auto lg:block"
              src="/assets/images/cars-logo.svg"
              alt="Logo"
            />
            <img
              v-if="mobileMenuOpen"
              class="h-8 w-auto lg:hidden"
              src="/assets/images/cars-logo.svg"
              alt="Mobile Logo"
            />
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:gap-x-8 xl:ml-80 lg:ml-0">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-base font-inter font-semibold regular pl-14"
            >{{ item.name }}</a
          >
        </div>

        <!-- Apply Now Button for Desktop -->
        <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:ml-6">
          <a
            href="#"
            class="text-lg font-bold text-white w-[140px] h-[50px] bg-[#69459D] rounded-[150px] flex items-center justify-center px-[20px] py-[11px] mr-5"
            >Apply Now</a
          >
        </div>
      </nav>

      <!-- Mobile Menu Dialog -->
      <Dialog
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50 bg-white" />
        <DialogPanel
          class="fixed inset-y-0 left-0 z-50 overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <!-- Mobile logo -->
              <img
                class="h-8 w-auto"
                src="/assets/images/cars-logo.svg"
                alt="Mobile Logo"
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <!-- Close button icon (XMark) -->
              <XMarkIcon class="h-6 w-6 text-black" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                  >Log in</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <!-- Hero Section -->
    <div class="sm:py-16 sm:px-16 md:py-8 lg:py-16 xl:py-16 text-center">
      <div class="xl:mx-32 max-w-2xl py-96 px-4 lg:py-4 md:px-8 xl:py-32">
        <!-- Headline -->
        <h1
          class="header text-center md:text-5xl lg:leading-[60px] font-bold text-white mt-16 mb-6 font-inter sm:h-[180px] lg:h-[180px] lg:w-[405px] lg:text-[64px] text-shadow-custom"
        >
          GET CARS WITH CHLOE FINANCING
        </h1>

        <!-- Description -->
        <div class="sm:text-center">
          <!-- Center text for sm screens -->
          <p
            class="sm:text-base md:text-xl text-white mt-4 mb-[15px] font-inter font-regular lg:w-[394px] lg:text-[20px] text-shadow-custom description"
          >
            Get vehicle financing with Cars with Chloe, no matter your credit
            score.
          </p>
          <p
            class="text-base sm:text-base md:text-xl text-white mt-4 mb-[15px] font-inter font-regular lg:w-[394px] lg:text-[20px] text-shadow-custom"
          >
            Apply online, get pre-approved, and connect with local dealerships
            showing only your approved options. Skip the hassle click below to
            get started!
          </p>
        </div>

        <!-- Get Started Button -->
        <div class="mt-6 lg:text-left lg:ml-[40px] sm:text-center">
          <!-- Center button for sm screens -->
          <a
            href="#"
            class="inline-flex items-center justify-center w-[310px] h-[62px] text-center leading-[62px] bg-[#e3fa72] text-[#69459D] font-bold rounded-full text-[18px] transition-colors duration-300 ease-in-out hover:bg-[#69459D] hover:text-[#fff]"
          >
            <img
              src="/assets/images/click.svg"
              alt="Arrow Icon"
              class="icon w-6 h-6 mr-[10px] transition-opacity duration-300"
            />
            GET STARTED
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "FINANCING", href: "#" },
  { name: "FINANCING CALCULATOR", href: "#" },
  { name: "CONTACT", href: "#" },
];

const mobileMenuOpen = ref(false);
</script>

<style>
.icon-purple {
  filter: invert(26%) sepia(45%) saturate(828%) hue-rotate(235deg)
    brightness(87%) contrast(92%);
}
a:hover .icon {
  content: url("/assets/images/click-white.svg");
}
@media (max-width: 640px) {
  .background-class {
    height: 760px; /* Specific height for mobile */
    background-position: 65%; /* Center the image */
  }
  .header {
    font-size: 50px;
    line-height: 50px;
    height: 150px;
    margin-top: 0px;
    margin-bottom: 10px;
  }
  .description {
    margin: 10px;
  }
}
</style>
