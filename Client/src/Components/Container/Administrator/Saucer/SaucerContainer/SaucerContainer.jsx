import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SaucerContainer = ()=> {
    let {id} = useParams();
    const [ productos, setProducto ] = useState([]);
    const getProductos = async () => {
        try {
            let {data} = await axios.get('/producto/getByTipo/'+id);
            let _productos = data.productos;
            if (data.nombreTipo === "Principal")
                localStorage.setItem('isPlatillo', true);
            else
                localStorage.setItem('isPlatillo', false);
            setProducto(_productos);
        } catch(e) {
            console.log(e);
        }
    }
    const editHandler = (id) => {
        console.log(id);
    }
    const removeHandler = async (id) => {
        try {
            await axios.delete('/producto', {data: {id}});
            getProductos();
        }catch(e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getProductos();
    },[]);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    productos.map(producto => {
                        return <tr key={producto._id}>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.precio}</td>
                                    <td><button onClick={(e)=>editHandler(producto._id)}>Editar</button></td>
                                    <td><button onClick={(e)=>removeHandler(producto._id)}>Eliminar</button></td>
                                </tr>
                              
                    })
                }
                </tbody>
            </table>
        </>
    );
}

export default SaucerContainer;