/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./**/*.{html,md,js,liquid}",
        "./*.{html,md,js}",
        "./_includes/*.{html,md,js,liquid}",
        "./_layouts/*.{html,md,js,liquid}"
    ],
    safelist: [
        // Include classes that are dynamically generated or not explicitly found in the files
        'block',
        'hidden',
        'bg-green-500',
        'hover:bg-green-600',
        'dark:bg-gray-900',
        'dark:border-gray-700',
        // Add any additional classes you use in a dynamic context
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    important: true,
}
