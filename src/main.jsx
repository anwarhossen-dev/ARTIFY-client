

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { Route, RouterProvider } from 'react-router'
// import { ToastContainer } from 'react-toastify'
// import AuthProvider from './Providers/AuthProvider'
// import router from './Routes/router'






// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
//   <ToastContainer />
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
//import { router } from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider';

// 1. Import these two from TanStack Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import router from './Routes/router';
import { ToastContainer } from 'react-toastify';

// 2. Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 3. Wrap everything with QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
    <ToastContainer />
  </StrictMode>,
)
