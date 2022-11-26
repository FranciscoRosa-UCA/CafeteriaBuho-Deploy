import React from "react";
import { useState } from 'react'

import "./SearchBar.css"

const SearchBar = () => {
    const [form, setForm] = useState({});

    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit = () => {
        console.log(`Buscando ${form["search"]} en ${form["tipo"]}:`);
    }

    return(
            <form action="" className="w-full flex justify-center gap-10 text-xl">

                <select name="" id="" className="w-2/12 inp rounded-xl p-2" onChange={(e)=>handleForm('tipo', e.target.value)}>
                    <option value="">Tipo de platillo</option>
                    <option value="0">Platillo</option>
                    <option value="1">Acompañamiento</option>
                    <option value="2">Extra</option>
                    <option value="3">Principal</option>
                </select>

                <input type="search" placeholder="Buscar" 
                        className="w-10/12 max-w-screen-xl inp rounded-xl p-2" 
                        onChange={(e)=>{
                            handleForm('search', e.target.value); 
                            }}
                        onKeyUp={
                            handleSubmit
                        }/>


            </form>
    );
};

export default SearchBar;