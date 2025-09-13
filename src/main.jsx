import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Router/router'
import AuthProvider from './contexts/AuthContext/AuthProvider';
import { AuthContext } from './contexts/AuthContext/AuthContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>


  </StrictMode>,
)
