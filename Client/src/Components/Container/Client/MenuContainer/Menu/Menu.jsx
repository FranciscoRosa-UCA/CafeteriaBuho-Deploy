import CardsContainer from '../../../../CardsContainer/CardsContainer'
const Menu = ({categorias}) => {
    return(
        <div className="flex flex-col gap-10">
            {
                categorias.map(categoria => (
                    <CardsContainer key={categoria.nombre} _category={categoria.nombre} platillos={categoria.productos}></CardsContainer>
                ))
            }
        </div>
    );
};

export default Menu;