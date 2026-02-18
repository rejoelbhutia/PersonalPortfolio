/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Dark theme colors (default)
                background: '#000000', // Pure black
                sidebar: '#161616',    // Lighter dark for panels
                border: '#262626',
                primary: '#3b82f6',
                text: '#ededed',
                muted: '#a3a3a3',
                // Light theme colors
                'light-background': '#f5f5f5',
                'light-sidebar': '#ffffff',
                'light-border': '#e0e0e0',
                'light-text': '#1a1a1a',
                'light-muted': '#666666'
            },
            fontFamily: {
                message: ['Inter', 'sans-serif'],
            },
             pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }, // grows 10%
        },
      },
      animation: {
        'pulse-scale': 'pulseScale 4s ease-in-out infinite', // slow and smooth
      },
        },

    
    plugins: [],
}
