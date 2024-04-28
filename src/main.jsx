import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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
        element: <AddCarft></AddCarft>
      },
      {
        path: '/ViewDetails/:id',
        element : <ViewDetailsPage></ViewDetailsPage>,
        loader: ({params}) => fetch(`http://localhost:5000/user/${params.id}`)
      }
    ]

  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
