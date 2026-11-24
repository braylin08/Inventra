import TarjetaCard from '../components/tarjetas'
// import Boton from '../components/boton.jsx';
import BarraLateral from '../layouts/barraLateral.jsx'
import ActividadesRecientes from '../components/actividadesReciente.jsx'
import { Link } from 'react-router-dom'; 



function Inicio(){



    return(
       <div className=" flex-1 p-4 ">
        <section className="ml-4">
            <BarraLateral/> 
                    <p className="text-sm font-medium text-slate-500">Bienvenido, Braylin Acevedo</p>
                    <h1 className="text-3xl font-bold text-slate-800 tracking-tight" >Panel de Control</h1>
                    
                    <section className="flex justify-between mb-4 ">
                    <p>Resumen de productos y inventario</p>
                

                    <div className="">
                        <Link to="/dashboard/agregarProducto" className=" hover:bg-sky-700 w-full p-2 text-white bg-sky-600 rounded-lg ">Agregar producto</Link>


                    </div>
                </section>

                {/* tarjetas  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
                <TarjetaCard titulo='Total de Productos' cantidad={5000} />
                <TarjetaCard titulo='Ordenes Activas' />
                <TarjetaCard titulo='Stock Criticos'/>
                <TarjetaCard titulo='Valor Inventario' />
            </div>
            </section>

            <section className="text-center pt-10">
                <h2 className="font-medium text-xl m-4" >Actividad Reciente</h2>
                <ActividadesRecientes/>
            </section>

       </div>




    )
}


export default Inicio;