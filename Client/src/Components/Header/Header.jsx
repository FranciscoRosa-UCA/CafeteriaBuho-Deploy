import React, { useState } from "react";

import Icon from "../Icon/Icon";
import Payment from "../Payment/Payment";
import Carrito from '../Carrito/Carrito';
import { useUserContext } from "../../contexts/UserContext";
const MainHeader = () => {
    const {token, user, logout} = useUserContext();
    const [wallet, showWallet] = useState(false);
    const [cart, showCart] = useState(false);
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
    return(
        <>
            <header className="relative w-full rounded-xl flex justify-between px-5 py-5">

                <div className="flex items-center gap-x-10">
                    <a href='/'><Icon _type="home" ></Icon></a>          
                    <nav>
                        <ul className="flex items-center gap-x-10 text-xl">
                            <a href='/menu'><li>Menú del día</li></a>
                            <a href='/admin/menu'><li>Administrar menú</li></a>
                            <a href='/admin/categorias'><li>Administrar categorias</li></a>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center gap-x-10">
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
                cart && <Carrito handler={cartHandler} />
            }
        </>
    );
};

export default MainHeader;