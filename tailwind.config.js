const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './styles/globals.css'
    ],
    variants: {
        extend: {
            backgroundColor: ['label-checked'], // you need add new variant to a property you want to extend
        },
    },
    plugins: [
        require('daisyui'),
        plugin(({ addVariant, e }) => {
            addVariant('label-checked', ({ modifySelectors, separator }) => {
                modifySelectors(
                    ({ className }) => {
                        const eClassName = e(`label-checked${separator}${className}`); // escape class
                        const yourSelector = 'input[type="radio"]'; // your input selector. Could be any
                        return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
                    }
                )
            })
        }),
    ],
    daisyui: {
        // Light & dark themes are added by default (it switches automatically based on OS settings)
        // You can add another theme among the list of 30+
        // Add "data-theme='theme_name" to any HTML tag to enable the 'theme_name' theme.
        // https://daisyui.com/
        themes: ['light', 'dark']
    }
};
