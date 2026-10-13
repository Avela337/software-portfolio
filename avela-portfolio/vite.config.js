import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: (process.env.VERCEL || process.env.NETLIFY) ? '/' : '/software-portfolio/',

  plugins: [vue()],
  build:{
    target:['es2018','safari13'],
    cssTarget:'safari13',
  },
})
