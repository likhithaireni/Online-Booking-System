// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/Online-Booking-System/',
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:8080"
    }
  }
})