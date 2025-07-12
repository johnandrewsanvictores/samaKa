// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#F3F7FB",
        bgColor2: "#E4ECF4",
        headingText: "#1A2A42",
        subHeadingText: "#4F5D75",
        primary: "#2F80ED",
        red: "#DE5656",
        green: "#52E081",
        brown: "#DDAE86",
      },
      fontSize: {
        h1: "3.815rem",
        h2: "3.052rem",
        h3: "2.441rem",
        h4: "1.953rem",
        h5: "1.563rem",
        h6: "1.25rem",
        p: "1rem",
        small: "0.8rem",
      },
      fontFamily: {
        nunito: ['"Nunito"', "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "bounce-slow": "bounce 2s infinite",
        blob: "blob 7s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      animationDelay: {
        200: "200ms",
        400: "400ms",
        1000: "1000ms",
        2000: "2000ms",
        4000: "4000ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    "animation-delay-200",
    "animation-delay-400",
    "animation-delay-1000",
    "animation-delay-2000",
    "animation-delay-4000",
  ],
};