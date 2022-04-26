module.exports = {
  mode: 'jit',
  purge: [
    "app/**/*.{jsx,tsx}"
  ],
  content: [],
  theme: {
    extend: {},
    colors: {
      "smooth-blue": "#99E1E5",
      "smooth-pink": "#F2C6B4"
    },
    fontFamily: {
      'quicksand': ["Quicksand", "sans-serif"],
      'montserrat': ["Montserrat", "sans-serif"]
    }
  },
  plugins: [require("daisyui")],
}
