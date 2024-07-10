module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'website-background': '#D9D9D9',
        'sidebar': '#343439',
        'menu-selected': '#E73875',
        'menu-hover': 'rgba(231, 56, 117, 0.53)',
        'page-title-color': '#344767',
        'label-color': '#858D9D',
        'progress-blue': '#5E81F4',
        'progress-green': '#7CE7AC',
        'progress-red': '#FF808B',
        'progress-yellow': '#F4BE5E',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
