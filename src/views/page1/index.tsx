import React, { useRef, useState, Suspense } from 'react'
import { Transition } from 'react-transition-group';
import { CSSTransition } from "react-transition-group";
import { useSpring, animated, easings } from '@react-spring/web'
import "./index.scss"

const duration = 300;



const PageIndex = (props: any) => {

    const [springs, api] = useSpring(() => ({
        from: { x: 100, y: 0, opacity: 0 },
        to: { x: 100, y: 200, opacity: 1 },
        delay: 200,
        config: { duration: 1500, easing: easings.easeInQuad, },
    }))


    return (<div className="page-index-container">
        <animated.div
            style={{
                ...springs,

            }}
        >
            <div className="page-index-title">Hello ~</div>
        </animated.div>
        <animated.div
            style={{
                ...springs,

            }}
        >
            <div className="page-index-title">Welcome to my space!</div>
        </animated.div>
    </div>)
}

export const PageIndex1 = React.memo(PageIndex); 
