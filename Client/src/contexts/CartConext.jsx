import axios from "axios";
import React, { useState } from "react";
import { useUserContext } from "./UserContext";
const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [productosCarrito, setProductosCarrito] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const {user} = useUserContext();

    const comprar = async () => {
        let email = user.email;
        let productos = productosCarrito.map(producto => producto._id);
        
        try {
            console.log({email, productos});
            await axios.post('/comprar', {email, productos});
        } catch(e) {
            console.log(e);
            console.log('error');
        }
    }
    const addProducto = async (productoId) => {
        let {data} = await axios.get(`/producto/${productoId}`);
        setSubtotal(subtotal+data.precio);
        let _productos = [];
        let match = productosCarrito.find(producto => producto._id == productoId)
        if (!match) {
            data.cantidad = 1;
            _productos = [...productosCarrito, data];
        } else {
            match.cantidad++;
            _productos = productosCarrito.map(producto => {
                if (producto._id != productoId)
                    return producto;
                else
                    return match;
            })
        }

        setProductosCarrito(_productos);
    }
    const removeProducto = (productoId) => {
        let match = productosCarrito.find(producto => producto._id == productoId);
        setSubtotal(subtotal-match.precio);
        match.cantidad--;
        let _productos = productosCarrito.filter(producto => producto._id != productoId);
        if (match.cantidad > 0) {
            setProductosCarrito([..._productos, match])
        } else {
            setProductosCarrito([..._productos])
        }
    }
    const state = {
        productosCarrito,
        subtotal,
        addProducto,
        removeProducto,
        comprar
    }

    return (
        <CartContext.Provider value={state} {...props} />
    )
}

export const useCartContext = () => {
    const context = React.useContext(CartContext);
    if (!context)
      throw new Error("useCartContext debe ser usado en un elemento hijo");
  
    return context;
}