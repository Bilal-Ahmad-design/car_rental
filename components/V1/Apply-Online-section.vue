<template>
  <div class="">
    <div class="mb-12">
      <img src="/assets/images/logo-sm.svg" alt="logo" class="w-[31px]" />

      <h2
        class="text-[32px] leading-[32px] font-bold text-[#69459D] w-full break-words"
      >
        WHAT YOUR BUYING JOURNEY
      </h2>

      <h2
        class="text-2xl lg:text-4xl font-bold text-black w-[100%] lg:w-[483px] border-b-[3px] border-[#69459D]"
      >
        WILL LOOK LIKE
      </h2>
    </div>

    <!-- Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[62px]">
      <div
        v-for="(item, index) in steps"
        :key="index"
        class="bg-white rounded-lg"
      >
        <div
          class="bg-[#E3FA72] mb-4 text-black text-[24px] h-[44px] w-[44px] flex items-center rounded-full justify-center text-lg font-extrabold"
        >
          {{ item.step }}
        </div>
        <div class="flex items-start space-x-4">
          <div class="border-b-[2px] border-[#69459D]">
            <h3
              class="text-2xl font-extrabold text-black font-inter mb-2 flex items-center"
            >
              <img :src="item.icons" alt="icons" class="mr-2 mb-2" />
              {{ item.title }}
            </h3>
            <p
              class="text-base leading-[27px] h-[175px] mb-4"
              v-html="item.description"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      steps: [
        {
          step: 1,
          icons: "/apply.png",
          title: "Apply Online",
          description:
            "Begin by submitting your details through our easy-to-use online form.<br/> It's designed to be quick, ensuring you're on the path to securing the powersports machine, RV, or watercraft you need without any fuss.",
        },
        {
          step: 2,
          icons: "/tabler.png",

          title: "Speak With Us",
          description:
            "After your application, we'll reach out to discuss your needs and preferences.</br> This conversation allows us to understand exactly what you're looking for, ensuring we can provide the best options available.",
        },
        {
          step: 3,
          icons: "/shopping.png",

          title: "Time to Shop!",
          description:
            "With your pre-approval in hand, you get to choose from our extensive inventory or choose a private sale powersports machine, RV or watercraft.<br/>Whether you're into quads, bikes, ar snowmobiles, you'll find the perfect vehicle to fit your outdoor lifestyle.",
        },
        {
          step: 4,
          icons: "/card.png",

          title: "Pick Your Payments",
          description:
            "We’ll find payments that work for your budget. Weekly, bi-weekly <br/> or monthly, no matter what you have in mind we’ll make it work for you.",
        },
        {
          step: 5,
          icons: "/writing.png",
          title: "Sign Paperwork",
          description:
            "Once you've made your selection, we'll prepare the necessary paperwork.<br/> Our process is designed to be transparent and straightforward, ensuring you understand all the details before signing.",
        },
        {
          step: 6,
          icons: "/delivery.png",
          title: "Take Delivery",
          description:
            "The final step is the most exciting—receiving your new ride, RV, or watercraft!<br/> We’ll arrange for delivery directly to your door, or you can come pick it up – the choice is yours!",
        },
      ],
    };
  },
};
</script>
