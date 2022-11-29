import React from "react";

const AccountHeader = () => {
    return(
        <div className="flex justify-center gap-x-10 ">
            <nav>
                <ul className="flex gap-x-40 text-xl">
                    <a href='/cuenta'><li>Mi cuenta</li></a>
                    <a href='/cuenta/historial'><li>Historial de transacciones</li></a>
                    <a href='/cuenta/configuracion'><li>Configuracion</li></a>
                    <a href='/cuenta/soporte'><li>Soporte</li></a>
                </ul>
            </nav>
        </div>
    );
};

export default AccountHeader;