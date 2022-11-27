import React from "react";

import './Support.css';

import Button from "../../../../Button/Button";
const Support = () => {

    const handleSubmit = () => {
        console.log("Solicitar ticket");
    }

    const modal = document.querySelector("#mod-supp");


    return(
        <div id="mod-supp" className="w-full h-full absolute inset-0 modal-b flex justify-center items-center">
            <div className="flex flex-col justify-around items-center p-10 w-96 h-3/4 text-xl modal-c">
                <p className="text-2xl">Soporte técnico.</p>
                <hr className="w-full"/>
                <div>
                    <p className="text-center">¿Necesitas ayuda? Contactanos ahora.</p>
                </div>
                <div>
                    <p className="text-center">Solicita un ticket y te enviaremos un correo electronico con las indicaciones.</p>
                </div>
                <div className="w-4/5 flex flex-col gap-10 text-xl">

                    <div className="flex flex-col w-full gap-4 ">
                        <div className="w-full flex flex-col">
                            <Button handler={handleSubmit}>Solicitar ticket</Button>
                        </div>
                        <div className="w-full flex flex-col">
                            <Button>Cancelar</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Support;