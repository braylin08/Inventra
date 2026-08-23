import { Link } from 'react-router-dom'; 
import CampoEntrada from '../components/input.jsx';
import Boton from '../components/boton.jsx';
import logo from '../assets/logo-inventra.png';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <section className="w-full max-w-md p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl flex flex-col items-center">
        
        
        <div className="mb-2">
          <img src={logo} alt="Logo Inventra" className="w-16 h-16 object-contain mx-auto" />
        </div>

        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Iniciar Sesión</h2>
        <p className="text-sm text-slate-500 mt-1 mb-6 text-center">Accede al panel de control</p>

        {/* Formulario */}
        <form className="w-full space-y-4 grid">
          <CampoEntrada titulo="Correo Electrónico" tipo="email" placeholder="usuario@gmail.com" />
          <CampoEntrada titulo="Contraseña" tipo="password" placeholder="••••••••" />

          <div className="flex items-center justify-between text-sm pt-1">

            <label className="flex items-center space-x-2 cursor-pointer text-slate-600">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 accent-sky-600"  />
              <span>Recordarme</span>
            </label>

            <Link to="/recuperar-contrasena" 
              className="text-sky-600 font-medium hover:text-sky-700 hover:underline transition-colors"> ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <div className="pt-2 text-center rounded text-white bg-sky-600 ">
            <Boton nombre="Iniciar Sesión" />
          </div>
        </form>

        {/* Enlace a Registro */}
        <p className="mt-6 text-sm text-slate-600 text-center"> ¿No tienes cuenta?{' '}
          <Link to="/Registrate" className="text-sky-600 font-semibold hover:text-sky-700 transition-colors"> Regístrate </Link>
        </p>

      </section>
    </div>
  );
}

export default Login;