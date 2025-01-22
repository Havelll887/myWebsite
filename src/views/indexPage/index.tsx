import "./index.scss"
import React, { useState, useEffect } from 'react';
import { BackCanvas } from "@/components/backCanvas/backCanvas"


const IndexPages = () => {

    const [activeValue, setActiveValue] = useState<number>(0);
    let [stepLength, setStepLength] = useState<number>(0);


    // 鼠标滚轮事件
    const wheelSwiper = (event: React.WheelEvent<HTMLDivElement>) => {
        const deltaY = event.deltaY;

        setStepLength(stepLength => stepLength + deltaY);
        console.log("stepLength", stepLength);
        if (stepLength < 0) {
            setStepLength(0);
            setActiveValue(0);
            return
        }
        if (Math.abs(stepLength) >= 6100) {
            setStepLength(6000);
            return;
        }
        if (!(activeValue >= 6 || activeValue <= -1)) {
            setActiveValue(Math.floor(stepLength / 1000));
        }
    }



    return (
        <div className="index-page-container" onWheel={(e) => wheelSwiper(e)}>
            <BackCanvas activeValue={activeValue} />
        </div>
    )
}

export const IndexPage = React.memo(IndexPages)