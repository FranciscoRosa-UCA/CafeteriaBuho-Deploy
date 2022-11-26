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
import ContainerAccount from './Components/ContainerAccount/ContainerAccount';
import Account from './Components/ContainerAccount/Account/Account';
import History from './Components/ContainerAccount/History/History';
import Configuration from './Components/ContainerAccount/Configuration/Configuration';

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
        element: <ContainerAccount />,
        children: [
          {
            path:'/cuenta',
            element: <Account />
          },
          {
            path:'/cuenta/configuracion',
            element: <Configuration />
          },
          {
            path:'/cuenta/historial',
            element: <History />
          }
        ]
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
