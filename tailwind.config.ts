import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    colors: {
      'tan': '#CDC2AC',
      'cream':'#E7E3DA',
      'sage': '#BABB9B',
      'darkbrown':'#252118',
      'matcha':'#434E16'
    },
    fontFamily: {
      Bebas_Neue: ['Bebas Neue', 'sans-serif'],
      Albert_Sans: ['Albert Sans', 'sans-serif'],
      IBM_Plex_Mono: ['IBM Plex Mono', 'monospace'],
    },
    extend: {
      screens: {
        'min-2000': '2000px',
    },
      
    },
  },
  plugins: [],
  darkMode:"class",
} satisfies Config;
