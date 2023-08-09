import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    // prefix: 'bss-',
    darkMode: ['class', '[data-mode="dark"]'],
    i18n: {
        locales: ["en-US"],
        defaultLocale: "en-US",
    },
    theme: {
    },
    corePlugins: {
        aspectRatio: false,
        container: false
    },
    plugins: [
        require("./plugin"),
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    '@screen xs': {
                        // maxWidth: '450px',
                        paddingLeft: 0,
                        paddingRight: 0
                    },
                    '@screen sm': {
                        maxWidth: '540px',
                    },
                    '@screen md': {
                        maxWidth: '720px',
                    },
                    '@screen lg': {
                        maxWidth: '980px',
                    },
                    '@screen xl': {
                        maxWidth: '1216px',
                    },
                    '@screen 2xl': {
                        maxWidth: '1456px',
                    },
                    '@screen 3xl': {
                        maxWidth: '1824px',
                    },
                    '@screen 2k': {
                        maxWidth: '2000px',
                    },
                }
            })
        },
        require('cssnano')({ preset: 'default', }),
        forms
    ],
};
