

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Providers/AuthProvider'
import router from './Routes/router'






createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  <ToastContainer />
  </StrictMode>,
)
