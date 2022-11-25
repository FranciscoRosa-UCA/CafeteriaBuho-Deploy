import React from "react";
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import Menu from "./Menu/Menu"
import MenuDay from "./MenuDay/MenuDay";
import Saucer from "./Saucer/Saucer";
import SaucerAdd from "./SaucerAdd/SaucerAdd";
import ContainerAccount from "../ContainerAccount/ContainerAccount";

const Container = () => {
    return(
        <div className="p-5">
            <Outlet />

            {/* <MenuDay></MenuDay> */}

            {/* <Saucer></Saucer> */}

            {/* <SaucerAdd></SaucerAdd> */}

            {/* <ContainerAccount></ContainerAccount> */}

        </div>
    );
};

export default Container;