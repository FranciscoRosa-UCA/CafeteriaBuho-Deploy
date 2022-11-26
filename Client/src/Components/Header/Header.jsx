import React from "react";

import Icon from "../Icon/Icon";

const MainHeader = ()=> {

    return(
        <header className="w-full rounded-xl flex justify-between px-5 py-5">

            <div className="flex items-center gap-x-10">
                <a href='/'><Icon _type="home" ></Icon></a>          
                <nav>
                    <ul className="flex items-center gap-x-10 text-xl">
                        <li>
                            <a href='/menu'>Menú del día</a>
                        </li>
                        <li>
                            Administrar menú
                        </li>
                        <li>
                            Administrar categorias
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center gap-x-10">
                <figure>
                    <Icon _type="wallet" ></Icon>
                </figure>
                <figure>
                    <Icon _type="shopping" ></Icon>
                </figure>
                <figure>
                    <a href='/cuenta'><Icon _type="account" ></Icon></a>
                </figure>
            </div>

        </header>
    );
};

export default MainHeader;