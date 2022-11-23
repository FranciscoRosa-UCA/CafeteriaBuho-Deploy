import {React, useState} from "react";
import "./Register.css"

import Button from "../../Button/Button";


const Register = () => {

    const [form, setForm] = useState({});

    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit = () => {
        console.log(form);
    }


    return(
        <div className="flex flex-row flex-wrap justify-center items-center w-full h-screen">
            <div>
                <figure className="flex justify-center w-80 h-80">
                    <img src="https://checkin.uca.edu.sv/static/media/LogoUCAblanco.1da65d1f.png" alt="" />

                </figure>
            </div>
            <form action="" className="flex flex-col gap-10 text-xl w-5/12">

                <div className="flex flex-row flex-wrap gap-6 w-full justify-between">
                    <input type="text" placeholder="Nombre de usuario" className="w-9/12 max-w-screen-xl inp rounded-xl p-2" onChange={(e)=>handleForm('nombre', e.target.value)} />
                    <input type="email" placeholder="Correo electronico" className="w-9/12 max-w-screen-xl inp rounded-xl p-2" onChange={(e)=>handleForm('correo', e.target.value)}/>
                    <input type="text" placeholder="Telefono" className="w-9/12 max-w-screen-xl inp rounded-xl p-2" onChange={(e)=>handleForm('telefono', e.target.value)}/>
                    <input type="password" placeholder="Contraseña" className="w-9/12 max-w-screen-xl inp rounded-xl p-2" onChange={(e)=>handleForm('contraseña', e.target.value)}/>
                    <input type="password" placeholder="Confirmar contraseña" className="w-9/12 max-w-screen-xl inp rounded-xl p-2" onChange={(e)=>handleForm('Validacion_contraseña', e.target.value)}/>
                </div>

                <div className="flex flex-col w-9/12 gap-4 items-center">
                    <div className="w-11/12 flex flex-col">
                        <Button handler={handleSubmit}>Registrarse</Button>
                    </div>
                    <div className="w-11/12 flex flex-col">
                        <Button _color={"dark"}>Registrarse con google</Button>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default Register;