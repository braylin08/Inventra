import Boton from '../components/boton'
import { Link } from 'react-router-dom'; 

function AgregarInventario(){

    return(
            <section className="  ">
                <div className="p-2">
                    <h1 className="text-3xl  font-bold text-slate-800 tracking-tight">Agregar productos </h1>
                    <p className="">Registra un nuevo producto en el inventario</p>
                </div>


                <section className="">
                    <div className="p-2">
                        <h2 className="text-2xl font-bold text-slate-800 tracking-wide " >Informacion del producto</h2>
                        <p>Completa los datos del producto que deseas agregar</p>
                    </div>
                    <form action="" className="border p-2 rounded-lg">
                        <div className="grid grid-cols-2 gap-2 items-center justify-center p-2 " >
            
                            <label htmlFor="" className="tracking-widest font-semibold  grid p-2">Nombre del producto
                                <input type="text" name="" id="" className="border  p-1" />
                                
                            </label>

                            <label htmlFor="" className="tracking-widest font-semibold  grid p-2">Categoria
                                <input type="text" className="border p-1" />
                            </label> 

                            <label htmlFor="" className="tracking-widest font-semibold  grid p-2">Cantidad
                                <input type="number" name="" id=""  className="p-1 border"/>
                            </label>
                            
                            <label htmlFor="" className="tracking-widest font-semibold grid p-2">Precio
                                <input type="number" name="" id="" className="border p-1 " />
                            </label>
                        </div>

                    </form>

                    <div className="grid grid-cols-2 pt-4 gap-2">
                        <Boton nombre="Guardar producto " estilos=" p-2  text-white bg-sky-600 rounded-lg  hover:bg-sky-700 "  />  
                        <Link to="/dashboard/inicio" className=" p-2  text-white bg-gray-600 rounded-lg text-center hover:bg-red-700 ">Descartar</Link>
                  
                    </div>

                    
                </section>
            </section>
    )
}

export default AgregarInventario;