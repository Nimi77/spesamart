import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mdl: '921px',
      },
      fontSize: {
        custom: '15px',
      },
      colors: {
        orangeRed: '#D32F2F',
        darkGray: '#7D8184',
        lightGreen: '#00FF66',
      },
      backgroundColor: {
        primary: '#FFFFFF',
        secondary: '#F5F5F5',
        secondary2: '#363738',
        secondary3: '#D32F2F',
        active: '#E07575',
        accent: '#01c84a',
      },
      borderColor: {
        custom: '#D9D9D9',
      },
    },
  },
  plugins: [],
};
export default config;
