import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'tanstack_mfe',
      filename: 'remoteEntry.js',
      remotes: {
        zustand_mfe: {
          type: 'module',
          name: 'zustand_mfe',
          entry: 'http://localhost:5174/remoteEntry.js',
          entryGlobalName: 'zustand_mfe',
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
    port: 5175,
  },
})
