import style from './Block.module.scss'
import Circle from './circle/Circle';
import BottomSlider from './slider/BottomSlider';
import BlockTitle from './title/BlockTitle';

export default function Block() {

    return (
        <div className={style.Block}>
            <div className={style.Block__Container}>
                <BlockTitle />
                <Circle />
                <BottomSlider />
            </div>
        </div>
    )
}