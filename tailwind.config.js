/** @type {import('tailwindcss').Config} */
export const content = [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', // Et aussi dans /components
    './ui-components/**/*.{js,ts,jsx,tsx}', // Et aussi dans ui/components
]
export const theme = {
    extend: {}, // Ici tu pourras ajouter tes personnalisations plus tard
}
export const plugins = []
