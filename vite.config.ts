import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Listen on all IP addresses
    // port: 8080,       // Optional: Specify port (default is 5173)
    // strictPort: true, // Optional: Prevent port fallback
  }
})
