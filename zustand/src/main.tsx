import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MfeZustand from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MfeZustand />
    </BrowserRouter>
  </StrictMode>,
)
