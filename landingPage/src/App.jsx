import './App.css'
import {Routes,Route} from 'react-router-dom'
import Inicio from './pages/index.jsx'
import Caracteristicas from './pages/caracteristicas.jsx'
import Soluciones from './pages/soluciones.jsx'
import Precios from './pages/precios.jsx'
import Testimonios from './pages/testimonios.jsx'

import NavBar from './components/navBar.jsx'

function App() {

  return(
    <>
      <NavBar/>

      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Caracteristica" element={<Caracteristicas />} />
        <Route path="/Soluciones" element={<Soluciones />} />
        <Route path="/Precios" element={<Precios />} />
        <Route path="/Testimonios" element={<Testimonios />} />


      </Routes>

    </>
  )
}

export default App
