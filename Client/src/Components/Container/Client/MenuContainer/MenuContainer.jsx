import React from "react";
import { Outlet } from "react-router-dom";
import MenuHeader from "./MenuHeader/MenuHeader";

const MenuContainer = () => {
    return(
        <>
            <MenuHeader></MenuHeader>
            <Outlet></Outlet>
        </>
    );
};

export default MenuContainer;