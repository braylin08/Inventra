import iconos from './icondata'


function BotonBarra({nombre}){

    
    
    return(
            <button className=" rounded-lg p-2 bg-gray-300 border border-gray-200 hover:bg-sky-500 cursor-pointer 
            
            ">{iconos[nombre]} </button>
            
    );
}


export default BotonBarra;