import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import CardsContainer from "../../../CardsContainer/CardsContainer"
import axios from 'axios';
const Home = () => {
    const [productosDestacados, setProductos] = useState([]);
    const getDestacados = async () => {
        let {data} = await axios.get('/producto/getDestacados');
        setProductos(data);
    }
    useEffect(()=>{
        getDestacados();
    },[])
    return(
        <>
        <Banner>
        </Banner>
        {
            productosDestacados.length> 0
            ? productosDestacados.map(categoria => (
                <CardsContainer key={categoria.nombre} _category={categoria.nombre} platillos={categoria.productos}></CardsContainer>
            ))
            : <h3 className="text-xl">No hay productos destacados</h3>
        }
        </>
    );
};

export default Home;