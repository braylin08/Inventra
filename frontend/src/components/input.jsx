function CampoEntrada({titulo , tipo = 'text', placeholder, estilosLabel, estiloInput}){


    return(
        < >
            <label htmlFor="" className={estilosLabel}>{titulo}</label>
            <input type={tipo} name="" id="" placeholder={placeholder} className={estiloInput}   />
        </>
    );
}

export default CampoEntrada;