import React from "react";
import Button from "../Button/Button";
import "./Payment.css";
import Icon from "../Icon/Icon";

const Payment = ({ handler }) => {
    return(
        // <div className="absolute  top-0">
            <div className="z-50 absolute right-3 general-container shadow-[0_0_20px_1px_rgba(0,0,0,0.3)]">
                <span onClick={handler} className="cursor-pointer rounded-full text-4xl absolute right-0 top-0">&times;</span>
                <div className="components-container">
                    <h1 className="titulo">Billetera</h1>
                    <figure>
                        <img src="https://res.cloudinary.com/dvbuu8u2x/image/upload/v1666536043/olympic_flag.jpg" alt="prueba" className="perfil"/>
                    </figure>
                    <h2 className="identificacion">00002721</h2>
                    <div className="detalle">
                        <p>Saldo actual: $ 100.00</p>
                        <p>Total a pagar: $ 50.00</p>
                        <p>Saldo final: $ 150.00</p>
                    </div>
                    <div className="interaccion">
                        <Button>Continuar</Button>
                        <Button>Cancelar</Button>
                    </div>
                </div>
            </div>
        // </div>

    );
}

export default Payment;