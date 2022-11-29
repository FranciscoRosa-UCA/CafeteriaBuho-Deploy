import React from "react";
import Card from "./Card/Card";

const CardsContainer = ({_category="Destacado", _flex="row", _wrap="nowrap", platillos = []}) => {
    return(
        <div className="py-5 flex flex-col gap-5">
            <h4 className="text-xl"> {_category} </h4>
            <div className={`flex flex-${_flex} flex-${_wrap} gap-5 justify-between overflow-x-auto`}>
                {
                    platillos.map(platillo => {
                        return <Card key={platillo._id} _id={platillo._id} _name={platillo.nombre} _price={platillo.precio} _image={platillo.imagen}></Card>
                    })
                }
            </div>
        </div>
    );
};

export default CardsContainer;