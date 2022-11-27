import React, { useEffect, useState } from "react";
import SaucerHeader from "./SaucerHeader/SaucerHeader";
import axios from "axios";
import { Outlet } from "react-router-dom";
import SaucerFooter from "./SaucerFooter/SaucerFooter";
import SaucerAdd from '../Saucer/SaucerAdd/SaucerAdd';

import { useParams } from "react-router-dom";
const Saucer = () => {
    const [tipos, setTipo] = useState([]);
    const [modal, showModal] = useState(false);
    const [isPlatillo, setIsPlatillo] = useState(false);
        const getTipos = async () => {
            try {
                let {data} = await axios.get('/tipos/getAll');
                setTipo(data);
            } catch (e) {
    
            }
        };
        useEffect(()=> {
            getTipos();
    }, []);
    const addHandler = () => {
        if(localStorage.getItem('isPlatillo')){
            showModal(true);
        }
    }
    return (
        <>
            <SaucerHeader tipos={tipos}/>
            <Outlet />
            {modal && <SaucerAdd/>}
            <SaucerFooter handler={addHandler} />
        </>
    );
}

export default Saucer;