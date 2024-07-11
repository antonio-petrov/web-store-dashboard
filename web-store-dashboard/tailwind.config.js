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
        'top-bar-color': '#6A753D',
        'light-blue-background': 'rgba(58, 91, 255, 0.15)',
        'blue-text': '#3A5BFF',
        'dark-grey': '#383E49',
        'light-grey': '#667085',
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
