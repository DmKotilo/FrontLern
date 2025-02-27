/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        dark: "#363131",
        light_green: "#00875A",
        'primary': {
          light: '#184E3CCC',
          DEFAULT: '#184E3C',
        },
        secondary: "#F4F1EA",
        lighter: "#F9F9F9",
        additional: "#9B9B9B",
        text: "#1E422F",
        'stroke': {
          active: '#C78148',
          DEFAULT: '#CCC0A5',
          gray: '#D2D2D2'
        },
        'accentuation': {
          light: '#C78148CC',
          DEFAULT: '#C78148',
        },
        accent_fill: "#F5F0E5",
        accent_fill_light: "#FFFFFFB2",
        error: "#C12D2D"
      },
      fontSize: {
        xs: ["12px", "14px"],
        sm: ["14px", "20px"],
        DEFAULT: ["16px", "22px"],
        base: ["16px", "20px"],
        lg: ["18px", "24px"],
        xl: ["20px", "28px"],
        xxl: ["24px", "34px"],
        headline: ["30px", "42px"],
        title: ["40px", "40px"]
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      screens: {
        xs: '576px',
        sm: '768px',
        md: '992px',
        lg: '1200px',
        xl: '1400px',
        '2xl': '1536px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          sm: '16px',
          md: '16px',
          lg: '16px'
        }
      }
    },
  },
  plugins: [],
}

