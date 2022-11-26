import { React, useState } from "react";

import "./CategoriesAdd.css"

import Button from "../../../Button/Button";

const CategoriesAdd = () => {
    const [form, setForm] = useState({});

    const categoria_act = "CATEGORIA P";

    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit = () => {
        console.log(`Buscando categoria ${form["search"]}...`);
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
                    <input id="actual_C" type="search" placeholder="Nombre" 
                            className=" w-full inp rounded-xl p-2" 
                            onChange={(e)=>{
                                handleForm('actual_name', e.target.value); 
                                }}
                    />
                    <div className="flex gap-5">
                        <Button >Añadir</Button>
                        <Button >Editar</Button>
                        <Button _color="red">Eliminar</Button>
                    </div>
                </div>
                <div className="w-6/12 flex flex-col items-center">

                    <p className="text-2xl">Lista de categorias</p>
                    <p onClick={(e)=>document.querySelector("#actual_C").value = categoria_act}> {categoria_act} </p>
                    <p onClick={(e)=>document.querySelector("#actual_C").value = categoria_act}> {categoria_act} </p>
                    <p onClick={(e)=>document.querySelector("#actual_C").value = categoria_act}> {categoria_act} </p>
                    <p onClick={(e)=>document.querySelector("#actual_C").value = categoria_act}> {categoria_act} </p>

                </div>

            </form>
    );
};

export default CategoriesAdd;