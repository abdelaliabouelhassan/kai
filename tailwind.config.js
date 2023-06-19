/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#D4165C',
        secondary:'#0D2129',
        tertiary:'#081318'
      },
      fontFamily:{
        inter:['Inter']
      }
    },
  },
  plugins: [],
}