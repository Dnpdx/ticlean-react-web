import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LimpiezaPage from './pages/servicios/limpieza/LimpiezaPage';
import MantenimientoPage from './pages/servicios/mantenimiento/MantenimientoPage';
import SeguridadPage from './pages/servicios/seguridad/SeguridadPage';
import TecnologiaPage from './pages/servicios/tecnologia/TecnologiaPage';


function App() {


  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/servicios/limpieza" element={<LimpiezaPage />} />
              <Route path="/servicios/mantenimiento" element={<MantenimientoPage />} />
              <Route path="/servicios/seguridad" element={<SeguridadPage />} />
              <Route path="/servicios/tecnologia" element={<TecnologiaPage />} />            

              <Route path="/contacto" element={<Contacto />} />
        </Routes> 
        <Footer />
    </BrowserRouter>
  )
}

export default App;
