import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base relativa: funciona igual en josed235.github.io y en /portafoly-JOSED235/
export default defineConfig({
  plugins: [react()],
  base: './',
})
