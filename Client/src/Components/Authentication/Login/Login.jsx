import {React, useState} from "react";
import "./Login.css"
import { API_URL } from "../../../config";
import axios from 'axios';
import Button from "../../Button/Button";


const Login = () => {

    const [form, setForm] = useState({});

    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit = () => {
        axios.post(API_URL + '/user/login', form)
        .then (data => {
            console.log(data);
            if (data.statusText == 'OK') {
                localStorage.setItem('token', JSON.stringify(data.data.token));
                window.location.pathname = '/';
            }
        })
        .catch(e => {
            if (e.response)
                console.log(e.response.data.error);
        });
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
                <Button _color={"dark"}>Registrarse</Button>
            </div>

        </div>
    );
};

export default Login;