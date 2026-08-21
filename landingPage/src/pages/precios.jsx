import PreciosCard from '../components/precioCard';
import dataPrecio from '../data/dataPrecio';

function Precios (){

    return(
        <section id="Precios">
            <h2 className="text-4xl text-center font-semibold p-4">precios</h2>
            <div className="grid grid-cols-3 gap-2 p-4 ">
                {dataPrecio.map(item =>(            
                    <PreciosCard key={item.id} 
                    titulo={item.titulo} 
                    precio={item.precio}
                    recomendado={item.recomendado}
                    descripcion={item.descripcion}
                />) )}
            </div>

        </section>

    )
}

export default Precios;