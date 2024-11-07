<template>
  <div
    class="container banner relative bg-center bg-[url('/assets/images/car1-banner.svg')] bg-no-repeat bg-cover sm:bg-[length:430px_513px] md:bg-[length:1260px_380px] rounded-lg"
  >
    <div
      class="flex flex-col sm:flex-row justify-between items-center h-full px-12 py-12 xl:px-6 lg:py-6 lg:px-4"
    >
      <!-- Left Section (Logo, Heading, Description) -->
      <div class="flex flex-col justify-start text-left sm:w-full sm:mb-6">
        <!-- Logo -->
        <div class="flex items-center">
          <img
            src="/assets/images/v2/v2-leaf.svg"
            alt="logo"
            class="w-[31px]"
          />
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
          class="hidden sm:block text-[14px] sm:text-[16px] text-white md:w-full sm:w-[746px] font-light text-shadow-custom desc"
        >
          No matter the season or reason, whenever you're ready to embrace the
          thrill of the ride, we're here to make it happen. We understand your
          passion and urgency, which is why our financing solutions are designed
          for quick and easy approvals. Let us help you get on the trail, the
          snow, or the road faster and with less hassle.
        </p>

        <!-- Only "passion and urgency" part for mobile view -->
        <p
          class="block sm:hidden text-[14px] text-white font-light text-shadow-custom desc"
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
        <div class="mt-6 lg:text-left sm:text-center">
          <a
            href="#"
            class="inline-flex items-center justify-center w-[200px] xl:w-[260px] h-[62px] text-center leading-[62px] bg-[#00D6CE] text-white font-bold rounded-[6px] text-[18px] transition-colors duration-300 ease-in-out hover:bg-[#00a39c] button"
          >
            <img
              src="/assets/images/click-white.svg"
              alt="Arrow Icon"
              class="icon w-6 h-6 mr-[10px] transition-opacity duration-300"
            />
            GET STARTED
          </a>
        </div>

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
<style>
@media (min-width: 640px) and (max-width: 778px) {
  /* For screen sizes between 640px and 778px */
  .banner {
    background-size: cover;
  }
  .desc {
    width: 300px;
  }
}
</style>
