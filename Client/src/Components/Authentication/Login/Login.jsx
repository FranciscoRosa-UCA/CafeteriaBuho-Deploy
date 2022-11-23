import React from "react";
import "./Login.css"

import Button from "../../Button/Button";


const Login = () => {
    return(
        <div className="flex justify-center">
            <form action="" className="w-4/5 flex flex-col gap-10 text-xl">

                <div className="flex flex-row flex-wrap gap-6 w-full justify-between">
                    <input type="text" placeholder="Usuario" className="w-9/12 max-w-screen-xl inp rounded-xl p-2" />
                </div>

                <div className="flex flex-row flex-wrap min-w-96 gap-4 justify-between">
                    <div className="w-5/12 flex flex-col">
                        <Button>Añadir</Button>
                    </div>
                    <div className="w-5/12 flex flex-col">
                        <Button>Inicia sesion con google</Button>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default Login;