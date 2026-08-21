import './App.css'
import Inicio from './pages/index.jsx'
import Caracteristicas from './pages/caracteristicas.jsx'
import Soluciones from './pages/soluciones.jsx'
import Precios from './pages/precios.jsx'
import Testimonios from './pages/testimonios.jsx'
import Footer from './components/footer'


import NavBar from './components/navBar.jsx'

function App() { 

  return(
    <>
      <NavBar/>
      <Inicio/>
      <Caracteristicas/>
      <Soluciones/>
      <Precios/>
      <Testimonios/>
      <Footer/>
    </>
  )
}

export default App
