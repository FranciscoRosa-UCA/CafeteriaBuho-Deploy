import React from "react";
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import MenuDay from "./Client/MenuDay/MenuDay";
import Saucer from "./Client/Saucer/Saucer";
import SaucerAdd from "./Administrator/SaucerAdd/SaucerAdd";
import ContainerAccount from "../ContainerAccount/ContainerAccount";

const ContainerMain = () => {
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

export default ContainerMain;