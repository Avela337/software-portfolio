import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: (process.env.VERCEL || process.env.NETLIFY) ? '/' : '/software-portfolio/',
  plugins: [vue()],
})
