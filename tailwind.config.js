/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      'xs': ['14px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      'sm': ['16px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      'base': ['18px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      'lg': ['20px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      'xl': ['22px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      '2xl': ['24px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      '3xl': ['26px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      '4xl': ['28px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      '5xl': ['30px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      '6xl': ['34px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      '7xl': ['35px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      '8xl': ['36px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      '9xl': ['40px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      '10xl': ['45px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      '11xl': ['50px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      '12xl': ['60px', { lineHeight: '1.2', letterSpacing: '0.02em' }],
      '13xl': ['100px', { lineHeight: '1.1', letterSpacing: '0.02em' }],
    },
    extend: {
      colors: {
        navy: '#101C27',
      },
      spacing: {
        gutter: "var(--gutter)",
        "space-s": "var(--spaceSmall)",
        "space-m": "var(--spaceMed)",
        "space-l": "var(--spaceLarge)",
      },
    },
  },
  plugins: [],
}
