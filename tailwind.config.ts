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
        'max-425' : '425px'
    },
    transitionDelay: {
      '200': '200ms',
      '350': '350ms',
      '500': '500ms',
    },
    animation: {
      'bounce-arrow': 'bounceArrow 1.5s infinite ease-in-out',
    },
    keyframes: {
      bounceArrow: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
    },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode:"class",
} satisfies Config;
