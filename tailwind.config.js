/** @type {Plugin} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
          padding: "10px",
          width: "1280px",
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
