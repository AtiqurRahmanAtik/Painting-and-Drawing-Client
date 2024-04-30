import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import ErrorPage from './Component/Error-Page/ErrorPage.jsx';
import AddCarft from './Component/AddCarftItem/AddCarft.jsx';
import ViewDetailsPage from './Component/ViewDetailsPage/ViewDetailsPage.jsx';
import AuthProvider from './Component/AuthProvider/AuthProvider.jsx';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute.jsx';
import AllArtCraft from './Component/AllArtCraft/AllArtCraft.jsx';
import ViewDetails from './Component/ViewDetails/ViewDetails.jsx';
import MyArtCraft from './Component/MyArt&Craft/MyArtCraft.jsx';



//routes

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: '/',
        element : <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/user')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addcraft',
        element:<AddCarft></AddCarft>
       
      },
      {
        path: '/ViewDetails/:id',
        element : <PrivateRoute>
          <ViewDetailsPage></ViewDetailsPage>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/user/${params.id}`)
      },
      {
        path: '/allArtCraft',
        element : <AllArtCraft></AllArtCraft>,
        loader: ()=> fetch('http://localhost:5000/user')
      },
      {
        path: '/view/:id',
        element : <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/user/${params.id}`)
      },

      {
        path: '/myArtCraft',
        element: <PrivateRoute>
          <MyArtCraft></MyArtCraft>
        </PrivateRoute>,
        
       
      }
    ]

  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
