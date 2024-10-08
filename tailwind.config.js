/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        asphalt: '#2F4F4F', // Dark asphalt gray
        parkingYellow: '#FFD700', // Bright yellow for accents
        concrete: '#D3D3D3', // Light gray for backgrounds and forms
        availableGreen: '#32CD32', // Green for available slots
        occupiedRed: '#FF4500', // Red for occupied or error states
      },
    },
  },
  
  plugins: [],
}
