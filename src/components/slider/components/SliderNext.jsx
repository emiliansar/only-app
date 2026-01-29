import Next from './images/Next';
import { usePres } from '../../../context/presentation-context';
import style from '@/components/Block.module.scss'

export default function SliderNext() {
    const {swiper} = usePres()

    return (
        <button
            className={style.BottomSlider__Btn}
            onClick={() => swiper.slideNext()}
        >
            <Next />
        </button>
    )
}