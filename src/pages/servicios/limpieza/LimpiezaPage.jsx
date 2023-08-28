
import certificacionesImg from "../../../assets/Certificaciones.png";
import limponeImg from "../../../assets/limp1.jpg";
import limptwoImg from "../../../assets/limp2.jpg";


const LimpiezaPage = () => {
  return (
    <div className='pt-32 md:mx-16 pb-16 sm:mx-auto'>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-md px-4 md:px-8">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">Servicios de Limpieza</h1>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            Contamos con distintas certificaciones asegurando que nuestros procesos son profesionales y efectivos. 
            </p>
            <div className="relative my-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:my-8">
              <img src={certificacionesImg}  alt="Certificaciones" className="h-full w-full object-cover object-center" />
            </div>
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            Nuestro personal esta capacitado y experimentado en diversas técnicas de limpieza. Tienen conocimientos específicos sobre los productos y equipos adecuados para cada tipo de superficie o entorno, lo que garantiza resultados óptimos y eficientes.<br /><br />

            Nuestros servicios de limpieza profesionales pueden adaptarse a las necesidades específicas de cada cliente. Pueden establecer programas de limpieza regulares o realizar limpiezas puntuales según los requerimientos y horarios establecidos. Esta flexibilidad permite ajustar el servicio a las necesidades individuales, ya sea en términos de frecuencia, alcance o tipo de limpieza requerida.
            </p>

            <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Tipos de servicios</h2>
            <div className="relative my-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:my-8">
              <img src={limptwoImg}  alt="Servicios de Limpieza" width={600} height={600} className="h-full w-full object-cover object-center" />
            </div>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">En esta seccion describimos cada uno de los distintos tipos de servicios de limpieza que manejamos.</p>

            <ul className="mb-6 list-outside list-disc text-gray-500 sm:text-lg md:mb-8">
              <li className='py-4'>Limpieza industrial: Se enfoca en la limpieza de instalaciones y equipos utilizados en entornos industriales, como fábricas, plantas de producción y almacenes. Implica la eliminación de residuos, lubricación y limpieza de maquinaria, limpieza de áreas de trabajo y gestión de residuos peligrosos.</li>
              <li className='py-4'>Limpieza comercial: Se refiere a la limpieza de espacios comerciales, como oficinas, tiendas, restaurantes y hoteles. Además de las tareas básicas de limpieza, puede incluir la limpieza de áreas comunes, vidrios, alfombras, mobiliario y el mantenimiento de baños. La limpieza comercial se realiza tanto en horarios de trabajo como fuera de ellos, para minimizar las interrupciones.</li>
              <li className='py-4'>Limpieza de vidrios y cristales: Limpieza de ventanas y cristales a cualquier altura, en interiores y exteriores.</li>
              <li className='py-4'>Limpieza de alfombras y tapicerías: Este tipo de limpieza se concentra en la eliminación de manchas, polvo y suciedad de alfombras, tapetes y muebles tapizados. </li>
              <li className='py-4'>Limpieza post-obras: Servicios especializados de limpieza de terminación de obra, lavado y desmanchado de pisos, paredes, muros, ventanales.</li>
              <li className='py-4'>Sanitización y deodorización: Servicios especializados de desinfección y deodorización de baños en escuelas, restaurantes, hoteles, gimnasios, centros deportivos, mercados públicos, centro comerciales, naves industriales y otros.</li>
              <li className='py-4'>Fumigación: Realizamos servicios de fumigación para controlar y eliminar plagas de insectos, roedores, hongos y otras formas de vida no deseadas que pueden afectar la salud humana, cultivos agrícolas o el medio ambiente.</li>
            </ul>

            <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">Un entorno industrial limpio y ordenado mejora la imagen y la reputación de una empresa. Esto puede generar confianza entre los clientes, proveedores y empleados, lo que puede resultar en una mayor retención de clientes, relaciones comerciales sólidas y un atractivo para atraer y retener talento.</blockquote>

            <div className="relative my-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:my-8">
              <img src={limponeImg}  alt="Trabajador de limpieza" className="h-full w-full object-cover object-center" />
            </div>

            {/* <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Features</h2> */}

            <p className="text-gray-500 sm:text-lg">Contacta con nosotros hoy mismo para obtener más información y solicitar una cotización personalizada. Estamos ansiosos por convertirnos en tu aliado confiable en materia de limpieza.</p>

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
}

export default LimpiezaPage;
