/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          50: '#EEEDFD',
          100: '#DCDAFB',
          200: '#B8B5F7',
          300: '#9490F3',
          400: '#706BEF',
          500: '#4F46E5',
          600: '#2A22D9',
          700: '#211BA8',
          800: '#181477',
          900: '#0F0D46',
          950: '#080723'
        },
        accent: {
          DEFAULT: '#10B981',
          50: '#E6F7F2',
          100: '#CCEFE5',
          200: '#99DFCB',
          300: '#66CFB1',
          400: '#33BF97',
          500: '#10B981',
          600: '#0D9567',
          700: '#0A714D',
          800: '#064C34',
          900: '#03281A',
          950: '#01140D'
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712'
        }
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: [],
} 