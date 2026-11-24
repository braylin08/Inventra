import './App.css'
import Login from './pages/login';
import Registro from './pages/registro';
import Inicio from './pages/inicio'
import DashboardLayout from '../src/layouts/dashboardLayout';
import RecuperarContrasena from './pages/recuperarContrasena';
import Inventario from './pages/inventario'
import AgregarProducto from './pages/agregarProducto'
import {Routes, Route} from 'react-router-dom'; 

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Registrate" element={<Registro />} />
        <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="inicio" element={<Inicio />}/>
              <Route path="agregarProducto" element={<AgregarProducto />} />

            <Route path="inventario" element={<Inventario />} />

            {/*<Route path="reportes" element={<Reportes />} />
            <Route path="configuracion" element={<Configuracion />} /> */}
        </Route>
      </Routes>    
    </>
  )
}

export default App
