<template>
  <div class="container">
    <!-- For mobile: single column, for larger screens: three columns -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- First Card -->
      <div
        class="flex flex-col items-left text-left lg:p-6 border-b border-[#69459D] md:border-r md:border-b-0"
      >
        <img
          src="/assets/images/service1.svg"
          alt="Credit Accepted"
          class="w-32 h-32 mb-4"
        />
        <h3 class="font-extrabold font-inter text-2xl text-black mb-2">
          All Credit Accepted
        </h3>
        <p class="text-base leading-[27px]">
          Don't let credit concerns hold you back. We believe everyone deserves
          a fair chance, which is why we offer financing options for all credit
          levels.
        </p>
        <p class="text-base mt-2 leading-[27px]">
          Whether your credit is unestablished, challenged, or less than
          perfect, we work with you to find a solution that fits your needs.
        </p>
      </div>

      <!-- Second Card -->
      <div
        class="flex flex-col items-left text-left lg:p-6 border-b border-[#69459D] md:border-r md:border-b-0"
      >
        <img
          src="/assets/images/service2.svg"
          alt="Buy Any Machine"
          class="w-32 h-32 mb-4"
        />
        <h3 class="font-extrabold text-2xl text-black mb-2">
          Buy Any Machine You Want
        </h3>
        <p class="text-base leading-[27px]">
          Choose from our extensive inventory or source one from any dealer,
          private seller, or online marketplace like Facebook or Kijiji.
        </p>
        <p class="text-base mt-2 leading-[27px]">
          We will provide the financing you need to make it yours, hassle-free.
        </p>
      </div>

      <!-- Third Card -->
      <div class="flex flex-col items-left text-left lg:p-6">
        <img
          src="/assets/images/service3.svg"
          alt="Zero Money Down"
          class="w-32 h-32 mb-4"
        />
        <h3 class="font-extrabold font-inter text-2xl text-black mb-2">
          Zero Money Down
        </h3>
        <p class="text-base leading-[27px]">
          Get the machine you want without paying right away. With ‘Zero Money
          Down,’ you can buy today and pay later.
        </p>
        <p class="text-base leading-[27px] mt-2">
          We make it easy to get a payment plan that fits your budget. No need
          to wait—take your new ride home now and pay in small amounts over
          time.
        </p>
      </div>
    </div>
  </div>
</template>
