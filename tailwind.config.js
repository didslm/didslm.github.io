/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./**/*.{html,md,js}", // adjust these paths if needed
        "./*.{html,md,js}",
        "./_includes/*.html",
        "./_layouts/*.html"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    important: true,
}
