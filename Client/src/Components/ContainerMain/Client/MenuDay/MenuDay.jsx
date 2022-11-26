import React from "react";

import Icon from "../../../Icon/Icon";

import MenuHeader from "./MenuHeader/MenuHeader";
import CardsContainer from "../../../CardsContainer/CardsContainer";

const MenuDay = () => {
    return(
        <div className="flex flex-col gap-10">
            <MenuHeader>
            </MenuHeader>
            <CardsContainer _category={"Categoria 1"}>
            </CardsContainer>
            <CardsContainer _category={"Categoria 2"}>
            </CardsContainer>
            <CardsContainer _category={"Categoria 3"}>
            </CardsContainer>
            <div className="flex gap-5">
                <div className="flex justify-between items-center">
                    <Icon _type="add"></Icon>
                    <p> Agregar categoria </p>
                </div>
                <div className="flex justify-between items-center">
                    <Icon _type="list"></Icon>
                    <p> Editar ordenamiento </p>
                </div>
            </div>
        </div>
    );
};

export default MenuDay;