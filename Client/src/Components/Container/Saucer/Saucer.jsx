import React from "react";
import Button from "../../Button/Button";

const Saucer = () => {

    return(
        <div className="flex gap-5 justify-center">

            <div className="flex flex-col gap-5 justify-center items-center w-4/12 h-2/4">

                <figure className="flex justify-between w-full h-full">
                    <img className="w-full h-full"
                    src="https://picsum.photos/id/233/200/300" alt="Banner" />
                </figure>
                
                <div className="flex gap-5 justify-around text-lg">
                    <Button>
                        Personalizar
                    </Button>
                    <Button>
                        Agregar al carrito
                    </Button>
                </div>

            </div>

            <div className="flex flex-col gap-5 text-lg w-4/12">
                <p> $0.00 </p>
                <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis vero fuga placeat amet ipsa sequi, similique quaerat maiores libero labore facere provident, cum officia obcaecati aperiam laboriosam! Deserunt, totam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis vero fuga placeat amet ipsa sequi, similique quaerat maiores libero labore facere provident, cum officia obcaecati aperiam laboriosam! Deserunt, totam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis vero fuga placeat amet ipsa sequi, similique quaerat maiores libero labore facere provident, cum officia obcaecati aperiam laboriosam! Deserunt, totam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis vero fuga placeat amet ipsa sequi, similique quaerat maiores libero labore facere provident, cum officia obcaecati aperiam laboriosam! Deserunt, totam.                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis vero fuga placeat amet ipsa sequi, similique quaerat maiores libero labore facere provident, cum officia obcaecati aperiam laboriosam! Deserunt, totam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis vero fuga placeat amet ipsa sequi, similique quaerat maiores libero labore facere provident, cum officia obcaecati aperiam laboriosam! Deserunt, totam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis vero fuga placeat amet ipsa sequi, similique quaerat maiores libero labore facere provident, cum officia obcaecati aperiam laboriosam! Deserunt, totam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis vero fuga placeat amet ipsa sequi, similique quaerat maiores libero labore facere provident, cum officia obcaecati aperiam laboriosam! Deserunt, totam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis vero fuga placeat amet ipsa sequi, similique quaerat maiores libero labore facere provident, cum officia obcaecati aperiam laboriosam! Deserunt, totam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis vero fuga placeat amet ipsa sequi, similique quaerat maiores libero labore facere provident, cum officia obcaecati aperiam laboriosam! Deserunt, totam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis vero fuga placeat amet ipsa sequi, similique quaerat maiores libero labore facere provident, cum officia obcaecati aperiam laboriosam! Deserunt, totam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis vero fuga placeat amet ipsa sequi, similique quaerat maiores libero labore facere provident, cum officia obcaecati aperiam laboriosam! Deserunt, totam.

                </p>
            </div>

        </div>
    );

};

export default Saucer;