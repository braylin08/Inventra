import express from 'express';
import cors from 'cors';
import producto from '../backend/routes/productos.routes.js';
import usuario from '../backend/routes/usuarios.routes.js';
import pool from '../backend/db/pool.js';




const puerto =3000;
const app = express();
app.use(express.json());

app.use(cors())

app.use('/api/productos',producto);
app.use('/api/usuarios',usuario);

//verificar conexion con base de datos 
pool.query('SELECT NOW()' )
    .then(()=>{console.log("conexion con posgresql exitosa ✅")})
    .catch(error => console.log('error en la conexion a PosgreSQL ❌',error))

app.get((req,res) => {
    res.status(404).send('Error 404, no se encontro la ruta ');
})


app.listen(puerto, ()=>{
    console.log(`Servidor corriendo en el puerto", ${puerto} ,'✔`)
})