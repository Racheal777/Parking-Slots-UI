

import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import OTPPage from './pages/OTPPage'

function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: <LoginPage/>,

    
  },

  {
    path: '/signup',
    element: <SignupPage/>,
  },

  {
    path: '/otp',
    element: <OTPPage/>,
  },

  {
    path: '/home',
    element: <HomePage/>,
  }

  
])



  return (
    <>
     
 <RouterProvider router = {router}/>
    
    </>
  )
}

export default App
