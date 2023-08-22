/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "greenBlue": "#025464",
                "orange": "#e57c23",
                "ligthOrange": "#E8AA42",
                "whiteOrange": "#F8F1F1",
                "ligthOrangeOpacity": "#E8AA4240"
            },

            fontFamily: {
                'hindMadurai' : ['Hind Madurai', 'sans-serif'],
                'montserrat' : ['Montserrat', 'sans-serif'],
            }
        },
    },
    plugins: [],
};
