/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily: {
      jetbrains: "'JetBrains Mono', monospace",
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        dakGrayishBlue: 'hsl(227, 12&, 61&)',
        veryDarkBlue: 'hsl(223, 12%, 13%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        backgroundColor: '#222327',
        boxColor: '#1C1B21',
      },
    },
  },
  plugins: [],
}
