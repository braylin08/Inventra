
function Footer(){


    return(
        <footer className="flex flex-2 items-center gap-4 bg-sky-900 text-white p-4">
            <h2 className="font-medium">Inventra </h2>
            <p>©2024 Inventra Systems Inc. todos los derechos reservados.</p>
            <ul className="flex gap-4 flex-2 justify-end" >
                <li><a href="#">Politica y Privacidad</a></li>
                <li><a href="#">Terminos de Servicio</a></li>
                <li><a href="">Contactar Soporte</a></li>
            </ul>
        </footer>
    )
}


export default Footer;