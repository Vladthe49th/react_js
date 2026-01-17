/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: '#6366f1', // indigo-500
                accent: '#10b981',  // emerald-500 для кнопок "Купити"
            },
        },
    },
    plugins: [],
}