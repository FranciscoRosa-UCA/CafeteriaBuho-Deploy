const SaucerHeader = ({tipos}) => {
    return (
        <nav className="w-full overflow-x-auto">
            <ul className="flex justify-between gap-x-10 text-xl">
                {
                    tipos.map(tipo => {
                        return <a href={'/admin/menu/'+tipo._id} key={tipo._id}><li>{tipo.nombre}</li></a>
                    })
                }
            </ul>
        </nav>
    );
}

export default SaucerHeader;