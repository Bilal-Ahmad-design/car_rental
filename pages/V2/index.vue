<template>
  <Header />
  <div class="w-full py-1">
    <div>
      <slider />
    </div>
  </div>

  <div class="py-[32px] lg:py[75px] xl:py-[45px]">
    <div
      class="lg:max-w-[1024px] xl:max-w-[1280px] mx-auto lg:px-[24px] xl:px-[45px]"
    >
      <FinancialExpert />
    </div>
  </div>

  <!-- ApplyBanner Section -->
  <div class="w-full bg-white py-[45px] lg:py[75px] xl:py-[45px]">
    <div
      class="lg:max-w-[1024px] xl:max-w-[1280px] max-w-[1440px] mx-auto lg:px-[24px] xl:px-[45px]"
    >
      <ApplyBanner />
    </div>
  </div>

  <!-- ApplyOnline Section -->
  <div class="w-full bg-white py-[45px] lg:[75px] xl:py-[45px]">
    <div
      class="lg:max-w-[1024px] xl:max-w-[1280px] max-w-[1440px] mx-auto lg:px-[24px] xl:px-[45px] px-[40px]"
    >
      <ApplyOnline />
    </div>
  </div>

  <!-- Financial Section -->
  <div
    class="w-full bg-white md:py-[40px] lg:py-[75px] xl:py-[45px] flex justify-center"
  >
    <div
      class="lg:max-w-[1024px] xl:max-w-[1280px] max-w-[1440px] xl:px-[45px] px-[20px]"
    >
      <financialSection />
    </div>
  </div>
  <div
    class="w-full bg-white md:py-[40px] py-[75px] xl:py-[45px] flex justify-center"
  >
    <div
      class="lg:max-w-[1024px] xl:max-w-[1280px] max-w-[1440px] xl:px-[45px] px-[20px]"
    >
      <Blog />
    </div>
  </div>

  <!-- TestimonialSlider Section -->
  <div class="bg-white py-[45px] xl:py-[45px] flex justify-center">
    <div class="w-[100%] xl:max-w-[1720px] lg:w-[1280px]">
      <TestimonialSlider />
    </div>
  </div>

  <!-- StartEasy Section and Footer -->
  <div class="w-full">
    <startEasy />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/V2/header.vue";
import slider from "../components/V2/slider.vue";
import FinancialExpert from "../components/V2/Financial-expert.vue";
import ApplyBanner from "../components/V2/Apply-Banner.vue";
import ApplyOnline from "../components/V2/Apply-Online-section.vue";
import financialSection from "../components/V2/financial-section.vue";
import Blog from "../components/V2/Blog.vue";
import TestimonialSlider from "../components/V2/testimonialSlider.vue";
import startEasy from "../components/V2/startEasy.vue";
import Footer from "../components/V2/footer.vue";

export default {
  components: {
    Header,
    slider,
    FinancialExpert,
    ApplyBanner,
    ApplyOnline,
    financialSection,
    Blog,
    TestimonialSlider,
    startEasy,
    Footer,
  },
};
</script>

<style></style>
