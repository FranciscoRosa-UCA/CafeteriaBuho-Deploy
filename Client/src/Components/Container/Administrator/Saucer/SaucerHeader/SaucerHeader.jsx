const SaucerHeader = ({tipos}) => {
    return (
        <div className="">
            <nav className="w-full">
                <ul className="flex justify-between gap-x-10 text-xl">
                    {
                        tipos.map(tipo => {
                            return <a href={'/admin/menu/'+tipo._id} key={tipo._id}><li>{tipo.nombre}</li></a>
                        })
                    }
                </ul>
            </nav>
        </div>
    );
}

export default SaucerHeader;