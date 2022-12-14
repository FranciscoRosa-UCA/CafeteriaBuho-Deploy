import React from "react";
import { useState } from 'react'

import "./AdminMenu.css"

import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const AdminMenu = () => {

    const categoria_act = "CATEGORIA_TEMP";
    const extra_act = "EXTRA_TEMP";

    const [form, setForm] = useState({});

    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit = () => {
        console.log(form);
    }

    return(
        <div className="general-container">
            <div className="busqueda">
                <select className="menubusqueda inp">
                        <option value="">Tipo de platillo</option>
                        <option value="0">Platillo</option>
                        <option value="1">Acompañamiento</option>
                        <option value="2">Extra</option>
                        <option value="3">Principal</option>
                </select>
                <input type="search" placeholder="Buscar" className="barra inp"/>
            </div>
            <div className="descripcion">
                <input type="search" placeholder="Nombre" className="barra inp"/>
                <input type="search" placeholder="Precio" className="barra-precio inp"/>
            </div>
            <div className="personalizacion">
                <select  className="items inp">
                    <option value="">principal</option>
                    <option value="0">Pollo Guisado</option>
                    <option value="1">Carne a la plancha</option>
                    <option value="2">Pescado frito</option>
                    <option value="3">Polla encebollada</option>
                </select>
                <select  className="items inp">
                    <option value="">Acompañamiento 1</option>
                    <option value="0">Arroz</option>
                    <option value="1">Casamiento</option>
                    <option value="2">Ensalada</option>
                    <option value="3">Lechita</option>
                </select>
                <select  className="items inp">
                    <option value="">Acompañamiento 2</option>
                    <option value="0">Arroz</option>
                    <option value="1">Casamiento</option>
                    <option value="2">Ensalada</option>
                    <option value="3">Lechita</option>
                </select>
                <select  className="items inp">
                    <option value="">Bebida</option>
                    <option value="0">Coca cola</option>
                    <option value="1">Agua cristal</option>
                    <option value="2">Jugo en lata</option>
                    <option value="3">Refresco</option>
                </select>
            </div>
            <div className="confirmaciones">
                <select  className="items inp">
                    <option value="">Extra</option>
                    <option value="0">Queso fresco</option>
                </select>
                <div className="items">
                    <Button handler={handleSubmit} className="button">Añadir</Button>
                </div>
                <select  className="items inp">
                    <option value="">Categoria</option>
                    <option value="0">C1</option>
                    <option value="1">C2</option>
                    <option value="2">C3</option>
                    <option value="3">C4</option>
                </select>
                <div className="items">
                    <Button>Eliminar</Button>
                </div>
            </div>

            <div className="edicion">
                <div className="extras">
                    <h1>
                        Extras
                    </h1>
                    <div className="items">
                        <p>{extra_act}</p>
                        <Icon _type="delete"></Icon>                 
                    </div>
                    <div className="items">
                        <p>{extra_act}</p>
                        <Icon _type="delete"></Icon>                 
                    </div>
                    <div className="items">
                        <p>{extra_act}</p>
                        <Icon _type="delete"></Icon>                 
                    </div>
                    <div className="items">
                        <p>{extra_act}</p>
                        <Icon _type="delete"></Icon>                 
                    </div>
                </div>
                <div className="categorias">
                    <h1>
                        Categorias
                    </h1>
                    <div className="items">
                        <p>{categoria_act}</p>
                        <Icon _type="delete"></Icon>
                    </div>
                    <div className="items">
                        <p>{categoria_act}</p>
                        <Icon _type="delete"></Icon>
                    </div>
                    <div className="items">
                        <p>{categoria_act}</p>
                        <Icon _type="delete"></Icon>
                    </div>
                    <div className="items">
                        <p>{categoria_act}</p>
                        <Icon _type="delete"></Icon>
                    </div>
                </div>
            </div>
            <div className="cargar-imagen">

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

            </div>
            <div className="flex flex-row flex-wrap min-w-96 gap-4 justify-between">
                <div className="w-5/12 flex flex-col">
                    <Button handler={handleSubmit}>Añadir</Button>
                </div>
                <div className="w-5/12 flex flex-col">
                    <Button>Eliminar</Button>
                </div>
            </div>
        </div>
    );
}

export default AdminMenu;