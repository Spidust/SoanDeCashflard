/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  theme: {
    extend: {
      animation: {
        "slide-out": "slide-out 0.5s ease-out",
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
        primary: "#21ea59",
        card: "#1b91ff",
      },
    },
    height: {
      navbar: "40px",
    },
  },
};
