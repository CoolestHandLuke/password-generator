/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'dark-grey': '#24232c',
                grey: '#817d92',
                'light-grey': '#e6e5ea',
                onyx: '#18171f',
                'neon-green': '#a4ffaf',
                'light-red': '#f64a4a',
                'light-orange': '#fb7c58',
                'dark-yellow': '#f8cd65',
            },
        },

        fontFamily: {
            JetBrains: ['JetBrains Mono', 'system-ui'],
        },
    },
    plugins: [require('daisyui')],
};
