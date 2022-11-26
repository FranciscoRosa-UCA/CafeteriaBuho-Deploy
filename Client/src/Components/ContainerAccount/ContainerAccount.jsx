import React from "react";
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import AccountHeader from "../HeaderAccount/HeaderAccount";
import { Outlet } from "react-router-dom";
import Support from "./Support/Support";
const ContainerAccount = () => {
    return(
        <div className="">
            <AccountHeader/>
            <Outlet />
            <Support></Support>
       </div>
    );
};

export default ContainerAccount;