import React from "react";

import "./_errors.css";

const _404 = () => {
    return(
        <div className="w-full h-screen flex justify-center items-center text-6xl">
            <div className="flex justify-center items-center gap-5 w-20">
                <p className="text">404</p>
                <div className=""></div>
                <p className="text">NO SE HA ENCONTRADO EL RECURSO</p>
            </div>
        </div>
    );
};

export default _404;