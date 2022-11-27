import React, { useEffect } from "react";
import { useState } from 'react'

import "./SaucerAdd.css"

import Button from "../../../../Button/Button";
import Icon from "../../../../Icon/Icon";
import axios from "axios";
import { useParams } from "react-router-dom";

const SaucerAdd = () => {
    const [form, setForm] = useState({});
    const [categorias, setCategoria] = useState([]);
    const [currentFile, setFile] = useState(null);
    const {id} = useParams();
    const getTipos = async () => {
        try {
            let {data} = await axios.get('/categoria/getAll');
            setCategoria(data);
        } catch (e) {

        }
    };
    useEffect(()=> {
        getTipos();
    }, []);
    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit = async () => {
        try {
            await axios.post('/producto/add', {...form, currentFile, tipo:id},
            {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            });

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
        <div className="flex justify-center">
            <form action="" className="w-4/5 flex flex-col gap-10 text-xl">
                {/* <Combobox className="text-black bg-white"
                defaultValue="Principal"
                data={["Tipo de platillo", "Platillo", "Acompañamiento", "Extra", "Principal"]}
                /> */}
                <div className="flex flex-row flex-wrap gap-6 w-full justify-between">
                    <select name="" id="" className="w-2/12 inp rounded-xl p-2" onChange={(e)=>handleForm('categoriaId', e.target.value)}>
                        <option value="">Seleccionar una categoria</option>
                        {
                            categorias.map(categoria => {
                                return <option key={categoria._id} value={categoria._id}>{categoria.nombre}</option>
                            })
                        }
                    </select>
                </div>
                <div className="flex flex-row flex-wrap gap-6 w-full justify-between">
                    <input type="text" placeholder="Nombre" className="w-9/12 max-w-screen-xl inp rounded-xl p-2" onChange={(e)=>handleForm('nombre', e.target.value)}/>
                    <input type="text" placeholder="Precio" className="w-2/12 max-w-screen-xl inp rounded-xl p-2" onChange={(e)=>handleForm('precio', e.target.value)}/>
                </div>

                <textarea rows="7" cols="33" placeholder="Descripcion" className="inp rounded-xl p-2 w-full p-2" onChange={(e)=>handleForm('descripcion', e.target.value)}>
                </textarea>

                <div className="inp rounded-xl p-2 w-full h-56 p-2 flex justify-center items-center"
                onClick={
                    ()=>{
                        document.querySelector("#img").click();
                    }
                }
                >
                    <input id="img" type="file"  className="hidden" onChange={(e)=>uploadHandler(e.target.files[0])} />
                    <figure className="w-full h-full flex justify-center items-center">
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
                        <Button>Eliminar</Button>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default SaucerAdd;