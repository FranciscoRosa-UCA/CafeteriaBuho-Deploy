import React from "react";
import { Outlet } from "react-router-dom";

const ContainerMain = () => {
    return(
        <div className="h-max p-5">
            <Outlet />
        </div>
    );
};

export default ContainerMain;