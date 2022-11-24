import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import { Container, Menu } from '@mui/material';
import MainHeader from './Components/HeaderMain/HeaderMain';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Container/>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Register />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
