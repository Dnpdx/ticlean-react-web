import aboutImg from "../assets/teamwork.jpg";



const AboutSection = () => {
    return (
      <div className="lg:mx-16 sm:mx-auto">
          <div className="container flex p-8 bg-white">
          <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                  <div className="lg:pr-10">
                    <a
                      href="/nosotros"            
                      title="Nosotros"
                      className="inline-block mb-5"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 hover:bg-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
  
                      </div>
                    </a>
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                    ¿Quiénes Somos?
                      
                    </h5>
                    <p className="mb-6 font-light text-gray-900">
                    Somos una empresa sustentable especializada en servicios de limpieza, comprometidos en crear ambientes sanos y áreas limpias, así como brindarle solución en servicios de Tecnología e Informática, Energías Renovables y de Sistemas de Seguridad.
                    Nos adaptamos a diferentes sectores de manera profesional, enfocándonos siempre en el logro de los objetivos a través de bajos costos de operación y mejorando la rentabilidad del negocio, ofreciendo siempre servicios y soluciones de calidad de acuerdo a las necesidades de cada uno de nuestros clientes. 
                    </p>
                    <hr className="mb-5 border-gray-300" />
                    <div className="flex items-center space-x-4">
                      
                      <a
                        href="https://www.instagram.com/ti_negocios/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        <svg viewBox="0 0 30 30" fill="currentColor" className="h-6 hover:text-blue-500">
                          <circle cx="15" cy="15" r="4" />
                          <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.facebook.com/TINegocios/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 hover:text-blue-500">
                          <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                        </svg>
                      </a>
                      
                    </div>
                  </div>
                  <div>
                    <img
                      className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                      src={aboutImg}
                      alt="Nosotros"
                    />
                  </div>
                </div>
              </div>
            </div>
                  {/* POLITICA DE CALIDAD */}
                  <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                     
                      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                      
                        Nuestra politica de calidad
                      </h2>
                      <p className="text-base text-gray-700 md:text-md sm:text-sm">
                      En TI Clean & Business SA de CV, estamos comprometidos en ser la mejor solución de limpieza especializada y desinfección que logre comprender las necesidades de nuestros clientes,
                         a nivel industrial, comercial y de hospitales, cumpliendo con los requisitos legales, ejecutando acciones para la mejora continua de nuestros procesos con innovación, vanguardia y 
                         permita aumentar la satisfacción de nuestros clientes. <br></br> Cómo parte de la planeación estratégica de la organización y en apoyo a la política de calidad, en TI Clean Business SA de CV, nos hemos propuesto los siguientes objetivos de calidad:
                      </p>
                    </div>
                    <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                      <div className="duration-300 transform bg-white border-l-4 border-blue-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                          
                          <p className="text-sm text-gray-900">
                         Obtener en 2023 la certificación del sistema de gestión de calidad y mantenerla en 2024.
                          </p>
                        </div>
                      </div>
                      <div className="duration-300 transform bg-white border-l-4 border-blue-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                         
                          <p className="text-sm text-gray-900">
                           Brindar capacitación y adiestramiento al 100 % del personal de la compañía para el desarrollo de sus habilidades en 2023.
                          </p>
                        </div>
                      </div>
                      <div className="duration-300 transform bg-white border-l-4 border-blue-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                         
                          <p className="text-sm text-gray-900">
                          Mantener en 2023 el control de nuestros procesos dentro de los parámetros establecidos por la organización de acuerdo con sus respectivos indicadores de desempeño.
                          </p>
                        </div>
                      </div>
                      <div className="duration-300 transform bg-white border-l-4 border-blue-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                         
                          <p className="text-sm text-gray-900">
                          Mantener contratado al 90 % del personal de limpieza para no afectar el desarrollo de las operaciones ni del programa de trabajo de 2023.
                          </p>
                        </div>
                      </div>
                    </div>                    
                  </div>
                 
      </div>
    )
  };
  
  export default AboutSection;
  