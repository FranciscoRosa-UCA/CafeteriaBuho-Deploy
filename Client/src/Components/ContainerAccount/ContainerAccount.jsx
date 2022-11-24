import React from "react";
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import AccountHeader from "../HeaderAccount/HeaderAccount";
import Account from "./Account/Account";

const ContainerAccount = () => {
    return(
        <div className="">
            <AccountHeader/>
            <Account>                
            </Account>

        </div>
    );
};

export default ContainerAccount;