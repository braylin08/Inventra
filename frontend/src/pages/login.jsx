import { Link, useNavigate} from 'react-router-dom'; 
import CampoEntrada from '../components/input.jsx';
import Boton from '../components/boton.jsx';
import logo from '../assets/logo-inventra.png';
import {useState} from 'react';


function Login() {

  const navigate = useNavigate()

const [formulario, setFormulario] = useState({
  correo_eletronico:'',
  contrasena:''
})

function manejarCambios(e){
  const {name,value} =e.target;
  setFormulario({...formulario,[name]:value});
}


function manejarEnvio(e) {
  e.preventDefault();
  if (!formulario.correo_eletronico || !formulario.contrasena) {
    alert("Por favor llena todos los campos");
    return;
  }else if (formulario.contrasena.trim === ''){
    console.log('no puede estar vacia la contrasena')
    alert('no puede estar vacia la contrasena')
  }

  // Agrega esto para confirmar visualmente en la consola que la función responde:
  console.log("Datos listos para enviar:", formulario);
  navigate('/dashboard/inicio')
  
  

}

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <section className="w-full max-w-md p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl flex flex-col items-center">
        
        <div className="mb-2">
          <img src={logo} alt="Logo Inventra" className="w-16 h-16 object-contain mx-auto" />
        </div>

        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Iniciar Sesión</h2>
        <p className="text-sm text-slate-500 mt-1 mb-6 text-center">Accede al panel de control</p>

  {/* Formulario */}
        <form id="formulario_login" onSubmit={manejarEnvio} className="w-full space-y-4 grid">

          <CampoEntrada 
            titulo="Correo Electrónico" 
            tipo="email" 
            placeholder="usuario@gmail.com" 
            onChange={manejarCambios} 
            value={formulario.correo_eletronico} 
            name='correo_eletronico' 
          />
          
          <CampoEntrada 
            titulo="Contraseña" 
            tipo="password" 
            placeholder="••••••••" 
            onChange={manejarCambios} 
            value={formulario.contrasena} 
            name="contrasena" 
          />

          <div className="flex items-center justify-between text-sm pt-1">

            <label className="flex items-center space-x-2 cursor-pointer text-slate-600">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 accent-sky-600"  />
              <span>Recordarme</span>
            </label>

            <Link to="/recuperar-contrasena" 
              className="text-sky-600 font-medium hover:text-sky-700 hover:underline transition-colors"> ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <div className=" text-center rounded text-white bg-sky-600 ">
            <Boton nombre="Iniciar Sesión"  />
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