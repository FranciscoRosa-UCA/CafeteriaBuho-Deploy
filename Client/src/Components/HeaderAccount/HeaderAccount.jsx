import React from "react";

const AccountHeader = () => {
    return(
        <div className="flex justify-center gap-x-10 ">
            <nav>
                <ul className="flex gap-x-40 text-xl">
                    <li>
                        Mi cuenta   
                    </li>
                    <li>
                        Historial de transacciones
                    </li>
                    <li>
                        configuraciones
                    </li>
                    <li>
                        Soporte
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AccountHeader;