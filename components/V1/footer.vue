<template>
  <div
    class="bg-black text-white px-[40px] py-[75px] lg:px-[90px] lg:py-[75px] lg:flex lg:justify-between lg:space-x-16 space-y-8 lg:space-y-0"
  >
    <!-- Left Section: Contact Info -->
    <div class="lg:w-[80%] space-y-10">
      <div>
        <img src="/assets/images/logo-sm.svg" alt="logo" class="w-[31px]" />

        <h2 class="text-[32px] font-bold">HAVE QUESTIONS?</h2>
        <h3 class="text-[32px] font-bold text-[#E3FA72]">
          HOW WE CAN HELP YOU?
        </h3>
        <hr class="border-t-2 border-[#E3FA72] w-full" />
      </div>

      <!-- Main content container -->
      <div class="mt-[40px] flex flex-col lg:flex-row gap-[40px] lg:gap-[82px]">
        <!-- Left Side: Visit Us & Talk With Us -->
        <div class="flex flex-col gap-[36px] lg:w-[368.5px]">
          <!-- Visit Us -->
          <div>
            <h4 class="text-[24px]">Visit Us</h4>
            <p>
              1375 Regent Ave. W.<br />
              Winnipeg, MB<br />
              R2C 3B2
            </p>
          </div>

          <!-- Talk With Us -->
          <div>
            <h4 class="text-[24px]">TALK WITH US</h4>
            <p>(204) 295-8606</p>
          </div>
        </div>

        <!-- Right Side: Open Hours -->
        <div>
          <h4 class="text-[24px]">Open Hours</h4>
          <p class="text-base text-[#FFFFFF]">
            Mon: 9am - 9pm<br />
            Tue: 9am - 9pm<br />
            Wed: 9am - 9pm<br />
            Thu: 9am - 9pm<br />
            Fri: 9am - 9pm<br />
            Sat: 9am - 9pm<br />
            Sun: Closed
          </p>
        </div>
      </div>
    </div>

    <!-- Right Section: Contact Form -->
    <div class="lg:w-1/3 space-y-12">
      <div>
        <img src="/assets/images/logo-sm.svg" alt="logo" class="w-[31px]" />

        <h2 class="text-[32px] font-bold">FEEL FREE</h2>
        <h3 class="text-[32px] font-bold text-[#E3FA72]">TO CONTACT US NOW</h3>
        <hr class="border-t-2 border-[#E3FA72] w-full" />
      </div>

      <!-- Form -->
      <form class="space-y-6">
        <input
          type="text"
          placeholder="First Name"
          class="w-full bg-transparent text-white text-[16px] rounded-[11px] px-[20px] py-[10px] border-2 border-[#E3FA72]"
        />
        <input
          type="text"
          placeholder="Phone Number"
          class="w-full bg-transparent text-white text-[16px] rounded-[11px] px-[20px] py-[10px] border-2 border-[#E3FA72]"
        />
        <input
          type="email"
          placeholder="Email Address"
          class="w-full bg-transparent text-white text-[16px] rounded-[11px] px-[20px] py-[10px] border-2 border-[#E3FA72]"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          class="w-full bg-transparent text-white text-[16px] rounded-[11px] px-[20px] py-[10px] border-2 border-[#E3FA72]"
        ></textarea>

        <!-- Apply Now Button -->
        <button
          class="inline-flex items-center justify-center w-full h-[62px] text-center bg-[#e3fa72] text-[#69459D] font-bold rounded-full text-[18px] transition-colors duration-300 ease-in-out hover:bg-[#69459D] hover:text-[#fff] group"
        >
          <img
            src="/assets/images/click.svg"
            alt="Arrow Icon"
            class="icon w-6 h-6 mr-[10px] transition-colors duration-300 group-hover:brightness-0 group-hover:invert"
          />
          APPLY NOW
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style scoped>
a:hover .icon {
  content: url("/assets/images/click-white.svg");
}
/* Mobile adjustments if necessary */
@media (max-width: 640px) {
  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 24px;
  }
  textarea::placeholder {
    color: white;
    opacity: 1; /* Optional */
  }
}
</style>
