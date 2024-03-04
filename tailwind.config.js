/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // Main Colours
                primary: '#04143C',
                darkPrimary: '#031030',
                lightPrimary: '#1F408E',
                secondary: '#f8842c',
                darkSecondary: '#DA7A30',
                lightSecondary: '#F4934A',

                // Text Colours
                white: '#FFFFFF',
                textBlack: '#313131',
            },
            // font family
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            // background images
            backgroundImage: {
                mapBackground: "url('./src/assets/inputBackground.png')",
                mapBackgroundColour:
                    "url('./src/assets/inputBackgroundColour.png')",
            },
            // animation class
            animation: {
                hoverFade: 'hoverFade 0.25s ease-in-out',
                globeAnimation:
                    'appearFromBottom 1.5s ease-in-out 1, globeBounce 5s 1.5s ease-in-out infinite',
                handsAppear: 'appearFromBottom 1.5s ease-in-out',
            },

            // actual animation
            keyframes: {
                hoverFade: {
                    '0%': { opacity: 1 },
                    '25%': { opacity: 0.6 },
                    '50%': { opacity: 0.1 },
                    '75%': { opacity: 0.6 },
                    '100%': { opacity: 1 },
                },
                appearFromBottom: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(60px) translateX(-40%)',
                    },
                    '100%': { opacity: 1 },
                },
                globeBounce: {
                    '0%': {
                        transform: 'translateY(0px) translateX(-40%) ',
                    },
                    '50%': {
                        transform: 'translateY(10px) translateX(-40%)',
                    },
                    '0%': {
                        transform: 'translateY(0px) translateX(-40%) ',
                    },
                },
            },
        },
    },
    plugins: [require('daisyui'), 'prettier-plugin-tailwindcss'],
};
