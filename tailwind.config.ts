import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
            light: '#EDEDED',
            medium: '#D9D9D9',
          },
        surface: {
          100: '#f9fafb',
          200: '#e5e7eb',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        primary: {
          100: '#dbeafe',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        secondary: {
          100: '#fef3c7',
          700: '#b45309',
          900: '#78350f',
        },
        tertiary: {
          100: '#ede9fe',
          700: '#6d28d9',
          900: '#4c1d95',
        },
      },
    },
  },  
  plugins: [require('@tailwindcss/forms')],
};
export default config;