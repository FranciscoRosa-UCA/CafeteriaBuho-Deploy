import React from "react";

import Icon from "../Icon/Icon";

const MainHeader = ()=> {

    return(
        <header className="w-full rounded-xl flex justify-between px-10 py-5">

            <div className="flex items-center gap-x-10">
                <figure>
                    <Icon _type="home" ></Icon>
                </figure>                
                <nav>
                    <ul className="flex items-center gap-x-10 text-xl">
                        <li>
                            Menú del día
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
                    <Icon _type="account" ></Icon>
                </figure>
            </div>

        </header>
    );
};

export default MainHeader;