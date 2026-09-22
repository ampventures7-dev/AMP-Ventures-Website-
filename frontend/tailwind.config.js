/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        titanium: {
          900: '#08090d',
          800: '#0e1118',
          700: '#151a26',
          600: '#232b3e',
        },
        accent: {
          DEFAULT: '#10b981',
          hover: '#059669',
          light: '#34d399',
          muted: 'rgba(16, 185, 129, 0.12)',
        },
        surface: {
          base: '#ffffff',
          elevated: '#f8fafc',
          card: '#ffffff',
          cardHover: '#f1f5f9',
          border: '#e2e8f0',
          borderHover: '#cbd5e1',
        },
        lime: {
          accent: '#059669',
        },
        cyan: {
          accent: '#0284c7',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
    darkTheme: "light",
    base: false,
    styled: true,
    utils: true,
  },
};
