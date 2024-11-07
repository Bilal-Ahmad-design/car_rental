<template>
  <div
    class="container relative bg-center bg-[url('/assets/images/car1-banner.svg')] bg-no-repeat bg-cover sm:bg-[length:430px_513px] lg:bg-[length:1260px_380px] rounded-lg"
  >
    <div
      class="flex flex-col sm:flex-row justify-between items-center h-full px-12 py-12 xl:px-6 lg:py-6 lg:px-4"
    >
      <!-- Left Section (Logo, Heading, Description) -->
      <div class="flex flex-col justify-start text-left sm:w-full sm:mb-6">
        <!-- Logo -->
        <div class="flex items-center">
          <img src="/assets/images/logo-sm.svg" alt="logo" class="w-[31px]" />
        </div>

        <!-- Heading -->
        <h1
          class="text-[24px] sm:text-[27px] font-extrabold text-white leading-tight mb-4 text-shadow-custom"
        >
          APPLYING FOR FINANCING<br />
          WE'RE HERE FOR YOU.
        </h1>

        <!-- Description -->
        <!-- Full paragraph for larger screens (tablet and above) -->
        <p
          class="hidden sm:block text-[14px] sm:text-[16px] text-white w-full sm:w-[746px] font-light text-shadow-custom"
        >
          No matter the season or reason, whenever you're ready to embrace the
          thrill of the ride, we're here to make it happen. We understand your
          passion and urgency, which is why our financing solutions are designed
          for quick and easy approvals. Let us help you get on the trail, the
          snow, or the road faster and with less hassle.
        </p>

        <!-- Only "passion and urgency" part for mobile view -->
        <p
          class="block sm:hidden text-[14px] text-white font-light text-shadow-custom"
        >
          We understand your passion and urgency, which is why our financing
          solutions are designed for quick and easy approvals.
        </p>
      </div>

      <!-- Right Section (Button and Phone Number) -->
      <div
        class="flex flex-col justify-center space-y-4 w-full sm:w-auto items-center sm:items-start mt-5 lg:mt-0"
      >
        <!-- Apply Now Button -->
        <button
          class="bg-[#69459D] w-[310px] h-[62px] sm:w-[200px] text-white text-[18px] font-bold py-3 px-6 rounded-full transition-colors duration-300 ease-in-out hover:bg-[#E3FA72] hover:text-[#FFF] flex items-center justify-center"
        >
          <img
            src="/assets/images/click-white.svg"
            alt="Arrow Icon"
            class="mr-[10px] w-[18px] h-[18px]"
          />
          APPLY NOW
        </button>

        <!-- Phone Number -->
        <div
          class="flex text-white text-[18px] font-bold items-center justify-center sm:justify-start"
        >
          <img
            src="/assets/images/phone-call.svg"
            alt="Arrow Icon"
            class="mr-[10px] w-6 h-6"
          />
          (+62) 1234 5678
        </div>
      </div>
    </div>
  </div>
</template>
