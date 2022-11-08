import React from "react";
import Icon from "../../Icon/Icon"

const Card = ({_id, _image, _name, _price}) => {
    return(
        <div className="flex flex-col gap-0 p-5  text-xl">
            <figure className="flex justify-center w-80 h-80">
                <img
                src={_image} alt="Banner" />
            </figure>
            <h5>{_name || "Platillo"}</h5>
            <div className="flex justify-between py-2">
                <p>$ {_price || "0.00"}</p>
                <Icon _type="addShopping"></Icon>
            </div>
        </div>
    );
};

export default Card;