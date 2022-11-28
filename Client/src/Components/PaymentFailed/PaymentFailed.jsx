import React from "react";
import Button from "../Button/Button";
import "./PaymentFailed.css";
import Icon from "../Icon/Icon";

const PaymentFailed= () => {
    return(
        <div className="rounded-xl bg-main-bg w-full md:w-96 md:h-3/4 h-full z-50 absolute md:right-3 shadow-[0_0_20px_1px_rgba(0,0,0,0.3)]">
                    <div className="components-container">
                        <h1 className="titulo">Billetera</h1>
                        <figure>
                            <img src="https://res.cloudinary.com/dvbuu8u2x/image/upload/v1666536043/olympic_flag.jpg" alt="prueba" className="perfil"/>
                        </figure>
                        <h2 className="identificacion">00002721</h2>
                        <div className="detalle">
                            <p>Saldo actual: $ 100.00</p>
                            <p>Total a pagar: $ 50.00</p>
                            <p>¡No es posible realizar el pedido!</p>
                        </div>
                        <div className="interaccion">
                            <Button>Recargar billetera</Button>
                            <Button>Cancelar</Button>
                        </div>
                    </div>
                </div>
    );
}

export default PaymentFailed;