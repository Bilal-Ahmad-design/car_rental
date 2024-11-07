<template>
  <Header />
  <div class="w-full bg-black py-1">
    <div>
      <slider />
    </div>
  </div>

  <div class="bg-black py-[32px] lg:py[75px] xl:py-[45px]">
    <div
      class="lg:max-w-[1024px] xl:max-w-[1280px] mx-auto lg:px-[24px] xl:px-[45px] px-[60px]"
    >
      <FinancialExpert />
    </div>
  </div>

  <!-- Services Section -->
  <div class="w-full bg-white py-[32px] lg:py[75px] xl:py-[45px]">
    <div
      class="lg:max-w-[1024px] xl:max-w-[1280px] max-w-[1440px] mx-auto lg:px-[24px] xl:px-[45px] px-[40px]"
    >
      <services />
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
  <div class="w-full bg-white py-[75px] xl:py-[45px] flex justify-center">
    <div
      class="lg:max-w-[1024px] xl:max-w-[1280px] max-w-[1440px] xl:px-[45px] px-[20px]"
    >
      <financialSection />
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
import Header from "../components/V1/header.vue";
import slider from "../components/V1/slider.vue";
import FinancialExpert from "../components/V1/Financial-expert.vue";
import services from "../components/V1/services.vue";
import ApplyBanner from "../components/V1/Apply-Banner.vue";
import ApplyOnline from "../components/V1/Apply-Online-section.vue";
import financialSection from "../components/V1/financial-section.vue";
import TestimonialSlider from "../components/V1/TestimonialSlider.vue";
import startEasy from "../components/V1/Start-Easy-Section.vue";
import Footer from "../components/V1/footer.vue";

export default {
  components: {
    Header,
    slider,
    FinancialExpert,
    services,
    ApplyBanner,
    ApplyOnline,
    financialSection,
    TestimonialSlider,
    startEasy,
    Footer,
  },
};
</script>

<style></style>
