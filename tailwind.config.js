/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `var(${variableName}, ${opacityValue})`
    }
    return `var(${variableName})`
  }
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
   
    extend: {
      colors: {
        primary: {
          0: withOpacity('--color-primary'),
          100: withOpacity('--color-primary-100'),
          200:withOpacity('--color-primary-200')
        },
        secondary: {
          0: withOpacity('--color-secondary'),
          100: withOpacity('--color-secondary-100'),
          200: withOpacity('--color-secondary-200'),
        },
        // primary: withOpacity('--color-primary'),
        // 100: withOpacity('--color-primary-100'),
        // secondary: withOpacity('--color-secondary'),
        // textColor: withOpacity('--color-textColor'),
        // secondaryBg: withOpacity('--color-secondaryBg'),
        // success: withOpacity('--color-success'),
        // warning: withOpacity('--color-warning'),
        // error: withOpacity('--color-error'),
        // bgMenu: withOpacity('--color-bgMenu'),
      },

      container: {
        padding: '1rem',
        center: true,
      },
    },
  },
  plugins: [],
}
