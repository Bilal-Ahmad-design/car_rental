<template>
  <div
    class="mx-auto my-16 px-[20px] lg:px-[0px] lg:mx-[170px] lg:my-[75px] text-center"
  >
    <h1 class="font-inter font-black text-[64px] leading-none text-[#00D6CE]">
      START EASY, GET APPROVED FAST.<br />
      PICK YOUR DREAM RIDE.<br />
      ENJOY SMOOTH, FUN FINANCING.<br />
      YOUR ADVENTURE BEGINS NOW.<br />
      NO STRESS, JUST EXCITEMENT.
    </h1>
    <div class="flex justify-center mt-10">
      <button
        class="bg-[#00D6CE] text-white text-[18px] font-bold w-[332px] h-[62px] rounded-[6px] hover:bg-[#00a39c] hover:text-white transition duration-300 flex items-center justify-center group"
      >
        <img
          src="/assets/images/click-white.svg"
          alt="Click Icon"
          class="w-6 h-6 mr-2 transition-colors duration-300 group-hover:brightness-0 group-hover:invert"
        />
        APPLY NOW
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FinanceComponent",
};
</script>

<style scoped>
/* Mobile styling adjustments */
@media (max-width: 640px) {
  h1 {
    font-size: 36px;
    line-height: 1.2;
  }
}
</style>
