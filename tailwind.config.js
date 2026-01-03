/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        retro: {
          // Modern dark theme (inspired by adittya.site)
          black: '#0a0a0a',        // Very dark background
          dark: '#1a1a1a',         // Card backgrounds
          darker: '#141414',       // Slightly lighter than black
          gray: '#3a3a3a',         // Borders and subtle elements
          'light-gray': '#525252', // Hover states
          // Light theme (complementary)
          cream: '#fafafa',        // Clean white background
          paper: '#ffffff',        // Pure white for cards
          offWhite: '#f5f5f5',     // Subtle backgrounds
          // Accent colors (kept vibrant)
          orange: '#ff6b35',       // More vibrant orange
          rust: '#e55a2b',         // Darker orange
          teal: '#00d4aa',         // Modern teal/cyan
          green: '#10b981',        // Modern green
          blue: '#3b82f6',         // Modern blue
          purple: '#8b5cf6',       // Modern purple
          red: '#ef4444',          // Modern red
        },
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
