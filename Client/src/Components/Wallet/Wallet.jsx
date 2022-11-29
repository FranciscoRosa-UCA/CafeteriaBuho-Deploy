import React from 'react';
import Button from "../Button/Button";
import { useUserContext } from '../../contexts/UserContext';
const Wallet = ({recargarQR, handler}) => {
    const {user} = useUserContext();
    
    return (
        <div className="rounded-xl bg-main-bg w-full md:w-96 md:h-3/4 h-full z-50 absolute md:right-3 shadow-[0_0_20px_1px_rgba(0,0,0,0.3)]">
            <span onClick={handler} className="cursor-pointer rounded-full text-4xl absolute right-3 top-0">&times;</span>

            <div className="components-container">
                <h1 className="titulo">Billetera</h1>
                <figure className='w-80 h-80 overflow-hidden rounded-full'>
                    <img src={user && user.foto || 'https://res.cloudinary.com/dvbuu8u2x/image/upload/v1666536043/olympic_flag.jpg'} alt="foto de usuario" className="h-full w-full object-cover"/>
                </figure>
                <h2 className="identificacion">{user.wallet.qr}</h2>
                <div className="interaccion">
                    <Button handler={recargarQR}>Código QR</Button>
                    <Button>Recargar con tarjeta</Button>
                </div>
            </div>
        </div>
    );
}

export default Wallet;