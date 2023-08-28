
import camImg from "../../../assets/cam1.jpg";
import cercaImg from "../../../assets/cerca.jpeg";

const SeguridadPage = () => {
  return (
    <div className='pt-32 md:mx-16 pb-16 sm:mx-auto'>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-md px-4 md:px-8">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">Servicios de Seguridad</h1>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            Ofrecemos la instalacion de distintos sistemas de seguridad para proteger tu patrimonio 
            </p>
           
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            Los sistemas de seguridad y vigilancia son herramientas y tecnologías diseñadas para proteger y resguardar tanto propiedades como personas. Estos sistemas pueden incluir una variedad de dispositivos y equipos, desde cámaras de vigilancia y sistemas de detección de intrusos hasta alarmas y sistemas de control de acceso.
            </p>

            <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Tipos de servicios</h2>
            <div className="relative my-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:my-8">
              <img src={camImg}  alt="Certificaciones" className="h-full w-full object-cover object-center" />
            </div>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">Nuestros servicios de seguridad se dividen en las siguientes categorias:</p>

            <ul className="mb-6 list-outside list-disc text-gray-500 sm:text-lg md:mb-8">
              <li className='py-4'>Camaras de seguridad: Venta, Instalación y soporte a sistemas de camaras de vigilancia para tu empresa o negocio.</li>
              <li className='py-4'>Seguridad perimetral: Suministro e instalación de cercas eléctricas para protección de su hogar o instalaciones corporativas. </li>
             
            </ul>

            <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">
              Los sistemas de seguridad y vigilancia brindan una protección efectiva, disuaden a los delincuentes, detectan amenazas tempranamente, permiten una respuesta rápida a emergencias, protegen la propiedad, recopilan pruebas y ofrecen la posibilidad de monitoreo remoto. Estas ventajas contribuyen a crear entornos más seguros y protegidos tanto para propiedades como para las personas que las ocupan.
            </blockquote>

            <div className="relative my-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:my-8">
              <img src={cercaImg}  alt="Certificaciones" className="h-full w-full object-cover object-center" />
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
}

export default SeguridadPage;