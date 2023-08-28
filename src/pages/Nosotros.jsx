import usimg from "../assets/somosticlean2.jpg";
import vitaImg from "../assets/VITALIMPLOGO.png";
import tifitImg from "../assets/TIFITLOGO.png";
import farmaImg from "../assets/Logo.png";
import misionimg from "../assets/Visionv1.jpg"
import visionimg from "../assets/Misionv1.jpg"

const Nosotros = () => {
  return (
    <div className='pt-20 md:mx-32 sm:mx-auto bg-white'>
          <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto sm:text-center lg:max-w-2xl">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                  <p className="bg-green-500 inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    Soluciones Efectivas
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  Somos TI Clean & Business  
                </h2>
                <p className="text-base text-gray-700 md:text-lg sm:text-sm">
                Nos diferenciamos por nuestra atención al detalle y por el uso de productos y equipos de limpieza de última generación que garantizan resultados impecables brindando asi la solución mas efectiva para tu empresa o negocio.
                </p>
              </div>
              <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                  src={usimg}
                  alt="Ti Clean & Business"
                  height={500}
                  width={500}
                />
              </div>
              <p className="font-light text-left text-gray-700">
              Valoramos profundamente la confianza que nuestros clientes depositan en nosotros y nos esforzamos por superar sus expectativas en cada interacción. Nuestro compromiso con la satisfacción del cliente nos impulsa a ofrecer un servicio excepcional, con una comunicación abierta y transparente en todo momento. Nos enorgullece establecer relaciones duraderas con nuestros clientes, convirtiéndonos en su socio confiable en todas sus necesidades de limpieza.
      <br></br>
      Además, nos comprometemos con la sostenibilidad y el cuidado del medio ambiente. Implementamos prácticas responsables en nuestras operaciones y utilizamos productos y métodos de limpieza ecológicos siempre que sea posible. Estamos comprometidos a contribuir al desarrollo de comunidades más limpias y saludables.

      Explora nuestros servicios y descubre cómo podemos ayudarte a mantener tus espacios limpios, frescos y relucientes. Estamos listos para abordar cualquier desafío de limpieza y superar tus expectativas.
              </p>             
            </div>
          </div>

           {/* Mision y Vision */}

           <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                <div className="relative lg:w-1/2">
                  <img
                    src={misionimg}
                    alt="Misión"
                    className="object-cover w-full lg:absolute h-80 lg:h-full"
                  />
                  <svg
                    className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                    viewBox="0 0 20 104"
                    fill="currentColor"
                  >
                    <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                  
                  <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                    Misión
                  </h5>
                  <p className="mb-5 text-gray-800">
                  Exceder las expectativas y necesidades de cada uno de nuestros clientes, ofreciendo servicios y productos de calidad, permitiendo con ello minimizar el costo del capital, protegiendo la inversión para la toma de decisiones. 
                  Nos esforzamos por crear entornos limpios, seguros y saludables, brindando un servicio excepcional y personalizado que contribuya al bienestar de las personas y su entorno. Estamos comprometidos con la excelencia, la confiabilidad y la sostenibilidad, buscando ser líderes en nuestra industria y marcar la diferencia en cada proyecto.
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                <div className="relative lg:w-1/2">
                  <img
                    src={visionimg}
                    alt="Misión"
                    className="object-cover w-full lg:absolute h-80 lg:h-full"
                  />
                  <svg
                    className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                    viewBox="0 0 20 104"
                    fill="currentColor"
                  >
                    <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                  
                  <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                    Visión
                  </h5>
                  <p className="mb-5 text-gray-800">
                  Mantener la preferencia así como ser la mejor alternativa en servicios de limpieza, de tecnología informática y seguridad, ofreciendo siempre productos de calidad y personal altamente capacitado y confiable, así como soluciones innovadoras a precios competitivos. Buscamos expandir nuestra presencia a nivel nacional, estableciendo relaciones duraderas con nuestros clientes basadas en la confianza mutua y la calidad de nuestros servicios. 
                  Aspiramos a ser referentes en innovación y sostenibilidad, adoptando prácticas y tecnologías vanguardistas para ofrecer soluciones eficientes y respetuosas con el medio ambiente.
                  </p>
                  
                </div>
              </div>
            </div>

        {/* valores */}
          <div>
          <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    Ti Clean & Business
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  Nuestros valores
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                Ser constante en el desarrollo de cada uno de nosotros con actitud positiva para brindar la mejor calidad
                </p>
              </div>
              
              <div className="flex max-w-screen-lg gap-8 sm:mx-auto">
                <div className="grid md:grid-cols-4 sm:grid-cols-1 justify-center">
                  <div className="flex p-4">
                    <div className="mr-4">

                      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-blue-800 w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                      </div>
                    </div>
                    <div className='place-self-center'>
                      <h6 className="mb-2 font-semibold leading-5">
                        Servicio
                      </h6>                    
                      
                    </div>
                  </div>
                  <div className="flex p-4">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-blue-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-blue-800 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      </div>
                    </div>
                    <div className='place-self-center'>
                      <h6 className="mb-2 font-semibold leading-5">
                      Compromiso
                      </h6>
                     
                    </div>
                  </div>
                  <div className="flex p-4">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-blue-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-blue-800 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                      </div>
                    </div>
                    <div className='place-self-center'>
                      <h6 className="mb-2 font-semibold leading-5">
                        Confianza
                      </h6>                      
                    </div>
                  </div>
                  <div className="flex p-4">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-blue-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-blue-800 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                      </div>
                    </div>
                    <div className='place-self-center'>
                      <h6 className="mb-2 font-semibold leading-5">
                       Responsabilidad
                      </h6>                      
                    </div>
                  </div>
                  <div className="flex p-4">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-blue-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-blue-800 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                      </div>
                    </div>
                    <div className='place-self-center'>
                      <h6 className="mb-2 font-semibold leading-5">
                       Trabajo en equipo
                      </h6>                      
                    </div>
                  </div>
                  <div className="flex p-4">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-blue-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-blue-800 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                      </div>
                    </div>
                    <div className='place-self-center'>
                      <h6 className="mb-2 font-semibold leading-5">
                        Lealtad
                      </h6>                      
                    </div>
                  </div>
                  <div className="flex p-4">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-blue-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-blue-800 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                      </div>
                    </div>
                    <div className='place-self-center'>
                      <h6 className="mb-2 font-semibold leading-5">
                       Honestidad
                      </h6>                      
                    </div>
                  </div>
                  <div className="flex p-4">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-blue-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-blue-800 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                      </div>
                    </div>
                    <div className='place-self-center'>
                      <h6 className="mb-2 font-semibold leading-5">
                        Respeto
                      </h6>                      
                    </div>
                  </div>
                  
                </div>

              </div>
            </div>
          </div>


  {/* marcas */}

          <h1 className='p-8 mb-8 font-bold text-4xl text-center'>
            Nuestras Marcas
          </h1>

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg">
              <div className='bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-300 via-teal-200 to-blue-400 p-4 rounded-lg bg-opacity-50 backdrop-blur-md hover:scale-125 transition-all transform-gpu'>
                <img
                  className="object-cover rounded-lg shadow"
                  src={vitaImg}
                  alt="VitaLimp"
                />
                <div className="flex flex-col justify-center mt-2">
                  <p className="text-lg font-bold">VitaLimp</p>
                  <p className="mb-4 text-xs text-blue-500">Venta de productos de limpieza</p>
                  <p className="text-sm tracking-wide font-light text-gray-800">
                    VitaLimp es una empresa dedicada a la venta y distribución de productos, articulos y utensilios de limpieza e higiene que vende
                    al mayoreo o menudeo, ofrece productos de calidad a bajo precio.
                  </p>
                </div>
              </div>
              <div className='bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-300 via-teal-200 to-blue-400 p-4 rounded-lg bg-opacity-50 backdrop-blur-md hover:scale-125 transition-all transform-gpu'>
                <img
                  className="object-cover rounded-lg shadow bg-white"
                  src={farmaImg}
                  alt="FarmaSana"
                />
                <div className="flex flex-col justify-center mt-2">
                  <p className="text-lg font-bold">TI Clean & Business</p>
                  <p className="mb-4 text-xs text-blue-500">Empresa de limpieza y seguridad</p>
                  <p className="text-sm tracking-wide font-light text-gray-800">
                  Empresa sustentable especializada en servicios de limpieza, comprometidos en crear ambientes sanos y áreas limpias, así como brindarle solución en servicios de Tecnología e Informática, Energías Renovables y de Sistemas de Seguridad. Nos adaptamos a diferentes sectores de manera profesional, enfocándonos siempre en el logro de los objetivos a través de bajos costos de operación y mejorando la rentabilidad del negocio, ofreciendo siempre servicios y soluciones de calidad de acuerdo a las necesidades de cada uno de nuestros clientes.
                  </p>
                </div>
              </div>
              <div className='bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-300 via-teal-200 to-blue-400 p-4 rounded-lg bg-opacity-50 backdrop-blur-md hover:scale-125 transition-all transform-gpu'>
                <img
                  className="object-cover rounded-lg shadow"
                  src={tifitImg}
                  alt="TI-FIT Gym"
                />
                <div className="flex flex-col justify-center mt-2">
                  <p className="text-lg font-bold">Gimnasio TI-FIT</p>
                  <p className="mb-4 text-xs text-blue-500">Gimnasio</p>
                  <p className="text-sm tracking-wide font-light text-gray-800">
                  En Tifit el objetivo es proporcionar un estilo de vida saludable implementando la innovación, tecnología y un servicio de excelencia para optimizar los resultados. De igual forma cuenta con personal altamente capacitado que llevaran de la mano a todos los clientes para lograr un cuerpo saludable.
                  </p>
                </div>
              </div>
              
             
             
            </div>
            <div className="text-center mt-16 p-4">
              <h2 className='font-light'>Si quieres conocer a fondo todos los servicios que ofrecemos dale click al boton de abajo.</h2>
              <a
                href="/servicios"
                className="bg-blue-500 hover:bg-blue-400 inline-flex items-center m-8 justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md"
              >
                Servicios
              </a>
            </div>
          </div>
    </div>
  )
};

export default Nosotros;
