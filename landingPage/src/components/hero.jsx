import BotonesEnlace from '../components/botones'
import imagenInicio from '../assets/img-inicio.jpg'

function Hero(){

    return (
        <section className="grid grid-cols-2 pt-20 m-4 p-2 backdrop-blur-md border border-slate-200">
           <section className="border  p-4" >
                <h1 className="text-3xl font-medium m-2">Gestion inteligente de tu inventario</h1>
                <p className="p-2 " >Optimiza tu cadena de suministro con visibilidad en tiempo real, automatización inteligente y decisiones basadas en datos. </p>
                <p className="p-2"><strong>Toma el control de tu inventario sin complicaciones</strong></p>
                <div className="flex gap-2 p-2">
                    <BotonesEnlace nombre="Solicitar Demo" href="/demo" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm" />
                    <BotonesEnlace nombre="Ver Planes" className="px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors border-2"/>
                </div>
           </section>
           <div className="border bg-center">
                <img src={imagenInicio} alt="imagen de inicio" className=" rounded-3xl " />
           </div>
        </section>
    );
}


export default Hero;