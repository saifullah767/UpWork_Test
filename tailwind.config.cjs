/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms','@tailwindcss/line-clamp'),
  ],
}
