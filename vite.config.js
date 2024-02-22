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
        id: "barberbolt",
        launch_handler: {
          client_mode: ["navigate-existing", "auto"]
        },
        display_override: ["window-controls-overlay"],
        icons: [
          {
            src: "/barberbolt-any.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          }
        ],
        screenshots: [
          {
            src: "/screenshots/home.png",
            sizes: "1170x2532",
            type: "image/png",
            platform: "wide"
          },
          {
            src: "/screenshots/reservations.png",
            sizes: "1170x2532",
            type: "image/png"
          },
          {
            src: "/screenshots/services.png",
            sizes: "1170x2532",
            type: "image/png"
          },
          {
            src: "/screenshots/summary.png",
            sizes: "1170x2532",
            type: "image/png"
          }
        ]
      }
    })
  ]
})
