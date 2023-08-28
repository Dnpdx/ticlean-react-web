import HeroSlider, {
    Slide,
    Nav,   
    Overlay   
  } from 'hero-slider';
import Fondov1 from "../assets/header.jpg";
import Fondov2 from "../assets/heroslider1.jpg";
import Fondov3 from "../assets/heroslider2.jpg";
import Fondov4 from "../assets/heroslider3.jpg";

const HeroSection = () => {
    

  return (
    <div className="pt-28 lg:mx-32 px-4 sm:mx-auto">
      <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        color:'#FFF'
    }}
    settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: '90vmin',
      }}
      >
        <Overlay
        className="flex flex-col items-center justify-center w-[100%] h-[100%] m-auto bg-black bg-opacity-5"
        >
          <div className='justify-center p-4 m-4 pt-16 md:pl-24 sm:pl-4'>
            <h1 className='text-left font-bold md:text-6xl sm:text-2xl p-4 m-4'>Servicio de limpieza personalizado<br></br> para todo tipo de industria</h1>
            <p className='text-left md:font-normal sm:font-medium p-4 m-4'>Nuestros expertos en limpieza te ofrecen resultados impecables y satisfacción garantizada</p>
            <a href="/contacto">
            <button className='bg-blue-400 rounded-lg my-4 mx-6 p-4 align-center hover:bg-blue-600'>
              <p>Contacto</p>
            </button>
            </a>
          </div>       
            
        </Overlay>
     

    <Slide
    key="1"
        navDescription="Fondo 1"
        background={{
          backgroundImageSrc: Fondov1,
          backgroundAnimation: 'zoom',
          backgroundAttachment: 'fixed',
          
        }}
      />
      <Slide
        key="2"
        navDescription="Fondo 2"
        background={{
          backgroundImageSrc: Fondov2,
          backgroundAnimation: 'zoom',
          backgroundAttachment: 'fixed',
          
        }}
      />
      <Slide
      key="3"
        navDescription="Fondo 3"
        background={{
          backgroundImageSrc: Fondov3,
          backgroundAnimation: 'zoom',
          backgroundAttachment: 'fixed',
        }}
      />
      <Slide
      key="4"
        navDescription="Fondo 4"
        background={{
          backgroundImageSrc: Fondov4,
          backgroundAnimation: 'zoom',
          backgroundAttachment: 'fixed',
        }}
      />
     
   
      <Nav />
      </HeroSlider>
    </div>
  )
}

export default HeroSection;
