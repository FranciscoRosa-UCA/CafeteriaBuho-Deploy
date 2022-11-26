import React from "react";

import './DeleteAccount.css';

const DeleteAccountConfirmation = () => {

    const modal = document.querySelector("#mod-accC");


    return(
        <div id="mod-accC" className="w-full h-full absolute inset-0 modal-b flex justify-center items-center">
            <div className="flex flex-col justify-around items-center p-10 w-96 h-2/4 text-xl modal-c">
                <p className="text-2xl text-center">Eliminar cuenta permanentemente</p>
                <hr className="w-full"/>

                <div>
                    <p className="text-center">Su cuenta fue eliminada exitosamente, gracias por usar nuestros servicios.</p>
                </div>

            </div>
        </div>
    );
};

export default DeleteAccountConfirmation;