import BotonesEnlace from '../components/botones'

function Testimonios (){

    return(
        <section id="Testimonios" className="text-center m-4 backdrop-blur-md border border-slate-200 bg-sky-900 pt-10 pb-10 text-white rounded-2xl">
            <h2 className="font-medium text-2xl p-2" >¿Listo para optimizar su logica?</h2>
            <p className="p-2" >Integre Inventra en su flujo de trabajo y experimente la eficiencia operativa basada en datos.</p>
            <div className="justify-center self-center text-center p-5">
                <BotonesEnlace nombre="Registrate ahora" href="#" className="  px-10 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm" />

            </div>
        </section>
    )
}

export default Testimonios;