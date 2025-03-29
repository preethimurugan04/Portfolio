/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensures Tailwind scans your components
  theme: {
    extend: {
      colors: {
        primary: "#4A00E0",  // Deep Purple
        secondary: "#8E2DE2", // Bright Violet
        background: "#1A1A2E", // Dark Blue-Gray
        accent: "#00C9A7", // Teal Green
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, #4A00E0 10%, #8E2DE2 50%)',
        'gradient-linear': 'linear-gradient(135deg, #4A00E0, #8E2DE2)',
      },
    },
  },
  plugins: [],
};
