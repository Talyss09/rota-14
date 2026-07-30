// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "marquee-left": "marqueeLeft 35s linear infinite",
        "marquee-right": "marqueeRight 35s linear infinite",
      },
    },
  },
};
