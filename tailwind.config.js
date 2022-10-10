/** @type {Plugin} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "phone-sm": { max: "320px" },
        phone: { max: "480px" },
        "tablet-sm": { max: "640px" },
        tablet: { max: "768px" },
        "pc-sm": { max: "1024px" },
        pc: { max: "1280px" },
      },
      animation: {
        fadeIn: "fadeIn 600ms ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          padding: " 0 10px 0 10px",
          maxWidth: "1280px",
          minHeight: "100%",
          margin: "0 auto",
        },
        header: {
          backgroundColor: "#002f34",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "transform 0.5s cubic-bezier(0.8, 0.2, 0.2, 0.8)",
        },
      });
    }),
  ],
};
