import {React, useState} from "react";

import './ChangePassword.css';

import Button from "../../../Button/Button";

const ChangePassword = () => {

    const [form, setForm] = useState({});
    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit = () => {
        console.log(form);
    }

    const modal = document.querySelector("#mod-pass");


    return(
        <div id="mod-pass" className="w-full h-full absolute inset-0 modal-b flex justify-center items-center">
            <div className="flex flex-col justify-center gap-5 items-center p-10 w-96 text-xl modal-c">
                <p>Cambiar contraseña</p>
                <hr className="w-full"/>

                <form action="" className="w-4/5 flex flex-col gap-10 text-xl">

                    <div className="flex flex-col gap-6 w-full ">
                        <input type="password" placeholder="Contraseña actual" className="w-full inp rounded-xl p-2" onChange={(e)=>handleForm('contraseña_antigua', e.target.value)}/>
                        <input type="password" placeholder="Contraseña nueva" className="w-full inp rounded-xl p-2" onChange={(e)=>handleForm('contraseña_nueva', e.target.value)}/>
                        <input type="password" placeholder="Confirmar contraseña" className="w-full inp rounded-xl p-2" onChange={(e)=>handleForm('contraseña_confirmar', e.target.value)}/>
                    </div>

                    <div className="flex flex-col w-full gap-4 ">
                        <div className="w-full flex flex-col">
                            <Button handler={handleSubmit}>Guardar</Button>
                        </div>
                        <div className="w-full flex flex-col">
                            <Button>Cancelar</Button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ChangePassword;