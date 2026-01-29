import { usePres } from "@/context/presentation-context"
import style from '@/components/Block.module.scss'
import { useState } from "react"

export default function SliderButton({ index, angle }) {
    const {
        handleClick,
        rotation,
        activeIndex
    } = usePres()

    const isActive = (index === activeIndex)

    return (
        <button
            key={index}
            onClick={() => handleClick(index)}
            className={`${style.CircleNav__Tab} ${isActive ? style.CircleNav__TabActive : ''}`}
            style={{
                transform: `
                    rotate(${angle}deg)
                    translate(${
                        isActive ? 265 - 28 : 265 - 3
                    }px)
                `
            }}
        >
            <span
                className={style.CircleNav__Tab__Label}
                style={{
                    transform: `rotate(${-angle - rotation}deg)`,
                    fontSize: isActive ? 20 : 0
                }}
            >
                {index + 1}
            </span>
        </button>
    )
}