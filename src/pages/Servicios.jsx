
import manteImg from "../assets/work.jpg";
import limpImg from "../assets/limpieza.jpg";
import seguImg from "../assets/seguridad.jpg";
import tecnoImg from "../assets/tecnologia.jpg";

const Servicios = () => {
  return (
    <div className='pt-32 md:mx-32 sm:mx-auto'>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
             
              <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Nuestros Servicios</h2>

                <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                Nuestro principal trabajo es brindar servicios especializados de limpieza, sanitizacion y desinfección de áreas públicas y privadas como empresas, negocios u oficinas. Tambien brindamos soluciones en materia de seguridad, mantenimiento y tecnologia.
                </p>
              </div>
              

              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
              <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                    <a href="/servicios/limpieza" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                      <img src={limpImg}
                      alt="Mantenimiento" 
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      width={0}
                      height={0}
                      />
                    </a>

                    <div className="flex flex-col gap-2 p-4 lg:p-6">
                      <span className="text-sm text-gray-400">Soluciones Efectivas</span>

                      <h2 className="text-xl font-bold text-gray-800">
                      Limpieza
                      </h2>

                      <p className="text-gray-500 py-2">
                      Ofrecemos servicios de desinfeccion, limpieza y sanitizacion a distintos tipos de inmuebles ya sean privados o publicos como empresas, oficinas, escuelas, étc. Nos adaptamos a su presupuesto dependiendo el tipo de limpieza que requiera.
                      </p>

                      <div className='place-items-center'>
                        <a href="/servicios/limpieza" className="font-semibold text-white bg-blue-600 hover:bg-blue-400 transition duration-100 p-2 rounded-lg">Leer más</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                    <a href="/servicios/seguridad" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                      <img src={seguImg}
                      alt="Mantenimiento" 
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      width={0}
                      height={0}
                      />
                    </a>

                    <div className="flex flex-col gap-2 p-4 lg:p-6">
                      <span className="text-sm text-gray-400">Soluciones Efectivas</span>

                      <h2 className="text-xl font-bold text-gray-800">
                      Seguridad
                      </h2>

                      <p className="text-gray-500 py-2">
                      Nuestros servicios de instalación de cámaras de seguridad, puertas eléctricas y sistemas de seguridad están diseñados para brindarle la tranquilidad que se merece, mantenga seguro su patrimonio con nuestros servicios especializados.
                      </p>

                      <div className='place-items-center'>
                        <a href="/servicios/seguridad" className="font-semibold text-white bg-blue-600 hover:bg-blue-400 transition duration-100 p-2 rounded-lg">Leer más</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                    <a href="/servicios/tecnologia" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                      <img src={tecnoImg}
                      alt="Mantenimiento" 
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      width={0}
                      height={0}
                      />
                    </a>

                    <div className="flex flex-col gap-2 p-4 lg:p-6">
                      <span className="text-sm text-gray-400">Soluciones Efectivas</span>

                      <h2 className="text-xl font-bold text-gray-800">
                      Tecnologia
                      </h2>

                      <p className="text-gray-500 py-2">
                      En un mundo empresarial en constante evolución, la tecnología es la clave para el crecimiento y la eficiencia. En TI Clean & Business, entendemos que las empresas modernas requieren soluciones tecnológicas innovadoras para prosperar en un mercado altamente competitivo.
                      </p>

                      <div className='place-items-center'>
                        <a href="/servicios/tecnologia" className="font-semibold text-white bg-blue-600 hover:bg-blue-400 transition duration-100 p-2 rounded-lg">Leer más</a>
                      </div>
                    </div>
                  </div>
               
                
               
                <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                    <a href="/servicios/mantenimiento" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                      <img src={manteImg}
                      alt="Mantenimiento" 
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      width={0}
                      height={0}
                      />
                    </a>

                    <div className="flex flex-col gap-2 p-4 lg:p-6">
                      <span className="text-sm text-gray-400">Soluciones Efectivas</span>

                      <h2 className="text-xl font-bold text-gray-800">
                      Mantenimiento
                      </h2>

                      <p className="text-gray-500 py-2">
                      Mantenimiento en general de edificios, oficinas, naves, locales y otros, tanto en sus edificaciones como en sus instalaciones eléctricas, electromecánicas, hidráulicas y servicios generales.
                      </p>

                      <div className='place-items-center'>
                        <a href="/servicios/mantenimiento" className="font-semibold text-white bg-blue-600 hover:bg-blue-400 transition duration-100 p-2 rounded-lg">Leer más</a>
                      </div>
                    </div>
                  </div>
               
              </div>
            </div>
          </div>
    </div>
  )
};

export default Servicios;
