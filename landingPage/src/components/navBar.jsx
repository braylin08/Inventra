import BotonesEnlace from '../components/botones'


function NavBar() {
    return (
        <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
            {/* Brand Logo */}
            <p className="font-bold text-xl text-slate-900 tracking-tight">Inventra</p>
            
            {/* Links de Navegación */}
            <div className="flex gap-6 text-sm font-medium text-slate-600">
                <BotonesEnlace nombre="Inicio" href="#inicio" className="hover:text-blue-600 transition-colors"/>
                <BotonesEnlace nombre="Características" href="#Caracteristica" className="hover:text-blue-600 transition-colors"/>
                <BotonesEnlace nombre="Soluciones" href="#Soluciones" className="hover:text-blue-600 transition-colors"/>
                <BotonesEnlace nombre="Precios" href="#Precios" className="hover:text-blue-600 transition-colors"/>
                <BotonesEnlace nombre="Testimonios" href="#Testimonios" className="hover:text-blue-600 transition-colors"/>
            </div>

            {/* Acciones */}
            <div className="flex items-center gap-3 text-sm font-medium">
                <BotonesEnlace nombre="Iniciar Sesión"  href="#login" className="px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors border-2" />
                <BotonesEnlace nombre="Registrate" href="#registrate" className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm" />
            </div>

        </nav>
    )
}

export default NavBar;