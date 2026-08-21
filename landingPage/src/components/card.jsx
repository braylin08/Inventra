function Card({titulo,texto,imagen} ){

    return(

        <section className="  p-4 backdrop-blur-md border border-slate-200 rounded-2xl ">
            <div className=" text-center  ">
                <img src={imagen} className="size-20 p-2 bg-center mx-auto" alt="icono" />
                <h2 className="text-xl font-semibold text-slate-800">{titulo}</h2>
                <p className="text-sm text-center text-slate-600 p-2 ">{texto}</p>
            </div>
        </section>
    );
} 


export default Card;