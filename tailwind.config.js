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
        hero_bg: 'url(../assets/image/bg-layer.svg)',
        cta_banner: 'url(../assets/image/cta-bg.jpg)',
      },
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        'duplicate-san': 'Duplicate Sans',
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
        // gray
        'gray-25': '#FCFCFD',
        'gray-30': '#667085',

        // success
        'success-25': '#d1fadf',
        'success-50': '#ECFDF3',
        'success-100': '#D1FADF',
        'success-500': '#12B76A',
        'success-600': '#039855',
        'success-700': '#027A48',
        'success-800': '#05603a',

        // primary
        'primary-700': '#00060E',
        'primary-50': '#E7E7E7',
        'primary-600': '#000712',

        // error
        'error-50': '#fef3f2',
        'error-25': '#FFFBFA',
        'error-100': '##FEE4E2',
        'error-300': '#FDA29B',
        'error-600': '#F04438',
        'error-700': '#B42318',

        // blue-gray
        'blue-gray-25': '#FCFCFD',
        'blue-gray-50': '#F8F9FC',
        'blue-gray-700': '#363F72',
        'blue-gray-500': '#4E5BA6',
        'blue-gray-600': '#3E4784',

        'blue-light-700': '#026AA2',
        'blue-light-25': '#F5FBFF',

        // warning
        'warning-50': '#FFFCF5',
        'warning-300': '#FEC84B',
        'warning-500': '#F79009',
        'warning-700': '#B54708',
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
