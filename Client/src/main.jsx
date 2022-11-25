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
import MainHeader from './Components/HeaderMain/HeaderMain';
import Container from './Components/ContainerMain/ContainerMain';
import MenuDay from './Components/ContainerMain/MenuDay/MenuDay';
import Menu from './Components/ContainerMain/Menu/Menu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><MainHeader/><Container/></>,
    children: [
      {
        path: '/',
        element: <Menu />
      },
      {
        path: '/menu',
        element: <MenuDay />
      },
      {
        path: '/cuenta',
        // AQUI HAY QUE PONER EL COMPONENTE DE CUENTA
        element: <MenuDay />
      },
    ]
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
