import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { ThemeInit } from "../.flowbite-react/init.js"

import './globals.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeInit />
    <App />
  </StrictMode>,
)