import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import { Router } from './routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}/>
      </AuthProvider>
    
  </StrictMode>,
)
