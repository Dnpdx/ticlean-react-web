// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Fondov1 from "../assets/Fondov1.jpg"

const SliderSwiper = () => {

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='lg:mx-32 md:mx-8 sm:mx-auto'>
            <img src={Fondov1} className='relative' />
            <div className='absolute bg-blue-500 bg-opacity-25 top-[25%] left-[3rem]'>
                <h3 className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 text-4xl text-left text-white font-bold uppercase'>Servicio de limpieza personalizado<br></br> para todo tipo de industria</h3>
                <p className='text-xl text-left text-white font-normal'>
                    Nuestros expertos en limpieza te ofrecen resultados impecables y satisfacción garantizada
                </p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    
    </Swiper>
  );
};

export default SliderSwiper;
