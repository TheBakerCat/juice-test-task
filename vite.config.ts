import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import basicSsl from '@vitejs/plugin-basic-ssl'
import svgr from '@svgr/rollup'

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    basicSsl()
  ],

  build: {
    outDir: './dist'
  },

  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },

  server: {
    https: true,
    host: true
  }
})
