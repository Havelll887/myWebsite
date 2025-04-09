import "./index.scss"
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { debounce, throttle } from "lodash";
import { BackCanvas } from "@/components/backCanvas/backCanvas"
import { FrontContainer } from "@/components/frontContainer/frontContainer"


const totalPage = 6

const IndexPages = () => {

    const [activeValue, setActiveValue] = useState<number>(0);
    let [stepLength, setStepLength] = useState<number>(0);

    // 防抖处理函数
    const handleWheelDebounced = useCallback(
        throttle((event: WheelEvent) => {
            console.log('处理滚轮事件', event);
            // 实际逻辑（如页面缩放、滚动切换等）
        }, 1000), // 防抖时间 300ms
        [] // 依赖项为空，确保防抖函数只创建一次
    );

    // 鼠标滚轮事件
    const wheelSwiper = (event: React.WheelEvent<HTMLDivElement>) => {

        const deltaY = event.deltaY;

        setStepLength(stepLength => stepLength + deltaY * 2.5);

        if (stepLength < 0) {
            setStepLength(0);
            setActiveValue(0);
            return
        }

        if (Math.abs(stepLength) >= (totalPage * 1000 + 100)) {
            setStepLength(totalPage * 1000);
            return;
        }
        setActiveValue(Math.floor(stepLength / 1000));
        console.log('do something after 1s: ', activeValue)
    }

    // 绑定原生滚轮事件
    useEffect(() => {
        window.addEventListener('wheel', handleWheelDebounced);
        return () => {
            window.removeEventListener('wheel', handleWheelDebounced);
            handleWheelDebounced.cancel(); // 清理防抖未执行的任务
        };
    }, [handleWheelDebounced]);


    return (
        <div className="index-page-container" onWheel={(e) => wheelSwiper(e)}>
            <BackCanvas activeValue={activeValue} />
            <FrontContainer activeValue={activeValue} />
        </div>
    )
}

export const IndexPage = React.memo(IndexPages)

/**
 * TODO: 优化代码
 * 1. 滚轮防抖
 * 2. 视窗变化，内容重渲染
 * 3. 
*/
