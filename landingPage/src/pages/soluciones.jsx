import Card from '../components/card'
import dataSoluciones from '../data/dataSoluciones'


function Soluciones (){

    return(
        <section className="p-4 m-4 " id="Soluciones">
            <h2 className="font-semibold text-4xl text-center pb-10 pt-10">Soluciones</h2>
            <div className="grid grid-cols-2 gap-4  ">
                {dataSoluciones.map(item =>(
                    <Card key={item.id} 
                        titulo={item.titulo} 
                        texto={item.texto} 
                        imagen={item.imagen}  />))
                }
            </div>
            

            <p className="text-center text-2xl font-medium p-20  bg-sky-900 text-white rounded-2xl mt-4 " >"Inventra puede transformar tus operaciones de almacén. Con una interfaz minimalista y facil de usar y dar seguimiento preciso de stock ."</p>
        </section>
    )
}

export default Soluciones;