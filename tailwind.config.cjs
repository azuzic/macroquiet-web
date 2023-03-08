/** @type {import('tailwindcss').Config} */
const { createThemes } = require("tw-colors");
module.exports = {
    content: [
        "./pages/**/*.{html,js}",
        "./components/**/*.{html,js}",
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        createThemes({
            default: {
                MQ_dark: "#06060a",
                MQ_darkhover: "#13131f",
                MQ_darkblue: "#0f1119",
                MQ_red: "#EF5350",
                MQ_blue: "#15171e",
                MQ_light: "#cbd5e1",
                MQ_lighter: "#e2e8f0",
            },
        }),
    ],
};
