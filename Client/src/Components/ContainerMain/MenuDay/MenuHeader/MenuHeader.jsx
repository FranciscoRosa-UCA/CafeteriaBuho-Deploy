import React from "react";


const MenuHeader = () => {
    return(
        <div className="flex justify-center gap-x-10 ">
            <nav>
                <ul className="flex gap-x-40 text-xl">
                    <li> Lunes </li>
                    <li> Martes </li>
                    <li> Miercoles </li>
                    <li> Jueves </li>
                    <li> Viernes </li>
                    <li> Sabado </li>
                </ul>
            </nav>
        </div>
    );
};

export default MenuHeader;