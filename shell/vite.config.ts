import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'shell',
      remotes: {
        zustand_mfe: {
          type: 'module',
          name: 'zustand_mfe',
          entry: 'http://localhost:5174/remoteEntry.js',
          entryGlobalName: 'zustand_mfe',
          shareScope: 'default',
        },
        tanstack_mfe: {
          type: 'module',
          name: 'tanstack_mfe',
          entry: 'http://localhost:5175/remoteEntry.js',
          entryGlobalName: 'tanstack_mfe',
          shareScope: 'default',
        }
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
      ],
    }),
  ],
})
