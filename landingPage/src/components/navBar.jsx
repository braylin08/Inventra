import { Link } from 'react-router-dom'


function NavBar(){
    return(
        <nav className="">
            <p className="" >Inventra</p>
            
            <Link to="/Inicio">Inicio</Link>
            <Link to="/Caracteristica">Características</Link>
            <Link to="/Soluciones">Soluciones</Link>
            <Link to="/Precios">Precios</Link>
            <Link to="/Testimonios">Testimonios</Link>

            <a href="#" target="_blank" rel="noopener noreferrer">Iniciar Sesion</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">Solicitar Demo</a>
      </nav>
    )
}


export default NavBar;