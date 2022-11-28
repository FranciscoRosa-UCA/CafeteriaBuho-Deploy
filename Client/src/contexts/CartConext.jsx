import axios from "axios";
import React, { useState } from "react";
const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [productosCarrito, setProductosCarrito] = useState([]);
    const addProducto = async (productoId) => {
        let {data} = await axios.get(`/producto/${productoId}`);
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
        setProductosCarrito(productosCarrito.filter(id => id != productoId));
    }
    const state = {
        productosCarrito,
        addProducto,
        removeProducto
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