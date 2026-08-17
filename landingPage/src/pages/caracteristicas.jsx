import CaracteristicaCard from '../components/caracterisiticaCard'
import datos from '../data/data.js';
function Caracteristicas (){

    return(
        <section>
            <h2 className="text-center text-2xl font-medium" id="#Caracteristica">Caracteristicas</h2>
            {datos.map(item=>(<CaracteristicaCard 
                key={item.id}
                titulo={item.titulo}
                texto={item.texto}
                />
            ))}
        </section>
    )
}

export default Caracteristicas;