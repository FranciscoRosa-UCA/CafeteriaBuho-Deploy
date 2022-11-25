import React from "react";
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import AccountHeader from "../HeaderAccount/HeaderAccount";
import { Outlet } from "react-router-dom";
const ContainerAccount = () => {
    return(
        <div className="">
            <AccountHeader/>
            <Outlet />
        </div>
    );
};

export default ContainerAccount;