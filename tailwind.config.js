/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./public/assets/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "text-blue-400",
    "text-blue-500",
    "text-blue-700",
    "text-green-400",
    "text-green-500",
    "text-green-700",
    "text-orange-400",
    "text-orange-500",
    "text-orange-700",
    "text-pink-400",
    "text-pink-500",
    "text-pink-700",
    "text-purple-400",
    "text-purple-500",
    "text-purple-700",
    "bg-blue-100",
    "bg-orange-100",
    "bg-pink-100",
    "bg-purple-100",
    "bg-green-100",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-700",
    "bg-green-400",
    "bg-green-500",
    "bg-green-700",
    "bg-orange-400",
    "bg-orange-500",
    "bg-orange-700",
    "bg-pink-400",
    "bg-pink-500",
    "bg-pink-700",
    "bg-purple-400",
    "bg-purple-500",
    "bg-purple-700",
    "hover:bg-blue-50",
    "hover:bg-orange-50",
    "hover:bg-pink-50",
    "hover:bg-purple-50",
    "hover:bg-green-50",
    "hover:bg-blue-200",
    "hover:bg-green-50",
    "hover:bg-green-200",
    "hover:bg-orange-50",
    "hover:bg-orange-200",
    "hover:bg-pink-50",
    "hover:bg-pink-200",
    "hover:bg-purple-50",
    "hover:bg-purple-200",
    "border-blue-500",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient": "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
        "benefit-card-1": "url(assets/benefits/card-1.svg)",
        "benefit-card-2": "url(assets/benefits/card-2.svg)",
        "benefit-card-3": "url(assets/benefits/card-3.svg)",
        "benefit-card-4": "url(assets/benefits/card-4.svg)",
        "benefit-card-5": "url(assets/benefits/card-5.svg)",
        "benefit-card-6": "url(assets/benefits/card-6.svg)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[100rem]": {},
          minHeight: "100vh",
          backgroundColor: "var(--bg)",
          color: "var(--textColor)",
        },
        ".content": {
          "@apply flex flex-col lg:flex-row gap-[50px]": {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] font-semibold leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] font-semibold leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase": {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
        ".dark": {
          "--bg": "#0f172a",
          "--textColor": "#ddd",
          "--softBg": "#1f273a",
          "--softTextColor": "#a6a6a6",
          backgroundColor: "var(--bg)",
          color: "var(--textColor)",
        },
        ".light": {
          "--bg": "white",
          "--textColor": "black",
          "--softBg": "#f0f0f0",
          "--softTextColor": "#626262",
          backgroundColor: "var(--bg)",
          color: "var(--textColor)",
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
