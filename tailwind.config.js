/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        anom: ["Anonymous Pro", "serif"],
      },
      colors: {
        "my-navy": "#1E06A1",
        "my-pink": "#FFDAE2",
        "my-ijo": "#CCF281",
      },
      animation: {
        flash: "flash 1.5s infinite",
        wave: "wave 1.5s ease-in-out infinite",
      },
      keyframes: {
        flash: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-9px)" },
        },
      },
    },
  },
  plugins: [],
};
