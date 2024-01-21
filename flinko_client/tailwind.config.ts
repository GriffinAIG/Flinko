import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f212e',
        primary: '#213743',
        secondary: '#3d5564',
        text: '#F2F7FF',
        purple: '#C52BFF',
        purpleDark: '#8D27B3',
      },
    },
  },
  plugins: [],
};
export default config;
