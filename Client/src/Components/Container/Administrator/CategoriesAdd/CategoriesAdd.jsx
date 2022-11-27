import { React, useEffect, useState } from "react";

import "./CategoriesAdd.css"
import axios from "axios";
import Button from "../../../Button/Button";

const CategoriesAdd = () => {
    const [form, setForm] = useState({});
    const [categorias, setCategoria] = useState([]);
    const getAllCategories = async () => {
        try {
            let {data} = await axios.get('/categoria/getAll');
            setCategoria(data);
        } catch(e) {

        }
    }
    useEffect(() => {
        getAllCategories();
    }, []);

    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit = async () => {
        try {
            let {data} = await axios.post('/categoria/', {nombre:form.nombre});
            setCategoria([...categorias, data.categoria]);
        } catch(e) {
            console.log(e);
        }
    }

    return(
            <form action="" className="w-full flex flex-col justify-center items-center gap-10 text-xl">

                <input type="search" placeholder="Buscar" 
                        className="w-10/12 max-w-screen-xl inp rounded-xl p-2" 
                        onChange={(e)=>{
                            handleForm('search', e.target.value); 
                            }}
                        onKeyUp={
                            handleSubmit
                }/>
                
                <div className="w-10/12 flex gap-10">
                    <input id="nombre" type="text" placeholder="Nombre" 
                            className=" w-full inp rounded-xl p-2" 
                            onChange={(e)=>{
                                handleForm('nombre', e.target.value); 
                            }}
                    />
                    <div className="flex gap-5">
                        <Button handler={handleSubmit}>Añadir</Button>
                        <Button >Editar</Button>
                        <Button _color="red">Eliminar</Button>
                    </div>
                </div>
                <div className="w-6/12 flex flex-col items-center">
                    {
                        categorias.map(categoria => {
                            return <p key={categoria._id}>{categoria.nombre}</p>
                        })
                    }
                    {/* <p className="text-2xl">Lista de categorias</p>
                    <p onClick={(e)=>document.querySelector("#actual_C").value = categoria_act}> {categoria_act} </p>
                    <p onClick={(e)=>document.querySelector("#actual_C").value = categoria_act}> {categoria_act} </p>
                    <p onClick={(e)=>document.querySelector("#actual_C").value = categoria_act}> {categoria_act} </p>
                    <p onClick={(e)=>document.querySelector("#actual_C").value = categoria_act}> {categoria_act} </p> */}

                </div>

            </form>
    );
};

export default CategoriesAdd;