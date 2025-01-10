/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      aspectRatio: {
        'mobile': '9/16',
        'desktop': '16/9',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'primary-purple': '#4338CA',
        'harbor-purple': '#4338CA',
        'light-gray': '#F3F4F6',
        'medium-gray': '#E5E7EB',
        'neutral-gray': '#6B7280',
        'harbor-gray': '#F9FAFB',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(100px) scale(0.98)'
          },
          '20%': {
            opacity: '0.2'
          },
          '60%': {
            opacity: '0.6'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 2.8s cubic-bezier(0.22, 1, 0.36, 1) forwards'
      }
    },
  },
  plugins: [],
}
  