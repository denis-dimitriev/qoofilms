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
        fadeIn: "fadeIn 300ms ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".layout": {
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
        },
        ".container": {
          padding: " 0 10px 0 10px",
          maxWidth: "1280px",
          minWidth: "320px",
          margin: "0 auto",
        },
        header: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "transform 0.5s cubic-bezier(0.8, 0.2, 0.2, 0.8)",
        },
        footer: {
          marginTop: "auto",
        },
      });
    }),
    require("tailwind-scrollbar"),
  ],
};
