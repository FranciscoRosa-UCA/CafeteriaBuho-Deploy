import React, { useEffect, useState } from "react";
import MenuHeader from "./MenuHeader/MenuHeader";
import MenuFooter from "./MenuFooter/MenuFooter";
import MenuAddModal from "./MenuAddModal/MenuAddModal";
import axios from 'axios';
import Menu from "./Menu/Menu";
const MenuContainer = () => {
    const [modal, showModal] = useState(false);
    const [categorias, setCategoria] = useState([]);
    const [dias, setDays] = useState([]);
    const [dia, setDia] = useState(null);

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
            await axios.patch('/producto/setDia', {productos, dia});

        } catch (e) {
            console.log(e);
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
            <Menu categorias={categorias}></Menu>
            {
                modal && <MenuAddModal handleSubmit={addProductSubmitHandler} closeHandler={closeHandler}/>
            }
            <MenuFooter handler={addProductHandler}></MenuFooter>
        </>
    );
};

export default MenuContainer;