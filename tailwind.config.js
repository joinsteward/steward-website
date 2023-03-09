const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // mode: "jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '520px',
      md: '800px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        // footer: 'url(../assets/image/footer-lines.svg)',
      },
      fontFamily: {
        sans: ['Aeonik', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        1.25: '0.3125rem',
        3.75: '0.9375rem',
        7.5: '1.875rem',
        12.5: '3.125rem',
        15: '3.75rem',
        25: '6.25rem',
        30: '7.5rem',
        37: '9.375rem',
      },
      colors: {
        accent: {
          orange: '#D28B28',
          green: '#BFFF0B',
          brown: '#AF7421',
          light_yellow: '#FBF5EC',
          gray: '#242628',
          'moss/400': '#86CB3C',
        },
        textBaseColor: '#242628',
        grey: {
          light: '#E5E5E5',
          dark: '#606060',
          divider: '#D9DDD5',
          bg: '#F2F4F1',
          warm: '#FAFAF9',
          deep: '#586068',
          'warm-800': '#292524',
          'warm-900': '#1C1917',
          'warm-400': '#A9A29D',
          semi: '#E5E8E3',
          accent: '#44403C',
          stroke: '#D7D3D0',
        },
        blue: {
          light: '#242628',
        },
        support: '#586068',
        secondary: {
          900: '#3A270B',
        },
      },
      fontSize: {
        '1sm': '0.9375rem',
        '8lg': '5.3125rem',
      },
      boxShadow: {
        card: '0px 3px 3px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
