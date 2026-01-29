import { usePres } from "../../context/presentation-context"
import style from '@/components/Block.module.scss'
import Prev from "./images/Prev"
import PrevDis from "./images/PrevDis"
import Next from "./images/Next"
import NextDis from "./images/NextDis"

export default function Circle__PrevNext() {
    const {
        activeIndex,
        changeActiveIndex,
        handleClick,
        pres
    } = usePres()

    const handlePrev = () => {
        if (activeIndex === 0) {
            return handleClick(pres.length - 1)
        }

        if (activeIndex > 0) {
            return handleClick(activeIndex - 1)
        }
    }

    const handleNext = () => {
        if ((activeIndex + 1) === pres.length) {
            return handleClick(0)
        }

        return handleClick(activeIndex + 1)
    }

    const formatAmount = (amount) => {
        return amount < 10 ? `0${amount}` : amount
    }

    return (
        <div className={style.Circle__PrevNext}>
            <div className={style.Circle__PrevNext__Container}>
                <p className={style.Circle__PrevNext__Counter}>
                    {formatAmount(activeIndex + 1)}/{formatAmount(pres.length)}
                </p>
                <div className={style.Circle__PrevNext__Btns}>
                    <button
                        onClick={handlePrev}
                        className={style.Circle__PrevNext__Btns__Prev}
                    >
                        {activeIndex > 0 ? <Prev /> : <PrevDis />}
                    </button>
                    <button
                        onClick={handleNext}
                        className={style.Circle__PrevNext__Btns__Next}
                    >
                        {(activeIndex + 1) < pres.length ? <Next /> : <NextDis />}
                    </button>
                </div>
            </div>
        </div>
    )
}