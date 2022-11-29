import { React, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "./CategoriesAdd.css"
import axios from "axios";
import Button from "../../../Button/Button";
import { useUserContext } from "../../../../contexts/UserContext";
const CategoriesAdd = () => {
    const {token} = useUserContext();
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
            let {data} = await axios.post('/categoria/', {nombre:form.nombre}, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            setCategoria([...categorias, data.categoria]);
            toast.success(data.response.message);
        } catch(e) {
            console.log(e);
        }
    }
    const handleDelete = async(id) => {
        try {
            let {data} = await axios.delete('/categoria/', {
                headers:{
                    authorization: `Bearer ${token}`
                },
                data: {id}
            })
            toast.success(data.message);
            getAllCategories();
        } catch(e) {
            console.log(e);
            toast.error(e.response.data.message);
        }
    }

    return(
        <div className="w-full flex justify-center">
            <form className="w-full lg:w-3/4 flex flex-col justify-center items-center gap-4 text-xl">

                <input type="search" placeholder="Buscar" 
                        className="w-full bg-second-bg rounded-md p-2 outline-none"                        onChange={(e)=>{
                            handleForm('search', e.target.value); 
                            }}
                        onKeyUp={
                            handleSubmit
                }/>
                
                <div className="w-full flex flex-row justify-between gap-4">
                    <input id="nombre" type="text" placeholder="Nombre" 
                            className="w-full bg-second-bg rounded-md p-2 outline-none" 
                            onChange={(e)=>{
                                handleForm('nombre', e.target.value); 
                            }}
                    />
                    <div className="flex gap-5">
                        <Button handler={handleSubmit}>Añadir</Button>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center py-5">
                    {
                        categorias.map(categoria => {
                            return (
                                <div className="w-full py-2 flex justify-between" key={categoria._id}>
                                    <p className="w-1/2 lg:w-3/4">{categoria.nombre}</p>
                                    <div className="w-1/2 lg:w-1/4 flex justify-end gap-2">
                                        <button className="bg-button-bg flex-1 rounded-sm">Editar</button>
                                        <button onClick={(e)=> {e.preventDefault(); handleDelete(categoria._id)}} className="bg-button-bg flex-1 rounded-sm">Eliminar</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </form>
            <ToastContainer />
        </div>
    );
};

export default CategoriesAdd;