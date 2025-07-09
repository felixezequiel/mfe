import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'zustand_mfe',
      filename: 'remoteEntry.js',
      remotes: {
        tanstack_mfe: {
          type: 'module',
          name: 'tanstack_mfe',
          entry: 'http://localhost:5175/remoteEntry.js',
          entryGlobalName: 'tanstack_mfe',
          shareScope: 'default',
        },
        shell: {
          type: 'module',
          name: 'shell',
          entry: 'http://localhost:5173/remoteEntry.js',
          entryGlobalName: 'shell',
          shareScope: 'default',
        }
      },
      exposes: {
        './App': './src/App.tsx',
        './Store': './src/store/index.ts',
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../shared'),
    },
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5174
  }
})
