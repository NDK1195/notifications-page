/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      boxShadow: {
        box: "0px 20px 60px 0px rgba(73, 97, 168, 0.05)",
      },
      colors: {
        red: "hsl(1, 90%, 64%)",
        blue: "hsl(219, 85%, 26%)",
        "very-light-grayish-blue": "hsl(210, 60%, 98%)",
        "light-grayish-blue-1": "hsl(211, 68%, 94%)",
        "light-grayish-blue-2": "hsl(205, 33%, 90%)",
        "grayish-blue": "hsl(219, 14%, 63%)",
        "dark-grayish-blue": "hsl(219, 12%, 42%)",
        "very-dark-blue": "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
