import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"

import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

import path from "node:path"
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
    flowbiteReact()
  ],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src")
    }
  }
})