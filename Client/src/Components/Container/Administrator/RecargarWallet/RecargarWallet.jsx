import { dividerClasses } from "@mui/material";
import React, {useState} from "react";
import Button from "../../../Button/Button";
import { useUserContext } from "../../../../contexts/UserContext";
import axios from "axios";
const RecargarWallet = () => {
    let { token } = useUserContext();
    const [form, setForm] = useState({});
    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
    }
    const recargarHandler = async () => {
        try{
            await axios.post('/wallet/recargar', form, {
                headers:{
                    authorization: `Bearer ${token}`
                }
            });
        } catch(e) {
            console.log(e);
        }
    }
    return (
        <div className="w-full flex justify-center">
            <form className="flex flex-col gap-2 w-full md:w-80 h-full text-xl">
                <input type="text" className="outline-none h-10 w-full bg-second-bg rounded-md px-2" placeholder="Direccion de billetera" onChange={(e)=>handleForm('qr', e.target.value)}/>
                <input type="number" className="outline-none h-10 w-full bg-second-bg rounded-md px-2" placeholder="Monto" onClick={(e)=>handleForm('ucoins', e.target.value)}/>
                <Button handler={recargarHandler}>Recargar</Button>
            </form>
        </div>
    );
}

export default RecargarWallet;