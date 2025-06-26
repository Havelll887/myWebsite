import React, { useRef, useState, Suspense } from 'react'
import { Transition } from 'react-transition-group';
import { CSSTransition } from "react-transition-group";


import "./frontContainer.scss"
import { PageIndex1 } from "@/views/page1/index"


const FrontContainers = (props: any) => {
    const { activeValue } = props

    // const [inProp, setInProp] = useState(false);

    // const [isHovered, setIsHovered] = useState(false);
    // const nodeRef = useRef<HTMLDivElement>(null); // 解决 React 严格模式警告

    return (
        <div className="font-container-box">
            <div className="text-test">test123 : {activeValue}</div>
            {/* <div className="text-test1">
                <Transition nodeRef={nodeRef} in={inProp} timeout={500}>
                    {state => (
                        <div ref={nodeRef} style={{
                            ...defaultStyle,
                        }} className={`my-${state}`} >
                            {state}
                            I'm a fade Transition!
                        </div>
                    )}
                </Transition>
                <button onClick={() => setInProp(true)}>
                    Click to Enter
                </button>
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ padding: 20, border: "1px solid #ccc" }}
                >
                    <h3>悬停区域（移入/移出触发动画）</h3>

                    <CSSTransition
                        in={isHovered}
                        nodeRef={nodeRef}
                        timeout={3000}
                        classNames="fade"
                        unmountOnExit
                    >
                        <div ref={nodeRef} className="tooltip">
                            提示内容（淡入淡出效果）
                        </div>
                    </CSSTransition>
                </div>
            </div> */}

            {/* 第一页 */}
            <div className="page-index-common">
                {activeValue == 0 &&
                    <div>
                        <PageIndex1 />
                    </div>
                }
                {activeValue == 1 && <div className="text-test1">第二页</div>}
                {activeValue == 2 && <div className="text-test1">第三页</div>}
                {activeValue == 3 && <div className="text-test1">第四页</div>}
                {activeValue == 4 && <div className="text-test1">第四页</div>}
            </div>
        </div>
    )
}

export const FrontContainer = React.memo(FrontContainers); 