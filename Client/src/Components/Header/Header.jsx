import React, { useState } from "react";
import Payment from "../Payment/Payment";
import Carrito from '../Carrito/Carrito';
import Icon from "../Icon/Icon";
import MenuIcon from '@mui/icons-material/Menu';
import { useUserContext } from "../../contexts/UserContext";
import { useCartContext } from "../../contexts/CartConext";
import QrPayment from "../QrPayment/QrPayment";
const MainHeader = () => {
    const {token, user, logout} = useUserContext();
    const {comprar} = useCartContext();
    const [menuHidden, setMenuHidden] = useState(true);
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
    const menuHandler = () => {
        if (menuHidden)
            setMenuHidden(false);
        else
            setMenuHidden(true);
    }
    return(
        
        <>
            <header className="relative w-full rounded-xl flex gap-5 justify-between p-5">

                <div className="flex items-center gap-10">
                    <a href='/'><Icon _type="home" ></Icon></a>          
                    <nav>
                        <div className="lg:hidden" onClick={menuHandler}>
                            <MenuIcon fontSize="large"></MenuIcon>
                        </div>
                        <ul className={(menuHidden ? "hidden" : "") + " text-left shadow-shadow p-5 absolute bg-main-bg z-20 rounded-t-md  lg:rounded-none lg:shadow-none lg:static lg:p-0 lg:flex lg:flex-wrap lg:justify-center lg:items-center gap-5 text-xl lg:text-center"}>
                            <a href='/menu'><li>Menú del día</li></a>
                            <a href='/admin/menu'><li>Adm. menú</li></a>
                            <a href='/admin/categorias'><li>Adm. categorias</li></a>
                            <a href='/admin/wallet'><li>Recargar Wallet</li></a>
                            {token && user && <button className="text-[#F5B7B1]" onClick={logout}>Cerrar sesion</button>}

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