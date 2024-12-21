import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        custom: '15px',
      },
      colors: {
        'orange-red': '#DB4444',
        'dark-gray': '#7D8184',
        'white-gray': '#FAFAFA',
        'light-green': '#00FF66',
      },
      backgroundColor: {
        primary: '#FFFFFF',
        secondary: '#F5F5F5',
        secondary2: '#363738',
        secondary3: '#DB4444',
        active: '#E07575',
      },
      borderColor: {
        customColor: '#D9D9D9',
      },
    },
  },
  plugins: [],
};
export default config;
