import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"

import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

import path from "node:path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src")
    }
  }
})