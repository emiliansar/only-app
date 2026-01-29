import { usePres } from "../../context/presentation-context"
import style from '@/components/Block.module.scss'

export default function CircleFromTo() {
    const {
        pres,
        activeIndex
    } = usePres()

    if (pres.length === 0) {
        return
    }

    return (
        <div className={style.Circle__FromTo}>
            <p className={style.Circle__FromTo__From}>
                {pres[activeIndex].start}
            </p>
            <p className={style.Circle__FromTo__To}>
                {pres[activeIndex].end}
            </p>
        </div>
    )
}