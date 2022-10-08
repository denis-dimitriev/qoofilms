/** @type {Plugin} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          padding: "10px",
          width: "1070px",
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
