import React from "react";
import "./QrPayment.css";
import QRCode from "react-qr-code";
import Button from "../Button/Button";


const QrPayment = () => {
    return(
        <div className="rounded-xl bg-main-bg w-full md:w-96 md:h-3/4 h-full z-50 absolute md:right-3 shadow-[0_0_20px_1px_rgba(0,0,0,0.3)]">
            <div className="components-container">
                <h1 className="titulo">Billetera</h1>
                <div style={{ background: 'white', padding: '16px' }}>
                    <QRCode value = {"00002721"} />
                </div>
                <div className="interaccion">
                    <Button>Regresar</Button>
                    <Button>Recargar con tarjeta</Button>
                </div>
            </div>
        </div>
    );
}

export default QrPayment;