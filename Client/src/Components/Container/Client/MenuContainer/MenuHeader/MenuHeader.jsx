import React from "react";

const MenuHeader = ({dias=[], getProductosHandler}) => {
    return(
        <div className="flex justify-center">
            <nav className="w-full overflow-x-auto">
                <ul className="flex gap-4 flex-row justify-between text-xl">
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