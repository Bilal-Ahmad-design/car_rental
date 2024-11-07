<template>
  <div class="md:bg-center bg-center bg-no-repeat bg-cover background-class">
    <header class="absolute inset-x-0 top-0 z-50">
      <!-- Navigation bar -->
      <nav class="flex items-center justify-between p-6" aria-label="Global">
        <!-- Logo Section -->
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <!-- Change logo for mobile view and web view -->
            <img
              v-if="!mobileMenuOpen"
              class="h-8 w-auto md:block"
              src="/assets/images/v2/logo-v2.svg"
              alt="Logo"
            />
            <img
              v-if="mobileMenuOpen"
              class="h-8 w-auto md:hidden"
              src="/assets/images/v2/logo-v2.svg"
              alt="Mobile Logo"
            />
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex md:hidden">
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
        <div class="hidden md:flex md:gap-x-8 xl:ml-80 lg:ml-0">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-base font-inter font-semibold regular pl-14"
            >{{ item.name }}</a
          >
        </div>

        <!-- Apply Now Button for Desktop -->
        <div class="hidden md:flex md:flex-1 md:justify-end md:ml-6">
          <a
            href="#"
            class="text-lg font-bold text-white w-[143px] h-[50px] bg-[#00D6CE] rounded-[6px] flex items-center justify-center px-[20px] py-[11px] mr-5 transition duration-300 ease-in-out hover:bg-[#00a39c]"
          >
            Apply Now
          </a>
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
                src="/assets/images/v2/logo-v2.svg"
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
    <div
      class="bg-[#D9D9D9] sm:py-16 sm:px-4 md:py-16 lg:py-16 xl:py-16 text-center md:bg-[#FFFFFF]"
    >
      <div
        class="xl:mx-32 max-w-6xl flex flex-col-reverse md:flex-row items-center"
      >
        <!-- Left Side: Text Content -->
        <div class="w-[316px] lg:w-[635px] m-10">
          <h1
            class="header text-left text-white md:text-[36px] lg:leading-[49px] font-bold md:text-black lg:mt-[68px] font-inter lg:text-[32px]"
          >
            Get Car Financing the Easy Way with Cars with Chloe
          </h1>
          <div class="sm:text-left mt-4">
            <p
              class="text-base sm:text-white md:text-xl md:text-black mt-4 mb-[15px] font-inter font-regular lg:text-[20px]"
            >
              No matter your credit score, Cars with Chloe is here to help you
              secure vehicle financing hassle-free.
            </p>
            <p
              class="text-base sm:text-white md:text-xl md:text-black mt-4 mb-[15px] font-inter font-regular lg:text-[20px]"
            >
              Apply online, and we’ll connect you with a local dealership that
              shows you only the cars you’re pre-approved for—no back-and-forth,
              just simple and straightforward.
            </p>
            <p
              class="text-base sm:text-white md:text-xl md:text-black mt-4 mb-[15px] font-inter font-regular lg:text-[20px]"
            >
              Ready to roll? Click below to get started!
            </p>
          </div>
          <!-- Get Started Button -->
          <div class="mt-6 lg:text-left sm:text-center">
            <a
              href="#"
              class="inline-flex items-center justify-center w-[310px] h-[62px] text-center leading-[62px] bg-[#00D6CE] text-white font-bold rounded-[6px] text-[18px] transition-colors duration-300 ease-in-out hover:bg-[#00a39c]"
            >
              <img
                src="/assets/images/click-white.svg"
                alt="Arrow Icon"
                class="icon w-6 h-6 mr-[10px] transition-opacity duration-300"
              />
              GET STARTED
            </a>
          </div>
        </div>

        <!-- Right Side: Image -->
        <div class="lg:w-1/2 mt-8 flex justify-center lg:pl-4 xl:pl-16">
          <img
            src="/assets/images/v2/v2-hero-section.svg"
            alt="Hero Image"
            width="367"
            height="429.73"
            class="w-[367px] h-[429.73px] mt-4 lg:mt-[68px] object-cover"
          />
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

@media (max-width: 778px) {
  .header {
    font-size: 36px;
    line-height: 50px;
    height: 150px;
    text-align: center;
    margin-top: -200px;
    margin-bottom: 50px;
    color: white;
  }
  .description {
    margin: 5px;
    color: white;
  }
}
</style>
