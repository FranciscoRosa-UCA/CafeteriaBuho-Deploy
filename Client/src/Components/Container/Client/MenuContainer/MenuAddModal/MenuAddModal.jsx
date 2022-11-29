import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Button from "../../../../Button/Button";
const MenuAddModal = ({handleSubmit,closeHandler}) => {
    const [categorias, setCategoria] = useState([]);
    const [productos, setProducto] = useState([]);
    const [form, setForm] = useState({});
    const handleForm = (name, value) => {
        setForm({
            ...form,
            [name]: value
        });
    }

    const getCategorias = async () => {
        try {
            let {data} = await axios.get('/categoria/getAll');
            setCategoria(data);
        }catch(e) {
        }
    }
    const getProductos = async () => {
        try {
            let {data} = await axios.get('/producto/getAll');
            setProducto(data);
        }catch(e) {
        }
    }

    useEffect(()=> {
        getCategorias();
        getProductos();
    }, []);
    return (
        <div className="absolute top-0 right-0 h-full w-full flex justify-center items-center">
            <div className="bg-main-bg z-50 shadow-shadow relative flex md:h-1/2 md:w-1/2 h-full w-full flex-col p-5 gap-3 justify-between">
                {/* <span onClick={closeHandler} className="text-center rounded-full w-8 h-8 text-2xl absolute top-0 right-0 bg-black">&times;</span> */}
                <span onClick={closeHandler} className="cursor-pointer rounded-full text-4xl absolute right-3 top-0">&times;</span>

                <h2>Agregar producto</h2>
                <hr></hr>
                <h3>Selecciona el elemento</h3>
                <form className="flex flex-col text-lg gap-2 justify-between overflow-hidden w-full h-full">
                    <div className="[&>*]:bg-second-bg [&>*]:w-full [&>*]:p-2 [&>*]:rounded-md flex flex-row gap-2">
                        <input type="search" placeholder="Buscar"/>
                        <select onChange={(e)=>handleForm('categoriaId', e.target.value)}>
                            <option className="bg-main-bg">Selecciona una categoria</option>
                            {
                                categorias.map(categoria => (
                                    <option className="bg-main-bg" key={categoria._id} value={categoria._id}>{categoria.nombre}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="overflow-y-auto h-full flex flex-col gap-5">
                        {
                            productos.map(producto => (
                                <label key={producto._id}>
                                    <input onChange={(e)=>handleForm(`${e.target.value}`, (e.target.checked ? true : false))} type="checkbox" name="anidados" value={producto._id}/>
                                    {producto.nombre}
                                </label>
                                
                            ))
                        }                        
                    </div>
                    <div className="flex flex-row flex-wrap min-w-96 gap-4 justify-between">
                        <div className="w-5/12 flex flex-col">
                            <Button handler={(e) => {handleSubmit(form)}}>Añadir</Button>
                        </div>
                        <div className="w-5/12 flex flex-col">
                            <Button>Eliminar</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MenuAddModal;