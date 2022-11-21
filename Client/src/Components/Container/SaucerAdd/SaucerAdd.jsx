import React from "react";
import "./SaucerAdd.css"

import Button from "../../Button/Button";
import Combobox from "react-widgets/Combobox";

const SaucerAdd = () => {
    return(
        <div className="flex justify-center">
            <form action="" className="w-4/5 flex flex-col gap-10 text-xl">
                {/* <Combobox className="text-black bg-white"
                defaultValue="Principal"
                data={["Tipo de platillo", "Platillo", "Acompañamiento", "Extra", "Principal"]}
                /> */}
                <div className="flex flex-row flex-wrap gap-6 w-full justify-between">
                    <select name="" id="" className="w-1/5 inp rounded-xl p-2">
                        <option value="">Tipo de platillo</option>
                        <option value="">Platillo</option>
                        <option value="">Acompañamiento</option>
                        <option value="">Extra</option>
                        <option value="">Principal</option>
                    </select>
                    <input type="search" placeholder="Buscar" className="w-4/5 max-w-screen-xl inp rounded-xl p-2" />
                </div>
                <div className="flex flex-row flex-wrap gap-6 w-full justify-between">
                    <input type="text" placeholder="Nombre" className="w-10/12 max-w-screen-xl inp rounded-xl p-2" />
                    <input type="text" placeholder="Precio" className="w-2/12 max-w-screen-xl inp rounded-xl p-2" />
                </div>

                <textarea rows="7" cols="33" placeholder="Descripcion" className="inp rounded-xl p-2 w-full p-2">
                </textarea>

                <div className="inp rounded-xl p-2 w-full h-56 p-2">
                </div>

                <div className="flex flex-row flex-wrap min-w-96 gap-4 justify-between">
                    <div className="w-5/12 flex flex-col">
                        <Button>Añadir</Button>
                    </div>
                    <div className="w-5/12 flex flex-col">
                        <Button>Eliminar</Button>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default SaucerAdd;