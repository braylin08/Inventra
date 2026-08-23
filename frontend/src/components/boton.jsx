

function Boton({nombre,estilos}){

    return(
        <div className="self-center">
            <a href="#" className={estilos}>{nombre}</a>
        </div>
    );
}

export default Boton;