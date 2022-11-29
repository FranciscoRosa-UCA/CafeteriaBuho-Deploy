import React, { useEffect, useState } from "react";
import SaucerHeader from "./SaucerHeader/SaucerHeader";
import axios from "axios";
import { Outlet } from "react-router-dom";
import SaucerFooter from "./SaucerFooter/SaucerFooter";
// import SaucerAdd from '../Saucer/SaucerAdd/SaucerAdd';
// import PlatilloAdd from "./PlatilloAdd/PlatilloAdd";
import { useParams } from "react-router-dom";
const Saucer = () => {
    const [tipos, setTipo] = useState([]);
    const [platilloModal, showPlatilloModal] = useState(false);
    const [productoModal, showProductoModal] = useState(false);
    const [recargar, emitRecargar] = useState(0);
    const getTipos = async () => {
        try {
            let {data} = await axios.get('/tipos/getAll');
            setTipo(data);
            window.location.pathname = '/admin/menu/'+(tipos[0]._id) || '' ;
        } catch (e) {

        }
    };
    useEffect(()=> {
        getTipos();
    }, []);
    const addHandler = () => {
        if(parseInt(localStorage.getItem('isPlatillo'))){
            showProductoModal(false);
            showPlatilloModal(true);
        } else {
            showPlatilloModal(false);
            showProductoModal(true);
        }
    }
    const cancelHandler = () => {
        showProductoModal(false);
        showPlatilloModal(false);
    }
    const recargarHandler = () => {
        emitRecargar(recargar+1);
    }
    return (
        <>
            <SaucerHeader tipos={tipos}/>
            <Outlet context={[platilloModal, productoModal, cancelHandler, recargarHandler, recargar]} />
            
            <SaucerFooter handler={addHandler} />
        </>
    );
}

export default Saucer;