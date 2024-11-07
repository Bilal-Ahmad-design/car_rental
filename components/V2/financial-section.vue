<template>
  <div>
    <!-- Main Section -->
    <div
      class="rounded-[30px] border-2 border-[#00D6CE] h-auto sm:h-[410px] xl:px-[68px] xl:py-[60px] lg:px-[30px] lg:py-[30px] px-[20px] py-[30px] flex flex-col sm:flex-row justify-between"
    >
      <!-- Left Section -->
      <div class="w-full sm:w-1/2 sm:mr-4 mb-6 sm:mb-0">
        <!-- Logo -->
        <img
          src="/assets/images/v2/v2-leaf.svg"
          alt="logo"
          class="mb-4 w-[31px]"
        />

        <!-- Heading 1 -->
        <h2 class="sm:text-[28px] text-[24px] font-bold text-black mb-[10px]">
          APPLYING FOR FINANCING
        </h2>

        <!-- Heading 2 -->
        <h1
          class="lg:text-[40px] text-[64px] md:text-[32px] leading-[60px] text-[#46C1C1] font-bold lg:text-[#3A3640] lg:leading-[50px] sm:leading-[61px] mb-[15px] expectBtn"
        >
          What Should I Expect?
        </h1>

        <!-- Description -->
        <p class="text-base font-inter text-[#424D53] leading-[27px]">
          Start Easy, Get Approved Fast. Pick Your Dream Ride. Enjoy Smooth, Fun
          Financing. Your Adventure Begins Now. No Stress, Just Excitement.
        </p>
      </div>

      <!-- Right Section -->
      <div class="w-full sm:w-1/2 flex flex-col mt-[30px] sm:mt-0 lg:w-[557px]">
        <!-- Right Header -->
        <h3
          class="text-[28px] sm:text-[32px] font-extrabold text-black leading-[28px] sm:leading-[32.8px] mb-[10px] w-full break-words"
        >
          CONSULT WITH CARS WITH CHLOE FINANCING EXPERT
        </h3>

        <!-- Right Description -->
        <p
          class="text-base text-[#424D53] leading-[24px] sm:leading-[27px] mb-[20px]"
        >
          Dive into your adventure with ease. Our team is ready to guide you
          through a smooth financing process, making your dream ride a reality.
          Let's start this journey together!
        </p>

        <!-- Button -->
        <a
          href="#"
          class="inline-flex items-center justify-center w-full sm:w-[557px] md:w-[300px] xl:w-[557px] h-[62px] text-center leading-[62px] bg-[#00D6CE] text-white font-bold rounded-[6px] text-[18px] transition-colors duration-300 ease-in-out hover:bg-[#00a39c] button"
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
  </div>
</template>

<script setup></script>

<style scoped>
@media (min-width: 640px) and (max-width: 778px) {
  .button {
    width: 300px;
  }
  .expectBtn {
    font-size: 28px;
    line-height: 30px;
  }
}
</style>
