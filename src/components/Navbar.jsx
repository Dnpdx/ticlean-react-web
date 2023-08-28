import {useState} from 'react';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid';


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)


  return (
    <header className="bg-white w-full z-[150] border-b-4 border-blue-400 fixed">
        <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img width={200} height={100}  src="/src/assets/Logo.png" alt="TI Clean Logo" />                   
                </a>               
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <Bars3Icon className='w-5' /> : <XCircleIcon className='w-5' />}
                
                </div>
                <div className="hidden w-full md:block md:w-auto" >
                    <ul className="font-medium flex flex-col items-baseline p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                        <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Inicio</a>
                        </li>
                        <li>
                        <a href="/nosotros" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Nosotros</a>
                        </li>
                        <li>
                        <a href="/servicios" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Servicios</a>
                        </li>
                        
                        <li className='bg-blue-500 hover:bg-blue-400 rounded-xl p-4'>
                        <a href="/contacto" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contacto</a>
                        </li>
                        <li className='bg-lime-500 hover:bg-lime-400 rounded-xl p-4'>
                        <a href="http://nominas.tinegocios.com.mx/" target="_blank" rel='noreferrer' className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Iniciar sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8 place-items-center text-center'}>
                <li className='border-b-2 border-zinc-300 w-full'><a onClick={handleClose} href="/" >Inicio</a></li>
                <li className='border-b-2 border-zinc-300 w-full'><a onClick={handleClose} href="/nosotros" >Nosotros</a></li>
                <li className='border-b-2 border-zinc-300 w-full'><a onClick={handleClose} href="/servicios" >Servicios</a></li>
                
                {/* <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} href="/vacantes" >Vacantes</Link></li> */}

                <div className='flex flex-col my-4'>
                
                    <button className='bg-blue-400 px-8 py-3'> <a onClick={handleClose} href="/contacto" >Contacto</a> </button>
                </div>
                <div className='flex flex-col my-4'>
                
                    <button className='bg-blue-400 px-8 py-3'> <a onClick={handleClose} href="http://nominas.tinegocios.com.mx/" >Iniciar sesión</a> </button>
                </div>
            </ul>
        </nav>
    </header>

  )
};

export default Navbar;
