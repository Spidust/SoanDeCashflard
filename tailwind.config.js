/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  plugins: [],
  theme: {
    extend: {
      animation: {
        "slide-out": "slide-out 0.2s ease-out",
      },
      keyframes: {
        "slide-out": {
          from: {
            "max-height": 0,
          },
          to: {
            "max-height": "30vh",
          },
        },
      },
      colors: {
        primary: "#1ec7b8",
        card: "#18DAA8",
      },
    },
    height: {
      navbar: "40px",
    },
  },
};
