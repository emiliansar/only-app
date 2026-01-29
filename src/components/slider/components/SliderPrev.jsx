import Prev from './images/Prev';
import { usePres } from '@/context/presentation-context';
import style from '@/components/Block.module.scss'

export default function SliderPrev() {
    const {swiper} = usePres()

    return (
        <button
            className={style.BottomSlider__Btn}
            onClick={() => swiper.slidePrev()}
        >
            <Prev />
        </button>
    )
}