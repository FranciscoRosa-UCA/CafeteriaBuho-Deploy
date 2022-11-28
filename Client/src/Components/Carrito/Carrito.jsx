import React from "react";
import Button from "../Button/Button";
import "./Carrito.css";
import Icon from "../Icon/Icon";

const Carrito = ({handler}) => {
    return(
        <div className="rounded-xl bg-main-bg w-full md:w-96 md:h-2/4 h-full z-50 absolute md:right-3 shadow-[0_0_20px_1px_rgba(0,0,0,0.3)]">
            <span onClick={handler} className="cursor-pointer rounded-full text-4xl absolute right-3 top-0">&times;</span>
            <div className="gap-2 h-full flex flex-col justify-between items-center p-3">
                <h1 className="titulo">Carrito</h1>
                <div className="h-full w-full overflow-y-auto">
                    <div className="w-full items-start flex flex-row justify-between overflow-y-auto">
                        <figure className="w-24 h-24">
                            <img src="https://res.cloudinary.com/dvbuu8u2x/image/upload/v1666536043/olympic_flag.jpg" alt="prueba" className="w-full cover"/>
                        </figure>
                        <div className="description">
                            <p>Coca Cola</p>
                            <p>1 x $5.00</p>
                        </div>
                        <Icon _type="delete"></Icon>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <p className="subtotal">Subtotal $10.75</p>
                    <Button>Hacer pedido</Button>
                </div>
            </div>
        </div>
    );
}

export default Carrito;