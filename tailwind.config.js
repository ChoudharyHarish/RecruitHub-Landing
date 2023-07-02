/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors:{
        'primary':"#71C9CE",
        'secondary':"#A6E3E9",
        'textPrimary':"CBF1F5",
        'textSecondary':"E3FDFD",
        },
        fontFamily: {
         "primary":['Open Sans','sans-serif'],
         "secondary":['Poppins'],
        },
        fontSize:{
          "heading":'4rem',
          "sectionHeading":'1rem',
          "subheading":"2.6rem"
        },
        boxShadow:{
          "primaryShadow":"	0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);"
        }
    },
  },
  plugins: [],
}
