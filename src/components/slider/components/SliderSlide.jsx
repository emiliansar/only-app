import style from '@/components/Block.module.scss'

export default function SliderSlide({ slide }) {
    return (
        <div className={style.BottomSlider__Slider__Slide}>
            <p className={style.BottomSlider__Slider__Slide__Year}>
                {slide.year}
            </p>
            <p className={style.BottomSlider__Slider__Slide__Fact}>
                {slide.fact}
            </p>
        </div>
    )
}