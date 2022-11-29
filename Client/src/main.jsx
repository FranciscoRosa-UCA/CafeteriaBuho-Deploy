import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css';
import axios from 'axios';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {ConfigProvider} from './contexts/ConfigContext';
import { UserContextProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartConext';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import MainHeader from './Components/Header/Header';
import Container from './Components/Container/Container';
import MenuContainer from './Components/Container/Client/MenuContainer/MenuContainer';
import Home from './Components/Container/Client/Home/Home';
import History from './Components/Container/Client/ContainerAccount/History/History';
import Configuration from './Components/Container/Client/ContainerAccount/Configuration/Configuration'
import ContainerAccount from './Components/Container/Client/ContainerAccount/ContainerAccount';
import Account from './Components/Container/Client/ContainerAccount/Account/Account';
import Menu from './Components/Container/Client/MenuContainer/Menu/Menu';
import Carrito from './Components/Carrito/Carrito';
import Payment from './Components/Payment/Payment';
import PaymentFailed from './Components/PaymentFailed/PaymentFailed';
import QrPayment from './Components/QrPayment/QrPayment';
import Recarga from './Components/Recarga/Recarga';
import Saucer from './Components/Container/Administrator/Saucer/Saucer';
import SaucerContainer from './Components/Container/Administrator/Saucer/SaucerContainer/SaucerContainer';
import CategoriesAdd from './Components/Container/Administrator/CategoriesAdd/CategoriesAdd';
import RecargarWallet from './Components/Container/Administrator/RecargarWallet/RecargarWallet';

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
      {
        path: '/carrito',
        element: <Carrito/>
      },
      {
        path: '/payment',
        element: <Payment/>
      },
      {
        path: '/paymentf',
        element: <PaymentFailed/>
      },
      {
        path: '/qrpayment',
        element: <QrPayment/>
      },
      {
        path: '/recarga',
        element: <Recarga/>
      },
      {
        path: '/admin/menu',
        element: <Saucer/>,
        children: [
          {
            path: '/admin/menu/:id',
            element: <SaucerContainer/>
          }
        ]
      },
      {
        path: '/admin/categorias',
        element: <CategoriesAdd />
      },
      {
        path: '/admin/wallet',
        element: <RecargarWallet />
      }
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
        <UserContextProvider>
          <CartProvider>
            <RouterProvider router={router} >
            </RouterProvider>
          </CartProvider>
        </UserContextProvider>
      </ConfigProvider>
  </React.StrictMode>
)
