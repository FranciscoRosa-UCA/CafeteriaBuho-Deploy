import React from "react";
import { useState } from 'react'

import "./SaucerAdd.css"

import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";
import Combobox from "react-widgets/Combobox";

const SaucerAdd = () => {
    const [form, setForm] = useState({});

    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit = () => {
        console.log(form);
    }

    return(
        <div className="flex justify-center">
            <form action="" className="w-4/5 flex flex-col gap-10 text-xl">
                {/* <Combobox className="text-black bg-white"
                defaultValue="Principal"
                data={["Tipo de platillo", "Platillo", "Acompañamiento", "Extra", "Principal"]}
                /> */}
                <div className="flex flex-row flex-wrap gap-6 w-full justify-between">
                    <select name="" id="" className="w-2/12 inp rounded-xl p-2" onChange={(e)=>handleForm('tipo', e.target.value)}>
                        <option value="">Tipo de platillo</option>
                        <option value="0">Platillo</option>
                        <option value="1">Acompañamiento</option>
                        <option value="2">Extra</option>
                        <option value="3">Principal</option>
                    </select>
                    <input type="search" placeholder="Buscar" className="w-9/12 max-w-screen-xl inp rounded-xl p-2" />
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
                    <input id="img" type="file"  className="hidden" onChange={(e)=>handleForm('imagen', e.target.value)}/>
                    <Icon _type="upload" _color="white" _sx="100"></Icon>
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