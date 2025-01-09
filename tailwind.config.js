module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Core colors
          'primary-purple': '#221335', // Dark purple for headers and accents
          'primary-orange': '#CC5500', // Changed to burnt orange from #d09707
          'secondary-blue': '#116dff', // Blue for links and secondary accents
          'neutral-gray': '#3e3e3e', // Neutral gray for main text
          'light-gray': '#f7f7f7', // Background color
          'card-bg': '#ffffff', // Card and section backgrounds
          'highlight-yellow': '#fcde93', // Optional highlight color
          'medium-gray': '#f0f0f0', // New slightly darker shade for CTA
        },
        fontFamily: {
          sans: ['Open Sans', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        spacing: {
          '72': '18rem',
          '84': '21rem',
          '96': '24rem',
        },
        boxShadow: {
          'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        borderRadius: {
          'lg': '0.5rem',
          'xl': '1rem',
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
  };
  