import mantoneImg from "../../../assets/mante1.jpg";
import manttwoImg from "../../../assets/mante2.jpg";


const MantenimientoPage = () => {
  return (
    <div className='pt-32 md:mx-16 pb-16 sm:mx-auto'>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-md px-4 md:px-8">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">Servicios de Mantenimiento</h1>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            Ofrecemos servicios de mantenimiento general dentro de nuestros servicios a todo tipo de inmuebles.  
            </p>
           
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            Brindamos mantenimiento en general de edificios, oficinas, naves, locales, casa habitación y otros, tanto en sus edificaciones como en sus instalaciones eléctricas, electromecánicas, hidráulicas y servicios generales.
            </p>

            <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Tipos de servicios</h2>
            <div className="relative my-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:my-8">
              <img src={mantoneImg}  alt="Certificaciones" className="h-full w-full object-cover object-center" />
            </div>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">Nuestros servicios de mantenimiento se dividen en las siguientes categorias:</p>

            <ul className="mb-6 list-outside list-disc text-gray-500 sm:text-lg md:mb-8">
              <li className='py-4'>Mantenimiento de inmuebles: Ofrecemos mantenimiento a distintos tipos de inmueble tanto en la parte eléctrica, hidráulica y mecánicas.</li>
              <li className='py-4'>Jardineria: Obra especializada en diseñar, establecer y dar mantenimiento, a toda clase de áreas verdes y al equipo relacionado con las mismas; especialmente servicios de jardinería, plantaciones, poda de árboles de ornato o frutales; decoración de jardines; diseño y construcción de viveros y de sistemas de riego. </li>
              <li className='py-4'>Equipos de comunicaciones: Brindamos una reparación especializada y tambien mantenimiento en general a radios de onda corta y larga, teléfonos móviles y fijos.</li>
              <li className='py-4'>Sistemas de seguridad: Reparamos y damos mantenimiento a cámaras de seguridad, videoporteros, cercas eléctricas y nodos de red.</li>
              <li className='py-4'>Equipos de Cómputo: Damos mantenimiento preventivo y correctivo a computadoras y otros aparatos relacionados a la instalacion de camaras de vigilancia y a su vez damos soporte en temas de hardware o software.</li>
            </ul>

            <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">Los servicios de mantenimiento son fundamentales para asegurar el buen funcionamiento, prolongar la vida útil y garantizar la seguridad de los equipos, sistemas o instalaciones. Proporcionan ventajas como una mayor confiabilidad, ahorro de costos, seguridad mejorada, mejor rendimiento y cumplimiento normativo.</blockquote>

            <div className="relative my-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:my-8">
              <img src={manttwoImg}  alt="Certificaciones" className="h-full w-full object-cover object-center" />
            </div>

            {/* <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Features</h2> */}

            <p className="text-gray-500 sm:text-lg">Contacta con nosotros hoy mismo para obtener más información y solicitar una cotización personalizada.</p>

            <div className='grid justify-items-center'>
              <a href="/contacto">
              <button className=' bg-blue-500 hover:bg-blue-400 text-white rounded-lg p-4 mt-4'>
                Cotización
              </button>              
              </a>              
            </div>
          </div>
        </div>      
    </div>
  )
};

export default MantenimientoPage;