import "./index.scss"
import React, { useState, useEffect } from 'react';
import { BackCanvas } from "@/components/backCanvas/backCanvas"
import { FrontContainer } from "@/components/frontContainer/frontContainer"

const IndexPages = () => {

    const [activeValue, setActiveValue] = useState<number>(0);
    let [stepLength, setStepLength] = useState<number>(0);


    // 鼠标滚轮事件
    const wheelSwiper = (event: React.WheelEvent<HTMLDivElement>) => {
        const deltaY = event.deltaY;

        setStepLength(stepLength => stepLength + deltaY * 3.5);

        if (stepLength < 0) {
            setStepLength(0);
            setActiveValue(0);
            return
        }

        if (Math.abs(stepLength) >= 6100) {
            setStepLength(6000);
            return;
        }
        setActiveValue(Math.floor(stepLength / 1000));
    }



    return (
        <div className="index-page-container" onWheel={(e) => wheelSwiper(e)}>
            <BackCanvas activeValue={activeValue} />
            <FrontContainer activeValue={activeValue} />
        </div>
    )
}

export const IndexPage = React.memo(IndexPages)