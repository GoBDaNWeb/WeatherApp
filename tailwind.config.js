module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'mini': '450px',
                'sm': '640px',
                // => @media (min-width: 640px) { ... }

                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
            },
            fontFamily: {
                'sans': ['Poppins', 'sans-serif']
            },
            backgroundImage: {
                'bg-London': "url('/images/London.jpg')",
                'bg-Tokyo': "url('/images/Tokyo.jpg')"
            }
        },
    },
    plugins: [],
};
