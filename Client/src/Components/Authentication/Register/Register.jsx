import {React, useEffect, useState} from "react";
import "./Register.css"
import Button from "../../Button/Button";
import { useUserContext } from "../../../contexts/UserContext";

const Register = () => {
    const {register, user} = useUserContext();
    const [form, setForm] = useState({});

    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit = async () => {
        register(form);
        if (user) {
            window.location.pathname = '/';
        }
    }
    useEffect(()=> {
        if (user) {
            window.location.pathname = '/';
        }
    },[user])

    return(
        <div className="flex flex-row flex-wrap justify-center items-center w-full h-screen px-5">
            <figure className="w-80 h-80">
                <img className="w-full h-full object-contain" src="https://checkin.uca.edu.sv/static/media/LogoUCAblanco.1da65d1f.png" alt="logo cafeteria buho" />

            </figure>
            <form action="" className="flex flex-col justify-center gap-10 text-xl w-full md:w-1/2">

                <div className="flex flex-row flex-wrap gap-6 w-full justify-between">
                    <input type="text" placeholder="Nombre de usuario" className="w-full xl:w-3/4 max-w-screen-xl inp rounded-xl p-2 outline-none" onChange={(e)=>handleForm('username', e.target.value)} />
                    <input type="email" placeholder="Correo electronico" className="w-full xl:w-3/4 max-w-screen-xl inp rounded-xl p-2 outline-none" onChange={(e)=>handleForm('email', e.target.value)}/>
                    {/* <input type="text" placeholder="Telefono" className="w-full xl:w-3/4 max-w-screen-xl inp rounded-xl p-2 outline-none" onChange={(e)=>handleForm('telefono', e.target.value)}/> */}
                    <input type="password" placeholder="Contraseña" className="w-full xl:w-3/4 max-w-screen-xl inp rounded-xl p-2 outline-none" onChange={(e)=>handleForm('password', e.target.value)}/>
                    <input type="password" placeholder="Confirmar contraseña" className="w-full xl:w-3/4 max-w-screen-xl inp rounded-xl p-2 outline-none" onChange={(e)=>handleForm('passwordValidation', e.target.value)}/>
                </div>

                <div className="flex flex-col w-full xl:w-3/4 gap-4 items-center">
                    <div className="w-full flex flex-col">
                        <Button handler={handleSubmit}>Registrarse</Button>
                    </div>
                    <div className="w-full flex flex-col">
                        <Button _color={"dark"}>Registrarse con google</Button>
                    </div>
                </div>

                <p className="text-center text-md">¿Ya tienes cuenta? <a href='/login'>Inicia sesión</a></p>
            </form>
        </div>
    );
};

export default Register;