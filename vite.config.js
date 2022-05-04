import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/og.png',
          dest: '.'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': '/src/',
    },
  },
  root: './',
    build: {
        outDir: './build'
  }
})
