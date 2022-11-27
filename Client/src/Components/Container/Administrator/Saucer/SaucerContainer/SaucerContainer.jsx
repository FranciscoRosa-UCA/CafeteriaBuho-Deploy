import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const SaucerContainer = ()=> {
    let {id} = useParams();
    const getProductos = async () => {
        try {
            let {data} = await axios.get('/producto/getByTipo/'+id);
            console.log(data);
        } catch(e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getProductos();
    },[]);
    return (
        <>
            
        </>
    );
}

export default SaucerContainer;