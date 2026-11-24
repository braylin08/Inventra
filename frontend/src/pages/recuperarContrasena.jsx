import { Link } from 'react-router-dom'; 
import CampoEntrada from '../components/input.jsx';
import Boton from '../components/boton.jsx';
import logo from '../assets/logo-inventra.png';



function RecuperarPassword (){
    return(
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <section className="w-full max-w-md p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl flex flex-col items-center">
               
                <div className="mb-2">
                    <img src={logo} alt="logo" className="w-16 h-16 object-contain mx-auto" />
                </div>

                <h2 className="text-2xl font-bold text-slate-800 tracking-tight">¿Olvidaste tu contraseña?</h2>
                <p className="text-sm text-slate-500 mt-1 mb-6 text-center">No te preocupes, dinos el correo electrónico asociado a tu cuenta y te enviaremos instrucciones para restablecerla.</p>
                
                <form action="" method="post" className="w-full space-y-4 grid">
                    <CampoEntrada titulo="correo eletronico" estiloInput="border rounded"/>

                    <div className="text-center rounded text-white bg-sky-600 ">
                        <Boton nombre="Enviar instruciones"/>
                    </div>

                    <p className="mt-6 text-sm text-slate-600 text-center">
                        <Link to="/Login" className="text-sky-600 font-semibold hover:text-sky-700 transition-colors tracking-tight"> Volver al iniciar de sesion</Link>
                    </p>
                </form>
            </section>
        </div>
    )
}

export default RecuperarPassword;