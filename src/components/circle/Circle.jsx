import style from '@/components/Block.module.scss'
import CircleSlider from './CircleSlider'
import CircleFromTo from './CircleFromTo'
import CirclePrevNext from './CirclePrevNext'

export default function Circle() {
    return (
        <div className={style.Circle}>
            <CircleFromTo />
            <CircleSlider />
            <CirclePrevNext />
        </div>
    )
}