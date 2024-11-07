/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      padding: {
        96: "24rem", // Add custom class for 24rem
      },
      fontWeight: {
        black: 900,
      },
      textShadow: {
        custom: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  variants: {
    extend: {
      translate: ["hover"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-textshadow"),
  ],
};
