import "./frontContainer.scss"
import React, { useRef, useState, Suspense } from 'react'

const FrontContainers = (props: any) => {
    const ref = useRef()
    const { activeValue } = props
    return (
        <div className="font-container-box">
            <div className="text-test">test123 : {activeValue}</div>
            {/* 第一页内容 */}
            <div>
                
            </div>
        </div>
    )
}

export const FrontContainer = React.memo(FrontContainers); 