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
        <div className="flex flex-col  items-center justify-center gap-10 w-full h-screen">
            <form action="" className="flex flex-col gap-14 text-xl w-6/12 items-center justify-center">

                <div className="flex flex-col gap-6 w-full justify-center items-center">
                    <h2>Hola ucamigo</h2>
                    <input type="email" placeholder="Email" className="w-9/12 max-w-screen-xl inp rounded-xl p-2" onChange={(e)=>handleForm('email', e.target.value)}/>
                    <input type="password" placeholder="Contraseña" className="w-9/12 max-w-screen-xl inp rounded-xl p-2" onChange={(e)=>handleForm('password', e.target.value)}/>
                </div>

                <div className="flex flex-col w-9/12 gap-4 items-center">
                    <div className="w-11/12 flex flex-col">
                        <Button handler={handleSubmit}>Iniciar sesíon</Button>
                    </div>
                    <div className="w-11/12 flex flex-col">
                        <Button _color={"dark"}>Iniciar sesíon con google</Button>
                    </div>
                </div>

            </form>

            <div className="flex gap-8 items-center">
                <p>¿No tienes una cuenta?, registrate ahora:</p>
                <a href='/signup'>Registrarse</a>
            </div>

        </div>
    );
};

export default Login;