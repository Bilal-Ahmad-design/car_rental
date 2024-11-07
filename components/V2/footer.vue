<template>
  <footer class="bg-[#00D6CE] lg:bg-[#F9F9F9] p-8 border-b border-DEDEDE">
    <div
      class="max-w-7xl mx-auto flex flex-col lg:flex-row border-b border-DEDEDE pb-8"
    >
      <!-- Left Column -->
      <div class="lg:w-1/3 pr-8">
        <div
          class="flex items-center mb-8 border-b-[1px] border-[#DEDEDE] pb-8"
        >
          <img
            src="/assets/images/v2/v2-leaf.svg"
            alt="logo"
            class="w-[60px] h-[60px] mr-4"
          />
          <div>
            <div class="text-xl font-bold text-gray-800">CARS WITH</div>
            <div class="text-xl font-bold text-teal-500">CHLOE</div>
          </div>
        </div>

        <div class="flex justify-between">
          <div>
            <h3 class="font-semibold text-[#8E8E8E]-800">Visit Us</h3>
            <p class="text-white lg:text-gray-500">1375 Regent Ave. W.</p>
            <p class="text-white lg:text-gray-500">Winnipeg, MB</p>
            <p class="text-white lg:text-gray-500 mb-10">R2C 3B2</p>
            <h3 class="font-semibold lg:text-[#8E8E8E]-800 mb-2">
              TALK WITH US
            </h3>
            <p class="text-white lg:text-gray-500">(204) 295-8606</p>
          </div>

          <div class="pl-8">
            <h3 class="font-semibold text-[#8E8E8E]-800 mb-2">Open Hours</h3>
            <p class="text-white lg:text-gray-500">Mon: 9am - 9pm</p>
            <p class="text-white lg:text-gray-500">Tue: 9am - 9pm</p>
            <p class="text-white lg:text-gray-500">Wed: 9am - 9pm</p>
            <p class="text-white lg:text-gray-500">Thu: 9am - 9pm</p>
            <p class="text-white lg:text-gray-500">Fri: 9am - 9pm</p>
            <p class="text-white lg:text-gray-500">Sat: 9am - 9pm</p>
            <p class="text-white lg:text-gray-500">Sun: Closed</p>
          </div>
        </div>
      </div>

      <!-- Right Column with 50px Space Between -->
      <div class="lg:w-2/3 mt-8 lg:mt-0 lg:ml-[50px] formDiv">
        <div>
          <img
            src="/assets/images/v2/v2-leaf.svg"
            alt="logo"
            class="w-[41px] h-[41px] mr-4"
          />
        </div>
        <div class="flex items-center border-b-[3px] border-[#DEDEDE]">
          <div>
            <h2 class="text-[24px] font-semibold text-gray-700">
              HOW WE CAN HELP YOU?
            </h2>
            <h1 class="text-[32px] font-bold text-[#3A3640]-800">
              HAVE QUESTIONS?
            </h1>
          </div>
        </div>

        <!-- Form with Adjusted Dimensions -->
        <form class="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-DEDEDE py-6">
          <!-- Left side: 3 fields -->
          <div class="lg:col-span-1 space-y-2.5">
            <input
              type="text"
              placeholder="First Name"
              class="fields w-[350px] lg:w-full h-[51px] p-3 border-[1px] border-white lg:border-[#3A3640] rounded-[11px] bg-transparent"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              class="fields w-[350px] lg:w-full h-[51px] p-3 border-[1px] border-white lg:border-[#3A3640] rounded-[11px] bg-transparent"
            />
            <input
              type="email"
              placeholder="Email Address"
              class="fields w-[350px] lg:w-full h-[51px] p-3 border-[1px] border-white lg:border-[#3A3640] rounded-[11px] bg-transparent"
            />
          </div>

          <!-- Right side: Message Field and Submit Button with Adjusted Dimensions -->
          <div class="lg:col-span-2 flex flex-col space-y-4">
            <textarea
              placeholder="Your Message"
              rows="4"
              class="fields w-[350px] lg:w-[396px] h-[100px] p-3 border-[1px] border-white lg:border-[#3A3640] rounded-[11px] bg-transparent"
            ></textarea>
            <button
              type="submit"
              class="bg-[#3A3640] lg:bg-teal-500 text-bold text-[18px] text-white w-[350px] lg:w-[396px] h-[60px] p-3 rounded-[11px] hover:bg-teal-600 transition duration-300 flex items-center justify-center button"
            >
              <img
                src="/assets/images/click-white.svg"
                alt="Arrow Icon"
                class="icon w-6 h-6 mr-[10px] transition-opacity duration-300"
              />
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Footer Bottom Border and Copyright -->
    <div
      class="mt-8 text-xs max-w-7xl mx-auto text-gray-500 pt-4 hidden md:block"
    >
      <p class="text-left">
        Copyright © 2024 Cars with Chloe Media. All rights reserved. Cars with
        Chloe logo design are trademarks of Cars with Chloe Media.
      </p>
      <p class="mt-1 text-left">
        <a href="#" class="underline">Privacy Policy</a> |
        <a href="#" class="underline">Terms</a> |
        <a href="#" class="underline">FCRA and State Consumer Notice</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CarsWithChloeFooter",
};
</script>

<style>
.border-DEDEDE {
  border-color: #dedede;
}

.border-3A3640 {
  border-color: #3a3640;
}
@media (min-width: 200px) and (max-width: 390px) {
  .button {
    width: 200px;
  }
  .fields {
    width: 200px;
  }
}
</style>
