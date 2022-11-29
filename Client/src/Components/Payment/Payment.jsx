import React from "react";
import Button from "../Button/Button";
import "./Payment.css";
import Icon from "../Icon/Icon";
import { useCartContext } from "../../contexts/CartContext";
import { useUserContext } from "../../contexts/UserContext";
const Payment = ({ handler, recargarHandler, compraHandler }) => {
    const {user} = useUserContext();
    const {subtotal} = useCartContext();

    return(
        <div className="rounded-xl bg-main-bg w-full md:w-96 md:h-3/4 h-full z-50 absolute md:right-3 shadow-[0_0_20px_1px_rgba(0,0,0,0.3)]">
            {/* <span onClick={handler} className="cursor-pointer rounded-full text-4xl absolute right-3 top-0">&times;</span> */}
            <span onClick={handler} className="cursor-pointer rounded-full text-4xl absolute right-3 top-0">&times;</span>

            <div className="components-container">
                <h1 className="titulo">Billetera</h1>
                <figure className="w-52 h-52 rounded-full overflow-hidden">
                    <img src={user && user.foto || 'https://res.cloudinary.com/dvbuu8u2x/image/upload/v1666536043/olympic_flag.jpg'} alt="foto de usuario" className="w-full h-full object-cover"/>
                </figure>
                <h2 className="identificacion">{user && user.wallet.qr}</h2>
                <div className="detalle">
                    <p>Saldo actual: ${user && user.wallet.ucoins}</p>
                    <p>Total a pagar: $ {subtotal}</p>
                    {
                        user &&
                            user.wallet.ucoins > subtotal
                        ?<p>Saldo final: $ {user.wallet.ucoins - subtotal}</p>
                        :<p>¡No es posible realizar el pedido!</p>
                    }

                </div>
                <div className="interaccion">
                {
                    user &&
                        user.wallet.ucoins > subtotal
                    ?<Button handler={compraHandler}>Continuar</Button>
                    :<Button handler={recargarHandler}>Recargar billetera</Button>
                }
                    <Button handler={handler}>Cancelar</Button>
                </div>
            </div>
        </div>
    );
}

export default Payment;