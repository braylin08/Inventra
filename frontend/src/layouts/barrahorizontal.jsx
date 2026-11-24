import BotonBarra from './botonBarra'

function Barrahorizontal(){

    return(
        <nav className=" bg-gray-100 text-slate-900 sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
           
            <form className=" flex gap-4 items-center ">
                
                <input className="border rounded-lg p-1  " type="search" name="" id="" placeholder="Pedidos/Productos" />

                <div className="p-2  rounded-lg bg-gray-300 hover:bg-sky-600 hover:text-white ">
                    <button type="submit">Buscar</button>
                </div>
            </form>

        
            <div className="flex gap-4">
                <BotonBarra  nombre='IconoNotificaciones'/>
                <BotonBarra nombre='IconoAyuda'/>
                <BotonBarra nombre='IconoConfiguracion'/>
                

            </div>

        </nav>
    );
}

export default Barrahorizontal;