import { React, useState }from "react";

import "./Account.css"

import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";

const Account = () => {
    const [form, setForm] = useState({});

    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit = () => {
        console.log(form);
    }

    return(
        <div className="flex justify-center p-10 w-full">
            <form action="" className="w-full flex flex-col gap-10 text-xl items-center">

                <div className="pic p-2 w-60 h-56 p-2 flex justify-center items-center"
                    onClick={
                        ()=>{
                            document.querySelector("#img").click();
                        }
                    }
                    >
                        <input id="img" type="file"  className="hidden" onChange={(e)=>handleForm('imagen', e.target.value)}/>
                        <Icon _type="upload" _color="black" _sx="100"></Icon>
                </div>

                <p>Nombre de Usuario</p>

                <div className="flex flex-col gap-6 w-6/12 items-center">
                    <input type="text" placeholder="Nombre de usuario" className="w-9/12 max-w-screen-xl inp rounded-xl p-2" onChange={(e)=>handleForm('nombre', e.target.value)}/>
                    <input type="text" placeholder="Institucion" className="w-9/12 max-w-screen-xl inp rounded-xl p-2" onChange={(e)=>handleForm('institucion', e.target.value)}/>
                    <input type="text" placeholder="Telefono" className="w-9/12 max-w-screen-xl inp rounded-xl p-2" onChange={(e)=>handleForm('telefono', e.target.value)}/>
                </div>

                <div className="flex flex-row flex-wrap min-w-96 gap-4 justify-center">
                        <Button handler={handleSubmit}>Guardar cambios</Button>
                </div>

            </form>

        </div>
    );
};

export default Account;