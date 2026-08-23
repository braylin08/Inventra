import { Link } from 'react-router-dom'; 
import CampoEntrada from '../components/input.jsx';
import Boton from '../components/boton.jsx';
import logo from '../assets/logo-inventra.png';

function Registrate() {
  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <section className="w-full max-w-md p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl flex flex-col items-center">
        
        <div className="mb-2">
          <img src={logo} alt="Logo Inventra" className="w-16 h-16 object-contain mx-auto" />
        </div>

        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Crear Cuenta</h2>
        <p className="text-sm text-slate-500 mt-1 mb-6 text-center">
          Únete a Inventra para gestionar tu logística.
        </p>

        <form className="w-full space-y-4 grid">
          <CampoEntrada 
            titulo="Nombre Completo" 
            tipo="text" 
            placeholder="Ej. Ana García" 
          />

          <CampoEntrada 
            titulo="Correo Electrónico" 
            tipo="email" 
            placeholder="Usuario@gmail.com" 
          />

          <CampoEntrada 
            titulo="Contraseña" 
            tipo="password" 
            placeholder="••••••••" 
          /> 
          <CampoEntrada 
            titulo="Confirmar Contraseña" 
            tipo="password" 
            placeholder="••••••••" 
          />

          <div className="pt-2 text-center rounded text-white bg-sky-600 ">
            <Boton nombre="Crear Cuenta" />
          </div>
        </form>

        {/* Enlace de navegación */}
        <p className="mt-6 text-sm text-slate-600 text-center">
          ¿Ya tienes una cuenta?{' '}
          <Link to="/Login" className="text-sky-600 font-semibold hover:text-sky-700 transition-colors"> Iniciar Sesión </Link>
        </p>

      </section>
    </div>
  );
}

export default Registrate;