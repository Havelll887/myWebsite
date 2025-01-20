import "./index.scss"
import React, { useState } from 'react';
import { BackCanvas } from "@/components/backCanvas/backCanvas"


const indexPage = () => {

    // 鼠标滚轮事件
    const wheelSwiper = (event: React.WheelEvent<HTMLDivElement>) => {
        // console.log(event)
    }

    // const [count, setCount] = useState(0);

    // const lazyAdd = () => {
    //     setTimeout(() => {
    //         setCount(count => count + 1);
    //     }, 3000);
    // }


    return (
        <div className="index-page-container" onWheel={(e) => wheelSwiper(e)}>
            <BackCanvas> </BackCanvas>
            {/* <p>the count now is {count}</p>
            <button onClick={() => setCount(count + 1)}>add</button>
            <button onClick={lazyAdd}>lazyAdd</button> */}
        </div>
    )
}

export const IndexPage = React.memo(indexPage)