import React, { useEffect, useState } from "react";
import axios from 'axios';
const MenuHeader = () => {
    const [dias, setDays] = useState([]);
    const getDays = async () => {
        try {
            let {data} = await axios.get('/dias');
            setDays(data.dias);
        } catch(e) {
            console.log(e);
        }
    }
    useEffect(()=> {
        getDays();
    }, []);
    return(
        <div className="flex justify-center gap-x-10 ">
            <nav className="w-full">
                <ul className="flex flex-row justify-between text-xl">
                {
                    dias.map(dia => {
                        return <a href={"/menu/"+dia._id} key={dia._id}><li>{dia.nombre}</li></a>
                    })
                }
                </ul>
            </nav>
        </div>
    );
};

export default MenuHeader;