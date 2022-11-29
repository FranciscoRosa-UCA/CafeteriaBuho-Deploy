import React from "react";
import Button from "../Button/Button";
import "./PaymentFailed.css";
import Icon from "../Icon/Icon";
import { useUserContext } from "../../contexts/UserContext";
const PaymentFailed= () => {
    const {user} = useUserContext();
    return(
        <div className="rounded-xl bg-main-bg w-full md:w-96 md:h-3/4 h-full z-50 absolute md:right-3 shadow-[0_0_20px_1px_rgba(0,0,0,0.3)]">
            <div className="components-container">
                <h1 className="titulo">Billetera</h1>
                <figure>
                    <img src={user.foto ||"https://res.cloudinary.com/dvbuu8u2x/image/upload/v1666536043/olympic_flag.jpg"} alt="foto de usuario" className="perfil"/>
                </figure>
                <h2 className="identificacion">{user.wallet.qr}</h2>
                <div className="interaccion">
                    <Button>Recargar billetera</Button>
                    <Button>Cancelar</Button>
                </div>
            </div>
        </div>
    );
}

export default PaymentFailed;