import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1F2937", // dark primary color for text
        secondary: "#3B82F6", // blue primary color
        accent: "#9CA3AF", // gray accent color
        highlight: "#F59E0B", // yellow accent color
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/images/herobg.png')",
      // },
      animation: {
        changewidth: 'width 2s ease-in-out infinite',
        spin: 'spin 15s linear infinite',
        absoluteright: 'absoluteright 4s ease-in infinite',
        translateright: 'translateright 1.5s ease-in-out infinite',
        animatepingslow: 'ping 5s cubic-bezier(0, 0, 0.2, 1) infinite',
        fadeIn: "fadeIn 1s ease-out",
        slideUp: "slideUp 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: '0' },
          "100%": { opacity: '1' },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: '0' },
          "100%": { transform: "translateY(0)", opacity: '1' },
        },
        width: {
          '0%, 100%': { width: '20px' },
          '50%': { width: '40%' }
        },
        absoluteright: {
          '0%,100%': {
            right: '0px'
          },
          '50%': {
            right: '-30px'
          }
        },
        translateright: {
          '0%,100%': {
            'margin-left': '0px'
          },
          '50%': {
            'margin-left': '20px'
          }
        },
        ping: {
          '75%,100%': {
            transform: 'scale(2)',
            opacity: '0'
          }
        },
        wiggle: {
          '0%': {
            transform: 'skewX(9deg)'
          },
          '10%': {
            transform: 'skewX(-8deg)',
          },
          '20%': {
            transform: 'skewX(7deg)',
          },
          '30%': {
            transform: 'skewX(-6deg)',
          },
          '40%': {
            transform: 'skewX(5deg)'
          },
          '50%': {
            transform: 'skewX(-4deg)',
          },
          '60%': {
            transform: 'skewX(3deg)'
          },
          '70%': {
            transform: 'skewX(-2deg)'
          },
          '80%': {
            transform: 'skewX(1deg)'
          },
          '90%': {
            transform: 'skewX(0deg)'
          },
          '100%': {
            transform: 'skewX(0deg)'
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
