import React from "react";
import Button from "../Button/Button";
import "./Carrito.css";
import Icon from "../Icon/Icon";

const Carrito = () => {
    return(
        <div className="general-container shadow-[0_0_20px_1px_rgba(0,0,0,0.3)]">
            <div className="components-container">
                <h1 className="titulo">Carrito</h1>
                <div className="item">
                    <figure className="w-24 h-24">
                        <img src="https://res.cloudinary.com/dvbuu8u2x/image/upload/v1666536043/olympic_flag.jpg" alt="prueba" className="w-full cover"/>
                    </figure>
                    <div className="description">
                        <p>Coca Cola</p>
                        <p>1 x $5.00</p>
                    </div>
                    <Icon _type="delete"></Icon>
                </div>
                <div className="confirmacion">
                    <p className="subtotal">Subtotal $10.75</p>
                    <Button>Hacer pedido</Button>
                </div>
            </div>
        </div>
    );
}

export default Carrito;