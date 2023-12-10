import React from 'react'

import "./index.scss"

import { Outlet } from "react-router-dom";

import MyNav from "@/components/myNav/index"
import MyFoot from "@/components/myFoot/index"

export default class myLayout extends React.Component {
    // constructor(): any {

    // },
    render(): React.ReactNode {
        return (
            <div className="layout-container">
                {/* 头部导航栏 */}
                <MyNav />

                {/* 中间内容 */}
                <Outlet />

                {/* 底部 */}
                <MyFoot />
            </div>
        )
    }
}