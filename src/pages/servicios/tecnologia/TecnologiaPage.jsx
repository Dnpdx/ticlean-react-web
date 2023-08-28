import tecnooneImg from "../../../assets/tecno1.jpg";
import tecnotwoImg from "../../../assets/tecno2.jpg";

const TecnologiaPage = () => {
  return (
    <div className='pt-32 md:mx-16 pb-16 sm:mx-auto'>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-md px-4 md:px-8">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">Servicios de Tecnología</h1>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            Proporcionamos diversas soluciones tecnológicas e informáticas para nuestros clientes que incluyen desde la domótica hasta la instalación de paneles solares.

            </p>
           
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            Nuestras soluciones tecnológicas ayudan a mejorar la eficiencia del negocio o inmueble y le permiten aprovechar mejor el tiempo en otras actividades. </p>

            <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Tipos de servicios</h2>
            <div className="relative my-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:my-8">
              <img src={tecnooneImg}  alt="Certificaciones" className="h-full w-full object-cover object-center" />
            </div>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">Nuestros servicios de tecnología se dividen en las siguientes categorias:</p>

            <ul className="mb-6 list-outside list-disc text-gray-500 sm:text-lg md:mb-8">
              <li className='py-4'>Domotica: Venta, Instalación y soporte a sistemas de camaras de vigilancia para tu empresa o negocio.</li>
              <li className='py-4'>Redes estructuradas: Instalación de redes informáticas cableadas, inalámbricas y de fibra óptica. </li>
              <li className='py-4'>Telefonía: Instalación y suministro de servicios de telefonía (voz y datos).</li>
              <li className='py-4'>Paneles solares: Compra, venta e instalación de paneles solares. </li>
              <li className='py-4'>Equipos de cómputo: Venta y mantenimiento de equipos de cómputo.</li>
              <li className='py-4'>Parques eólicos: Servicio de ingenieria de operacion y mantenimiento preventivo y correctivo en Aerogeneradores en parques eólicos.</li>
             
            </ul>

            <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">
              Las soluciones tecnológicas ofrecen una serie de servicios y funcionalidades que mejoran la comodidad, eficiencia energética, seguridad y gestión del hogar, empresa o negocio.
            </blockquote>

            <div className="relative my-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:my-8">
              <img src={tecnotwoImg}  alt="Certificaciones" className="h-full w-full object-cover object-center" />
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

export default TecnologiaPage;