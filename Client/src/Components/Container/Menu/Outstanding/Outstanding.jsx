import React from "react";
import Card from "../../Card/Card";

const Outstanding = () => {
    return(
        <div className="p-5">
            <h4 className="text-xl"> Destacados </h4>
            <div className="flex flex-wrap justify-between">
                <Card _name={"Plato 1"} _price={"23.30"} _image={"https://tipsparatuviaje.com/wp-content/uploads/2020/02/tamales-comida.jpg"}></Card>
                <Card _name={"Plato 2"} _price={"25.73"} _image={"https://picsum.photos/id/233/200/300"}></Card>
                <Card _name={"Plato 3"} _price={"50.83"} _image={"https://picsum.photos/id/218/250/310"}></Card>
                <Card _name={"Plato 4"} _price={"63.60"} _image={"https://picsum.photos/id/28/200/310"}></Card>
                <Card _name={"Plato 5"} _price={"96.36"} _image={"https://picsum.photos/id/238/300/300"}></Card>
                <Card _name={"Plato 6"} _price={"27.36"} _image={"https://picsum.photos/id/258/200/310"}></Card>

            </div>
        </div>
    );
};

export default Outstanding;