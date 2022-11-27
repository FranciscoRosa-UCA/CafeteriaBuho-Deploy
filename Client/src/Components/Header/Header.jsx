import React, { useState } from "react";

import Icon from "../Icon/Icon";
import Payment from "../Payment/Payment";

const MainHeader = ()=> {
    const [showWallet, setShowWallet] = useState(false);
    const walletHandler = () => {
        if (showWallet) {
            setShowWallet(false);
            return;
        }
        setShowWallet(true);
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
                    <figure>
                        <Icon _type="shopping" ></Icon>
                    </figure>
                    <figure>
                        <a href='/cuenta'><Icon _type="account" ></Icon></a>
                    </figure>
                </div>
            </header>
            {
                showWallet && <Payment handler={walletHandler}/>
            }
        </>
    );
};

export default MainHeader;