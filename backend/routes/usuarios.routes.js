import {crearUsuario} from '../controllers/usuarios.controller.js'
import express from 'express';

const routes = express.Router();


routes.post('/', crearUsuario)
// routes.get('/',  mostrarTodosLosProductos)

export default routes