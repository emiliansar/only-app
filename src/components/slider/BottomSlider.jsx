import style from '@/components/Block.module.scss'
import SliderPrev from "./components/SliderPrev";
import SliderNext from "./components/SliderNext";
import Slider from "./components/Slider";

export default function BottomSlider() {
    return (
        <div className={style.BottomSlider}>
            <div
                className={style.BottomSlider__Container}
            >
                <SliderPrev />
                <Slider />
                <SliderNext />
            </div>
        </div>
    )
}