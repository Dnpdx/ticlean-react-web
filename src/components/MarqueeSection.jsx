
import oneImage from "../assets/1.png";
import twoImage from "../assets/2.png";
import threeImage from "../assets/3.png";
import fourImage from "../assets/4.png";
import fiveImage from "../assets/5.png";
import sixImage from "../assets/6.png";
import Marquee from "react-fast-marquee";


const MarqueeSection = () => {
  return (
     <div className="grid grid-cols-1 sm:mx-auto md:mx-32">
     <h1 className=" text-4xl font-bold text-center m-8 p-8">Nuestros Clientes</h1>
    <Marquee className="py-8 grid grid-cols-1 justify-center items-center" >
        
             <img
                    className="px-8 h-[100] w-[70]"
                    src={oneImage}
                    alt="Grupo Modelo"
                    
               />
                 <img
                    className="px-8 h-[100] w-[70]"
                    src={twoImage}
                    alt="Ayuntamiento de Salina Cruz" 
                   
               /> 
                <img
                    className="px-8 h-[100] w-[70]"
                    src={threeImage}
                    alt="Bachoco"  
                                   
               /> 
                 <img
                    className="px-8 h-[100] w-[70]"
                    src={fourImage}
                    alt="Banorte"
                                     
               /> 
                  <img
                    className="px-8 h-[100] w-[70]"
                    src={fiveImage}
                    alt="Estafeta"  
                                   
               /> 
                <img
                    className="px-8 h-[100] w-[70]"
                    src={sixImage}
                    alt="Gobierno de Chiapas"  
                                   
               />
    </Marquee>
     </div>
  )
};

export default MarqueeSection;
