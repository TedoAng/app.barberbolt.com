import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path';
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  server: { https: true },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(), 
    svgLoader(),
    mkcert(),
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
        name: "BarberBolt",
        short_name: "BarberBolt",
        start_url: "/",
        display: "standalone",
        orientation: "portrait",
        description: "barbershop booking app",
        theme_color: "#333",
        background_color: "#333",
        icons: [
          {
            src: "/barberbolt-any.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/barberbolt-mascable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "mascable"
          }
        ]
      }
    })
  ]
})
