module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#fff',
      'black': '#000',
      'primary': '#66338b',
      'primary-light': '#d4c0fc',
      'secondary': '#9fc87f',
      'secondary-dark': '#8bb762',
      'silver': '#c9c9c9'
    },
    fontFamily: {
      'OneNightSans': ['One Night Sans', 'sans-serif'],
      'OneNightSansCondensed': ['One Night Sans Condensed', 'sans-serif'],
      'OneNightSansExtended': ['One Night Sans Extended', 'sans-serif']
    },
    backgroundImage: {
      'gradient-silver': 'linear-gradient(to bottom, #c9c9c9 0%,#fff 100%)',
      'gradient-radial': 'radial-gradient(ellipse at center, #e9f5dd 0%, #9fc87f 100%)'
    }
  },
  plugins: [],
}
