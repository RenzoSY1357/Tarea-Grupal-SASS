/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./index.html",
    "./*.html",
],
theme: {
    extend: {
        colors: {
        'primary': {
            100: '#ADC9E6',
            200: '#80B3D9',
            300: '#559CCA',
            400: '#2A86BC',
            500: '#0070AC',
            600: '#00598A',
        },
        'secondary': {
            100: '#E6E6E6',
            200: '#BDBDBD',
            300: '#949494',
            400: '#6C6C6C',
            500: '#454545',
            600: '#1F1F1F',
        },
        'accent': {
            100: '#F8C8A0',
            200: '#F4AB70',
            300: '#F08E40',
            400: '#EC7110',
            500: '#C95A00',
            600: '#A6 300',
        },
        'neutral': {
            100: '#FFFFFF',
            200: '#F0F0F0',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#000000',
        },
        'error': {
            100: '#FFD1D1',
            200: '#FFA8A8',
            300: '#FF8080',
            400: '#FF5757',
            500: '#D90000',
            600: '#   30000',
        },
        'warning': {
            100: '#FFECCF',
            200: '#FFD99F',
            300: '#FFC66F',
            400: '#FFB33F',
            500: '#E6991A',
            600: '#BF8000',
        },
        'success': {
            100: '#D1FFD1',
            200: '#A8FFA8',
            300: '#80FF80',
            400: '#57FF57',
            500: '#00D900',
            600: '#00 300',
        },
    }
},
},
    plugins: [],
}