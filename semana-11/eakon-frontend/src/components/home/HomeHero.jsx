// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomeHero = ({ heroProducts }) => {
    return (
        <Swiper
        tag='section'
        wrapperTag='div'
        className='hero'
        modules={[Navigation, Autoplay, Pagination, A11y]}
        autoplay={{delay: 5000}}
        navigation
        pagination={{ clickable: true }}
        preloadImages={false}
      >
        {heroProducts.map((element)  => {
            const { nombre, imagen } = element.attributes;
            return(<SwiperSlide 
                key={element.id}
                tag='section'
                style={{
                    backgroundImage: `url(${imagen.data[0].attributes.url})`,
                    backgroundRepeat:"no-repeat",
                    objectFit: 'cover',
                    height: '100vh'
                }}
            >
                {nombre}
            </SwiperSlide>)
        })}
      </Swiper>
    );
};

export default HomeHero;