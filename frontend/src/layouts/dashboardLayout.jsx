// layouts/DashboardLayout.jsx
import { Outlet } from 'react-router-dom';
import BarraLateral from './barraLateral.jsx';
import Barrahorizontal from './barrahorizontal.jsx';

function DashboardLayout() {
  return (
    <>
      <BarraLateral />
      <div className="ml-52">
        <Barrahorizontal />
        <main className="p-4">
          <Outlet />  {/* aquí se inserta Inicio, Inventario, Usuarios, etc. según la ruta */}
        </main>
      </div>
    </>
  );
}

export default DashboardLayout;