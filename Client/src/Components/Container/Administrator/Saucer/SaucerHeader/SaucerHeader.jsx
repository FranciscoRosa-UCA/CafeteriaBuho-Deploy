const SaucerHeader = ({tipos}) => {
    return (
        <div className="flex justify-center gap-x-10 ">
            <nav>
                <ul className="flex gap-x-40 text-xl">
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