module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      gray: "#323232",
      white: "#FFFFFF",
      violet: "#8B60FA",
    },
    extend: {
      borderColor: {
        "gradient-violet-write": "linear-gradient(to bottom, #8B60FA, #FFFFFF)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".border-gradient": {
          "border-width": "0.125rem", // Ширина границы
          "border-style": "solid", // Стиль границы
          "border-image": "linear-gradient(to bottom, #8B60FA, #323232) 1", // Градиентная граница
          "background-color": "#323232", // Цвет фона
          "border-radius": "0.5rem", // Закругленные углы
          "background-origin": "border-box",
          "box-shadow": "inset 0 100vw white",
          // "-webkit-mask":
          //   "linear-gradient(#fff 0 0) padding-box linear-gradient(#fff 0 0)", // Маска для Webkit
          // "-webkit-mask-composite": "xor", // Композитная операция маски для Webkit
          // "mask-composite": "exclude", // Композитная операция маски
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    // require("tailwindcss"),
    // require("autoprefixer"),
  ],
};
