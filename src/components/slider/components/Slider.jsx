import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import { usePres } from '@/context/presentation-context';
import SliderSlide from './SliderSlide';
import style from '@/components/Block.module.scss';

export default function Slider() {
    const {
        changeSwiper,
        pres,
        activeIndex
    } = usePres()

  return (
    <>
        <Swiper
            className={style.BottomSlider__Slider}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={changeSwiper}
        >
            {pres[activeIndex]?.slides?.map((item, index) => (
                <SwiperSlide
                    key={index}
                >
                    <SliderSlide slide={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    </>
  );
};