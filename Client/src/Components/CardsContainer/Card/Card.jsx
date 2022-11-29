import React from "react";
import Icon from "../../Icon/Icon"
import {useCartContext} from '../../../contexts/CartConext';
const Card = ({_id, _image, _name, _price}) => {
    const {addProducto} = useCartContext();
    return(
        <div className="flex flex-col gap-0 text-xl">
            <figure className="flex justify-center w-80 h-80">
                <img
                src={_image} alt="Image" className="w-full object-cover" />
            </figure>
            <h5>{_name || "Platillo"}</h5>
            <div className="flex justify-between items-center">
                <p>$ {_price || "0.00"}</p>
                <span className="cursor-pointer" ><Icon _type="addShopping" handler={(e)=>addProducto(_id)}></Icon></span>
            </div>
        </div>
    );
};

export default Card;