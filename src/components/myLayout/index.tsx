import React from 'react'

import "./index.css"

import { Outlet } from "react-router-dom";

import MyNav from "@/components/myNav/index"
import MyFoot from "@/components/myFoot/index"

export default class myLayout extends React.Component {

    render(): React.ReactNode {
        return (
            <div className="layout-container">
                <div>这里是layout页面</div>
                <MyNav />
                <Outlet />
                <MyFoot />
            </div>
        )
    }
}