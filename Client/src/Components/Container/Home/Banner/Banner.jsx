import React from "react";
import Icon from "../../../../Icon/Icon";

const Banner = () => {
    return(
        <div className="flex flex-col gap-5">
            <figure className="flex justify-center max-h-80">
                <img className="w-full"//max-w-xl 
                src="https://tipsparatuviaje.com/wp-content/uploads/2020/02/pupusas-comida.jpg" alt="Banner" />
            </figure>
            <div className="flex gap-2 items-center text-lg">
                <Icon _type="list"></Icon>
                <p>Editar slide</p>
            </div>
        </div>
    );
};

export default Banner;