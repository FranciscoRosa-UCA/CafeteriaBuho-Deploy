import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import axios from 'axios';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {ConfigProvider} from './contexts/ConfigContext';

import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import MainHeader from './Components/Header/Header';
import Container from './Components/Container/Container';
import MenuContainer from './Components/Container/MenuContainer/MenuContainer';
import Home from './Components/Container/Home/Home';
import History from './Components/ContainerAccount/History/History';
import Configuration from './Components/ContainerAccount/Configuration/Configuration';
import ContainerAccount from './Components/ContainerAccount/ContainerAccount';
import Account from './Components/ContainerAccount/Account/Account';
import Menu from './Components/Container/MenuContainer/Menu/Menu';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
          <MainHeader/><Container/>
        </>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <MenuContainer />,
        children: [
          {
            path:'/menu/:id',
            element: <Menu />
          },
        ]
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
      <ConfigProvider>
        <RouterProvider router={router} >
        </RouterProvider>
      </ConfigProvider>
  </React.StrictMode>
)
