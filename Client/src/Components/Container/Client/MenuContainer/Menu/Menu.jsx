import CardsContainer from "../../../../CardsContainer/CardsContainer";
import {
    useParams
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Menu = () => {
    const [categorias, setCategoria] = useState([]);
    let {id} = useParams();
    const getPlatillos = async () => {
        let {data} = await axios.get(`/producto/getByDay/${id}`);
        setCategoria(data);
    }
    useEffect(() => {
        getPlatillos();
    }, []);

    return(
        <div className="flex flex-col gap-10">
            {
                (() => {
                    for (const categoria in categorias) {
                        return <CardsContainer _category={categoria} platillos={categorias[categoria]}></CardsContainer>
                    }
                })()
            }
            {/* <CardsContainer _category={"Categoria 1"}>
            </CardsContainer>
            <CardsContainer _category={"Categoria 2"}>
            </CardsContainer>
            <CardsContainer _category={"Categoria 3"}>
            </CardsContainer>
            <div className="flex gap-5 sticky bottom-0">
                <div className="flex justify-between items-center">
                    <Icon _type="add"></Icon>
                    <p> Agregar categoria </p>
                </div>
                <div className="flex justify-between items-center">
                    <Icon _type="list"></Icon>
                    <p> Editar ordenamiento </p>
                </div>
            </div> */}
        </div>
    );
};

export default Menu;