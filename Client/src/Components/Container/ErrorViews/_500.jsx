import React from "react";

import "./_errors.css";

const _500 = () => {
    return(
        <div className="w-full h-screen flex justify-center items-center text-6xl">
            <div className="flex justify-center items-center gap-5 w-20">
                <p className="text">500</p>
                <div className=""></div>
                <p className="text">HA OCURRIDO UN ERROR INTERNO</p>
            </div>
        </div>
    );
};

export default _500;