import React from 'react'
import ReactDOM from 'react-dom/client'
import SpawnEngineOS from './App.tsx'
import './index.css' // Vi skapar denna i nästa steg för Tailwind

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SpawnEngineOS />
  </React.StrictMode>,
)
