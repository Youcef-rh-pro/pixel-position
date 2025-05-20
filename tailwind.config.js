// Example `tailwind.config.js` file
const colors = require('tailwindcss/colors')
/** @type {'tailwindcss}.config */
export default{

    content:[
        "./resources/**/*.blade.php",
        "./resources/**/*.js"
    ],
    theme:{
        fontFamily:{
            "hanken-grotesk":["Hanken Grotesk","sans-serif"]
        }
    }
}
