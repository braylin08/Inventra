

function Boton({nombre,estilos}){

    return(
        
        <button type="submit" className={`hover:bg-sky-700 w-full p-2    ${estilos} `}>{nombre}</button>
    );
}

export default Boton;