// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
// import './index.css'
// import App from './App.jsx'
// import { Router } from './routes/Routes.jsx'
// import AuthProvider from './Providers/AuthProvider.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider> 
//       <RouterProvider router={Router}/>
//       </AuthProvider>
    
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider } from 'react-router'
//import AuthProvider from './Providers/AuthProvider'
import { ToastContainer } from 'react-toastify'
//import router from './Routes/router'
import AuthProvider from './Providers/AuthProvider'
import router from './Routes/router'
//import router from './Routes/router'





createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  <ToastContainer />
  </StrictMode>,
)
