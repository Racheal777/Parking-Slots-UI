

import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import OTPPage from './pages/OTPPage'
import ParkingSlotsPage from './pages/ParkingSlotPage'
import DashboardLayout from './layouts/DashboardLayout'
import Overview from './pages/Dashboard/Overview'
import Settings from './pages/Dashboard/Settings'

function App() {

  const router = createBrowserRouter([
    
  {
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
  },

  {
    path: '/parking/:location',
    element: <ParkingSlotsPage/>,
  },

  {
    path: '/dashboard',
    element: <DashboardLayout/>,
    children: [
      {
        index: true,
        element: <Overview/>
      },

      {
        path: "settings",
        element: <Settings/>
      }
    ]
  }


  
])



  return (
    <>
     
 <RouterProvider router = {router}/>
    
    </>
  )
}

export default App
