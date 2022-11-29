import React, { useEffect, useState } from "react";
import MenuHeader from "./MenuHeader/MenuHeader";
import MenuFooter from "./MenuFooter/MenuFooter";
import MenuAddModal from "./MenuAddModal/MenuAddModal";
import axios from 'axios';
import Menu from "./Menu/Menu";
import {toast} from 'react-toastify'
import { useUserContext } from "../../../../contexts/UserContext";
const MenuContainer = () => {
    const {token, user, authorization} = useUserContext();
    const [modal, showModal] = useState(false);
    const [categorias, setCategoria] = useState([]);
    const [dias, setDays] = useState([]);
    const [dia, setDia] = useState(null);
    const nombresDias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado'
    ]; 
    const addProductHandler = () => {
        showModal(true);
    }

    const closeHandler = () => {
        showModal(false);
    }
    
    const addProductSubmitHandler = async (form) => {
        try {
            let productos = [];
            for (let element in form)
                if (form[element])
                    productos.push(element);
            let {data} = await axios.patch('/producto/setDia', {productos, dia}, {
                headers:{
                    authorization: `Bearer ${token}`
                }
            });
            toast.success(data.message);
            getProductosHandler(dia);
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }

    const getDays = async () => {
        try {
            let {data} = await axios.get('/dias');
            setDays(data.dias);
        } catch(e) {
            console.log(e);
        }
    }
    const getProductosHandler = async (dia) => {
        try {
            let {data} = await axios.get(`/producto/getByDay/${dia}`);
            setCategoria(data);
            setDia(dia);
        } catch(e) {
            console.log(e);
        }
    }
    useEffect(()=> {
        getDays();
        setDia((new Date()).getDay());
    }, []);
    useEffect(() => {
        if (dia) {
            getProductosHandler(dia);
        }
    }, [dia]);
    return(
        <>
            <MenuHeader dias={dias} getProductosHandler={getProductosHandler}></MenuHeader>
            <div className="text-xl py-5">
                <h2>Menú del día {nombresDias[dia]}</h2>
                {
                    categorias.length > 0
                    ? <Menu categorias={categorias}></Menu>
                    : <h3 className="">No hay productos para mostrar</h3>
                }
                {
                    modal && <MenuAddModal handleSubmit={addProductSubmitHandler} closeHandler={closeHandler}/>
                }

            </div>
            {
                user && authorization("ADMIN") && 
                <MenuFooter handler={addProductHandler}></MenuFooter>
            }
        </>
    );
};

export default MenuContainer;