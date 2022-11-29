import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../../../../contexts/UserContext";
import { useOutletContext } from "react-router-dom";
import SaucerAdd from './SaucerAdd/SaucerAdd';
import PlatilloAdd from './PlatilloAdd/PlatilloAdd';
const SaucerContainer = ()=> {
    let [ platilloModal, productoModal, cancelHandler, recargarHandler, recargar ] = useOutletContext();
    const { token } = useUserContext();
    const {id} = useParams();
    const [ productos, setProducto ] = useState([]);
    const getProductos = async () => {
        try {
            let {data} = await axios.get('/producto/getByTipo/'+id);
            let _productos = data.productos;
            if (data.nombreTipo === "Platillo")
                localStorage.setItem('isPlatillo', 1);
            else
                localStorage.setItem('isPlatillo', 0);
            setProducto(_productos);
        } catch(e) {
            toast.error(e.response.message)
        }
    }
    const editHandler = (id) => {
        console.log(id);
    }
    const removeHandler = async (id) => {
        try {
            await axios.delete('/producto',
                {
                    headers: {
                        authorization: `Bearer ${token}`
                    },
                    data: {id},
                });
            getProductos();
        }catch(e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getProductos();
    },[]);
    useEffect(() => {
        getProductos();
    },[recargar]);
    
    return (
        <div className="py-5 w-full flex justify-center">
            {productos.length > 0 ?
                <table className="w-full lg:w-3/4 text-lg table-auto">
                    <thead className="bg-second-bg">
                        <tr>
                            <th>Nombre</th>
                            <th className="hidden lg:block">Imagen</th>
                            <th>Precio</th>
                            <th>Controles</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        productos.map(producto => {
                            return <tr key={producto._id}>
                                        <td>{producto.nombre}</td>
                                        <td className="hidden lg:flex lg:justify-center">
                                            <figure className="m-0 w-28 h-28">
                                                <img className="w-full h-full object-cover" src={producto.imagen}/>
                                            </figure>
                                        </td>
                                        <td className="text-center">${producto.precio}</td>
                                        <td className="w-1/2 lg:w-1/6 text-center">
                                            <button className="w-1/2 m-1 bg-button-bg rounded-sm" onClick={(e)=>editHandler(producto._id)}>Editar</button>
                                            <button className="w-1/2 m-1 bg-button-bg rounded-sm" onClick={(e)=>removeHandler(producto._id)}>Eliminar</button>
                                        </td>
                                    </tr>
                                
                        })
                    }
                    </tbody>
                </table>
                : <h3 className="text-lg">No hay productos para mostrar</h3>
            }
            {productoModal && <SaucerAdd recargarHandler={recargarHandler} cancelHandler={cancelHandler}/>}
            {platilloModal && <PlatilloAdd recargarHandler={recargarHandler} cancelHandler={cancelHandler}/>}
        </div>
    );
}

export default SaucerContainer;