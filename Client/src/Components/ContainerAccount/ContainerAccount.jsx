import React from "react";
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import AccountHeader from "../HeaderAccount/HeaderAccount";
import Account from "./Account/Account";
import Support from "./Support/Support";

const ContainerAccount = () => {
    return(
        <div className="">
            <AccountHeader/>
            <Account>                
            </Account>
            <Support></Support>
        </div>
    );
};

export default ContainerAccount;