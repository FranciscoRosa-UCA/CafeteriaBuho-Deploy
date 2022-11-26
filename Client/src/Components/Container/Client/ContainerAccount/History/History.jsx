import React from "react";

const History = () => {

    const textTransaction = (date, type, amount) =>{
        return(
            <div className="flex flex-row flex-nowrap justify-between w-full lg:w-5/12 ">
                <p>{date}</p>
                <p>{( !type )?  '-$' : '+$'}{amount}</p>
            </div>
        );
    }

    return(
        <div className="flex flex-col justify-center gap-5 items-center p-10 w-full text-xl">
                <div className="flex flex-row flex-nowrap justify-between w-full lg:w-5/12 ">
                    <p>Fecha de transacción</p>
                    <p>Monto</p>                
                </div>
                {textTransaction('20/11/2022', 0, 23.50)}
                {textTransaction('20/11/2022', 1, 23.50)}
                {textTransaction('20/11/2022', 0, 23.50)}
                {textTransaction('20/11/2022', 1, 23.50)}
                {textTransaction('20/11/2022', 0, 23.50)}
                {textTransaction('20/11/2022', 1, 23.50)}
                {textTransaction('20/11/2022', 0, 23.50)}
                {textTransaction('20/11/2022', 1, 23.50)}
        </div>
    );
};

export default History;