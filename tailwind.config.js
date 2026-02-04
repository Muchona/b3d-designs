/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bureau-blue': '#2563EB',
                'tech-blue': '#3B82F6',
                'deep-space': '#0B0F19',
                'off-white': '#F8FAFC',
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'display': ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
