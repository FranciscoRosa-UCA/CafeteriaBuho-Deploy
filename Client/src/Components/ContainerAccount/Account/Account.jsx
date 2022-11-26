import { React, useState, useEffect }from "react";
import axios from 'axios';
import "./Account.css"
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";
import { useConfigContext } from "../../../contexts/ConfigContext";
const Account = () => {
    const {loading} = useConfigContext();
    const [form, setForm] = useState({});
    const [currentFile, setFile] = useState({});

    useEffect(()=>{
        getUser();
    }, []);
    const getUser = async () => {
        if (localStorage.getItem('token')) {
            try {
                let {data} = await axios.post('/user/getUser', {token: localStorage.getItem('token')});
                setForm(data.user);
            }
            catch(e) {
                console.log(e.response.data.message);
                window.location.pathname='/login';
            };
        } else
            window.location.pathname ='/login';
    }
    const handleForm = (name, value) => {
        setForm({...form, [name]: value});
    }
    const uploadHandler = (file) => {
        setFile(file);
        setForm({...form, foto: window.webkitURL.createObjectURL(file)})
    }
    const handleSubmit = () => {
        axios.patch('/user/update',
        {
            ...form,
            currentFile,
            token: localStorage.getItem('token')
        },
        {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        .then(data => console.log(data))
        .catch(e=>console.log(e));
    }

    return(
        <div className="flex justify-center p-10 w-full">
            <form className="w-full flex flex-col gap-10 text-xl items-center">
                <div className="pic p-2 w-60 h-56 p-2 flex justify-center items-center"
                    onClick={
                        ()=>{
                            document.querySelector("#img").click();
                        }
                    }
                    >
                        <input id="img" type="file"  className="hidden" onChange={(e)=>uploadHandler(e.target.files[0])}/>
                        <figure>
                        {
                            form.foto
                            ? <img src={form.foto} />
                            : <Icon _type="upload" _color="black" _sx="100"></Icon>
                        }
                        </figure>
                </div>

                <p>{form.username}</p>

                <div className="flex flex-col gap-6 w-6/12 items-center">
                    <input type="text" placeholder="Nombre de usuario" className="w-9/12 max-w-screen-xl inp rounded-xl p-2" onChange={(e)=>handleForm('username', e.target.value)}
                    value={form.username || ''} 
                    />

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