import React, { useEffect } from "react";
import { useState } from 'react'

import "./SaucerAdd.css"

import Button from "../../../../../Button/Button";
import Icon from "../../../../../Icon/Icon";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../../../../../contexts/UserContext";
const SaucerAdd = ({cancelHandler, recargarHandler}) => {
    const { token } = useUserContext();
    const [form, setForm] = useState({});
    const [categorias, setCategoria] = useState([]);
    const [currentFile, setFile] = useState(null);
    const {id} = useParams();
    const getCategorias = async () => {
        try {
            let {data} = await axios.get('/categoria/getAll');
            setCategoria(data);
        } catch (e) {

        }
    };
    useEffect(()=> {
        getCategorias();
    }, []);
    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit = async () => {
        try {
            await axios.post('/producto/add', {...form, currentFile, tipo:id},
            {
                headers:{
                    'Content-Type': 'multipart/form-data',
                    'authorization': `Bearer ${token}`
                }
            });
            recargarHandler();
        } catch(e) {
            console.log(e);
        }
    }
    const uploadHandler = (file) => {
        if (file) {
            setFile(file);
            setForm({...form, imagen: window.webkitURL.createObjectURL(file)})
        }
    }

    return(
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <form action="" className="z-50 bg-main-bg shadow-shadow relative text-lg flex flex-col p-2 gap-4">
                <span onClick={cancelHandler} className="cursor-pointer text-center rounded-full w-8 h-8 text-2xl absolute top-0 right-0 bg-black">&times;</span>
                <div className="flex flex-row flex-wrap gap-6 w-full justify-between">
                </div>
                <div className="flex justify-between gap-1 [&>*]:w-full [&>*]:bg-second-bg [&>*]:p-2 [&>*]:rounded-md [&>*]:outline-none">
                    <input type="text" placeholder="Nombre" onChange={(e)=>handleForm('nombre', e.target.value)}/>
                    <input type="text" placeholder="Precio" onChange={(e)=>handleForm('precio', e.target.value)}/>
                </div>
                <select name="" id="" className="w-full rounded-md bg-second-bg p-2 outline-none" onChange={(e)=>handleForm('categoriaId', e.target.value)}>
                    <option value="" className="p-2 bg-main-bg w-full">Seleccionar una categoria</option>
                    {
                        categorias.map(categoria => {
                            return <option className="bg-main-bg" key={categoria._id} value={categoria._id}>{categoria.nombre}</option>
                        })
                    }
                </select>
                <textarea rows="7" cols="33" placeholder="Descripcion" className="bg-second-bg rounded-md outline-none p-2" onChange={(e)=>handleForm('descripcion', e.target.value)}>
                </textarea>

                <div className="rounded-md w-full h-56 bg-second-bg flex justify-center items-center"
                onClick={
                    ()=>{
                        document.querySelector("#img").click();
                    }
                }
                >
                    <input id="img" type="file"  className="hidden" onChange={(e)=>uploadHandler(e.target.files[0])} />
                    <figure className="h-full flex items-center justify-center">
                        {
                            form.imagen
                            ?<img className="w-full h-full object-contain" src={form.imagen} />
                            :<Icon _type="upload" _color="white" _sx="100"></Icon>
                        }
                    </figure>
                </div>

                <div className="flex flex-row flex-wrap min-w-96 gap-4 justify-between">
                    <div className="w-5/12 flex flex-col">
                        <Button handler={handleSubmit}>Añadir</Button>
                    </div>
                    <div className="w-5/12 flex flex-col">
                        <Button handler={cancelHandler}>Cancelar</Button>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default SaucerAdd;