import React, { useState } from "react";

import Icon from "../Icon/Icon";
import Payment from "../Payment/Payment";
import Carrito from '../Carrito/Carrito';
import { useUserContext } from "../../contexts/UserContext";
import { useCartContext } from "../../contexts/CartConext";
import QrPayment from "../QrPayment/QrPayment";
const MainHeader = () => {
    const {token, user, logout} = useUserContext();
    const {comprar} = useCartContext();

    const [wallet, showWallet] = useState(false);
    const [cart, showCart] = useState(false);
    const [recargar, showRecargar] = useState(false);
    const [pedido, showPedido] = useState(false);

    const hideAll = () => {
        showWallet(false);
        showCart(false);
        showRecargar(false);
        showPedido(false);
    }
    const walletHandler = () => {
        if (wallet) {
            showWallet(false);
            return;
        }
        showWallet(true);
    }
    const cartHandler = () => {
        if (cart) {
            showCart(false);
            return;
        }
        showCart(true);
    }
    const hacerPedidoHandler = ()=> {
        hideAll();
        showPedido(true);
    }
    const cancelarPedidoHandler = ()=> {
        hideAll();
    }

    const recargarBilleteraHandler = () => {
        hideAll();
        showRecargar(true);
    }
    const comprarHandler =() => {
        comprar();
    }
    return(
        <>
            <header className="relative w-full rounded-xl flex gap-10 justify-between p-5">

                <div className="flex items-center gap-10">
                    <a href='/'><Icon _type="home" ></Icon></a>          
                    <nav>
                        <ul className="flex flex-wrap justify-center items-center gap-10 text-xl text-center">
                            <a href='/menu'><li>Menú del día</li></a>
                            <a href='/admin/menu'><li>Administrar menú</li></a>
                            <a href='/admin/categorias'><li>Administrar categorias</li></a>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-10">
                    <figure className="cursor-pointer">
                        <Icon handler={walletHandler} _type="wallet" ></Icon>
                    </figure>
                    <figure className="cursor-pointer">
                        <Icon handler={cartHandler} _type="shopping" ></Icon>
                    </figure>
                    <figure>
                        <a href={!user ? '/login/' : '/cuenta/'}><Icon _type="account" ></Icon></a>
                    </figure>
                    {token && user && <button onClick={logout}>Cerrar sesion</button>}
                </div>
            </header>
            {
                wallet && <Payment handler={walletHandler}/>
            }
            {
                cart && <Carrito hacerPedidoHandler={hacerPedidoHandler} handler={cartHandler} />
            }
            {
                pedido && <Payment handler={cancelarPedidoHandler} recargarHandler={recargarBilleteraHandler} compraHandler={comprarHandler}/>
            }
            {
                recargar && <QrPayment regresarHandler={hacerPedidoHandler} />
            }
        </>
    );
};

export default MainHeader;