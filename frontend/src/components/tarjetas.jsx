function TarjetaCard({titulo,cantidad=0}){


    return(
        <section className="border rounded-lg ">
            <img src="" alt="logo" />
            <h2>{titulo}</h2>
            <p>{cantidad}</p>
        </section>

    );
}


export default TarjetaCard;