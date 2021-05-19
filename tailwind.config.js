module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'Ubuntu': ['Ubuntu Condensed']
    },
    extend: {
      colors: {
      green: {
        DEFAULT: '#00f260',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
