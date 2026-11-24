function CampoEntrada({titulo , tipo = 'text', name, placeholder, estilosLabel, estiloInput, value, onChange}){



    return(
        < >
            <label htmlFor={titulo} className={estilosLabel}>{titulo}</label>
            <input 
                type={tipo} 
                name={name} 
                id={titulo}  
                required  
                placeholder={placeholder} 
                className={estiloInput}
                value={value}
                onChange={onChange}   
            />
        </>
    );
}

export default CampoEntrada;