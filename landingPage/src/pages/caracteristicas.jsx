import Card from '../components/card.jsx';
import datos from '../data/data.js';
function Caracteristicas (){

    return(
        <section className=" pt-15 pb-5 " id="Caracteristica">
            <h2 className="text-center text-4xl font-semibold pt-5 pb-5" id="#Caracteristica">Caracteristicas</h2>
            <div className="grid grid-cols-3 gap-4 p-4">
                {datos.map(item=>(<Card 
                    key={item.id}
                    titulo={item.titulo}
                    texto={item.texto}
                    imagen={item.imagen}
                    />
                ))}
            </div>
        </section>
    )
}

export default Caracteristicas;