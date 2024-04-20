/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `var(${variableName}, ${opacityValue})`;
    }
    return `var(${variableName})`;
  };
}


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  
    extend: {
      colors: {
        primary: withOpacity("--color-primary"),
        secondary: withOpacity("--color-secondary"),
        textColor: withOpacity("--color-textColor"),
        secondaryBg: withOpacity("--color-secondaryBg") ,
        success: withOpacity("--color-success"),
        warning: withOpacity("--color-warning"),
        error: withOpacity("--color-error")       
      },
      container: {
        padding: "1rem",
        center: true

      },
    },
  },
  plugins: [],
}