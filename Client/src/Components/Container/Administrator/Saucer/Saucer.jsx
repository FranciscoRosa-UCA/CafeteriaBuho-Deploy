import React, { useEffect, useState } from "react";
import SaucerHeader from "./SaucerHeader/SaucerHeader";
import axios from "axios";
import { Outlet } from "react-router-dom";
const Saucer = () => {
    const [tipos, setTipo] = useState([]);
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
    return (
        <>
            <SaucerHeader tipos={tipos}/>
            <Outlet />
        </>
    );
}

export default Saucer;