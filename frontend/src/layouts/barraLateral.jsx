import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo-inventra.png'
function BarraLateral(){
const location = useLocation();

  // Función auxiliar para resaltar el enlace activo
  const linkEstilo = (path) => 
    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors font-medium ${
      location.pathname === path 
        ? 'bg-sky-600 text-white' 
        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
    }`;

  return (
    <aside className="fixed top-0 left-0 h-screen w-52 bg-gray-100 text-slate-900 p-4 flex flex-col justify-between  border-slate-800 z-50">
      
      {/* Sección Superior: Logo y Menú */}
      <div>
        {/* Header / Logo */}
        <div className="flex items-center space-x-3 px-2 py-4 mb-6 border-b border-slate-800">
          <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center font-bold text-white">
            <img src={Logo} alt="logo" />
          </div>
          <span className="text-xl font-bold tracking-tight">Inventra</span>
        </div>

        {/* Links de Navegación */}
        <nav className="space-y-1">
          <Link to="/dashboard/inicio" className={linkEstilo('/dashboard/inicio')}>
            <span>Inicio</span>
          </Link>

          <Link to="/dashboard/inventario" className={linkEstilo('/dashboard/inventario')}>
            <span>Inventario</span>
          </Link>

          <Link to="/dashboard/usuarios" className={linkEstilo('/dashboard/usuarios')}>
            <span>Usuarios</span>
          </Link>

           <Link to="/dashboard/Reportes" className={linkEstilo('/dashboard/Reportes')}>
            <span>Reportes</span>
          </Link>

           <Link to="/dashboard/Configuracion" className={linkEstilo('/dashboard/Configuracion')}>
            <span>Configuracion</span>
          </Link>
        </nav>
      </div>

      {/* Sección Inferior: Opción de Salir / Perfil */}
      <div className="border-t border-slate-800 pt-4">
        <Link to="/Login" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors font-medium">
          <span>Cerrar Sesión</span>
        </Link>
      </div>

    </aside>
  );
}

export  default BarraLateral;