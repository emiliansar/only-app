import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { presService } from "../pres.service";
import Loading from "../components/loading/Loading";

const PresContext = createContext()

export const PresContextProvider = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [rotation, setRotation] = useState(0)
    const [swiper, setSwiper] = useState(null)

    // Загрузка презентации
    const {
        isLoading,
        data: pres,
        isError,
        error,
        isSuccess
    } = useQuery({
        queryKey: ['get presentation'],
        queryFn: () => presService.get(),
        retry: 0
    })

    let step = 360 / pres?.length

    const getShortestDelta = (current, target, length) => {
        let delta = target - current

        if (delta > (length / 2)) delta -= length

        if (delta < (-length / 2)) delta += length

        return delta
    }

    const handleClick = (targetIndex) => {
        setRotation(prevRotation => {
            const delta = getShortestDelta(activeIndex, targetIndex, pres.length)

            return prevRotation - delta * step
        })

        setActiveIndex(targetIndex)
    }

    // Лог презентации
    useEffect(() => {
        if (isSuccess && pres.length > 0) {
            console.log(pres)
        }
    }, [pres])

    // Лог индекса текущего слайда
    useEffect(() => {
        console.log(`Current activeIndex: ${activeIndex}`)
    }, [activeIndex])

    if (isLoading) {
        console.log("Presentation is loading")
        return <Loading />
    }

    if (isError) {
        console.log("Presentation is error")
        return <Error error={error} />
    }

    const value = {
        activeIndex,
        changeActiveIndex: setActiveIndex,
        pres,
        rotation,
        handleClick,
        swiper,
        changeSwiper: setSwiper
    }

    return (
        <PresContext.Provider value={value}>
            { children }
        </PresContext.Provider>
    )
}

export const usePres = () => {
    const context = useContext(PresContext);

    if (!context) {
        throw new Error('usePres must be used within a PresProvider')
    }

    return context
}