import style from '@/components/Block.module.scss'
import { usePres } from '../../context/presentation-context'
import SliderButton from './components/SliderButton'

export default function CircleSlider() {
    const {
        rotation,
        pres,
        handleClick,
        activeIndex
    } = usePres()

    if (pres.length === 0) {
        return
    }

    return (
        <div
            className={style.CircleNav}
        >
            <div
                className={style.CircleNav__Rotator}
                style={{
                    transform: `rotate(${rotation}deg)`
                }}
            >
                {pres?.map((fact, index) => {
                    const angle = (360 / pres?.length) * index - 95

                    return (
                        <SliderButton
                            index={index}
                            angle={angle}
                        />
                    )
                })}
            </div>
        </div>
    )
}