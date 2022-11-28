import React from "react";
import "./QrPayment.css";
import QRCode from "react-qr-code";
import Button from "../Button/Button";
import { useUserContext } from "../../contexts/UserContext";

const QrPayment = ({regresarHandler}) => {
    const {user} = useUserContext();
    return(
        <div className="general-container shadow-[0_0_20px_1px_rgba(0,0,0,0.3)]">
            <div className="components-container">
                <h1 className="titulo">Billetera</h1>
                <div style={{ background: 'white', padding: '16px' }}>
                    <QRCode value = {user.wallet.qr} />
                </div>
                <div className="interaccion">
                    <Button handler={regresarHandler}>Regresar</Button>
                    <Button>Recargar con tarjeta</Button>
                </div>
            </div>
        </div>
    );
}

export default QrPayment;