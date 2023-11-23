import { fileURLToPath, URL } from 'node:url'
import uni from '@dcloudio/vite-plugin-uni'

import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue(), vueJsx()
    uni()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
