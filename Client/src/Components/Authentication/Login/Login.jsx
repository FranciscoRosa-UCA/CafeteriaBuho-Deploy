import {React, useEffect, useState} from "react";
import "./Login.css"
import axios from 'axios';
import Button from "../../Button/Button";
import { useUserContext } from "../../../contexts/UserContext";
import Swal from 'sweetalert2';

const Login = () => {
    const {login, register, token, user} = useUserContext();
    const [form, setForm] = useState({});
    useEffect(() => {
        if (token){}
            // window.location.pathname ='/user/';
    }, []);
    useEffect(() => {
        if (user)
            window.location.pathname ='/';
    }, [user]);
    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit = async() => {
        await login(form.email, form.password);
    }
    const AlertWrongField = () =>{
        Swal.fire({
            icon: 'error',
            title: 'Usuario o contraseña invalidos',
            color: '#fff',
            background: '#14213D',
            footer: '<p class="text-center" href="">¿No recuerdas tus credenciales?, contactanos: buhouca@uca.edu.sv</p>'
          })
    }

    return(
        <div className="w-full h-screen flex flex-col justify-center items-center gap-4 p-4 text-lg">
            <h2>Hola ucamigo</h2>
            <form action="" className="flex flex-col gap-4 w-full md:w-2/4 lg:w-1/4">

                <input type="email" placeholder="Email" className="w-full max-w-screen-xl inp rounded-md p-2" onChange={(e)=>handleForm('email', e.target.value)}/>
                <input type="password" placeholder="Contraseña" className="w-full max-w-screen-xl inp rounded-md p-2" onChange={(e)=>handleForm('password', e.target.value)}/>

                <div className="flex flex-col w-full gap-4 items-center">
                    <div className="flex flex-col w-full">
                        <Button handler={handleSubmit}>Iniciar sesíon</Button>
                    </div>
                    <div className="flex flex-col w-full">
                        <Button _color={"dark"}>Iniciar sesíon con google</Button>
                    </div>
                </div>

            </form>

            <div className="text-center text-md">
                <p>¿No tienes una cuenta?, registrate ahora:</p>
                <a href='/signup'>Registrarse</a>
            </div>

        </div>
    );
};

export default Login;