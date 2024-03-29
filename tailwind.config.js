const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        minWidth: {
            '80': '20rem',
            '96': '24rem',
        },
        extend: {
            fontFamily: {
                sans: ['Roboto', 'Helvetica', ...defaultTheme.fontFamily.sans],
                body: ['"Roboto Condensed"', 'Roboto', 'Helvetica', ...defaultTheme.fontFamily.sans],
            },


            colors: {
                flamingo: {
                    '50': '#f5f3f9',
                    '100': '#efe3fa',
                    '200': '#e2c2f9',
                    '300': '#d7a1f8',
                    '400': '#d075f8',
                    '500': '#cb4af8',
                    '600': '#b52ff5',
                    '700': '#8f26e3',
                    '800': '#7400b8',
                    '900': '#5a1d98',
                },
                blush: {
                    '50': '#fcfaf9',
                    '100': '#fcf3f4',
                    '200': '#f8dbe6',
                    '300': '#f6bad1',
                    '400': '#f584ab',
                    '500': '#f45780',
                    '600': '#e53659',
                    '700': '#b92a47',
                    '800': '#872138',
                    '900': '#661c2e',
                },
                tomato: {
                    '50': '#fcf9f8',
                    '100': '#fcf2ef',
                    '200': '#f9ddda',
                    '300': '#f7beb8',
                    '400': '#f68b80',
                    '500': '#f55f4f',
                    '600': '#e83c32',
                    '700': '#bf2e2d',
                    '800': '#8f2429',
                    '900': '#6e1e23',
                },
                mango: {
                    '50': '#fcf9f7',
                    '100': '#fbf3ec',
                    '200': '#f8e2d0',
                    '300': '#f5c5a5',
                    '400': '#f39764',
                    '500': '#f16c36',
                    '600': '#e04721',
                    '700': '#b43521',
                    '800': '#862a21',
                    '900': '#66221d',
                },
                chocolate: {
                    '50': '#fbfaf6',
                    '100': '#fbf6e9',
                    '200': '#f6e8c6',
                    '300': '#f2d191',
                    '400': '#eba84c',
                    '500': '#e38023',
                    '600': '#c85a15',
                    '700': '#984317',
                    '800': '#6e3319',
                    '900': '#532918',
                },
                olive: {
                    '50': '#fafbf9',
                    '100': '#f8f8ef',
                    '200': '#efedd3',
                    '300': '#e3dbaa',
                    '400': '#cbb86a',
                    '500': '#a99237',
                    '600': '#7f6c21',
                    '700': '#5c5220',
                    '800': '#433e1f',
                    '900': '#32301d',
                },
                teal: {
                    '50': '#f7fafa',
                    '100': '#f0f7f5',
                    '200': '#ddece8',
                    '300': '#c1dbd8',
                    '400': '#8dbbbb',
                    '500': '#589595',
                    '600': '#3d716f',
                    '700': '#335757',
                    '800': '#2a4243',
                    '900': '#213536',
                },
                denim: {
                    '50': '#f5fafc',
                    '100': '#e9f6fa',
                    '200': '#cde7f6',
                    '300': '#aad3f2',
                    '400': '#73aeee',
                    '500': '#4284e7',
                    '600': '#2f60d6',
                    '700': '#2a4bb2',
                    '800': '#233a82',
                    '900': '#1d2f63',
                },
                royalblue: {
                    '50': '#f6f9fc',
                    '100': '#eaf4fb',
                    '200': '#cfe2f9',
                    '300': '#afcaf8',
                    '400': '#82a0f6',
                    '500': '#5473f4',
                    '600': '#3c50ec',
                    '700': '#323fd0',
                    '800': '#28319e',
                    '900': '#20297a',
                },
                indigo: {
                    '50': '#f6f9fc',
                    '100': '#eaf3fc',
                    '200': '#cfe0fa',
                    '300': '#b1c7f9',
                    '400': '#889bf8',
                    '500': '#5c6ef6',
                    '600': '#424bf0',
                    '700': '#363bd7',
                    '800': '#2b2fa7',
                    '900': '#222781',
                },
            }
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
