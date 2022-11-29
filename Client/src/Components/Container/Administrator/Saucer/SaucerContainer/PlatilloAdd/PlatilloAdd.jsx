import axios from "axios";
import React, { useEffect } from "react";
import { useState } from 'react'
import { useParams } from "react-router-dom";
// import "./PlatilloAdd.css"
import { useUserContext } from "../../../../../../contexts/UserContext";
import Icon from "../../../../../Icon/Icon";
import Button from "../../../../../Button/Button";
const PlatilloAdd = ( {cancelHandler, recargarHandler} ) => {
    const {token} = useUserContext();
    const [principales, setPrincipales] = useState([]);
    const [acompañamientos, setAcompañamientos] = useState([]);
    const [productos, setProductos] = useState([]);
    const [extras, setExtra] = useState([]);
    const [currentFile, setFile] = useState(null);
    const [categorias, setCategoria] = useState([]);
    const tipoId = (useParams()).id;
    const getCategorias = async () => {
        try {
            let {data} = await axios.get('/categoria/getAll');
            setCategoria(data);
        } catch (e) {

        }
    };
    const getPrincipales = async () => {
        try {
            let { data } = await axios.get('/producto/getByNombreTipo/Principal');
            setPrincipales(data);
        } catch (e) {
            console.log(e);
        }
    }

    const getAcompañamientos = async () => {
        try {
            let { data } = await axios.get('/producto/getByNombreTipo/Acompañamiento');
            setAcompañamientos(data);
        } catch (e) {
            console.log(e);
        }
    }

    const getProductos = async () => {
        try {
            let { data } = await axios.get('/producto/getAllSimpleProduct');
            setProductos(data);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getPrincipales();
        getAcompañamientos();
        getProductos();
        getCategorias();
    }, []);

    const [form, setForm] = useState({});

    const handleForm = (name, value) => {
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = async () => {
        let data = {};
        data.nombre = form.nombre;
        data.tipo = tipoId;
        data.precio = form.precio;
        data.descripcion = form.descripcion;
        data.categoriaId = form.categoriaId;
        data.anidados = [
            form.principal,
            form.acompañamiento1,
            form.acompañamiento2,
            ...extras.map(extra => extra._id)
        ];
        data.currentFile = currentFile;
        try {
            await axios.post('/producto/add', data, {
                headers: {
                    'Content-Type':'multipart/form-data',
                    authorization: `Bearer ${token}`
                }
            });
            recargarHandler();

        } catch(e) {
            console.log(e);
        }
    }
    const addExtraHandler = () => {
        let extraId = document.querySelector('#extra').value
        setExtra([...extras, productos.find(producto =>producto._id == extraId)])
    }
    const removeExtraHandler = (id) => {
        setExtra([...extras.filter(extra => extra._id != id)]);
    }

    const uploadHandler = (file) => {
        if (file) {
            setFile(file);
            setForm({...form, imagen: window.webkitURL.createObjectURL(file)})
        }
    }

    return (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <form className="z-50 bg-main-bg shadow-shadow relative text-lg flex flex-col p-2 gap-4">
                <span onClick={cancelHandler} className="cursor-pointer text-center rounded-full w-8 h-8 text-2xl absolute top-0 right-0 bg-black">&times;</span>

                <div className="flex justify-between gap-1 [&>*]:w-full [&>*]:bg-second-bg [&>*]:p-2 [&>*]:rounded-md [&>*]:outline-none">
                    <input type="text" placeholder="Nombre" onChange={(e) => handleForm('nombre', e.target.value)} className="" />
                    <input type="search" placeholder="Precio" className="" onChange={(e) => handleForm('precio', e.target.value)}/>
                </div>
                <div className="flex justify-between gap-1 [&>*]:w-full [&>*]:bg-second-bg [&>*]:p-2 [&>*]:rounded-md [&>*]:outline-none">
                    <select className="" onChange={(e) => handleForm('principal', e.target.value)}>
                        <option className="bg-main-bg" value="">Principal</option>
                        {
                            principales.map(principal => (
                                <option className="bg-main-bg" key={principal._id} value={principal._id}>{principal.nombre}</option>
                            ))
                        }
                    </select>
                    <select className="" onChange={(e) => handleForm('acompañamiento1', e.target.value)}>
                        <option className="bg-main-bg" value="">Acompañamiento 1</option>
                        {
                            acompañamientos.map(acompañamiento => (
                                <option className="bg-main-bg" key={acompañamiento._id} value={acompañamiento._id}>{acompañamiento.nombre}</option>

                            ))
                        }
                    </select>
                    <select className="" onChange={(e) => handleForm('acompañamiento2', e.target.value)}>
                        <option className="bg-main-bg" value="">Acompañamiento 2</option>
                        {
                            acompañamientos.map(acompañamiento => (
                                <option className="bg-main-bg" key={acompañamiento._id} value={acompañamiento._id}>{acompañamiento.nombre}</option>

                            ))
                        }
                    </select>
                   
                </div>
                <select className="w-full bg-second-bg p-2 rounded-md outline-none" onChange={(e)=>handleForm('categoriaId', e.target.value)}>
                        <option className="bg-main-bg" value="">Seleccionar una categoria</option>
                        {
                            categorias.map(categoria => {
                                return <option className="bg-main-bg" key={categoria._id} value={categoria._id}>{categoria.nombre}</option>
                            })
                        }
                    </select>
                <div className="flex justify-between gap-1 w-full [&>*]:rounded-md [&>*]:p-2 bg-second-bg w-full">
                    <select className="p-2 bg-second-bg w-full" id="extra">
                        <option className="bg-main-bg" value="">Extra</option>
                        {
                            productos.map(extra => (
                                <option className="bg-main-bg" key={extra._id} value={extra._id}>{extra.nombre}</option>

                            ))
                        }
                    </select>
                    <div className="w-1/4 text-right">
                        <Button handler={addExtraHandler} className="">Añadir</Button>
                    </div>
                </div>

                <div className="justify-between gap-1 w-full">
                        <h3 className="text-lg font-bold text-center">
                            Extras
                        </h3>
                        {
                            extras.map(extra => (
                                <div key={extra._id} className="w-full flex gap-2">
                                    <p className="w-full">{extra.nombre}</p>
                                    <Icon _type="delete" handler={() => {removeExtraHandler(extra._id)}}></Icon>
                                </div>
                            ))
                        }
                </div>
                <textarea rows="7" cols="33" placeholder="Descripcion" className="bg-second-bg rounded-md outline-none p-2" onChange={(e)=>handleForm('descripcion', e.target.value)}>
                    </textarea>
                <div className="rounded-md w-full h-56 bg-second-bg flex justify-center items-center"
                    onClick={
                        () => {
                            document.querySelector("#img").click();
                        }
                    }
                >
                    <input id="img" type="file" className="hidden" onChange={(e) => uploadHandler(e.target.files[0])} />
                    <figure className="h-full flex items-center justify-center">
                        {
                            form.imagen
                            ? <img className="w-full h-full object-contain" src={form.imagen} />
                            : <Icon _type="upload" _color="white" _sx="100"></Icon>
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
}

export default PlatilloAdd;