import {crearProducto,mostrarTodosLosProductos} from '../controllers/productos.controller.js';
import express from 'express';

const routes = express.Router();


routes.post('/', crearProducto)
routes.get('/',  mostrarTodosLosProductos)

export default routes