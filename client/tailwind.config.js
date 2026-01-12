/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#000000', // Pure black
                sidebar: '#161616',    // Lighter dark for panels
                border: '#262626',
                primary: '#3b82f6',
                text: '#ededed',
                muted: '#a3a3a3'
            },
            fontFamily: {
                message: ['Inter', 'sans-serif'], // Assuming we might add this
            }
        },
    },
    plugins: [],
}
