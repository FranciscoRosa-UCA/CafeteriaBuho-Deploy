import React from "react";

import Button from "../../../../Button/Button";
import ChangePassword from "./ChangePassword/ChangePassword";
import DeleteAccount from "./DeleteAccount/DeleteAccount";

const Configuration = () => {

    let state = false;    

    const handleSubmit = () => {
        state = !state;
    }

    return(
        <div className="static flex flex-col justify-center gap-5 items-center p-10 w-full text-xl">
                <div className="flex flex-col flex-nowrap w-full lg:w-5/12 ">
                    <p>Fecha de creacion de la cuenta</p>
                    <p>23 de agosto de 2014</p>                
                </div>
                <div className="flex flex-col flex-nowrap w-full lg:w-5/12 ">
                    <p>Fecha de creacion de la cuenta</p>
                    <Button
                    handler={handleSubmit}

                    >Cambiar contraseña</Button>
                </div>
                <div className="flex flex-col flex-nowrap w-full lg:w-5/12 ">
                    <p>Fecha de creacion de la cuenta</p>
                    <Button _color="red">Eliminar cuenta</Button>
                </div>

                {/* <ChangePassword></ChangePassword> */}
                
                {/* <DeleteAccount></DeleteAccount> */}

        </div>
    );
};

export default Configuration;