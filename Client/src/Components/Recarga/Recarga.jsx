import React from "react";
import "./Recarga.css";
import Button from "../Button/Button";

const Recarga = () => {
    return(
        <div className="rounded-xl bg-main-bg w-full md:w-96 md:h-3/4 h-full z-50 absolute md:right-3 shadow-[0_0_20px_1px_rgba(0,0,0,0.3)]">
            <div className="components-container">
                <h1 className="titulo">Billetera</h1>
                <div className="w-full">
                    <form className="info">
                        <input placeholder="Nombre del representante" className="text-area"></input>
                        <input placeholder="Número de tarjeta" className="text-area"></input>
                        <input placeholder="Fecha de expiración" className="text-area"></input>
                        <input placeholder="Código CVV" className="text-area"></input>
                    </form>
                </div>
                <div className="interaccion">
                    <Button>Continuar</Button>
                    <Button>Regresar</Button>
                </div>
            </div>
        </div>
    );
}

export default Recarga;