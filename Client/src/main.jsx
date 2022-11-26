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
import History from './Components/ContainerAccount/History/History';
import Configuration from './Components/ContainerAccount/Configuration/Configuration';
import ContainerAccount from './Components/ContainerAccount/ContainerAccount';
import Account from './Components/ContainerAccount/Account/Account';
import Carrito from './Components/Carrito/Carrito';
import Payment from './Components/Payment/Payment';
import PaymentFailed from './Components/PaymentFailed/PaymentFailed';
import QrPayment from './Components/QrPayment/QrPayment';
import Recarga from './Components/Recarga/Recarga';

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
    <RouterProvider router={router} />
  </React.StrictMode>
)
