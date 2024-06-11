import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Employers from './components/pages/Employers.jsx'
import Seekers from './components/pages/Seekers.jsx'
import TMinus from './components/pages/TMinus.jsx'
import Contact from './components/pages/Contact/Contact.jsx'
import Error from './components/pages/Error.jsx'
import './tailwind.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
  },
  {
    path: '/Employers',
    element: <Employers/> 
  },
  {
    path: '/Seekers',
    element: <Seekers/> 
  },
  {
    path: '/Contact',
    element: <Contact/> 
  },
  {
    path: '/Tminus',
    element: <TMinus/> 
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
