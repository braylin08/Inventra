import './App.css'
import Login from './pages/login';
import Registro from './pages/registro';
import {Routes, Route} from 'react-router-dom'; 

function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/Registrate" element={<Registro />} />
      {/* <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inventario" element={<Inventario />} /> */}
    </Routes>    </>
  )
}

export default App
