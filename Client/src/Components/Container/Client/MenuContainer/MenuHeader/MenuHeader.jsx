import React from "react";

const MenuHeader = ({dias=[], getProductosHandler}) => {
    return(
        <div className="flex justify-center gap-x-10 ">
            <nav className="w-full">
                <ul className="flex flex-row justify-between text-xl">
                {
                    dias.map(dia => {
                        return <button key={dia._id} onClick={()=>getProductosHandler(dia._id)}>{dia.nombre}</button>
                    })
                }
                </ul>
            </nav>
        </div>
    );
};

export default MenuHeader;