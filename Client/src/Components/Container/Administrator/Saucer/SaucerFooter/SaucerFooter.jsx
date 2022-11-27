import React from "react";
import Icon from '../../../../Icon/Icon';
const SaucerFooter = ({handler}) => {
    return (
        <div className="flex gap-5 sticky bottom-0">
            <button onClick={handler}>
                <div className="cursor-pointer flex justify-between items-center">
                    <Icon _type="add"></Icon>
                    <p> Agregar producto </p>
                </div>
            </button>
            {/* <div className="flex justify-between items-center">
                <Icon _type="list"></Icon>
                <p> Editar ordenamiento </p>
            </div> */}
        </div>
    );
}

export default SaucerFooter;