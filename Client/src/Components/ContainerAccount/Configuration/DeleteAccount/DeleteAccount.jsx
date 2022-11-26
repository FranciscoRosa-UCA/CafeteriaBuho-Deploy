import React from "react";

import './DeleteAccount.css';

import Button from "../../../Button/Button";
import DeleteAccountConfirmation from "./DeleteAccountConfirmation";

const DeleteAccount = () => {

    const handleSubmit = () => {
        console.log("Cuenta borrada");
    }

    const modal = document.querySelector("#mod-acc");


    return(
        <div id="mod-acc" className="w-full h-full absolute inset-0 modal-b flex justify-center items-center">
            <div className="flex flex-col justify-around items-center p-10 w-96 h-2/4 text-xl modal-c">
                <p className="text-2xl text-center">Eliminar cuenta permanentemente</p>
                <hr className="w-full"/>

                <div>
                    <p className="text-center">¿Esta seguro que desea eliminar su cuenta?</p>
                </div>

                <div className="w-4/5 flex flex-col gap-10 text-xl">
                    <div className="flex flex-col w-full gap-4 ">
                        <div className="w-full flex flex-col">
                            <Button handler={handleSubmit}>Sí, estoy seguro</Button>
                        </div>
                        <div className="w-full flex flex-col">
                            <Button>No, cancelar</Button>
                        </div>
                    </div>
                </div>

            </div>
            {/* <DeleteAccountConfirmation></DeleteAccountConfirmation> */}
        </div>
        
    );
};

export default DeleteAccount;