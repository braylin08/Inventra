import pool from '../db/pool.js';


export async function crearUsuario(req,res){

    const nombreCompleto = req.body.nombreCompleto;
    const correoElectronico = req.body.correoElectronico;
    const password = req.body.password;
    
    try{
        const nuevoUsuario = await pool.query('INSERT INTO usuarios (nombre_completo, correo_electronico, password) VALUES ($1, $2, $3) RETURNING *', [nombreCompleto, correoElectronico ,password] );
            res.status(200).json(nuevoUsuario.rows[0])
        

    }catch(error){
        res.status(400).send('error al crear usuario')

    }




}