import BotonesEnlace from '../components/botones'
function PreciosCard({titulo,precio,descripcion=['texto desconocido'], recomendado=[""]}){

    return(
        <section className=" flex flex-col justify-between p-6 rounded-2xl backdrop-blur-md border border-slate-200   ">
            
                <div className="flex items-center justify-between mb-4 ">
                    <h3 className="text-xl font-semibold text-slate-800">{titulo}</h3>
                    <p className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-200">{recomendado}</p>
                </div>
                <div className="mb-6">
                    <p className="font-bold">{precio}</p>

                </div>                
                <ul className="p-4" >
                    {descripcion.map((linea, i) => (
                       <li key={i} className="flex items-start text-sm text-slate-600 gap-2">
                            <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{linea}</span>
                        </li>
                    ))}
                </ul>
                <div className="pt-4 border-t border-slate-100">
                    <BotonesEnlace nombre={"Elegir "+ titulo} className=" px-32 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm" />

                </div>


               


        </section>
    );
}


export default PreciosCard;