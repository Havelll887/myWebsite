import React from 'react'

import "./index.scss"

// 操作按钮
const iconList = [
    {
        name: "Email",
        class: 'bi-envelope',
        className: "icon--email"
    },
    {
        name: "github",
        class: 'bi-github',
        className: "icon--github"
    },
    {
        name: "location",
        class: 'bi-geo-alt',
        className: "icon--location"
    },
    {
        name: "whatsapp",
        class: 'bi-whatsapp',
        className: "icon--whatsapp"
    },
]


export default class myFoot extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        暂时不知道放什么内容总之先空着吧ssssssssssssssssss
                    </div>
                    {/* 右侧基本信息 */}
                    <div className="col-md-6">
                        {Object.values(iconList).map((ele, index) => {
                            return (
                                <div key={index} className={`icons-item flex-row flex-align-items-center`}>
                                    {/* 图标 */}
                                    <div className={`icons-box flex-row flex-center  ${ele.className}`}>
                                        <div className={`bi ${ele.class}`} ></div>
                                    </div>
                                    <span>{ele.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}