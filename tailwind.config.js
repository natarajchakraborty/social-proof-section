module.exports = {
  purge: {
    enabled: true,
    content: ['index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend : {
      fontFamily: {
        'body': ['Spartan']
      },
      fontSize: {
        'base15': '0.93rem'
      },
      screens: {
        'xsm': '375px',
        '1xl': '1440px'
      },
      colors: {
        veryDarkMagenta: 'hsl(300, 43%, 22%)',
        softPink: 'hsl(333, 80%, 67%)',
        darkGrayishMagenta: 'hsl(303, 10%, 53%)',
        lightGrayishMagenta: 'hsl(300, 24%, 96%)',
        themeWhite: 'hsl(0, 0%, 100%)'
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
    display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: [],
}