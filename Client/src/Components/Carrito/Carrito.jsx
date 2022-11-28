import React from "react";
import Button from "../Button/Button";
import "./Carrito.css";
import Icon from "../Icon/Icon";
import { useCartContext } from "../../contexts/CartConext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Carrito = ({handler}) => {
    const Carrito = ({handler, hacerPedidoHandler}) => {
    let { productosCarrito, removeProducto, subtotal } = useCartContext();
    const AlertEmptyCart = () => {
        toast.error('🦄 El carrito está vacío!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    
    return(
        <div className="rounded-xl bg-main-bg w-full md:w-96 md:h-3/4 h-full z-50 absolute md:right-3 shadow-[0_0_20px_1px_rgba(0,0,0,0.3)]">
            <span onClick={handler} className="cursor-pointer rounded-full text-4xl absolute right-3 top-0">&times;</span>
            <div className="gap-2 h-full flex flex-col justify-between items-center p-3">
                <h1 className="titulo">Carrito</h1>
                <div className="h-full w-full overflow-y-auto">
                    {productosCarrito.length>0 ?
                        productosCarrito.map(producto => {
                            return <div key={producto._id} className="w-full items-start flex flex-row justify-between overflow-y-auto">
                                <figure className="w-24 h-24">
                                    <img src={producto.imagen} alt="imagen de producto" className="w-full cover"/>
                                </figure>
                                <div className="description">
                                    <p>{producto.nombre}</p>
                                    <p>{producto.cantidad} x ${producto.precio}</p>
                                </div>
                                <Icon handler={()=> {removeProducto(producto._id)}} _type="delete"></Icon>
                            </div>
                        })
                        :<h2>No hay productos en el carrito</h2>
                    }
                </div>
                <div className="w-full flex flex-col gap-1">
                    <p className="subtotal">Subtotal ${
                        productosCarrito.length>0
                        ? subtotal
                        : '-'
                    }</p>
                    <Button handler={hacerPedidoHandler}>Hacer pedido</Button>
                </div>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </div>
    );
}

export default Carrito;