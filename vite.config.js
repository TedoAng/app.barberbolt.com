import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(), 
    svgLoader(),
    VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true
        },
        workbox: {
          clientsClaim: true,
          skipWaiting: true
        },
        manifest: {
        name: "HackerWeb",
        short_name: "HackerWeb",
        start_url: ".",
        display: "standalone",
        description: "A readable Hacker News app.",
        icons: [
          {
            src: "./src/assets/img/barberbolt512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ]
})
