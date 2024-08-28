/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          // "0%, 100%": { transform: "rotate(-3deg)" },
          // "50%": { transform: "rotate(3deg)" },

          "0%": { background: "#f2f2f2" },
          "50%": { background: "#e6e6e6" },
          "100%": { background: "#d9d9d9" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
